
# Tono 📝✨

**Tono** is an AI-powered RESTful API that rephrases any input text into different tones and styles—such as formal, casual, professional, friendly, and more. It's ideal for content creators, marketers, developers, and anyone looking to instantly enhance their writing style.

---

## 🚀 Features

- 🔁 Rephrase any sentence or paragraph
- 🎭 Supports multiple tones: Formal, Casual, Professional, Friendly, Assertive, etc.
- 🧠 Powered by state-of-the-art NLP models (OpenAI API / Hugging Face Transformers)
- ⚡ Simple and easy-to-use API endpoints
- 🌐 Cross-platform compatible

---

## 🔧 Tech Stack

- **Backend:** Node.js / Express
- **AI Integration:** OpenAI GPT / Hugging Face Transformers
- **Hosting:** Render (backend)
- **Authentication (optional):** API key-based or JWT (future scope)

---

## 📦 API Endpoint

### `POST /api/generate`

#### 🟩 Request Body

```json
{
  "text": "Let's catch up sometime!",
  "tone": "formal"
}

🟦 Response
{
  "rephrased": "I look forward to reconnecting with you at a mutually convenient time."
}




