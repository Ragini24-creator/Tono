
📝 Tono — Text Rephraser (MVP)
A full-stack web tool that allows users to rephrase input text in different tones — such as formal, casual, assertive, or professional. Built using the MERN stack, with optional OpenAI integration.

⚠️ Note: This is an MVP version. AI integration is written but currently uses a fallback mode for demonstration. The actual OpenAI-powered response can be enabled with your own API key. See instructions below.


---

## 🚀 Features

- 🔁 Rephrase any sentence or paragraph
- 🎭 Supports multiple tones: Formal, Casual, Professional, Friendly, Assertive, etc.
- 🧠 Powered by NLP models (OpenAI API / Hugging Face models — fallback version for MVP)
- ⚡ Simple and easy-to-use API endpoints
- 🌐 Cross-platform compatible
- 🌙 Minimal, responsive UI using TailwindCSS
- 🧪 Rate limiting + input validation

---

## 🔧 Tech Stack

- **Backend:** Node.js / Express
- **AI Integration:** OpenAI GPT / Hugging Face Transformers (Fallback logic currently in use while API integration is being finalized)
- **Hosting:** Render (backend)
- **Authentication (optional):** API key-based or JWT (planned)

---

⚠️ Note on AI Integration
This project uses a fallback logic to simulate AI responses in the demo.
The backend is currently written with Hugging Face API integration in mind, but:

You can plug in your own AI model — OpenAI, Cohere, Claude, or even a local model — by modifying the response generation function in the backend.

The structure is modular and easy to adapt.

If you'd like to see a real AI-powered output, just replace the fallback logic with your preferred API and key.

💡 This is kept flexible on purpose — to encourage exploration and personal customization.


### 📦 API Endpoint

### `POST /api/generate`

#### 🟩 Request Body
```json
{
  "text": "Let's catch up sometime!",
  "tone": "formal"
}
```

#### 🟦 Response Body
```json
{
  "rephrased": "I look forward to reconnecting with you at a mutually convenient time."
}
```

## 🚧 Status
- **Frontend and backend are deployed**
- **Currently using a fallback version for rephrasing logic**
- Hugging Face API integration is in progress — updates coming soon!

## 📂 Project Structure
frontend/ -> Frontend (React)
backend/ -> Backend (Node + Express)

🚀 Running Locally
```# Clone the repository
git clone https://github.com/yourusername/tono-rephraser.git
cd tono-rephraser

# Start backend
cd backend
npm install
npm start

# Start frontend
cd ../frontend
npm install
npm start
```

🔑 How to Use Your Own OpenAI API Key
The current version uses a fallback function to simulate tone rephrasing.
To use real AI responses with your OpenAI key:

1.Create a .env file in the backend/ folder.
2. Add this line:
```AI_API_KEY=your-api-key-here```

3. In the backend/routes/ai.js file :

Uncomment the AI logic block.

Comment out or remove the fallback code block.
4. Restart the backend server:
   ```npm start```

✅ Status
✅ UI completed and responsive

⚠️ MVP fallback version live

🧠 AI integration logic available but not active

🔜 Optional improvements: tone training, analytics, async queues   

💻 Demo
Live demo not included in README as it currently uses fallback logic. You can test locally or fork the project and integrate your own OpenAI key.

🤝 Contributions
Open to collaboration, feature ideas, or improvements!
If you'd like to add tone styles, improve fallback quality, or build an async AI queue, feel free to open a PR.

📬 Connect With Me 
📖 [My Blogs on Medium](https://medium.com/@raginikishor5603)
🔗 [LinkedIn](https://www.linkedin.com/in/ragini-kaushalkishor-751518302/)

📖 My Blogs on Medium

## 📜 License
This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

