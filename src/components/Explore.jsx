import Card from "./Card"

const Explore = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-10">
        <div className="w-full flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-2xl">Recommanded Movies</h2>
            <button className="text-sm text-red-600">Sell All</button>
        </div>
        <div className="w-full grid grid-cols-5 gap-10 mt-2">

            <Card name="Party Animals" genre="Comedy" image="animalparty.png" />

            <Card name="Ramayana" genre="Action/Adventure/Drama" image="ramayana.png" />

            <Card name="Avengers: Doomsday" genre="Action/Adventure/Fantasy/Si-Fi" image="doomsday.png" />

            <Card name="Pyre" genre="Drama/Romantic" image="pyre.png" />

            <Card name="Godzilla Minus Zero" genre="Action/Adventure/Horror/Thriller" image="minus0.png" />

            
        </div>
    </div>
  )
}

export default Explore