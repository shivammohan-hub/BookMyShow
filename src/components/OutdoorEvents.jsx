import Card from "./Card"

const OutdoorEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-10">
        <div className="w-full flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-2xl">Outdoor Events</h2>
            <button className="text-sm text-red-600">Sell All</button>
        </div>
        <div className="w-full grid grid-cols-5 gap-10 mt-2">

            <Card name="Sahitya Aajtak 2026 - Delhi" address="Major Dhyanchand National Stadium Delhi" image="sahitya.png" />

            <Card name="Ota TOKYO 2026 - Delhi" address="Yashobhoomi Convention Center: Delhi" image="ota.png" />

            <Card name="Nehru Planetarium: Delhi." address="Nehru Planetarium: New Delhi." image="planetariam.png" />

            <Card name="Manoj Muntashir's Krishna - Radha Se Ranbhumi Tak" address="Yashobhoomi Convention Center: Delhi" image="manoj.png" />

            <Card name="Run Club" address="Lodhi Gardens Main Entrance: Delhi" image="runclub.png" />

            
        </div>
    </div>
  )
}

export default OutdoorEvents