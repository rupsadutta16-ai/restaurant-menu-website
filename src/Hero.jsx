
import HeroPlate from './HeroPlate.jsx'
import FoodCarousel from './FoodCarousel.jsx'
import { use, useRef, useState } from 'react'
import Momoimg from './assets/momos.png'
import Rollsimg from './assets/rolls.png'
import Burgerimg from './assets/burger.png'
import Sandwichimg from './assets/sandwich.png'
import Pakodaimg from './assets/pakoda.png'
import Faloodaimg from './assets/falooda.png'
function Hero({ showPlateInTarget, carouselStart, setCarouselStart }) {


    const foodImages = [
       
        Rollsimg,
        Burgerimg,
        Sandwichimg,
        Pakodaimg,
        Faloodaimg,
        Momoimg

    ];



    return (
        <>

            <div id='home' className='h-screen flex items-center justify-center'>
                <div
                    className="flex flex-col md:flex-row md:mt-18 w-[90%] h-[70vh] md:w-[80%] sm:h-[60vh] border-bgdark/30 border-2 rounded-3xl shadow-lg transition-transform transform hover:-translate-y-1 duration-300
            hover:shadow-2xl herocardphone md:herocard"

                >
                    <div className='md:w-[54%] md:flex md:justify-center md:flex-col  h-full md:p-12 py-6 px-7'><h1 className='largewhite text-extrabold text-txt  md:text-3xl text-lg md:mb-6 mb-3 text-center'>Bite Street</h1>
                        <p className='text-[13px] sm:text-[14px] whitetext mb-1 text-txt/80'>Welcome to Bite Street - where every bite tells a story!</p>
                        <p className='text-[13px] sm:text-[14px] whitetext mb-1 text-txt/80'>From steaming hot momos to crunchy street rolls, juicy burgers, fried snacks that crunch just right, sweet desserts, and thirst-quenching drinks - we've got your cravings covered!
                        </p>

                        <p className='text-[13px] sm:text-[14px] whitetext text-txt/80 '> Whether you're here to munch solo or share with friends, Bite Street is your playground. Eat, laugh, repeat!
                        </p>

                        <a href="#menu"><button className='font-bold bg-mybutter/90 md:w-auto w-40 px-2 md:px-4 py-2 md:py-3 md:txt-lg text-sm text-myash rounded-md md:rounded-lg mt-4 md:mt-7 ml-[50%] transform -translate-x-1/2 button'>Explore Our Menu</button>
                        </a>
                    </div>

                    <div className=' largewhite md:w-[45%] md:mt-0 -mt-3 h-full ref={carouselRef}'>


                        <FoodCarousel showPlateInTarget={showPlateInTarget} images={foodImages} start={carouselStart} setstart={setCarouselStart} />

                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero