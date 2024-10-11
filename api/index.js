export default async (req, res) => {
    const path = require('path');
    const { fileURLToPath } = require('url');
    
    // Resolve __filename and __dirname for ES module compatibility
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Serve static files from the React app's build directory
    const buildPath = path.join(__dirname, "../frontend/build");
    const serveStatic = require('serve-static');

    // Serve React build files
    const staticMiddleware = serveStatic(buildPath);

    // Forward unmatched routes to React's index.html
    const serveReactApp = (req, res) => {
        res.sendFile(path.join(buildPath, "index.html"));
    };

    // Handle GET requests
    if (req.method === 'GET') {
        staticMiddleware(req, res, () => serveReactApp(req, res));
    } else {
        // Handle other HTTP methods
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};
