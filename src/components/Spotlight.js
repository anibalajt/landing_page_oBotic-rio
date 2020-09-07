import React from "react";

const Spotlight = ({ backdrop }) => {
  return (
    <div className="spotlight">
      <div className="bd-dark">
        <figure>
          <div className="spotlight-gradient"></div>
          <div
            style={{
              // backgroundImage: `url(${backdrop})`,
              backgroundImage:
                "url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg)",
            }}
            className="lazy"
          />
        </figure>
      </div>
    </div>
  );
};
export default Spotlight;
