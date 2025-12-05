import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Momoimg from './assets/momos.png'
export default function HeroPlate({ onAnimationEnd,  }) {
  const [moveToCarousel, setMoveToCarousel] = useState(false);
  const [hidemomo, setHidemomo] = useState(false);
 
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setMoveToCarousel(true);
      document.body.style.overflow = "auto";
    //   setTimeout(() => {
    //     setHidemomo(true);
    //   }, 2000);
  
    }, 3000); 
    return () => clearTimeout(timer);
}, []);

  return (
    <motion.div
      initial={{ background: "var(--color-bgmed)", width: "100vw", height: "100vh" }}
      animate={
        moveToCarousel
          ? { backgroundColor: "rgba(119, 46, 46, 0)", width: "0", height: "0", position: "absolute" , top: "50%", right: "50%" }
          : { backgroundColor: "var(--color-bgdark)", width: "100vw", height: "100vh" }
      }
      transition={{ duration: 1 }}
      className="absolute z-200 pointer-events-none overflow-hidden flex items-center justify-center"
    >
      {!hidemomo && (
        <motion.img
          src={Momoimg}
          alt="Plate of Momos"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={
            moveToCarousel
              ? {  scale: 0.8, rotate: 0, opacity: 0 }
              : { opacity: 1, scale: 0.8, rotate: 720 }
          }
          transition={{ duration: 2, type: "spring" }}
         onAnimationComplete={onAnimationEnd}
        />
      )}

      {/* {!moveToCarousel && (
        <motion.h1
          className="absolute left-8 top-1/3 text-white text-4xl font-bold opacity-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to Street Food Heaven!
        </motion.h1>
      )} */}
    </motion.div>
  );
}