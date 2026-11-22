import Header from "../components/Header"
import Hero from "../components/Hero"
import Recommanded from "../components/Recommanded"
import Navbar from "../components/Navbar"
import MusicStudio from "../components/MusicStudio"
import OutdoorEvents from "../components/OutdoorEvents"
import Laughter from "../components/Laughter"
import PopularEvents from "../components/PopularEvents"
import LatestPlays from "../components/LatestPlays"
import Premiere from "../components/Premiere"
import Footer from "../components/Footer"
import LiveEvents from "../components/LiveEvents"

const Home = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Hero />
        <Recommanded />
        <a href="">
          <img className="px-[10%]" src="stream.png" alt="" />
        </a>
        <LiveEvents />
        <Premiere />
        <MusicStudio />
        <OutdoorEvents />
        <Laughter />
        <PopularEvents />
        <LatestPlays />
        <Footer />
    </div>
  )
}

export default Home