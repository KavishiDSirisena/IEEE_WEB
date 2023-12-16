import '../styles/Navbar.css'

const Navbar = ({home , aboutus , communityDetails , events , contactUs , gallery , login}) => {

    const navBarToggle = (e) => {
        
        const NavbarToggle1 = document.getElementById("NavBarToggle1");
        const NavbarToggle2 = document.getElementById("NavBarToggle2");

        if(NavbarToggle1.style.display === ""){
            NavbarToggle1.style.display = "none";
        } else if (NavbarToggle1.style.display === "none"){
            NavbarToggle1.style.display = "block"
        } else if (NavbarToggle1.style.display === "block"){
            NavbarToggle1.style.display = "none"
        }
        NavbarToggle2.style.display = NavbarToggle2.style.display === "" ? "block" : ""

        const SideBar = document.getElementById("sideBar");

        SideBar.style.background = SideBar.style.background === "white" ? "" : "white"
        SideBar.style.display = SideBar.style.display === "flex" ? "" : "flex"

    }

    return ( 
        <nav>
            <div className="nav-logo">
                <img src="/SLIIT-IEEE-CS-Logo.png" alt="" />
            </div>
            <div className="nav-links">
                <div className="nav-item"><a href={ home }>Home</a></div>
                <div className="nav-item" id='aboutus'><a href={ aboutus }>About Us</a></div>
                <div className="nav-item"><a href={ communityDetails }>Committee</a></div>
                <div className="nav-item"><a href={ events }>Events</a></div>
                <div className="nav-item"><a href={ contactUs }>Contact Us</a></div>
                <div className="nav-item"><a href={ gallery }>Gallery</a></div>
                {/* <div className="nav-item"><a href={ login }>Login / Signup</a></div> */}
            </div>
            <div className="side-bar-img" onClick={navBarToggle}>
                <img src="/navbar-toggle-icon.png" id='NavBarToggle1' alt="" />
                <img src="/navbar-toggle-icon2.png" id='NavBarToggle2' alt="" />
            </div>
            <div className="side-bar" id="sideBar">
                <div className="nav-item"><a href={ home }>Home</a></div>
                <div className="nav-item" id='aboutus'><a href={ aboutus }>About Us</a></div>
                <div className="nav-item"><a href={ communityDetails }>Committee</a></div>
                <div className="nav-item"><a href={ events }>Events</a></div>
                <div className="nav-item"><a href={ contactUs }>Contact Us</a></div>
                <div className="nav-item"><a href={ gallery }>Gallery</a></div>
                {/* <div className="nav-item"><a href={ login }>Login / Signup</a></div> */}
            </div>
        </nav>
     );
}
 
export default Navbar;