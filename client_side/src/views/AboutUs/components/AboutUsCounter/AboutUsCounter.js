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
            i = i + 2;
            element.innerText = i;
            
            if (i == target){
                clearInterval(counter);
            }
        } , interval)
    }

    useEffect(() => {
        // document.getElementById('count1').innerText = "0";
        // document.getElementById('count2').innerText = "0";
        // document.getElementById('count3').innerText = "0";
        // document.getElementById('count4').innerText = "0";
        // setTimeout(() => {
        //     updateCounter(document.getElementById('count1') , .2 , 1500);
        //     updateCounter(document.getElementById('count2') , 55 , 100);
        //     updateCounter(document.getElementById('count3') , 8 , 650);
        //     updateCounter(document.getElementById('count4') , 50 , 40);
        // }, 1500);
        updateCounter(document.getElementById('count1') , .2 , 1500);
        updateCounter(document.getElementById('count2') , 55 , 100);
        updateCounter(document.getElementById('count3') , 8 , 650);
        updateCounter(document.getElementById('count4') , 50 , 40);
    })

    return ( 
        <div className="counters">

            <div>
                <h3>Active members</h3>
                <p id="count1"></p>
            </div>
            <div>
                <h3>Instagram Followers</h3>
                <p id="count3"></p>
            </div>
            <div>
                <h3>Active Projects</h3>
                <p id="count2"></p>
            </div>
            <div>
                <h3>Active Projects</h3>
                <p id="count4"></p>
            </div>

        </div>
     );
}
 
export default AboutUsCounter;