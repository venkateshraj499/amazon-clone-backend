const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./Router/router");

const app = express();

const host = "localhost";
const port = process.env.PORT || "2022";

const serverDBURL =
  "mongodb+srv://amazon-user:amazon-user@cluster0.6w7lf.mongodb.net/amazon-clone?retryWrites=true&w=majority";

app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use("/", router);


mongoose
  .connect(serverDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port, () => {
      console.log(`Server is Running at ${host}:${port}`);
    });
  })
  .catch((error) => console.log(error));
