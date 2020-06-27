require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO: use express middleware to handle cookies (JWT)
// TODO: use express middleware to populate current_user

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }, 
}, deets => {
  console.log(`Server is running on port
  http://localhost:${deets.port}`);
});