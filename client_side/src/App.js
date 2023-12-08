// App.js
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './firebase/AuthContext';
import Registration from './views/registration';
import Login from './views/login';
import UserProfile from './views/profile';
import ViewPendingRequests from './Admin/ViewPendingRequests';
import AdminDashboard from './Admin/admindashboard';
import EventCards from './views/eventpage';
import AboutUs from './views/AboutUs/AboutUs';
// import PrivateRoute from './firebase/privateRoute';

const App = () => {
  const { currentUser } = useAuth();
  return (
    <Router>
      
        <Routes>
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/register" element={<Registration />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/eventpage" element={<EventCards />} />
          <Route path="/user/aboutus" element={<AboutUs />} />
          {/*admin Routes*/}
          <Route path="/admin/pendingrequests" element={<ViewPendingRequests />} />
          <Route path="/admin/admindashboard" element={<AdminDashboard  />} />
        </Routes>
     
    </Router>
  );
};

export default App;
