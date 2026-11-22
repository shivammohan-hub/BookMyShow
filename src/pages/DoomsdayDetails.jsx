import { IoIosArrowForward } from "react-icons/io";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const DoomsdayDetails = () => {
  return (
    <div className="w-full">
        <Header />
        <Navbar />
      <section className="relative [450px] overflow-hidden bg-[#202020]">
        <div className="absolute inset-0 bg-[url('/doomsdayPoster.png')] bg-cover bg-center blur-sm scale-105"></div>
        <div className="relative z-10 px-20 py-10">
          
          <div className="flex flex gap-10">
            <div className="w-72 rounded-2xl bg-black">
              <div className="relative">
                <img src="doomsdayDetails.png" alt="Doomsday" className="w-full rounded-2xl h-[360px] object-cover"/>
              </div>

              <p className="text-center text-white font-semibold py-3">In cinemas</p>
            </div>

            <div className="flex-1 text-white pt-2">
              <h1 className="text-4xl font-bold mb-4">Avengers: Doomsday</h1>

              <div className="flex flex-wrap items-center justify-between gap-4 bg-black border border-white/50 rounded-2xl px-5 py-4 mb-5">
                <div className="flex items-center gap-3">
                  <span className="font-semibold tracking-widest">924K+  Interested</span>

                  <IoIosArrowForward className="text-gray-400 text-xl" />
                </div>
                <button className="border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-black ">Interested</button>
              </div>

              <p className="text-lg font-semibold mb-7">2h 45m &nbsp;·&nbsp; Action, Si-Fi, Thriller, Fantasy &nbsp;·&nbsp; U &nbsp;·&nbsp; 17 Dec, 2026</p>
              <div className="flex gap-3 mb-10">
                <span className="bg-white/25 rounded px-3 py-1 text-sm font-semibold">SCREEN X, 2D, EPIQ, EPIQ 3D, IMAX 3D, DOLBY CINEMA 2D, +10</span>

                <span className="bg-white/25 rounded px-3 py-1 text-sm font-semibold">Hindi, Tamil, +3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-5">About the movie</h2>
        <p className="text-gray-700 text-lg leading-8">
          Avengers: Doomsday is an upcoming Marvel Cinematic Universe (MCU) superhero film. As the multiverse faces collapse and incursions, heroes from different universes—including the Avengers, Wakandans, New Avengers, Fantastic Four, and X-Men—must unite against a massive existential threat. Robert Downey Jr. stars as the main villain, Victor Von Doom / Doctor Doom
        </p>
      </section>
    </div>
  );
};

export default DoomsdayDetails;
