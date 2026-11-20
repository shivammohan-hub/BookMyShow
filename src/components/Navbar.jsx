const Navbar = () => {
  return (
    <div className="px-[10%] py-2  flex items-center justify-between bg-gray-100">
        <div className="flex items-center gap-4 text-sm">
            <a href="">Movies</a>
            <a href="">Stream</a>
            <a href="">Events</a>
            <a href="">Plays</a>
            <a href="">Sports</a>
            <a href="">Activities</a>
        </div>
        <div className="flex items-center gap-4 text-xs">
            <a href="">ListYourShow</a>
            <a href="">Corporates</a>
            <a href="">Offers</a>
            <a href="">Gift Cards</a>
        </div>
    </div>
  )
}

export default Navbar