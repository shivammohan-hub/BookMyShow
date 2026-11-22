import Card from "./Card"

const OutdoorEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-10">
        <div className="w-full flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-2xl">Outdoor Events</h2>
            <button className="text-sm text-red-600">Sell All</button>
        </div>
        <div className="w-full grid grid-cols-5 gap-10 mt-2">

            <Card name="Party Animals" genre="Comedy" image="sahitya.png" />

            <Card name="Ramayana" genre="Action/Adventure/Drama" image="ota.png" />

            <Card name="Avengers: Doomsday" genre="Action/Adventure/Fantasy/Si-Fi" image="planetariam.png" />

            <Card name="Pyre" genre="Drama/Romantic" image="manoj.png" />

            <Card name="Godzilla Minus Zero" genre="Action/Adventure/Horror/Thriller" image="runclub.png" />

            
        </div>
    </div>
  )
}

export default OutdoorEvents