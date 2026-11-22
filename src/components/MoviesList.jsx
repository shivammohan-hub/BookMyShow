const MoviesList = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-10">
        <div className="w-full flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-2xl">Recommanded Movies</h2>
            <button className="text-sm text-red-600">Sell All</button>
        </div>
        <div className="w-full grid grid-cols-5 gap-10 mt-2">
            <div className="">
                <img className="h-[350px] w-48 rounded-lg" src="animalparty.png" alt="" />
                <h3 className="text-lg font-medium">Party Animals</h3>
                <p className="">Comedy</p>
            </div>
            <div className="">
                <img className="h-[350px] w-48 rounded-lg" src="animalparty.png" alt="" />
                <h3>Party Animals</h3>
                <p>Comedy</p>
            </div>
            <div className="">
                <img className="h-[350px] w-48 rounded-lg" src="animalparty.png" alt="" />
                <h3>Party Animals</h3>
                <p>Comedy</p>
            </div>
            <div className="">
                <img className="h-[350px] w-48 rounded-lg" src="animalparty.png" alt="" />
                <h3>Party Animals</h3>
                <p>Comedy</p>
            </div>
            <div className="">
                <img className="h-[350px] w-48 rounded-lg" src="animalparty.png" alt="" />
                <h3>Party Animals</h3>
                <p>Comedy</p>
            </div>
        </div>
    </div>
  )
}

export default MoviesList