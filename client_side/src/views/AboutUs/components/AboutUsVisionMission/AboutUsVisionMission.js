import './AboutUsVisionMission.css'
import Vector from './images/Vector.png'
import Vector1 from './images/Vector-1.png'
import Vector2 from './images/Vector-2.png'

const AboutUsVisionMission = () => {
    return ( 
        <div className="AboutUscontainer">

            <div className="mission">
                <h1>Our <br /> <span>Mission</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis necessitatibus eius neque vitae officia, esse cumque maxime, eaque dolorem voluptas ut quidem inventore saepe illo quasi unde maiores eligendi. Odit voluptatibus sapiente delectus odio quod tempore expedita a nulla debitis porro. Ex odit possimus iure modi consequuntur velit laboriosam, porro esse enim ad maiores totam repellendus pariatur ipsam! Cumque quas maxime corrupti enim incidunt laborum atque nostrum, consequatur cum sint ipsam consequuntur veritatis voluptates voluptas?</p>
                <img src={ Vector } alt="" />
            </div>

            <div className="vision">
                <img src={ Vector1 } alt="" />
                <h1>Our <br /> <span>Vision</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis necessitatibus eius neque vitae officia, esse cumque maxime, eaque dolorem voluptas ut quidem inventore saepe illo quasi unde maiores eligendi. Odit voluptatibus sapiente delectus odio quod tempore expedita a nulla debitis porro. Ex odit possimus iure modi consequuntur velit laboriosam, porro esse enim ad maiores totam repellendus pariatur ipsam! Cumque quas maxime corrupti enim incidunt laborum atque nostrum, consequatur cum sint ipsam consequuntur veritatis voluptates voluptas?</p>
            </div>

            <div className="strategy">
                <img src={ Vector2 } alt="" />
                <h1>Our <br /> <span>Strategy</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis necessitatibus eius neque vitae officia, esse cumque maxime, eaque dolorem voluptas ut quidem inventore saepe illo quasi unde maiores eligendi. Odit voluptatibus sapiente delectus odio quod tempore expedita a nulla debitis porro. Ex odit possimus iure modi consequuntur velit laboriosam, porro esse enim ad maiores totam repellendus pariatur ipsam! Cumque quas maxime corrupti enim incidunt laborum atque nostrum, consequatur cum sint ipsam consequuntur veritatis voluptates voluptas?</p>
            </div>

        </div>
     );
}
 
export default AboutUsVisionMission;