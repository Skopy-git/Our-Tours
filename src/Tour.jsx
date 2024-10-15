import { useState } from "react";

const Tour = (place) => {
  const [readMore, setReadMore] = useState(false);
  //console.log(place);
  return (
    <div>
      <span className="tour-price">{place.price}</span>
      <img className="img" src={place.image} alt="Error loading img." />
      <div className="tour-info">
        <h5>{place.name}</h5>
        <p>{readMore ? place.info : place.info.substring(0, 200)}</p>
        <button
          type="button"
          className="info-btn"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};
export default Tour;
