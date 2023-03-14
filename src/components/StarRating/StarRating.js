import React, {useState} from "react";
import "./StarRating.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";

{
  /* <FontAwesomeIcon className='faStar-stroke' stroke="black" stroke-width="10"  icon={faStarHalfStroke} /> */
}

function StarRating({starInput, heightStar, widthStar}) {

    const [rating, setRating] = useState(starInput);
  return (
    <div className={'star-rating'}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
          type='button'
          key={index}
          className={index <= rating ? 'on' : 'off'}
          onClick={ ()=> setRating(index)}
          >
            <FontAwesomeIcon
              className="faStar-fa"
              stroke="grey"
              stroke-width="20"
              icon={faStar}
            />
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;
