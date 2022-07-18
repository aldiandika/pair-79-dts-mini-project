import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../component/MovieCard";
import { movieAsync, selectMovie } from "../reducer/movie-slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovie);

  useEffect(() => {
    dispatch(movieAsync());
  }, []);

  return (
    <>
      {movies.map((item, index) => (
        <div key={index}>
          <MovieCard movie={item} />
        </div>
      ))}
    </>
  );
};

export default HomePage;
