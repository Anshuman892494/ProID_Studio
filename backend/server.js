import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cardRoutes from "./routes/cardRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.get("/", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

app.use("/api/auth", authRoutes);
app.use("/api/cards", cardRoutes);

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