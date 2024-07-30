import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { newslist } from "../../customData";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      {newslist.map((data, index) => (
        <div className="news-items pt-4" key={index}>
          <div className="news-item">
            <div className="text-content">
              <Link to="data.url">
                <h6 className="fs-italic text-primary news-heading">
                  {data.newstitle}
                </h6>
              </Link>
              <p className="fw-normal mb-0">{data.info}</p>
            </div>
            <img src={data.img} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};

export default News;
