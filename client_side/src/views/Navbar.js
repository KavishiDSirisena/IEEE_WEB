import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = ({home , aboutus , communityDetails , events , contactUs , gallery , login}) => {
    
    const navBarToggle = () => {

        const SideBarIcon = document.querySelector(".side-bar-icon");
        SideBarIcon.classList.contains("clicked") ? SideBarIcon.classList.remove("clicked") : SideBarIcon.classList.add("clicked");
        
        const NavBar = document.getElementById("NavBar");
        NavBar.classList.contains("opened") ? NavBar.classList.remove("opened") : NavBar.classList.add("opened");

    }

    const GoToPageTop = () => {
        window.scrollTo(0, 0);
    }

    return ( 
        <nav id='NavBar'>
            <div className="nav-logo" onClick={GoToPageTop}>
                <NavLink to={ home }><img src="/SLIIT-IEEE-CS-Logo.png" alt="" /></NavLink>
            </div>
            <div className="nav-links">
                <div className="nav-item" onClick={GoToPageTop}><NavLink to={ home }>Home</NavLink></div>
                <div className="nav-item" onClick={GoToPageTop}><NavLink to={ communityDetails }>Committee</NavLink></div>
                <div className="nav-item" onClick={GoToPageTop}><NavLink to={ events }>Events</NavLink></div>
                <div className="nav-item" onClick={GoToPageTop}><NavLink to={ gallery }>Gallery</NavLink></div>
                <div className="nav-item" onClick={GoToPageTop}><NavLink to={ aboutus }>About Us</NavLink></div>
                <div className="nav-item" onClick={GoToPageTop}><NavLink to={ contactUs }>Contact Us</NavLink></div>
                {/* <div className="nav-item"><NavLink to={ login }>Login / Signup</a></div> */}
            </div>
            <div className="side-bar-icon" onClick={navBarToggle}>
                <span className='side-bar-icon-span-1'></span>
                <span className='side-bar-icon-span-2'></span>
                <span className='side-bar-icon-span-3'></span>
            </div>
            <div className="side-bar">
                <div className="nav-item" onClick={() => {navBarToggle(); GoToPageTop()}}><NavLink to={ home }>Home</NavLink></div>
                <div className="nav-item" onClick={() => {navBarToggle(); GoToPageTop()}}><NavLink to={ communityDetails }>Committee</NavLink></div>
                <div className="nav-item" onClick={() => {navBarToggle(); GoToPageTop()}}><NavLink to={ events }>Events</NavLink></div>
                <div className="nav-item" onClick={() => {navBarToggle(); GoToPageTop()}}><NavLink to={ gallery }>Gallery</NavLink></div>
                <div className="nav-item" onClick={() => {navBarToggle(); GoToPageTop()}}><NavLink to={ aboutus }>About Us</NavLink></div>
                <div className="nav-item" onClick={() => {navBarToggle(); GoToPageTop()}}><NavLink to={ contactUs }>Contact Us</NavLink></div>
                {/* <div className="nav-item"><a href={ login }>Login / Signup</a></div> */}
            </div>
        </nav>
     );
}
 
export default Navbar;