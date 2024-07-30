import "./webshow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { suggestionlist } from "../../customData";
const Suggestion = () => {
  return (
    <>
      {suggestionlist.map((data, index) => (
        <div className="suggestion-item g-4" key={index}>
          <h3 className="fs-5 fw-bold item-title">
            {data.itemtitle}
            <span>
              <FontAwesomeIcon
                icon={data.icon}
                className="fs-4 ms-2 text-warning"
              />
            </span>
          </h3>
          <p className="fw-normal item-sub-title text-primary">
            {data.subtitle}
          </p>
        </div>
      ))}
    </>
  );
};

export default Suggestion;
