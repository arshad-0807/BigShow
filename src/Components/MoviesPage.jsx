import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Movies from "./Movies";
import { DramaMovies, movies } from "../../customData";
import PageSlider from "./PageSlider";
import { useEffect, useRef } from "react";
import Header from "../Header";

const MoviesPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <>
      <div className="pageslider-container">
        <PageSlider />
      </div>
      <Movies
        title="Action Movies"
        faAngleRight={faAngleRight}
        series={movies}
      />
      <Movies
        title="Drama Movies"
        faAngleRight={faAngleRight}
        series={DramaMovies}
      />
      <div className="container video">
        <video ref={videoRef} src="annabelle.mp4" controls muted></video>
      </div>
    </>
  );
};

export default MoviesPage;
