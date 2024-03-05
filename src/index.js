const express = require("express");
const app = express();
require("dotenv").config({ path: "src/.env" });
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use("/api/auth", authRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log(`Connected to MongoDB at ${MONGODB_URI}`))
  .catch((err) => console.error("could not connect to MongoDB", err));

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
