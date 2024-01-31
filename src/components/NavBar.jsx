import { NavLink } from 'react-router-dom'
import { logo } from "../assets/images";

function NavBar() {
  return (
    <header className="header">
        {/* <NavLink to="/" className="w-18 h-18 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">AH</p>
        </NavLink> */}
         <NavLink to='/'>
                <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
         </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={ ({isActive}) => isActive? "text-blue-500":"text-black"}>
                About
            </NavLink>
        </nav>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/projects" className={ ({isActive}) => isActive? "text-blue-500":"text-black"}>
            Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default NavBar