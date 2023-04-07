import NewArrivals from "../Components/NewArrivals"
import Options from "../Components/Options"
import Peace from "../Components/Peace"
import TopSellers from "../Components/TopSellers"
import front from "../assets/front.PNG"
import { Image } from '@chakra-ui/react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { useRef } from "react"

const HomePage = () => {
  const newarrivalRef = useRef(null);

  const handleBuyNowClick = () => {
    if (newarrivalRef.current) {
      window.scrollTo({
        top: newarrivalRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }


  return (
   <>
   <Navbar />
    <Image src={front} onClick={handleBuyNowClick} cursor={"pointer"}/>
    <section ref={newarrivalRef}>
        <NewArrivals />
    </section>
    
    <section>
      <Options />
    </section>
    <section>
      <Peace />
    </section>
    <section>
      <TopSellers />
    </section>
    <Footer />
    </>
  )
}

export default HomePage