import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Momoimg from "./assets/momos.png"

export default function FoodCarousel({showPlateInTarget, images, start, setstart }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
  if (!start) return;

  const interval = setInterval(() => {
    setCurrentIndex(prev => {
      const nextIndex = (prev + 1) % images.length;

      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: carouselRef.current.clientWidth * nextIndex,
          behavior: "smooth",
        });
      }

      return nextIndex;
    });
  }, 1500);

  return () => clearInterval(interval);
}, [start, images.length]);

  return (
    <>
      {start && <div
        ref={carouselRef}
        className="whitetext flex overflow-hidden w-full h-full"
        style={{ scrollSnapType: "x mandatory" }}
      >
         
       

           <div

            className="  flex justify-center items-center flex-shrink-0 w-full scroll-snap-align-start">
             <motion.div
          layoutId="plate"
          initial={false}
          className="bg-cover bg-center w-52 h-52  md:w-80 md:h-80  z-500 rounded-full  "
           style={{ backgroundImage: `url(${Momoimg})`}}
        />
          </div>
          

        {images.map((img, i) => (
          <div key={i}

            className="  flex justify-center items-center flex-shrink-0 w-full scroll-snap-align-start">
            <img src={img} className="w-52 h-52 
             md:w-80 md:h-80 object-cover " />
          </div>
        ))}
      </div>}
    </>
  );
}