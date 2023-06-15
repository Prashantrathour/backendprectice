const express = require("express");


const { connection } = require("./db");
const cors = require("cors");
const app = express();
const { router } = require("./routes/user.routes");
const  stackrouter  = require("./routes/stock.routes");
app.use(express.json());
app.use(cors());
app.use("/users",router)
app.use("/stocks",stackrouter)
app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected");
    console.log("listening on port 808");
  } catch (error) {
    console.log(error);
  }
});
