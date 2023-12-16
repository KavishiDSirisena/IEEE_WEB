import { useEffect } from 'react';
import './AboutUsCounter.css'

const AboutUsCounter = () => {
        
    const updateCounter = (element , interval , target) => {
        element.innerText = "0";
        let i = 0;
        if (element.innerText == target){
            return;
        } else if (element.innerText != "0"){
            i = +element.innerText
        }
        const counter = setInterval(()=>{
            i++;
            element.innerText = i;
            
            if (i == target){
                clearInterval(counter);
            }
        } , interval)
    }

    useEffect(() => {
        updateCounter(document.getElementById('count1') , 37 , 70);
        updateCounter(document.getElementById('count2') , 45 , 60);
        updateCounter(document.getElementById('count3') , 50 , 50);
        updateCounter(document.getElementById('count4') , 25 , 100);
    })

    return ( 
        <div className="counters">

            <div>
                <h3>Active members</h3>
                <p id="count1"></p>
            </div>
            <div>
                <h3>Active Projects</h3>
                <p id="count2"></p>
            </div>
            <div>
                <h3>Active Projects</h3>
                <p id="count3"></p>
            </div>
            <div>
                <h3>Active Projects</h3>
                <p id="count4"></p>
            </div>

        </div>
     );
}
 
export default AboutUsCounter;