import { useEffect } from 'react';
import './AboutUsCounter.css'

const AboutUsCounter = () => {
        
    const updateCounter = () => {
        const count = document.querySelectorAll("#count");
        count.forEach(count => {count.innerText = "0";})
        count.forEach(count => {    
            const target = +count.getAttribute("data-target")
            let i = 0;
            if (count.innerText === target){
                return;
            } else if (count.innerText !== "0"){
                i = +count.innerText
            }
            const counter = setInterval(()=>{
                i++;
                count.innerText = i;
                
                if (i === target){
                    clearInterval(counter);
                }
            } , 50)
        })
    }

    useEffect(() => {
        updateCounter();
    })

    return ( 
        <div className="counters">

            <div>
                <h2>Active members</h2>
                <p id="count" data-target="70"></p>
            </div>
            <div>
                <h2>Active Projects</h2>
                <p id="count" data-target="60"></p>
            </div>
            <div>
                <h2>Active Projects</h2>
                <p id="count" data-target="50"></p>
            </div>
            <div>
                <h2>Active Projects</h2>
                <p id="count" data-target="100"></p>
            </div>

        </div>
     );
}
 
export default AboutUsCounter;