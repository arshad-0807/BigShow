import Poster from "./Poster";
import Genre from "./Genre";
import RatingBox from "./RatingBox";
import Details from "./Details";

const SeriesCard = ({ data, index }) => {
  return (
    <div className="series-card">
      <Poster image={data.image} />
      <Genre genre={data.genre} />
      <RatingBox title={data.title} rating={data.rating} />
      <Details details={data.details} />
    </div>
  );
};
export default SeriesCard;
