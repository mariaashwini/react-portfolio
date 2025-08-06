import { NavLink, Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaComments,
  FaRegFileAlt,
} from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";

const navLinkStyles = ({ isActive }) =>
  isActive
    ? "flex items-center gap-2 border-b border-[#e8dfec] text-[#ec1839] px-[15px] py-[5px]"
    :"flex items-center gap-2 border-b border-[#e8dfec] text-[#302e4d] hover:text-[#ec1839] px-[15px] py-[5px] ";


const Sidebar = () => {
  return (
    <aside className="w-[270px] bg-sidebar h-screen p-6 fixed left-0 top-0">
      <div className="absolute top-[50px] text-[30px] left-[50px] capitalize">
<Link
  to="/home"
    className="text-[#302e4d] font-bold px-5 py-[15px] text-[30px] tracking-[5px] relative before:content-[''] before:absolute before:w-5 before:h-5 before:border-b-[5px] before:border-l-[5px] before:border-[#ec1839] before:bottom-0 before:left-0 after:content-[''] after:absolute after:w-5 after:h-5 after:border-t-[5px] after:border-r-[5px] after:border-[#ec1839] after:top-0 after:right-0"
  >
    <span className="" style={{ fontFamily: "'Clicker Script', cursive", fontSize: '40px' }}>M</span>aria
  </Link>
</div>
   
      <nav className="space-y-6 text-heading text-[16px] w-[150px] font-semibold w-[150px] mt-[150px] mx-auto">
        <NavLink to="/home"  className={navLinkStyles}> 
          <FaHome /> Home
        </NavLink>
         <NavLink to="/tech-stack" className={navLinkStyles}> 
          <MdDeveloperBoard /> Tech Stack
        </NavLink>
         <NavLink to="/projects" className={navLinkStyles}> 
           <FaBriefcase /> Projects
        </NavLink> 
        <NavLink to="/about" className={navLinkStyles}> 
         <FaUser /> About
        </NavLink>
         <NavLink to="/resume" className={navLinkStyles}> 
         <FaRegFileAlt /> Resume
        </NavLink>
          <NavLink to="/contact" className={navLinkStyles}> 
         <FaComments /> Contact
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
