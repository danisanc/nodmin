import express from "express";
import Nodmin from "../../src/nodmin";

const app = express();
const PORT = 3000;

const nodmin = new Nodmin({
  resources: [
    {
      model: "teste",
    },
  ],
});

app.use("/nodmin", nodmin.build());

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("server started");
});
