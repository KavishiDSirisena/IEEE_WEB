import React, { useState } from 'react';
import Slider from 'react-slick';
import './home.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../Footer/Footer';

function Home() {
  const eventSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    afterChange: (currentSlide) => setActiveSlide(currentSlide),
  };

  const eventTexts = [
    {
      title: 'Event 1 Title',
      description: 'Description for Event 1',
    },
    {
      title: 'Event 2 Title',
      description: 'Description for Event 2',
    },
    {
      title: 'Event 3 Title',
      description: 'Description for Event 3',
    },
    // Add more objects for additional events
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
    <div>
      <div>
        <img
          className="image-container"
          src="./images/SLIIT-malabe.jpg"
          alt="Description of the image"
        />
      </div>

      <div className="text-container">
        <center>
          <h2 className="title">IEEE Computer Society of SLIIT</h2>
        </center>
        <p>
          Embrace the opportunity to Join our community and make your mark in
          Computer Science with the Institute of Electrical and Electronics
          Engineers (IEEE) Computer Society of Sri Lanka Institute of Information
          Technology (SLIIT)
        </p>
      </div>

      <div className="about">
        <h2>Who are we? </h2>
        <p className="aboutpara">
          We are the IEEE Computer Society at SLIIT, a community passionate
          about computer science. Our mission is to promote innovation,
          networking, and knowledge sharing. We are here to give you the
          opportunity and make a difference as a volunteer in the world of tech.
        </p>
      </div>

      <div className="eventslide">
        <h2>Events</h2>
        <Slider {...eventSliderSettings}>
          {eventTexts.map((event, index) => (
            <div key={index} className="event-details-container">
              <img
                className="image-container1"
                src={`./images/Picture${index + 1}.png`}
                alt={`Event ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="event-details">
        <h3>{eventTexts[activeSlide].title}</h3>
        <p>{eventTexts[activeSlide].description}</p>
      </div>
     
    </div>
     <div className="review-form">

     <h2>Leave a Review</h2>
     <form >
       <label htmlFor="name">Name:</label>
       <input
         type="text"
         id="name"
         name="name"
         required
       />

       <label htmlFor="comment">Comment:</label>
       <textarea
         id="comment"
         name="comment"
         required
       />

       <button type="submit">Submit Review</button>
     </form>
   </div>
   <Footer />
   </div>
    
  );
}

export default Home;
