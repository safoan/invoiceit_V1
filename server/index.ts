// main app file (index.ts or app.ts)

import express from 'express';
import routes from './routes';

const app = express();

// Middleware and request handling (if applicable)

app.use('/api', routes); // Mount the routes middleware

// App listener

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
