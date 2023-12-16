import "./ContactUs.css"
import ContactForm from "./components/ContactForm/ContactForm";
import MembershipCard from "./components/MembershipCard/MembershipCard";
import ContactUsHeader from './components/ContactUsHeader/ContactUsHeader'

const ContactUs = () => {
    return ( 
        <div className="ContactUs">
            <ContactUsHeader />

            <MembershipCard/>

            <ContactForm/>
        </div>
     );
}
 
export default ContactUs;