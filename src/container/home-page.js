import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FooterComponent from "../component/FooterComponent";
import MovieCard from "../component/MovieCard";
import MovieCardLoading from "../component/MovieCardLoading";
import Navbar from "../component/Navbar";
import {
  movieAsync,
  topMovieAsync,
  selectMovie,
  selectTopMovie,
  selectLoadingState,
} from "../reducer/movie-slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovie);
  const topMovies = useSelector(selectTopMovie);
  const isLoading = useSelector(selectLoadingState);
  const movLoading = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    dispatch(movieAsync());
    dispatch(topMovieAsync());
  }, []);

  return (
    <>
      <div className="root-container">
        {/* Navbar */}
        <Navbar />

        <div className="base-container">
          {/* List untuk Popular Movies */}
          <div className="category-title">Popular</div>
          {isLoading ? (
            <div className="list-movie-container">
              {movLoading.map((item, index) => (
                <div key={item}>
                  <MovieCardLoading />
                </div>
              ))}
            </div>
          ) : (
            <div className="list-movie-container">
              {movies.map((item, index) => (
                <div key={index}>
                  <MovieCard movie={item} />
                </div>
              ))}
            </div>
          )}

          {/* List untuk Top Rated Movies */}
          <div className="category-title">Top Rated</div>
          {isLoading ? (
            <div className="list-movie-container">
              {movLoading.map((item, index) => (
                <div key={item}>
                  <MovieCardLoading />
                </div>
              ))}
            </div>
          ) : (
            <div className="list-movie-container">
              {topMovies.map((item, index) => (
                <div key={index}>
                  <MovieCard movie={item} />
                </div>
              ))}
            </div>
          )}

          {/* List untuk Top Rated Movies */}
          <div className="category-title">Top Rated</div>
          {isLoading ? (
            <div className="list-movie-container">
              {movLoading.map((item, index) => (
                <div key={item}>
                  <MovieCardLoading />
                </div>
              ))}
            </div>
          ) : (
            <div className="list-movie-container">
              {topMovies.map((item, index) => (
                <div key={index}>
                  <MovieCard movie={item} />
                </div>
              ))}
            </div>
          )}

          {/* List untuk Top Rated Movies */}
          <div className="category-title">Top Rated</div>
          {isLoading ? (
            <div className="list-movie-container">
              {movLoading.map((item, index) => (
                <div key={item}>
                  <MovieCardLoading />
                </div>
              ))}
            </div>
          ) : (
            <div className="list-movie-container">
              {topMovies.map((item, index) => (
                <div key={index}>
                  <MovieCard movie={item} />
                </div>
              ))}
            </div>
          )}

          {/* List untuk Top Rated Movies */}
        </div>

        {/* Footer */}
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePage;
