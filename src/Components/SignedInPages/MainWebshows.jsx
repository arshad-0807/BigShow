import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../webshow.css";
import { faAngleRight, faShare } from "@fortawesome/free-solid-svg-icons";
import Movies from "../Movies";
import { movies, tvshows, webshows } from "../../../customData";
import Suggestion from "../Suggestion";
import News from "../News";
import { NavLink } from "react-router-dom";
import { genrelist } from "../../../customData";

const MainWebshows = () => {
  return (
    <>
      <div className="container webshow-box p-4 pb-0">
        <div className="d-flex align-items-center justify-content-between">
          <div className="col-lg-11 col-8">
            <h3>BigShow Charts</h3>
            <h1 className="webshow-title ps-2 mt-3">Top Web Shows</h1>
            <p className="text-danger">Top 250 as rated by BigShow users</p>
          </div>
          <div className="col-lg-1 col-4 d-flex align-items-center justify-content-end fs-5 text-primary">
            Share
            <FontAwesomeIcon icon={faShare} className="ps-2" />
          </div>
        </div>
        <div className="d-flex align-items-center py-2">
          <div className="col-lg-9 col-6 text-primary">
            <h6>250 Titles</h6>
          </div>
          <div className="col-lg-3 col-6">
            <div className="rating-content">
              <h2 className="fw-bold fs-4">You have rated</h2>
              <p className="fs-6">
                0/250 <span className="ps-1">(0%)</span>
              </p>
              <div className="d-lg-block d-none">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="d-inline-block"
                />
                <span> Hide titles you've rated</span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-lg-row flex-column">
          <div className="col-lg-9 col-12 bg-black pt-0 pb-3 px-lg-0 px-2">
            <Movies series={webshows} />
            <Movies series={webshows} />
            <Movies series={webshows} />
            <Movies series={webshows} />
          </div>
          <div className="col-lg-3 col-12 ps-3">
            <div className="aside-content">
              <h1 className="webshow-title ps-2 mt-5 fs-2 mt-lg-3">
                More to explore
              </h1>
              <h2 className="fs-4 fw-bold pt-2 text-danger">BigShow Charts</h2>
            </div>

            <div className="suggestion-content d-flex flex-column mt-4">
              <Suggestion />

              <div className="news-section mt-5">
                <h3 className="fw-bold">
                  TV News
                  <span>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="fs-4 ms-2 "
                    />
                  </span>
                </h3>
                <News />
              </div>

              <div className="top-rated-genre mt-5">
                <h4 className="fw-bold">Top Rated TV by Genre</h4>
              </div>
              <div className="top-rated-genre-list py-3 d-flex flex-wrap align-items-center gap-2">
                {genrelist.map((data, index) => (
                  <NavLink key={index} className="genre-item">
                    {data.genre}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainWebshows;
