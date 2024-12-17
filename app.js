const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (CSS, JS, Images) from the root directory
app.use(express.static(__dirname));

// Routes for your pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/experience', (req, res) => {
    res.sendFile(path.join(__dirname, 'experience.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'projects.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
