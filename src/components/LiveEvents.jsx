import LiveCard from "./LiveCard"

const LiveEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-6 mt-6">
        <div className="w-full flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-2xl">The Best of Live Events</h2>
        </div>
        <div className="w-full grid grid-cols-5 gap-10 mt-2">

            <LiveCard name="Party Animals" genre="Comedy" image="comedyshows.png" />

            <LiveCard name="Ramayana" genre="Action/Adventure/Drama" image="amusement.png" />

            <LiveCard name="Avengers: Doomsday" genre="Action/Adventure/Fantasy/Si-Fi" image="theatre.png" />

            <LiveCard name="Pyre" genre="Drama/Romantic" image="pyre.png" />

            <LiveCard name="Godzilla Minus Zero" genre="Action/Adventure/Horror/Thriller" image="minus0.png" />

            
        </div>
    </div>
  )
}

export default LiveEvents