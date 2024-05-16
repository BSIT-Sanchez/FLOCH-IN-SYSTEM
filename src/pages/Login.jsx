
const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-textColor">     
      <di className="bg-[#fff] h-[350px] flex flex-col md:w-[35%] sm:w-[150%] pl-[18px] pr-[18px] justify-center items-center shadow-xl rounded-md">  
      <img  src="/logo.png" alt="logo" className="h-[100px] w-[100px]"/>
      
        <form className="flex flex-col justify-start items-center">
        <h1 className="mb-5 font-semibold">FLOCH-IN SYSTEM</h1>
            <input type="text" placeholder="Email" className="bg-bgBlack text-[#fff] p-1 m-2 outline-none rounded-md md:w-[100%] sm:w-full"/>
            <input type="password" placeholder="****" className="bg-bgBlack text-[#fff] p-1 m-2 outline-none rounded-md md:w-[100%] sm:w-full"/>
            <div className="flex justify-start items-center">
              <input type="checkbox"/>
              <p className="text-[10px]">I agree Terms of Service and Privacy Policy</p>
            </div>
            
            <button className="bg-[#3b82f6] text-[#fff] p-1 m-2 rounded-md md:w-[100%] sm:w-full">Login</button>
        </form>

      </di>

      </div>
    
  )
}

export default Login