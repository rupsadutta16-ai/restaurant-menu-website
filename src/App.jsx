import { useContext, useState, useEffect, useRef } from 'react'
import Hero from './Hero.jsx'
import Nav from './Nav.jsx'
import Bgimg from './BgImg.jsx'
import HeroPlate from './HeroPlate.jsx'
import Menu from './Menu.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import { CartProvider } from './CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import AOS from "aos"
import "aos/dist/aos.css";
function App() {
  const [carouselStart, setCarouselStart] = useState(false);
    const [showPlate, setShowPlate] = useState(true);
  const [showPlateInTarget, setShowPlateInTarget] = useState(false);
  const [showHeroPlate, setShowHeroPlate] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 400, once: true, offset: 80, easing: "ease-out", delay: 0 })
    window.scrollTo(0, 0);
     setTimeout(() => {
    AOS.refreshHard();
  }, 100);

  }, []);
  return (
    <>
    {showHeroPlate && <HeroPlate
  showPlate={showPlate}
  onAnimationEnd={() => {
    setCarouselStart(true);
    setTimeout(() => {
      setShowHeroPlate(false)
      
    }, 700);
    
  }}
/> }

    <Bgimg />
    <CartProvider>
      <div className=" overflow-x-clip relative z-10 min-h-screen text-txt font-serif">
          <Nav />
          <Hero showPlateInTarget={showPlateInTarget} carouselStart={carouselStart} setCarouselStart={setCarouselStart} />
          <Menu />
          <Contact />
          <Footer />
      </div>
      <Toaster position='botttom-center' toastOptions={{duration: 1500,}} />
      </CartProvider>
    </>
  )
}
export default App;
