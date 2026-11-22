import Header from "../components/Header"
import Hero from "../components/Hero"
import MoviesList from "../components/MoviesList"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Hero />
        <MoviesList />
    </div>
  )
}

export default Home