import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
const url = "https://www.course-api.com/react-tours-project";

const Tours = () => {
  const [locations, setLocations] = useState(0);
  const [loading, setLoading] = useState(true);

  //remove Tours
  const removeTour = (id) => {
    const newTours = locations.filter((place) => place.id !== id);
    setLocations(newTours);
  };

  //user to get API data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const locations = await response.json();
      //setLocations data to location var
      setLocations(locations);
      //console.log(locations);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  //this will only run once
  useEffect(() => {
    fetchData();
  }, []);

  if (locations.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours left</h2>
          <button
            type="button"
            style={{ marginTop: "2rem" }}
            className="btn"
            onClick={() => fetchData()}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <h2 className="title">Our Tours</h2>
        <div className="title-underline"></div>
        <section className="tours">
          {locations.map((place) => {
            return (
              <article className="single-tour">
                <Tour key={place.id} {...place} />
                <button
                  className="btn delete-btn btn-block"
                  onClick={() => removeTour(place.id)}
                >
                  Not Interested
                </button>
              </article>
            );
          })}
        </section>
      </main>
    );
  }
};
export default Tours;
