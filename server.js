const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 MongoDB Connection (Atlas URL yaha daalo)
mongoose.connect("mongodb+srv://RoXy:Jakhar#9014@cluster0.gnnfkcm.mongodb.net/?appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// 📦 Schema
const baanSchema = new mongoose.Schema({
  id: Number,
  nameEn: String,
  nameHi: String,
  kAaya: Number,
  vAaya: Number,
  vshlAaya: Number,
  diyaList: Array
});

const Baan = mongoose.model("Baan", baanSchema);

// 📥 GET (data fetch)
app.get("/data", async (req, res) => {
  const data = await Baan.find();
  res.json(data);
});

// 📤 UPDATE (save data)
app.post("/update", async (req, res) => {
  const { id, updatedItem } = req.body;

  await Baan.updateOne({ id: id }, updatedItem, { upsert: true });
  res.json({ message: "Updated successfully" });
});

// 🆕 ADD new record
app.post("/add", async (req, res) => {
  const newData = new Baan(req.body);
  await newData.save();
  res.json({ message: "Added" });
});

// ❌ DELETE record
app.post("/delete", async (req, res) => {
  const { id } = req.body;
  await Baan.deleteOne({ id });
  res.json({ message: "Deleted" });
});

// 🚀 Server start
app.listen(3000, () => console.log("Server running on port 3000"));
