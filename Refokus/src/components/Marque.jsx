import React from "react";
import { motion } from "motion/react";

function Marque({ imagesurls , direction ,direction1 }) {
  return (
    <div className="flex w-full overflow-hidden mt-12 h-20">
      <motion.div intial={{x: direction === 'left' ? "0" : "-100%"}} animate={{x: direction === 'left' ? "-100%" : "0"}} transition={{ease:"linear",duration:10 ,repeat:Infinity}} className="flex flex-shrink-0  pr-10 gap-20">
        {imagesurls.map((url) => (
          <img src={url} />
        ))}
      </motion.div>
     
      <motion.div intial={{x: direction === 'left' ? "0" : "-100%"}} animate={{x: direction === 'left' ? "-100%" : "0"}} transition={{ease:"linear",duration:10 ,repeat:Infinity}} className="flex flex-shrink-0  pr-10 gap-20">
        {imagesurls.map((url) => (
          <img src={url} />
        ))}
      </motion.div>
     
      
    
      
    </div>
  );
}

export default Marque;

//  whitespace-nowrap
