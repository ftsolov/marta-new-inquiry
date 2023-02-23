import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/inquiryAnimation.json";

const LoadingPage = ({ setCurrentQuestion }) => {
  useEffect(() => {
    setTimeout(() => {
      setCurrentQuestion(13);
    }, 8000);
  }, []);

  return (
    <div className={"w-full h-screen flex items-center justify-center"}>
      <Lottie
        options={{
          loop: false,
          autoplay: true,
          animationData: animationData,
          imageAssetsFolder: "./images",
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={400}
        width={400}
      />
    </div>
  );
};

export default LoadingPage;
