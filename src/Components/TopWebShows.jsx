import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SeriesCard from "./SeriesCard";

const TopWebShows = ({ title, faAngleRight, series }) => {
  return (
    <>
      <h2 className="box-title">
        {title}
        <FontAwesomeIcon icon={faAngleRight} className="arrow" />
      </h2>
      <div className="card-box">
        {series.map((series, index) => (
          <SeriesCard key={index} data={series} index={index} />
        ))}
      </div>
    </>
  );
};

export default TopWebShows;
