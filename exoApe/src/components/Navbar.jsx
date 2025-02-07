import React from "react";
import { Power4} from "gsap/all"
import { VscMenu } from "react-icons/vsc";
import { motion } from "motion/react";

function Navbar() {
  return (
    <div className="w-full fixed z-[999] text-white">
      <div className=" max-w-screen-2xl mx-auto py-5 px-5 sm: flex justify-between items-center">
        <motion.div initial={{opacity:0}} whileInView={{opacity :1}} viewport={{once:true}} transition={{ease: Power4.easeInOut ,duration:0.7}} className="text-3xl">
          <h1>exoApe</h1>
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity :1}} viewport={{once:true}} transition={{ease: Power4.easeInOut ,duration:0.7}} className="sm:hidden">
          <VscMenu />
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity :1}} viewport={{once:true}} transition={{ease: Power4.easeInOut ,duration:0.7}} className="links  hidden sm:flex gap-10">
          {["Home", "About", "Pricing", "Contact"].map((item, index) => (
            <a key={index} className="text-lg font-light">
              {item}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
