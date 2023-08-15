import { navigationLinks } from "../util/constants"
import { styles } from "../util/style"
import { logo, menu, close } from '../assets'
import { useState } from "react"

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const [active, setActive] = useState('home')

  const toggleHandler = () => setToggleNav(prev => !prev)
  const activeHandler = id => setActive(id)

  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      <img src={logo} alt="logo" className="w-[130px] h-[35px] cursor-pointer" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, idx) => (
          <li key={nav.id} className={`${idx === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'} ${active === nav.id ? 'text-white' : 'text-lighWhite'} font-montserrat font-normal cursor-pointer text-[16px] text-white hover:text-white transition-all duration-500`} onClick={() => activeHandler(nav.id)}>{nav.title}</li>
        ))}
      </ul>

      <div className={'sm:hidden flex flex-1 justify-end items-center'}>
        <img src={toggleNav ? close : menu} alt="nav" className="w-[30px] h-[30px] object-contain" onClick={toggleHandler} />

        <div className={`${!toggleNav ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient`}>
          <ul className="list-none flex justify-center items-center flex-1 flex-col xs:flex-row">
            {navigationLinks.map((nav, idx) => (
              <li key={nav.id} className={`${idx === navigationLinks.length - 1 ? 'xs:mr-0' : 'xs:mr-10'} ${active === nav.id ? 'text-white' : 'text-lighWhite'} font-montserrat font-normal cursor-pointer text-[16px] text-white hover:text-white transition-all duration-500 my-3 xs:my-0`} onClick={() => activeHandler(nav.id)}>{nav.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar