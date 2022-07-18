import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieAsync, selectMovie } from "../reducer/movie-slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovie);

  useEffect(() => {
    dispatch(movieAsync());
  }, []);

  return <>{movies.first_name}</>;
};

export default HomePage;
