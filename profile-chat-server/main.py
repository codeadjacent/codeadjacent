import os
import boto3
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv
from profile_data import ProfileData

load_dotenv()

def get_openai_api_key():
    # First try env var (local dev)
    api_key = os.getenv("OPENAI_API_KEY")
    if api_key:
        return api_key
    
    # Then try Secrets Manager (AWS)
    secret_name = os.getenv("OPENAI_SECRET_NAME")
    if secret_name:
        try:
            region_name = os.getenv("AWS_REGION", "eu-central-1") # Default or from env
            session = boto3.session.Session()
            client = session.client(
                service_name='secretsmanager',
                region_name=region_name
            )
            get_secret_value_response = client.get_secret_value(
                SecretId=secret_name
            )
            return get_secret_value_response['SecretString']
        except Exception as e:
            print(f"Error fetching secret: {e}")
            return None
    return None

app = FastAPI()

# Configure CORS to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "*"],  # Allow all for now to support deployed frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_key = get_openai_api_key()
client = OpenAI(api_key=api_key)
profile = ProfileData()

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    if not client.api_key:
        raise HTTPException(status_code=500, detail="OpenAI API key not configured")

    context = profile.get_context()
    print(context)  
    messages = [
        {"role": "system", "content": f"You are a helpful assistant for Hanche's portfolio. By default anwser in short and precis, unless prompted by the user. Always perform a spell and grammar check.  Answer questions based on the following profile data:\n\n{context}"},
        {"role": "user", "content": request.message}
    ]

    async def event_generator():
        try:
            stream = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=messages,
                stream=True,
            )
            for chunk in stream:
                if chunk.choices[0].delta.content is not None:
                    yield chunk.choices[0].delta.content
        except Exception as e:
            yield f"Error: {str(e)}"

    return StreamingResponse(event_generator(), media_type="text/plain")

@app.get("/health")
async def health_check():
    return {"status": "ok"}
