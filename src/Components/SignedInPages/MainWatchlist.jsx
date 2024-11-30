import { Link } from "react-router-dom";
import "../watchlist.css";

const MainWatchList = () => {
  return (
    <>
      <div className="empty-recommendation">
        <h1 className="box-title">What to Watch on BigShow</h1>
        <div className="response-content text-center text-white">
          <div>
            <h2>Looking for recommendations?</h2>
            <p className="text-center">
              Checkout some popular movies and TV shows,then come back to get
              personalized recommendations.
            </p>
            <Link
              to={"/"}
              className=" btn bg-transparent text-info border-info-subtle px-4 py-2 browse-btn"
            >
              Browse popular movies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainWatchList;
