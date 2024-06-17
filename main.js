import express from "express";

const app = express();

const port = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.listen(port, () => {
  console.log(`The Server is running at http://localhost:${port}`);
});

//DRY Principle --> Don't Repeat Yourself
//KISS principle --> Keep It So Simple
