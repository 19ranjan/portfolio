import { NavLink } from "react-router-dom";
 
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='bg-white '>
      <div className=" header bg-white">
      <NavLink to='/'>
        <b> HOME</b>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium '>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;