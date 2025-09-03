import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
app.use(cors());  // ✅ allow frontend requests
app.use(express.json());
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.use("/api/contact", contactRoutes); // ✅ route mounted

app.listen(PORT, () => {
  console.log(`👋 Server started on port ${PORT}`);
});
