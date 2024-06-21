import Movie from "./models/movie.model.js";

//Read the created movie info
export const movieIndex = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create the movie info
//id, title, desc
export const movieCreate = async (req, res) => {
  //validate your data
  //for creation alone use "new"
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// show movie details of a particular ID

export const movieDetail = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    console.log(11, req.params);
    if (movie === null) {
      return res.status(404).json({ message: "Cannot find movie" });
    } else {
      res.json(movie);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//update
export const movieUpdate = async (req, res) => {
  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  //validate the user input
  //   if (req.body.title !== null) {
  //     res.movie.title = req.body.title;
  //   }
  //   if (req.body.desc !== null) {
  //     res.movie.desc = req.body.desc;
  //   }
  //   try {
  //     const updatedMovie = await res.movie.save();
  //     res.json(updatedMovie);
  //   } catch (error) {
  //     res.status(400).json({ message: error.message });
  //   }
};

export const movieDelete = async (req, res) => {
  const movieId = req.params.id;

  try {
    await Movie.deleteOne({ _id: movieId });
    res.json({ message: "Movie Deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
