// firebase.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,sendEmailVerification as sendVerificationEmail, } from 'firebase/auth';
import { getDatabase, set, get ,ref, update ,push,query,orderByChild  } from 'firebase/database';
import { getStorage, ref as storageref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from '../firebase/firebaseconfig';

export const auth = getAuth(app);
export const database = getDatabase(app);

export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      if (user) {
        // Fetch user data including status
        const userData = await getUserData(user.uid);
        return { user, userData };
      }
  
      return null;
    } catch (error) {
      throw error;
    }
  };

export const writeUserData = (userId, name, email, password, status,AdminStatus) => {
    const userRef = ref(database, 'users/' + userId);
    set(userRef, {
      username: name,
      email: email,
      password: password,
      status: status || 'pending', // Default to 'pending' if status is not provided
      AdminStatus: AdminStatus || 'notAnAdmin',
    })
      .then(() => console.log('Data written successfully'))
      .catch((error) => console.error('Error writing data:', error));
  };




export const getUserData = async (userId) => {
    const userRef = ref(database, `users/${userId}`);
    const snapshot = await get(userRef);
    return snapshot.val();
  };

export const logoutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };



export const sendEmailVerification = async (user) => {
    try {
      await sendVerificationEmail(user);
      console.log('Verification email sent successfully.');
    } catch (error) {
      console.error('Error sending verification email:', error.message);
      throw error;
    }
  };  

//display events logic

export const getEventData = async (eventId) => {
    try {
      const eventRef = ref(database, `events/${eventId}`);
      const snapshot = await get(eventRef);
      
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('Event not found.');
        return null;
      }
    } catch (error) {
      console.error('Error getting event data:', error.message);
      throw error;
    }
  };

export const getAllEventIds = async () => {
    const database = getDatabase();
    const eventsRef = ref(database, 'events');
    const eventsQuery = query(eventsRef, orderByChild('eventDate'));
  
    try {
      const eventsSnapshot = await get(eventsQuery);
  
      if (eventsSnapshot.exists()) {
        // Extract event IDs from the snapshot
        const eventIds = [];
        eventsSnapshot.forEach((eventSnapshot) => {
          eventIds.push(eventSnapshot.key);
        });
  
        return eventIds;
      }
  
      return [];
    } catch (error) {
      console.error('Error getting event IDs:', error.message);
      throw error;
    }
  };  


//admin part logics

export const getPendingRequests = async () => {
  try {
    const usersRef = ref(database, 'users');
    const snapshot = await get(usersRef);

    if (snapshot.exists()) {
      // Iterate through the users and filter the ones with 'pending' status
      const users = [];
      snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        if (userData.status === 'pending') {
          users.push({
            userId: childSnapshot.key,
            ...userData,
          });
        }
      });

      return users;
    } else {
      console.log('No pending requests found.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching pending requests:', error.message);
    throw error;
  }
};

export const updateStatus = async (userId, status) => {
    try {
      const userRef = ref(database, `users/${userId}`);
      await update(userRef, { status });
      console.log(`User ${userId} status updated to ${status}`);
    } catch (error) {
      console.error('Error updating user status:', error.message);
      throw error;
    }
  };


export const writeEventData = async (eventType, eventDate, startTime, description, imageFiles) => {
    try {
      const newEventRef = push(ref(database, 'events'));
      const newEventKey = newEventRef.key;
  
      const imageUrls = await Promise.all(
        imageFiles.map(async (imageFile, index) => {
          const storageRef = storageref(getStorage(), `events/${newEventKey}/image_${index + 1}`);
          const snapshot = await uploadBytes(storageRef, imageFile);
  
          const downloadURL = await getDownloadURL(snapshot.ref);
          return downloadURL;
        })
      );
  
      await set(ref(database, `events/${newEventKey}`), {
        eventType,
        eventDate,
        startTime,
        description,
        imageUrls,
      });
  
      console.log('Event data written successfully');
    } catch (error) {
      console.error('Error writing event data:', error.message);
      throw error;
    }
  };