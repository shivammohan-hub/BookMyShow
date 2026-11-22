import { FcGoogle } from "react-icons/fc"
import CTAbutton from "./CTAbutton"
import { CiMail } from "react-icons/ci"
import { FaApple } from "react-icons/fa"
import { Link } from "react-router"
import { RxCross1 } from "react-icons/rx"

const GetStart = () => {
  return (
    <div className="bg-white py-4 text-center px-10">
    <div className="relative flex items-center justify-center">
        <h1 className="font-semibold text-xl text-gray-800">Get Started</h1>
        <Link className="absolute right-0 text-2xl font-semibold" to="/"><RxCross1 /></Link>
    </div>
    <div className="flex flex-col w-full py-5 gap-6 items-center mt-7">
        <CTAbutton icon={<FcGoogle className="h-5 w-5" />} connect_with="Google" />
        <CTAbutton icon={<CiMail className="h-5 w-5" />} connect_with="Email" />
        <CTAbutton icon={<FaApple className="h-5 w-5" />} connect_with="Apple" />
    </div>
    <span className="text-gray-500">OR</span>
    <div className="flex gap-5 text-sm items-center justify-center pt-10 pb-48">
        <span className="text-gray-700 flex items-center w-12 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 480"><path fill="#f93" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#128807" d="M0 320h640v160H0z"/><g transform="matrix(3.2 0 0 3.2 320 240)"><circle r="20" fill="#008"/><circle r="17.5" fill="#fff"/><circle r="3.5" fill="#008"/><g id="d"><g id="c"><g id="b"><g id="a" fill="#008"><circle r=".9" transform="rotate(7.5 -8.8 133.5)"/><path d="M0 17.5.6 7 0 2l-.6 5z"/></g><use xlink:href="#a" width="100%" height="100%" transform="rotate(15)"/></g><use xlink:href="#b" width="100%" height="100%" transform="rotate(30)"/></g><use xlink:href="#c" width="100%" height="100%" transform="rotate(60)"/></g><use xlink:href="#d" width="100%" height="100%" transform="rotate(120)"/><use xlink:href="#d" width="100%" height="100%" transform="rotate(-120)"/></g></svg>
            <p>+91</p></span>
        <input className="outline-none border-b border-gray-400 w-60" type="text" placeholder="Continue with mobile number" name="" id="" />
    </div>
    <p className="text-xs text-gray-500">Made with love</p>
    </div>
  )
}

export default GetStart