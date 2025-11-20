import os
from pypdf import PdfReader

class ProfileData:
    def __init__(self):
        self.assets_dir = os.path.join(os.path.dirname(__file__), "assets")
        self.cached_data = None

    def load_local_files(self) -> str:
        content = []
        if not os.path.exists(self.assets_dir):
            return ""

        print(f"Scanning assets directory: {self.assets_dir}")
        for filename in os.listdir(self.assets_dir):
            file_path = os.path.join(self.assets_dir, filename)
            try:
                if filename.endswith(".pdf"):
                    print(f"Loading {filename}...")
                    reader = PdfReader(file_path)
                    text = ""
                    for page in reader.pages:
                        text += page.extract_text() + "\n"
                    content.append(f"--- Content from {filename} ---\n{text}")
                
                elif filename.endswith(".md"):
                    print(f"Loading {filename}...")
                    with open(file_path, "r", encoding="utf-8") as f:
                        content.append(f"--- Content from {filename} ---\n{f.read()}")
                
            except Exception as e:
                print(f"Error reading {filename}: {e}")
                content.append(f"Error reading {filename}: {str(e)}")
        
        return "\n\n".join(content)

    def get_context(self) -> str:
        if not self.cached_data:
            # Combine static/scraped data (if any) with local files
            # For now, we just use local files as requested, but we could mix them.
            self.cached_data = self.load_local_files()
        return self.cached_data
