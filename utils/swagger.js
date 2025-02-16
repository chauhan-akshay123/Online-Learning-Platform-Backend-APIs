const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const serverUrl = process.env.RENDER_EXTERNAL_URL || "http://localhost:5000"; 

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for our project",
    },
    servers: [{ url: serverUrl }],
  },
  apis: ["./routes/*.js"], 
};

const swaggerSpecs = swaggerJsDoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
};

module.exports = swaggerDocs;
