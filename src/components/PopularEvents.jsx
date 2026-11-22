import Card from "./Card"

const PopularEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-10">
        <div className="w-full flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-2xl">Popular Events</h2>
            <button className="text-sm text-red-600">Sell All</button>
        </div>
        <div className="w-full grid grid-cols-5 gap-10 mt-2">

            <Card name="Journey Across the Himalayas" address="Travancore Palace: Delhi" image="journey.png" />

            <Card name="Ota TOKYO, 2026 - Delhi" address="Yashobhoomi Convention Center: Delhi" image="ota.png" />

            <Card name="TCS Ruhaniyat - Delhi" address="Audi 2, Bharat Mandapam, Delhi" image="tcs.png" />

            <Card name="Niyam Live - New Delhi" address="Dirty Good: New Delhi" image="niyam.png" />

            <Card name="Carvaan Live: Best Love Songs at Ambassador" address="Ambassador New Delhi, IHCL SeleQtions" image="carvaan.png" />

            
        </div>
    </div>
  )
}

export default PopularEvents