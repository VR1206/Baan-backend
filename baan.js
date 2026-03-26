import express from "express";
import { connectDB } from "./db.js";

const router = express.Router();

// GET data
router.get("/", async (req, res) => {
  const db = await connectDB();
  const data = await db.collection("records").find({}).toArray();
  res.json(data);
});

// UPDATE full data
router.post("/update", async (req, res) => {
  const db = await connectDB();
  const collection = db.collection("records");

  await collection.deleteMany({});
  await collection.insertMany(req.body);

  res.json({ success: true });
});

export default router;
