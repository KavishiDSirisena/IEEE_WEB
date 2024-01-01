// App.js
import './App.css'
import React, { useEffect , Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './firebase/AuthContext';
import Registration from './views/registration';
import Login from './views/login';
import UserProfile from './views/profile';
import ViewPendingRequests from './Admin/ViewPendingRequests';
import AdminDashboard from './Admin/admindashboard';
import EventCards from './views/eventpage';
import AboutUs from './views/AboutUs/AboutUs';
import Navbar from './views/Navbar';
import CommunityDetails from './views/communityDetails';
import ContactUs from './views/ContactUs/ContactUs';
import Home from './views/home/Home';
import Events from './views/Events/EventHome/Events';
import News from './views/Events/News/News';
import PastEvents from './views/Events/PastEvent/PastEvent';
import UpEvents from './views/Events/UpcomingEvent/UpEvent';
import Home2 from './views/NewHome/Home2'
import Snowfall from './views/SnowFall';
import Gallery from './views/Gallery/Gallery'
// import PrivateRoute from './firebase/privateRoute';

const App = () => {

  // window.addEventListener("load", () => {
  //   document.querySelector(".loader").classList.add("loaderVisbility")
  // })


  const { currentUser } = useAuth();
  return (
    <Router>
      <div className='scrollWatcher'></div>

      {/* <div class="loader">
        <svg width="500" height="700" viewBox="0 0 100 500">
            <text x="50%" y="50%" dy=".32em" text-anchor="middle" class="text-body">
                IEEE Computer Society of SLIIT
            </text>
        </svg>
      </div> */}

      {/* <Snowfall /> */}
      <Navbar home = "/" aboutus = "/user/aboutus" communityDetails = "/user/communityDetails" events = "/user/events" contactUs = "/user/contactus" gallery = "/user/gallery" login = "/user/login"/>
      <Routes>
        <Route path="/oldhome" element={<Home />} />
        <Route path="/" element={<Home2 />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/gallery" element={<Gallery />} />
        <Route path="/user/register" element={<Registration />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/eventpage" element={<EventCards />} />
        <Route path="/user/aboutus" element={<AboutUs />} />
        <Route path="/user/contactus" element={<ContactUs />} />
        <Route path="/user/events" element={<Events />} />
        <Route path="/user/news" element={<News />} />
        <Route path="/user/pastevents" element={<PastEvents />} />
        <Route path="/user/upevents" element={<UpEvents />} />
        <Route path="/user/communityDetails" element={<CommunityDetails />} />
        {/*admin Routes*/}
        <Route path="/admin/pendingrequests" element={<ViewPendingRequests />} />
        <Route path="/admin/admindashboard" element={<AdminDashboard  />} />
      </Routes>
    </Router>
  );
};

export default App;
