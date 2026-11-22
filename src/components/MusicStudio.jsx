import Card from "./Card"

const MusicStudio = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-10">
        <div className="w-full flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-2xl">Your Music Studio</h2>
            <button className="text-sm text-red-600">Sell All</button>
        </div>
        <div className="w-full grid grid-cols-5 gap-10 mt-2">

            <Card name="Sahitya Aajtak 2026 - Delhi" address="Major Dhyanchand National Stadium Delhi" genre="Music Festivals" image="sahitya.png" />

            <Card name="Ota TOKYO 2026 - Delhi" address="Yashobhoomi Convention Center: Delhi" genre="Music Festivals" image="ota.png" />

            <Card name="Indian Sneaker Festival 2026" address="Leisure Valley Ground: Gurgaon" genre="Music Festivals" image="sneaker.png" />

            <Card name="Aditya Rikhari's Meri Paro India Tour - Delhi" address="Cricket Jawaharlal Nahru Stadium: Delhi" genre="Concerts" image="meriparo.png" />

            <Card name="SmirnoffExpirience ft. ALESSO - Delhi NCR"  address="Huda Gymkhana Club: Gurgaon" genre="Concert" image="alesso.png" />

            
        </div>
    </div>
  )
}

export default MusicStudio