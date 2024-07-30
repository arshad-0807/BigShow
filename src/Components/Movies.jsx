// import Poster from "./Poster";
// import Genre from "./Genre";
// import RatingBox from "./RatingBox";
// import Details from "./Details";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SeriesCard from "./SeriesCard";

// const Movies = ({ title, faAngleRight, series }) => {
//   return (
//     <>
//       <h2 className="box-title">
//         {title}
//         <FontAwesomeIcon icon={faAngleRight} className="arrow" />
//       </h2>
//       <div className="card-box">
//         {series.map((series, index) => (
//           <SeriesCard key={index} data={series} index={index} />
//         ))}
//       </div>
//     </>
//   );
// };
// export default Movies;

import React, { useRef, useState } from "react";
import Poster from "./Poster";
import Genre from "./Genre";
import RatingBox from "./RatingBox";
import Details from "./Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SeriesCard from "./SeriesCard";

const Movies = ({ title, faAngleRight, faAngleLeft, series }) => {
  const cardBoxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollLeftFunction = () => {
    if (cardBoxRef.current) {
      cardBoxRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRightFunction = () => {
    if (cardBoxRef.current) {
      cardBoxRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - cardBoxRef.current.offsetLeft);
    setScrollLeft(cardBoxRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - cardBoxRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust the scroll speed
    cardBoxRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <h2 className="box-title">
        {title}
        <FontAwesomeIcon icon={faAngleRight} className="arrow" />
      </h2>
      {/* <div className="slider-controls">
        <button onClick={scrollLeftFunction} className="slider-button">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={scrollRightFunction} className="slider-button">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div> */}
      <div
        className="card-box"
        ref={cardBoxRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {series.map((series, index) => (
          <SeriesCard key={index} data={series} index={index} />
        ))}
      </div>
    </>
  );
};

export default Movies;
