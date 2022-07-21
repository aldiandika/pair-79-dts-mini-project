import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FooterComponent from "../component/FooterComponent";
import Navbar from "../component/Navbar";
import {
  fetchMovieDetail,
  selectMovieDetailState,
} from "../reducer/movie-slice";

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const DetailMoviePage = () => {
  const { movieid } = useParams();
  const dispatch = useDispatch();
  const selectMovieDetail = useSelector(selectMovieDetailState);

  useEffect(() => {
    dispatch(fetchMovieDetail(movieid));
  }, [movieid]);

  // console.log(selectMovieDetail);
  return (
    <>
      <div className="root-container">
        {/* Navbar */}
        <Navbar />
        <img
          src={`${BASE_IMAGE_URL}${selectMovieDetail.backdrop_path}`}
          alt="Movie Backdrop"
          className="detailmovie-backdrop"
        />

        <div className="detailmovie-desc-container">
          <img
            src={`${BASE_IMAGE_URL}${selectMovieDetail.poster_path}`}
            alt="Movie Poster"
          />
        </div>
        <div className="detailmovie-detail-content">
          <div className="detailmovie-inner-content">
            <div className="detailmovie-content-container">
              <div className="desc">
                <div style={{ marginBottom: "6px" }}>
                  Title : <b>{selectMovieDetail.title}</b>
                </div>
                <div style={{ marginBottom: "6px" }}>
                  Original Title : <b> {selectMovieDetail.original_title}</b>
                </div>
                <div style={{ marginBottom: "6px" }}>
                  Tagline : <b>{selectMovieDetail.tagline}</b>
                </div>
                <div style={{ marginBottom: "6px" }}>
                  Release : <b>{selectMovieDetail.release_date}</b>
                </div>
                <div style={{ marginBottom: "6px" }}>
                  Status : <b>{selectMovieDetail.status}</b>
                </div>
                <div style={{ marginBottom: "6px" }}>
                  <div className="genres">
                    Genres : &#160;
                    {selectMovieDetail.genres &&
                      selectMovieDetail.genres.map((item, index) => (
                        <div className="genre" key={index}>
                          <b>{item.name}</b>&#160;
                        </div>
                      ))}
                  </div>
                </div>
                <div style={{ marginBottom: "6px" }}>
                  Homepage :
                  <a
                    href={selectMovieDetail.homepage}
                    style={{ color: "aqua" }}
                  >
                    {selectMovieDetail.homepage}
                  </a>
                </div>
                <br />
                <div style={{ marginBottom: "6px" }}>
                  <b>Overview</b>
                </div>
                <div>{selectMovieDetail.overview}</div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <FooterComponent />
        </div>
      </div>
    </>
  );
};

export default DetailMoviePage;
