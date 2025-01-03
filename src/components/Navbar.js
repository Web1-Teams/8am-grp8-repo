import { BsCartPlus } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import { IoMdClose } from "react-icons/io";
import { FaBars, FaGoogle } from "react-icons/fa"
import navLinks from "../data/data"
import { useState } from "react"


const Navbar = () => {

    const [toggle, setToggle] = useState(false);


 const displayNav= navLinks.map((link) =>(
    <li key={link.id}>
    <a href ={link.path} className=" hover:text-pink-500 text-[17px]">{link.name}</a>
  
    </li>
 ))

 const handleToggle=()=>{
        setToggle(!toggle)
 }

  return (
    <header className=" flex justify-between items-center p-5 py-10 shadow-md fixed top-0 left-0 w-full z-50 ">
            {/* logo */}
        <div className="flex items-center gap-2">
        <FaGoogle className=" text-pink-500" size={30} />
        
        <h1 className=" text-pink-900">Golden Glow</h1>
        </div>

        
        {/* desktop */}
        <ul className="md:flex hidden gap-10">
        {displayNav}
        </ul>



        {/* mobile */}
        <ul className={`md:hidden flex flex-col gap-10 absolute top-full left-0 w-full p-5
         transform transition-transform duration-300 ease-in-out
         ${toggle ? "translate-x-0" : "translate-x-full "}
        `}>
        {displayNav}
        </ul>


        {/* other  */}
        <div className="flex gap-4 items-center cursor-pointer">
        <CiSearch size={28} />
        <div className=" relative">
        <BsCartPlus size={28}/> 
        <span className="absolute bottom-0 -right-2 w-4 h-4 rounded-full bg-red-500 text-white 
        text-xs flex justify-center items-center">
        0
        </span>
        </div>
        </div>

        <div className=" md:hidden cursor-pointer" onClick={handleToggle}>
        { toggle ? <IoMdClose size={25}/> : <FaBars size={25} />}
        
        </div>

    </header>
  )
}

export default Navbar