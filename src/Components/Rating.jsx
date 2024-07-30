import Point from "./Point";

const Rating = ({rating})=> {
    return(
      <div className="rating">
        <span>IMDb RATING</span>
        <Point rating={rating}/>
      </div>
    )
  }

  export default Rating;