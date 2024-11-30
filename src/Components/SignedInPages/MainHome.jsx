import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { series, movies, tvshows, BigshowTrendings } from "../../../customData";
import Slider from "../Slider";
import Movies from "../Movies";
import TopWebShows from "../TopWebShows";
// import Header from "../Header";
// import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MainHome = () => {
  const location = useLocation();
  // const message = location.state?.message;
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);

      const timer = setTimeout(() => {
        setMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [location.state]);
  return (
    <>
      {message && <div className="alert alert-success">{message}</div>}
      <Slider />
      <Movies
        title="Trending Web Shows"
        faAngleRight={faAngleRight}
        series={series}
      />

      {/* <TrendingWebShow /> */}

      {/* MOVIES */}

      <TopWebShows
        title="Top Movies"
        faAngleRight={faAngleRight}
        series={movies}
      />

      {/* TVSHOWS */}

      <Movies
        title="Top TV Shows"
        faAngleRight={faAngleRight}
        series={tvshows}
      />

      {/*BigShow TRENDING */}

      <Movies
        title="BigShow Trending Shows"
        faAngleRight={faAngleRight}
        series={BigshowTrendings}
      />
    </>
  );
};

export default MainHome;
