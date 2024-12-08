import express from "express";
import cors from "cors"; 
import connectToDatabase from "./db/connection.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5174", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true, 
}));

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(8080, () => {
    console.log("Server running on port 8080");
    connectToDatabase();
});
