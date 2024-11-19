import React from "react";
import Boy from "../../images/boy.png";
import Star2 from "../../images/star2.png";
import Star from "../../images/star1.png";

const WishSlider = () => {
  return (
    <>
      <div className="empRight">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="img2 col-md-2">
            <img src={Boy} alt="Employee" />
            <img className="star2" src={Star2} alt="Star Badge" />
            <img className="star" src={Star} alt="Star Badge" />
          </div>
          <div className="imgcon2 col-md-8">
            <span>Somnath Pratik Singh</span>
            <h5>Warm wishes on the occasion of your birthday</h5>
            <p>
              May your birthday be the start of a year filled with good luck,
              good health and much happiness & we hope that you have a great
              year and accomplish all the fabulous goals you have set.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishSlider;
