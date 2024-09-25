
import { useState } from "react"

import { motion } from "framer-motion"
import { NavbarMenu } from "../../MockData/Data.jsx"
import { MdComputer, MdMenu } from "react-icons/md"
import ResponsiveMenu from "./ResponsiveMenu.jsx"


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <nav>
            <div className="container flex justify-between items-center py-6">
                {/*Logo Section*/}
                <div className="text-2xl flex items-center gap-2 font-bold">
                    <MdComputer className="text-3xl text-secondary" />
                    <p>E-Tutor</p>
                </div>
                {/*Menu Section*/}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-6">
                        {
                            NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a 
                                            href={item.link} 
                                            className="inline-block text-gray-600 text-sm xl:text-base 
                                            py-1 px-2 xl:p-3 hover:text-secondary transition-all duration-300 font-semibold"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/*CTA Button Section*/}
                <div className="hidden lg:block space-x-6">
                    <button className="font-semibold">Sign In</button>
                    <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">Register</button>
                </div>
                {/*Mobile Hamburger Menu*/}
                <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <MdMenu className="text-4xl"/>
                </div>
            </div>
        </nav>
        {/*Mobile Sidebar Section*/}
        <ResponsiveMenu isOpen={isOpen}/>
    </>
  )
}

export default Navbar
