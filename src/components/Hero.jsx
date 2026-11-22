const Hero = () => {
  return (
    <div className="flex gap-3 overflow-x-scroll py-3 bg-gray-100 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden duration-300 ">
        <img className="rounded-lg" src="slider1.png" alt="" />
        <img className="rounded-lg" src="slider2.png" alt="" />
        <img className="rounded-lg" src="slider3.png" alt="" />
        <img className="rounded-lg" src="slider4.png" alt="" />
    </div>
  )
};

export default Hero;