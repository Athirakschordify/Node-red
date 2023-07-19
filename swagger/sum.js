const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

// Swagger configuration options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample API',
      version: '1.0.0',
      description: 'A simple API example with Swagger',
    },
  },
  apis: ['./index.js'], // Specify the path to your API routes or controllers
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI at /api-docs endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Define your API routes
/**
 * @swagger
 * /sum/{num1}/{num2}:
 *   get:
 *     summary: Returns the sum of two numbers
 *     parameters:
 *       - in: path
 *         name: num1
 *         required: true
 *         description: First number
 *         schema:
 *           type: number
 *       - in: path
 *         name: num2
 *         required: true
 *         description: Second number
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: A successful response with the sum of the two numbers
 */
app.get('/sum/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const sum = parseFloat(num1) + parseFloat(num2);
  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
