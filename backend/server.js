import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import incidentRoutes from "./routes/incidentRoutes.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/incidents", incidentRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));
