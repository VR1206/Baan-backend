import express from "express";
import cors from "cors";
import baanRoutes from "./baan.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/baan", baanRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
