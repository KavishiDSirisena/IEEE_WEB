// AdminDashboard.js
import React, { useEffect, useState } from 'react';
import { getPendingRequests, updateStatus,writeEventData } from '../firebase/firebaseFunctions';
import '../styles/pendingrequest.css'; 
import '../styles/admindashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
      <div className="logo1">
            <img src="'ieeelogoo.png'" alt="Logo" />
            </div>
       
        <ul>
           
            <li onClick={() => handleTabClick('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>
            Dashboard
            </li>
            <li onClick={() => handleTabClick('users')} className={activeTab === 'users' ? 'active' : ''}>
            Pending Users
            </li>
            <li onClick={() => handleTabClick('products')} className={activeTab === 'products' ? 'active' : ''}>
            Add Events
            </li>
            <li onClick={() => handleTabClick('settings')} className={activeTab === 'settings' ? 'active' : ''}>
            Settings
            </li>
            <li onClick={() => handleTabClick('logout')} className={activeTab === 'logout' ? 'active' : ''}>
            Logout
            </li>
        </ul>
        </div>

      <div className="content">
        <div className="header">
          <h1 style={{marginLeft:'30px'}}>Welcome Admin</h1>
          <div className="notification-icon">🔔</div>
        </div>
        <div className="main-content">
          {activeTab === 'dashboard' && <UsersContent />}
          {activeTab === 'users' && <ViewPendingRequests />}
          {activeTab === 'products' && <EventForm />}
          {activeTab === 'settings' && <SettingsContent />}
          {activeTab === 'logout' && <LogoutContent />}
        </div>
      </div>
    </div>
  );
};

const ViewPendingRequests = () => {
    const [pendingRequests, setPendingRequests] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchPendingRequests = async () => {
        try {
          const requests = await getPendingRequests();
          setPendingRequests(requests);
        } catch (error) {
          console.error('Error fetching pending requests:', error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPendingRequests();
    }, []);
  
    const handleActivate = async (userId) => {
      try {
        // Update user status to 'activated'
        await updateStatus(userId, 'activated');
        // Fetch updated pending requests
        const updatedRequests = await getPendingRequests();
        setPendingRequests(updatedRequests);
      } catch (error) {
        console.error('Error activating user:', error.message);
      }
    };
  
    const handleDecline = async (userId) => {
      try {
        // Update user status to 'declined'
        await updateStatus(userId, 'declined');
        // Fetch updated pending requests
        const updatedRequests = await getPendingRequests();
        setPendingRequests(updatedRequests);
      } catch (error) {
        console.error('Error declining user:', error.message);
      }
    };
  
    return (
      <div className="container">
        {loading ? (
          <p>Loading pending requests...</p>
        ) : pendingRequests.length > 0 ? (
          <div className="shadow-box">
            <h2>Pending Requests</h2>
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  {/* Add other columns as needed */}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingRequests.map((user) => (
                  <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    {/* Add other columns as needed */}
                    <td>
                      <button onClick={() => handleActivate(user.userId)}>Activate</button>
                      <button onClick={() => handleDecline(user.userId)}>Decline</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No pending requests found.</p>
        )}
      </div>
    );
  }


const UsersContent = () => {
  return <div>Users Content</div>;
};



const EventForm = () => {
    const [eventType, setEventType] = useState('upcoming');
    const [eventDate, setEventDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [description, setDescription] = useState('');
    const [imageFiles, setImageFiles] = useState([]);
  
const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Perform actions with the form data
           writeEventData(eventType, eventDate, startTime, description, imageFiles);
    
          // Clear the form after successful submission
          setEventType('upcoming');
          setEventDate('');
          setStartTime('');
          setDescription('');
          setImageFiles([]);

          console.log('data stored successfully');
          alert('event data added successfully!');
        } catch (error) {
          console.error('Error submitting event data:', error.message);
        }
      };
    
      const handleImageChange = (e) => {
        // Handle file input changes and update the state with selected files
        const files = Array.from(e.target.files).slice(0, 4); // Limit to 4 files
        setImageFiles(files);
      };

  return (
    <div className='eventform'>
      <h3>Event Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventDate">Event Date</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />

        <label htmlFor="startTime">Event Starting Time</label>
        <input
          type="time"
          id="startTime"
          name="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />

        <label htmlFor="eventType">Event Type</label>
        <select
          style={{borderRadius:'35px',height:'40px',borderColor:'#FFA300'}}
          id="eventType"
          name="eventType"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          required
        >
          <option value="upcoming">Upcoming Event</option>
          <option value="past">Past Event</option>
        </select>

        <label htmlFor="description">Event Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter event description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="image">Upload Images (max 4)</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};




const SettingsContent = () => {
  return <div>Settings Content</div>;
};

const LogoutContent = () => {
  return <div>Logout Content</div>;
};

export default AdminDashboard;
