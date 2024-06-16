import "./ContactMe.css";
import myImage6 from "../pics/img22.jpg";


function ContactForm() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-text">
        <h1>Contact Us</h1>
          <p>
            We would love to hear from you! For more details about our services and
            personalized travel experiences, you can visit us at our office. We are always
            ready to assist you with your travel plans. Alternatively, you can reach
            out to us by calling our telephone number. Whether you
            have questions, need assistance with booking, or want to learn more
            about our guided tours, we are here to help you every step of the way.
          </p>
          <p>Address: Nicolae Balcescu Street, no. 12, Sibiu</p>
          <p>Phone Number: +40785 858 858</p>
          <p>Email: contact-us@ukiyo.com</p>
        </div>
        <div className="contact-photo">
          <img src={myImage6} className="location-photo" alt="Our Location" />
        </div>
      </div>
      <br />
      <div className="maps-container">
        <iframe
          className="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.821423311245!2d24.14513019082596!3d45.79480523676389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c67904f965a5d%3A0xe689a32b655096d6!2sStrada%20Nicolae%20B%C4%83lcescu%2012%2C%20Sibiu%20557260!5e0!3m2!1sen!2sro!4v1717254047336!5m2!1sen!2sro"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default ContactForm;