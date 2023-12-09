import '../styles/Navbar.css'

const Navbar = ({home , aboutus , communityDetails , events , contactUs , gallery , login}) => {
    return ( 
        <nav>
            <div className="nav-logo">
                <img src="/IEEElogo.png" alt="" />
            </div>
            <div className="nav-links">
                <div className="nav-item"><a href={ home }>Home</a></div>
                <div className="nav-item"><a href={ aboutus }>About Us</a></div>
                <div className="nav-item"><a href={ communityDetails }>Community Details</a></div>
                <div className="nav-item"><a href={ events }>Events</a></div>
                <div className="nav-item"><a href={ contactUs }>Contact Us</a></div>
                <div className="nav-item"><a href={ gallery }>Gallery</a></div>
                <div className="nav-item"><a href={ login }>Login / Signup</a></div>
            </div>
        </nav>
     );
}
 
export default Navbar;