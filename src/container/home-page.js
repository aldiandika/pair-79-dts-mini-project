import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../component/MovieCard";
import Navbar from "../component/Navbar";
import { movieAsync, selectMovie } from "../reducer/movie-slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovie);

  useEffect(() => {
    dispatch(movieAsync());
  }, []);

  return (
    <>
      <div className="root-container">
        {/* Navbar */}
        <Navbar />

        <div className="base-container">
          {/* List untuk Now Playing Movies */}
          {movies.map((item, index) => (
            <div key={index}>
              <MovieCard movie={item} />
            </div>
          ))}

          {/* List untuk Popular Movies */}

          {/* List untuk Top Rated Movies */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
