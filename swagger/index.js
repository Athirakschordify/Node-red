const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

// Swagger configuration options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Sample API',
      version: '1.0.0',
    },
  },
  apis: ['./index.js'], // Specify the path to your API routes or controllers
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Serve the Swagger UI at /api-docs endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Define your API routes
app.get('/hello', (req, res) => {
  res.send('Hello, World! swagger program');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
