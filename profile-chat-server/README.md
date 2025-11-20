# Profile Chat Server

## Setup

1.  **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

2.  **Environment Variables**:
    Create a `.env` file in this directory with your OpenAI API key:
    ```
    OPENAI_API_KEY=sk-...
    ```

## Running the Server

```bash
uvicorn main:app --reload
```

The server will start at `http://localhost:8000`.

## Testing

Run the test script to verify the streaming endpoint:

```bash
python3 test_backend.py
```
