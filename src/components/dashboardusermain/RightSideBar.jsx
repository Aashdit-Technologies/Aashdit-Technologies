import React from "react";

import CardBox from "./CardBox";
import Projection from "./Projection";
import WishSlider from "./WishSlider";

const RightSideBar = () => {
  return (
    <>
      <div className="col-md-8 ">
        <WishSlider />

        <CardBox />

        <Projection />
      </div>
    </>
  );
};

export default RightSideBar;
