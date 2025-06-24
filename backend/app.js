require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit')
const app = express();

app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later."
});

// Apply to all requests
app.use(limiter);


const aiRoutes = require('./routes/ai'); // adjust path if needed

app.use(bodyParser.json());
app.use('/api', aiRoutes);

// Health check or root route
app.get('/', (req, res) => {
    res.send('Rephrase API is live 🚀');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
