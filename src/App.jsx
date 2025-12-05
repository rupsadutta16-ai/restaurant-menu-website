import { useContext, useState, useEffect, useRef } from 'react'
import { MenuContext } from './MenuContext.jsx'
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
   
  useEffect(() => {
    AOS.init({ duration: 400, once: true, offset: 80, easing: "ease-out", delay: 0 })
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <HeroPlate  onAnimationEnd={() => setCarouselStart(true)} />
    <Bgimg />
    <CartProvider>
      <div className=" overflow-x-clip relative z-10 min-h-screen text-txt font-serif">
          <Nav />
          <Hero carouselStart={carouselStart} setCarouselStart={setCarouselStart} />
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