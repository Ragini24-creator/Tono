function validateRequest(req, res, next) {
    const { prompt, text } = req.body

    if (!prompt || !text) {
        return res.status(400).json({ error: "'prompt' and 'text' are required fields." });
    }

    function validateRequest(req, res, next) {
        const { prompt, text } = req.body;

        if (typeof prompt !== 'string' || typeof text !== 'string') {
            return res.status(400).json({ error: "'prompt' and 'text' must be strings." });
        }

        if (!prompt.trim() || !text.trim()) {
            return res.status(400).json({ error: "'prompt' and 'text' cannot be empty." });
        }

        next();
    }


}

module.exports = { validateRequest };