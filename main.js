import express from "express";
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./library/db.js";

const app = express();
const port = 6969;

// Data understanding middleware in applications like postman
app.use(express.json());

// to understand urlencoded data in postman
app.use(express.urlencoded({ extended: true }));

//connect DB
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!!" });
});

//CRUD functionality of movies
//client --> Middleware --> server

//Middleware creation
app.use("/movies", movieRoutes);

app.listen(port, () => {
  console.log(`The Server is running at http://localhost:${port}`);
});

//DRY Principle --> Don't Repeat Yourself
//KISS principle --> Keep It So Simple
