const express = require("express");
const router = express.Router();
const axios = require("axios");
const { rephraseWithTone } = require("../utils/rephrase")
const { validateRequest } = require("../middleware/requestValidator")

router.post('/generate', validateRequest, async (req, res) => {
    const { prompt, text } = req.body;

    try {
        // Fallback logic — simulate AI behavior
        const result = rephraseWithTone(text, prompt);
        res.json({ result, source: "fallback" });


        // Uncomment the below block when API is ready.

        // const response = await axios.post(
        //     'https://api-inference.huggingface.co/models/eugenesiow/bart-paraphrase',
        //     {
        //         inputs: `Rephrase this in a ${prompt} tone: ${text}`
        //     },
        //     {
        //         headers: {
        //             'Authorization': `Bearer ${process.env.AI_API_KEY}`,
        //             'Content-Type': 'application/json'
        //         }
        //     }
        // );

        // return res.json(response.data);
    } catch (error) {
        console.error("Fallback Error:", error.message);
        res.status(500).json({ error: "Internal error in fallback." });

        // Handling error while use AI version
        // console.error("Hugging Face Error:", error.response?.data || error.message);
        // return res.status(500).json({ error: "AI API error" });
    }
});

module.exports = router;
