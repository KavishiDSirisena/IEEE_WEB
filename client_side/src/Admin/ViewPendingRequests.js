// ViewPendingRequests.js
import React, { useEffect, useState } from 'react';
import { getPendingRequests, updateStatus } from '../firebase/firebaseFunctions';
import '../styles/pendingrequest.css'; 

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

export default ViewPendingRequests;
