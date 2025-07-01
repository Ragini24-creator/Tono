
# Tono 📝✨

**Tono** is an AI-powered a full-stack application that allows users to rephrases any input text into different tones and styles—such as formal, casual, professional, friendly, and more. It's ideal for content creators, marketers, developers, and anyone looking to instantly enhance their writing style.

> ⚠️ **Note:** This is a Minimum Viable Product (MVP).  
> Currently, I'm using a **fallback version** of the AI model for rephrasing to keep things lightweight and cost-efficient for MVP. In future versions, we plan to integrate more robust models and support dynamic tone expansion.

---

## 🚀 Features

- 🔁 Rephrase any sentence or paragraph
- 🎭 Supports multiple tones: Formal, Casual, Professional, Friendly, Assertive, etc.
- 🧠 Powered by NLP models (OpenAI API / Hugging Face models — fallback version for MVP)
- ⚡ Simple and easy-to-use API endpoints
- 🌐 Cross-platform compatible

---

## 🔧 Tech Stack

- **Backend:** Node.js / Express
- **AI Integration:** OpenAI GPT / Hugging Face Transformers (Fallback logic currently in use while API integration is being finalized)
- **Hosting:** Render (backend)
- **Authentication (optional):** API key-based or JWT (planned)

---

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


## 📜 License
This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.
