import requests
import sys

def test_deployment():
    url = "https://w9k8buglwg.execute-api.eu-central-1.amazonaws.com/chat"
    payload = {"message": "Hello, who are you?"}
    
    print(f"Connecting to {url}...")
    try:
        with requests.post(url, json=payload, stream=True) as response:
            if response.status_code != 200:
                print(f"Error: {response.status_code}")
                print(response.text)
                return

            print("Streaming response:")
            for chunk in response.iter_content(chunk_size=None):
                if chunk:
                    sys.stdout.write(chunk.decode('utf-8'))
                    sys.stdout.flush()
            print("\n\nDone.")
    except Exception as e:
        print(f"Connection error: {e}")

if __name__ == "__main__":
    test_deployment()
