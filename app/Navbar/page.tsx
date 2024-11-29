
import Link from "next/link";
  
  

function Navbar(){
    return(
        <>

        <nav className=" flex bg-cyan-800 sm:text-xs bg text-white pb-0 h-14  justify-between">
          <div className="h-10">     
            <img src="/Logo.png" className="h-43px w-28 pl-8 " alt="" />
            </div>
          <p className="hidden sm:block font-bold text-xl  md:pt-4">Tuition Free Education Program on Latest Technologies</p>
          <div className="pt-4 sm:text-xs pr-7"> 
          <a href="/" className="pr-7 md:text-lg">Home</a>
          <a href="/apply" className="pr-7 md:text-lg">Apply</a>
          <a href="/courses" className="pr-7 md:text-lg">Courses</a>
          </div>
        </nav>
  
        </>

    )
}
export default Navbar;