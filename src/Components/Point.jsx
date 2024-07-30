import Score from "./Score";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
const Point = ({rating})=>{
    return(
      <span className='point'>
          <FontAwesomeIcon icon={faStar} className='star'/>
          <Score rating={rating}/>
      </span>
    )
  }

  export default Point;