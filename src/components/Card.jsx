const Card = (props) => {
    let name= props.name ;
    let image = props.image;
    let address = props.address;
    let genre = props.genre ;
  return (
    <div>
        <div className="flex flex-col gap-1">
            <img className="h-[350px] w-full rounded-lg" src={image} alt="" />
            <h3 className="text-lg font-semibold text-[15px] text-gray-800">{name}</h3>
            <h4 className="text-gray-600 text-sm">{address}</h4>
            <p className="text-gray-600 text-sm">{genre}</p>
        </div>
    </div>
  )
}

export default Card