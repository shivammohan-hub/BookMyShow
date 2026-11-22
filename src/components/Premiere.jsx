import PremiereCard from "./PremiereCard"

const Premiere = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#2b3148] px-[10%] my-8 ">
      <a className="py-6" href="">
        <img src="premiere.png" alt="" />
      </a>
      <div className="w-full flex flex-col text-white">
          <h2 className="font-bold  text-2xl">Premieres</h2>
          <p className="text-sm">Brand new releases every Friday</p>
      </div>
      <div className="w-full grid grid-cols-5 gap-10 mt-2">

          <PremiereCard name="The Odyssey" genre="English" image="odyssey.png" />

          <PremiereCard name="Kadakh" genre="Hindi" image="kadakh.png" />

          <PremiereCard name="Marrow" genre="English" image="marow.png" />

          <PremiereCard name="Other Mommy" genre="English" image="othermommy.png" />

          <PremiereCard name="Ha-Chan, Shake Your Booty!" genre="English" image="ha-chan.png" />

          
      </div>
    </div>
  )
}

export default Premiere