const express = require('express');
const path = require('path');
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Enable CORS for the frontend
app.use(cors({
    origin: 'http://localhost:3000',
}));


app.use(morgan('combined'))
// Middleware to parse JSON
app.use(express.json());

// Serve static files from the public directory
const publicPath = path.join(__dirname, "..", "public");
console.log(`Serving static files from: ${publicPath}`);
app.use(express.static(publicPath));

// Use the planets router
app.use("/planets", planetsRouter);
//Use the Launches router
app.use("/launches", launchesRouter);

// Serve the index.html file for the root route
app.get("/*", (req, res) => {
    const indexPath = path.join(publicPath, "index.html");
    console.log(`Serving index.html from: ${indexPath}`);
    res.sendFile(indexPath);
});

module.exports = app;