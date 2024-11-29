const express = require('express');
const app = express();

// Use express.json() middleware to parse incoming JSON data
app.use(express.json());

// Endpoint to receive location data and return a simple response
app.post('/test-webhook', (req, res) => {
    const { location } = req.body; // Expect 'location' from Zoho Forms
    
    if (!location) {
        return res.status(400).json({ error: 'Location is required' });
    }

    // Simple response with location data
    res.json({
        message: `Received location: ${location}`,
    });
});

// Start the server on port 3000 (or the environment-specific port)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
