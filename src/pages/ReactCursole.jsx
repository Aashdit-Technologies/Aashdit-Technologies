
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import star2 from "../images/Star2.png";
import star1 from "../images/star1.png";
import "../pages/reactcursole.css";
import "../pages/reactcursole.css"
function ReactCursole() {
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/birthdayWishes");
        setWishes(response.data);
      } catch (error) {
        console.error("Error fetching birthday wishes:", error);
      }
    };

    fetchWishes();
  }, []);

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", left: "15px", zIndex: 2, cursor: "pointer" }} onClick={onClick}>
      
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", right: "15px", zIndex: 2, cursor: "pointer" }} onClick={onClick}>
      
      </div>
    );
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    // <div className="slider-container">
      <Slider {...settings}>
        {wishes.map((wish) => (
          <div key={wish.id} className="slide-card">
            <div className="card">
              <div className="emp-right">
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="img2 col-md-2">
                    <img src={wish.image} alt={wish.name} />
                    <img className="star2" src={star2} alt="Star 2" />
                    <img className="star" src={star1} alt="Star 1" />
                  </div>
                  <div className="imgcon2 col-md-8">
                    <span>{wish.name}</span>
                    <h5>{wish.message.split('. ')[0]}</h5> 
                    <p>{wish.message}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    // </div>
  );
}

export default ReactCursole;

