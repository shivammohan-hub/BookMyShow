import Card from "./Card"

const Laughter = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-6">
        <div className="w-full flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-2xl">Laughter Therapy</h2>
            <button className="text-sm text-red-600">Sell All</button>
        </div>
        <div className="w-full grid grid-cols-5 gap-10 mt-2">

            <Card name="Blunt by Onkar" address="The Laugh Casa, Rcube Monad Mall: Noida" image="blunt.png" />

            <Card name="I Am Worth It By Rajat Sood" address="The Laugh Casa, Rcube Monad Mall: Noida" image="worth.png" />

            <Card name="ANDHA PYAAR Ft Vivek Samtani & Kaustubh..." address="Aiwan-E-Ghalib Auditorium: Delhi" image="andhapyar.png" />

            <Card name="Gaurav Gupta Live" address="The Laugh Store: DLF Cyberhub, Gurugram" image="gauravgupta.png" />

            <Card name="Comedy Nights @Comedy County" address="Comedy County: Noida" image="comedynights.png" />

            
        </div>
    </div>
  )
}

export default Laughter