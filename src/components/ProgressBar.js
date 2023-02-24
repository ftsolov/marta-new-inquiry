import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ progress }) => {
  return (
    <div className={"absolute bottom-0 bg-border h-1 w-full"}>
      <motion.div
        className={"bg-primary h-1 transition"}
        animate={{ width: (progress / 11) * 100 + "%" }}
        initial={{ width: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 15 }}
      />
    </div>
  );
};

export default ProgressBar;
