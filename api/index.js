import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import serveStatic from 'serve-static';

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Resolve __filename and __dirname for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app's build directory
const buildPath = path.join(__dirname, "../frontend/build");

// Middleware to serve static files
const staticMiddleware = serveStatic(buildPath);

// Forward unmatched routes to React's index.html
const serveReactApp = (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
};

// Handle GET requests for the API
app.get('/api', (req, res) => {
    res.send('API is working!');
});

// Handle all other GET requests
app.get('*', (req, res) => {
    staticMiddleware(req, res, () => serveReactApp(req, res));
});

// Handle other HTTP methods
app.use((req, res) => {
    res.status(405).json({ message: 'Method Not Allowed' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
