import GetStart from "../components/GetStart"

const Signin = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">

    <div className="absolute inset-10 bg-[url('/bg-signin.png')] bg-cover bg-center blur-sm scale-105"></div>

    <div className="absolute inset-0 bg-gray-700/20"></div>

    <div className="relative z-10 w-[28%] ">
        <GetStart />
    </div>

</div>
  )
}

export default Signin