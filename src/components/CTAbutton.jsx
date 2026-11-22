const CTAbutton = (props) => {
    let icon = props.icon ;
    let connect_with = props.connect_with ;
  return (
    <div className="text-center flex items-center w-full border rounded-md border-gray-400 text-sm py-2 ">
        <span className="flex-3 pl-5">{icon}</span>
        <button className="flex-1 text-gray-600 font-semibold ">Continue with {connect_with}</button>
    </div>
  )
}

export default CTAbutton