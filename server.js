const path = require('path');
const express = require('express');
const React = require('react');
const app = express();
const port = 3000;
const handleRender = require('./build/server-renderer').default;

// Serve built files with express static files middleware
app.use('/build', express.static(path.join(__dirname, 'build')));
// Serve normal requests with our handleRender function
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('*', handleRender);

app.listen(port);