import { IoIosMenu } from 'react-icons/io';
import logo from '../assets/logo.svg';
import Button from './Button';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="px-[10%] py-3 flex items-center justify-between">
        <div className="flex gap-5 items-center">
            <a>
            <img className='w-28' src={logo} alt="BookMyShow" />
            </a>
            <div className="flex border items-center px-3 rounded">
              <BsSearch className='h-3.5 w-3.5' />
              <input className="w-[550px] py-2 text-sm px-2" type="search" name="" id="" placeholder=' Search for Movies, Events, Plays, Sports and Activities' />
            </div>
        </div>
        <div className="flex gap-5 items-center">
          <select className='bg-white px-3 text-sm' name="" id="">
            <option value="">Delhi-NCR   </option>
          </select>
          
          <Button className="shadow" />
          <IoIosMenu className='h-7 w-7' />
        </div>
    </div>
  )
}

export default Header