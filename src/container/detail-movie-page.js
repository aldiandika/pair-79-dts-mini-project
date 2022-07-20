import { useParams } from "react-router-dom";
import FooterComponent from "../component/FooterComponent";
import Navbar from "../component/Navbar";

const DetailMoviePage = () => {
  const { movieid } = useParams();

  console.log(movieid);
  return (
    <>
      <div className="root-container">
        {/* Navbar */}
        <Navbar />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {movieid}
        <br />
        {/* Footer */}
        <FooterComponent />
      </div>
    </>
  );
};

export default DetailMoviePage;
