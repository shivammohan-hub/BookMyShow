const LiveCard = (props) => {
    let name= props.name ;
    let image = props.image;
    let genre = props.genre ;
  return (
    <div>
        <div className="flex flex-col gap-2">
            <img className="h-[220px] w-full rounded-xl" src={image} alt="" />
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600">{genre}</p>
        </div>
    </div>
  )
}

export default LiveCard