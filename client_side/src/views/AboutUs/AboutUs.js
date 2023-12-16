import './AboutUs.css'

import AboutUsCounter from './components/AboutUsCounter/AboutUsCounter'
import AboutUsHeader from './components/AboutUsHeader/AboutUsHeader'
import AboutUsGridContainer from './components/AboutUsGridContainer/AboutUsGridContainer'
import AboutUsVisionMission from './components/AboutUsVisionMission/AboutUsVisionMission'

const AboutUs = () => {

    return ( 
        <div className='AboutUs'>
            <AboutUsHeader/>
            <AboutUsCounter />
            <AboutUsGridContainer/>
            <AboutUsVisionMission/>
        </div >
     );
}
 
export default AboutUs;