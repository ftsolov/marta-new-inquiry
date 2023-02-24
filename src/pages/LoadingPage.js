import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../lotties/inquiryAnimation.json";

const LoadingPage = ({ setCurrentQuestion }) => {
  useEffect(() => {
    setTimeout(() => {
      setCurrentQuestion(13);
    }, 8500);
  }, []);

  const animationRef = useRef(null);

  return (
    <div className={"w-full flex items-center justify-center pt-40"}>
      <Lottie
        options={{
          loop: false,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={400}
        width={300}
        ref={animationRef}
        animationData={animationData}
      />
    </div>
  );
};

export default LoadingPage;
