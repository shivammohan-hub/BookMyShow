import LiveCard from "./LiveCard"

const LiveEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-6 mt-6">
        <div className="w-full flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-2xl">The Best of Live Events</h2>
        </div>
        <div className="w-full grid grid-cols-5 gap-10 mt-2">

            <LiveCard image="comedyshows.png" />

            <LiveCard image="amusement.png" />

            <LiveCard image="theatre.png" />

            <LiveCard image="kids.png" />

            <LiveCard image="adventure.png" />

            
        </div>
    </div>
  )
}

export default LiveEvents