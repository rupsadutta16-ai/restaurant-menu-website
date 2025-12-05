import { useState, useEffect, useRef } from "react";

export default function FoodCarousel({ images, start, setstart }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);

      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: carouselRef.current.clientWidth * nextIndex,
          behavior: "smooth"
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <>
      {start && <div
        ref={carouselRef}
        className="whitetext flex overflow-hidden w-full h-full"
        style={{ scrollSnapType: "x mandatory" }}
      >
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