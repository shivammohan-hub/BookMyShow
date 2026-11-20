import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className="px-[10%] py-2 bg-gray-400">
        <div className="">
            <a>
            <img className='w-28' src={logo} alt="BookMyShow" />
            </a>
            <input className="w-[500px]" type="search" name="" id="" />
        </div>
        
    </div>
  )
}

export default Header