import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Momoimg from './assets/momos.png'
export default function HeroPlate({ showPlate, onAnimationEnd, }) {
  const [moveToCarousel, setMoveToCarousel] = useState(false);
  
  const hasEnded = useRef(false)
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setMoveToCarousel(true)
      document.body.style.overflow = "auto";
      // setTimeout(() => {
      //   setHidemomo(true);
      // }, 4000);

    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (


    <>

      {showPlate && (
        <motion.div
          className="absolute z-50 pointer-events-none overflow-hidden "
          initial={{ background: "var(--color-bgmed)", width: "100%", height: "100vh" }}

          animate={
            moveToCarousel
              ? { backgroundColor: "rgba(119, 46, 46, 0)", display: "none" }
              : { backgroundColor: "var(--color-bgdark)" }
          }
          transition={{ duration: 1.5 }}

        >

          <motion.h1
            className="absolute left-1/2 font-pacifico text-mybutter -translate-x-1/2 bottom-[30vh] md:bottom-[25vh] lg:bottom-[10vh]  text-4xl font-bold opacity-0"
            initial={{ opacity: 0 }}
            animate={moveToCarousel ? { display: "none" } : { opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Bite <span className="text-txt font-quicksand font-bold tracking-tight">Street</span>
          </motion.h1>
        </motion.div>
      )}


      {/* <div className="largewhite font-pacifico text-mybutter text-lg md:text-2xl">
            Bite <span className="text-myash font-quicksand font-bold tracking-tight">Street</span>
          </div> */}


      {
        showPlate && (


          <motion.div
            layoutId="plate"
            className="absolute transform top-[26vh] md:top-[30vh]  lg:top-[15vh] -translate-x-1/2 w-52 h-52 md:w-80 md:h-80 z-100 rounded-full bg-cover bg-center "
            style={{ backgroundImage: `url(${Momoimg})` }}
            initial={{ scale: 0, left: "50%", rotate: 0, opacity: 0 }}
            animate={{ opacity: 1, scale: 1.3, rotate: 720 }}

            transition={{ type: "spring", duration: 3 }}
            onAnimationComplete={() => {
              if (hasEnded.current) return;
              hasEnded.current = true;
              onAnimationEnd();
            }}
          />


        )
      }

    </>




  );
}