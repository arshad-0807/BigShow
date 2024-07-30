import Title from "./Title";
import Rating from "./Rating";

const RatingBox = ({title, rating})=>{
    return(
      <>
        <div className="rating-box">
          <Title title={title}/>
          <Rating rating={rating}/>
        </div>
      </>
    )
  }

export default RatingBox;