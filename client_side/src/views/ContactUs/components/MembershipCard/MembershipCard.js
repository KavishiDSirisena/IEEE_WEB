import React from 'react';
import './MembershipCard.css'; // Create a CSS file for styling
import Image from './images/ContactUs1.jpg'

const MembershipCard = () => {
  return (
    <div className="MembershipCard">
      
      <img src={Image} alt="" />
      <div className="MembershipCardBody">
        <a href='https://ieeer8.org/'> <p>
            <strong>IEEE Membership</strong>
          </p> </a>
          
          <p className='textAlignJustify'>
            Consider becoming a member of IEEE.As a member, you gain access to IEEE publications, 
            conferences, and networking opportunities. You can explore different membership levels 
            based on your professional status and interests.
            Professional membership is open to individuals who by experience give evidence of competence
            in an IEEE designated field. The designated fields are: Engineering, Computer Sciences and 
            Information Technology, Physical Sciences, Biological and Medical Sciences, Mathematics, 
            Technical Communications, Education, Management, and Law and Policy.  
          </p>
      </div>
      <div className="MembershipCardBody">
        <img src="" alt="" />
        <a href='https://ieeer8.org/'>
        <p className='textAlignLeft'>
          <strong>IEEE Computer Society Membership</strong>
        </p>
        </a>

        <p className='textAlignJustify'>
        Consider becoming a member of IEEE.As a member, you gain access to IEEE publications, 
          conferences, and networking opportunities. You can explore different membership levels 
          based on your professional status and interests.
          Professional membership is open to individuals who by experience give evidence of competence
           in an IEEE designated field. The designated fields are: Engineering, Computer Sciences and 
           Information Technology, Physical Sciences, Biological and Medical Sciences, Mathematics, 
           Technical Communications, Education, Management, and Law and Policy.  
        </p>
      </div>
      <img src={Image} alt="" />

      </div>
    
  );
};

export default MembershipCard;
