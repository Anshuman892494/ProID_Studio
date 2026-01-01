import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

app.use("/api/auth", authRoutes);

// Connect and start
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Failed:", error);
    process.exit(1);
  });