import React from "react";
import "../App.css";
const Card = (e) => {
  return (
    <div className="card">
      {e.gender === "Male" ? (
        <img
          alt="avatar"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1094874726.png?crop=0.542xw:0.814xh;0.0472xw,0.127xh&resize=640:*"
        />
      ) : (
        <img
          alt="avatar"
          src="https://paradepets.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg"
        />
      )}
      <div>
        <h3>Name of breed : {e.name}</h3>
        <h3>Age of pet : {e.age}</h3>
        <h3>Gender : {e.gender}</h3>
        <h3>Place : {e.country}</h3>
      
      </div>
    </div>
  );
};

export default Card;
