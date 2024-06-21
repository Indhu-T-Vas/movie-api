import express from "express";
import Movie from "../controllers/models/movie.model.js";
import {
  movieCreate,
  movieDelete,
  movieDetail,
  movieIndex,
  movieUpdate,
} from "../controllers/movies.controller.js";

const router = express.Router();

//MVC - Module View Controller

//Enter Route in postman as /movies(middleware)/:id(crud routes)
// 1) For Reading movies
router.get("/", movieIndex);

//Read details of a particular movie
router.get("/:id", movieDetail);

// 2) For creating movies
router.post("/", movieCreate);

// 3) For updating movie
router.put("/:id", movieUpdate);

// 4) For Deleting movie
router.delete("/:id", movieDelete);

export default router;
