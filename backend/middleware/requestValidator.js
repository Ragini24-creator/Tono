function validateRequest(req, res, next) {
    const { prompt, text } = req.body;

    // Check for missing fields
    if (!prompt || !text) {
        return res.status(400).json({ error: "'prompt' and 'text' are required fields." });
    }

    // Check for non-string values
    if (typeof prompt !== 'string' || typeof text !== 'string') {
        return res.status(400).json({ error: "'prompt' and 'text' must be strings." });
    }

    // Check for empty strings
    if (!prompt.trim() || !text.trim()) {
        return res.status(400).json({ error: "'prompt' and 'text' cannot be empty." });
    }

    next();
}

module.exports = { validateRequest };
