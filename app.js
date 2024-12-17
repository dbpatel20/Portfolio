const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serving static files from 'public' directory
app.use(express.static('public'));

// Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Route for Experience page
app.get('/experience', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'experience.html'));
});

// Route for Projects page
app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

// Route for Contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Handle 404 - Not found
app.use((req, res) => {
    res.status(404).send("Sorry, we can't find that!");
});

// Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
