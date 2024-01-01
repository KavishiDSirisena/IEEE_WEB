import "./ContactUs.css"
import MembershipCard from "./components/MembershipCard/MembershipCard";
import ContactUsHeader from './components/ContactUsHeader/ContactUsHeader'
import ContactUsForm from "./components/ContactUsForm/ContactUsForm";
import Footer from "../Footer/Footer";

const ContactUs = () => {
    return ( 
        <div className="ContactUs">
            <ContactUsHeader />

            <MembershipCard/>

            <ContactUsForm />

            <Footer />
        </div>
     );
}
 
export default ContactUs;