import React from 'react';
import './MembershipCard.css'; // Create a CSS file for styling
import Image from './images/ContactUs1.jpg'

const MembershipCard = () => {
  return (
    <div className="MembershipCard">
      <div className="MembershipCardBody">
        <input type="radio" name="collpase" id="first" defaultChecked/>
        <label htmlFor='first'> IEEE Membership</label>
          
        <p>
          Consider becoming a member of IEEE.As a member, you gain access to IEEE publications, 
          conferences, and networking opportunities. You can explore different membership levels 
          based on your professional status and interests.
          Professional membership is open to individuals who by experience give evidence of competence
          in an IEEE designated field. The designated fields are: Engineering, Computer Sciences and 
          Information Technology, Physical Sciences, Biological and Medical Sciences, Mathematics, 
          Technical Communications, Education, Management, and Law and Policy. <a href="https://ieeer8.org/" target='_blank'>Click here for more Information</a>
        </p>
      </div>
      <div className="MembershipCardBody">
        <input type="radio" name="collpase" id="second" />
        <label htmlFor='second'> IEEE Computer Society Membership</label>

        <p>
        Consider becoming a member of IEEE.As a member, you gain access to IEEE publications, 
          conferences, and networking opportunities. You can explore different membership levels 
          based on your professional status and interests.
          Professional membership is open to individuals who by experience give evidence of competence
           in an IEEE designated field. The designated fields are: Engineering, Computer Sciences and 
           Information Technology, Physical Sciences, Biological and Medical Sciences, Mathematics, 
           Technical Communications, Education, Management, and Law and Policy.  <a href="https://ieeer8.org/" target='_blank'>Click here for more Information</a>
        </p>
      </div>

      </div>
    
  );
};

export default MembershipCard;
