const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Online Learning Platform",
      version: "1.0.0",
      description: "API documentation using Swagger",
    },
    servers: [
      {
        url: "http://localhost:5000/api", 
      },
    ],
  },
  apis: ["./routes/*.js"], 

const swaggerSpecs = swaggerJsDoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
  console.log("Swagger Docs available at http://localhost:5000/api-docs");
};

module.exports = swaggerDocs;
