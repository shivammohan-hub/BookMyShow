import Card from "./Card"

const LatestPlays = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-10">
        <div className="w-full flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-2xl">The Latest Plays</h2>
            <button className="text-sm text-red-600">Sell All</button>
        </div>
        <div className="w-full grid grid-cols-5 gap-10 mt-2">

            <Card name="Dance Like a Man" genre="English" image="dancelikeman.png" />

            <Card name="27 Seconds - Delhi Theatre Festival" genre="English" image="27sec.png" />

            <Card name="Kaifi Aur Main - Delhi Theatre Festival" genre="Hindi" image="kaifiorme.png" />

            <Card name="Taj Mahal ka Tender" genre="Hindustani" image="taj.png" />

            <Card name="The Great Office Escape (Digital Detox Workshop)" genre="Hindi" image="officeescape.png" />

            
        </div>
    </div>
  )
}

export default LatestPlays