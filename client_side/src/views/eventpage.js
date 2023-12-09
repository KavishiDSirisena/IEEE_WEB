import React, { useEffect, useState } from 'react';
import { getEventData, getAllEventIds } from '../firebase/firebaseFunctions'; // Replace with the actual path
import '../styles/eventpage.css';



const EventPage = () => {
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      // Assuming you have a function to get all event IDs, replace with your own logic
      const eventIds = await getAllEventIds();

      const eventsData = await Promise.all(
        eventIds.map(async (eventId) => {
          const eventData = await getEventData(eventId);
          return { id: eventId, ...eventData };
        })
      );

      const currentDate = new Date();

      const pastEventsData = eventsData.filter((event) => {
        const eventDate = new Date(event.eventDate);
        return eventDate < currentDate;
      });

      const upcomingEventsData = eventsData.filter((event) => {
        const eventDate = new Date(event.eventDate);
        return eventDate >= currentDate;
      });

      setPastEvents(pastEventsData);
      setUpcomingEvents(upcomingEventsData);
    };

    loadEvents();
  }, []);

  return (
    <div className="event-page">
      <section>
        <h2>Past Events</h2>
        <div className="event-cards">
          {pastEvents.length > 0 ? (
            pastEvents.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <p>No past events</p>
          )}
        </div>
      </section>

      <section>
        <h2>Upcoming Events</h2>
        <div className="event-cards">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <p>No upcoming events</p>
          )}
        </div>
      </section>
    </div>
  );
};



const EventCard = ({ event }) => {
    const { eventType, eventDate, startTime, description, imageUrls } = event;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const slideshowInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 2000);
  
      return () => clearInterval(slideshowInterval);
    }, [imageUrls]);
  
    return (
      <div className="event-card">
        <h3>Event name </h3>
        <div className="image-slider">
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              style={{ display: index === currentImageIndex ? 'block' : 'none', width: '100%' }}
            />
          ))}
        </div>
        <p>Date: {eventDate}</p>
        <p>Time: {startTime}</p>
        <p>Description: {description}</p>
       
      </div>
    );
  };
  
export default EventPage;
