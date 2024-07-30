// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./PageSlider.css";
// import { useEffect, useRef } from "react";

// const PageSlider = () => {
//   const initSlider = () => {
//     const sliderWrapper = document.querySelector(".slider-items");
//     const sliderBtns = document.querySelectorAll(".slider-btn");
//     const sliderItemWidth =
//       document.querySelector(".slider-items img").clientWidth;

//     sliderBtns.forEach((button) => {
//       button.addEventListener("click", () => {
//         const direction = button.id === "prev" ? -1 : 1;
//         const scrollAmount = sliderItemWidth * direction;

//         sliderWrapper.scrollBy({
//           left: scrollAmount,
//           behavior: "smooth",
//         });
//       });
//     });
//   };

//   window.addEventListener("load", initSlider);

//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   }, []);
//   return (
//     <>
//       <div className="slider-container">
//         <div className="slider-wrapper">
//           <button className="slider-btn" id="prev">
//             <FontAwesomeIcon icon={faAngleLeft} className="slider-icon" />
//           </button>
//           <div className="slider-items">
//             <img src="Jackryan.webp" alt="" className="slider-img" />
//             <img src="pushpa.webp" alt="" />
//             <img src="Tatd.webp" alt="" className="slider-img" />
//             <img src="Shelter.webp" alt="" className="slider-img" />
//             <img src="TheWinchesters.webp" alt="" className="slider-img" />
//             <img src="pathaan.webp" alt="" className="slider-img" />
//             <img src="pushpa.webp" alt="" className="slider-img" />
//             <img src="yodha.webp" alt="" className="slider-img" />
//             <img src="teribatome.webp" alt="" className="slider-img" />
//             <img src="furiosa.webp" alt="" className="slider-img" />
//           </div>
//           <button className="slider-btn" id="next">
//             <FontAwesomeIcon icon={faAngleRight} className="slider-icon" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PageSlider;
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PageSlider.css";
import { useEffect, useRef } from "react";

const PageSlider = () => {
  const sliderRef = useRef(null);

  const initSlider = () => {
    const sliderWrapper = sliderRef.current;
    const sliderBtns = document.querySelectorAll(".slider-btn");

    const getSliderItemWidth = () => {
      return sliderWrapper.querySelector(".slider-items img").clientWidth + 20; // Adjust for gap
    };

    sliderBtns.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev" ? -1 : 1;
        const scrollAmount = getSliderItemWidth() * direction;

        sliderWrapper.querySelector(".slider-items").scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      });
    });
  };

  useEffect(() => {
    initSlider();
    window.addEventListener("resize", initSlider);
    return () => {
      window.removeEventListener("resize", initSlider);
    };
  }, []);

  return (
    <>
      <div className="slider-container">
        <div className="slider-wrapper" ref={sliderRef}>
          <button className="slider-btn" id="prev">
            <FontAwesomeIcon icon={faAngleLeft} className="slider-icon" />
          </button>
          <div className="slider-items">
            <img src="Jackryan.webp" alt="Jack Ryan" className="slider-img" />
            <img src="pushpa.webp" alt="Pushpa" />
            <img src="Tatd.webp" alt="Tatd" className="slider-img" />
            <img src="Shelter.webp" alt="Shelter" className="slider-img" />
            <img
              src="TheWinchesters.webp"
              alt="The Winchesters"
              className="slider-img"
            />
            <img src="pathaan.webp" alt="Pathaan" className="slider-img" />
            <img src="pushpa.webp" alt="Pushpa" className="slider-img" />
            <img src="yodha.webp" alt="Yodha" className="slider-img" />
            <img
              src="teribatome.webp"
              alt="Teri Batome"
              className="slider-img"
            />
            <img src="furiosa.webp" alt="Furiosa" className="slider-img" />
          </div>
          <button className="slider-btn" id="next">
            <FontAwesomeIcon icon={faAngleRight} className="slider-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default PageSlider;
