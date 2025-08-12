const express = require("express");
const cors = require("cors");
const { createUserTable } = require("./models/auth-model");

const app = express();
app.use(cors());
app.use(express.json());

createUserTable()
  .then(() => console.log("Table user has been created"))
  .catch((error) => console.log(error));

app.use("/api/auth", require("./routes/auth-route"));

app.listen(5000, () => {
  console.log("Server Running on port 5000");
});
