const connectToMongo = require("./db");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

connectToMongo();

const express = require("express");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(express.json());

// Available Routes

app.get("/", (req, res) => {
  res.send("Hello Ganesh! How are You");
});

app.use("/api/auth/", require("./routes/auth"));
app.use("/api/notes/", require("./routes/notes"));

app.listen(PORT, () => {
  console.log(`React app listening`);
});
