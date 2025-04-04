import React from "react"
import Lottie from "lottie-react";
import burgerLoader from "../assets/loader_burger.json";

const style = {
    height: 300,
};

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Lottie animationData={burgerLoader} loop={true} style={style} />
    </div>
  );
};

export default Loader;