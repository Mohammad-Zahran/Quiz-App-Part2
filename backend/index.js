import express from "express";
import connectToDatabase from "./db/connection.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(8080, () => {
    console.log("Server running on port 8080");
    
    connectToDatabase();

})