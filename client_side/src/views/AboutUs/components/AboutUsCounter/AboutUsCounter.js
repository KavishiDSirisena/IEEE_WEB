import { useEffect } from 'react';
import './AboutUsCounter.css'

const AboutUsCounter = () => {
        
    const updateCounter = (element , interval) => {
        element.innerText = "0";
        
        const target = + element.getAttribute("data-target")
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
        updateCounter(document.getElementById('count1') , 40);
        updateCounter(document.getElementById('count2') , 45);
        updateCounter(document.getElementById('count3') , 50);
        updateCounter(document.getElementById('count4') , 25);
    })

    return ( 
        <div className="counters">

            <div>
                <h2>Active members</h2>
                <p id="count1" data-target="70"></p>
            </div>
            <div>
                <h2>Active Projects</h2>
                <p id="count2" data-target="60"></p>
            </div>
            <div>
                <h2>Active Projects</h2>
                <p id="count3" data-target="50"></p>
            </div>
            <div>
                <h2>Active Projects</h2>
                <p id="count4" data-target="100"></p>
            </div>

        </div>
     );
}
 
export default AboutUsCounter;