import express from "express";
import connectToDatabase from "./db/connection.js";

const app = express();

app.use(express.json());

app.listen(8080, () => {
    console.log("Server running on port 8080");
    
    connectToDatabase();

})