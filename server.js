require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./config/db.conect");
const routes = require("./routes"); 
const errorHandler = require("./middlewares/errorHandler");
const swaggerDocs = require("./utils/swagger");

const app = express();

initializeDatabase();

app.use(cors());
app.use(express.json()); 

app.use("/api", routes);
app.use(errorHandler);

swaggerDocs(app);

const PORT = process.env.PORT || 5000;
/*
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
*/
module.exports = app;

