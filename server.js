import http from 'http';
import app from './app/app.js';
// create the server
const PORT = process.env.PORT || 2030
const server = http.createServer(app)
server.listen(PORT, console.log(`the server is running on ${PORT}`))
