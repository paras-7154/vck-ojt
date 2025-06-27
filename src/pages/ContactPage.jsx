import Header from "../components/Header/Header";
import "../styles/pages.css";
const ContactPage = () => {
  return (
    <div>
      <Header />
      <div class="main-layout">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have questions about
          admissions, programs, or campus life, our team is here to help.
        </p>
        <h2>General Enquiries </h2>
        <p>
          Vivekanand College Main Campus <br />
          [Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
          <br /> India
        </p>
        Phone: +91 12345 67890 <br />
        Email: info@vivekanandcollege.edu <br />
        Office Hours:Monday - Friday, 9:00 AM - 5:00 PM IST
        <h2>Admissions Office </h2>
        <p>
          For all admission-related queries regarding undergraduate or
          postgraduate programs: <br />
          Phone: +91 98765 43210 <br />
          Email: admissions@vivekanandcollege.edu
          <h2>Student Support Services </h2>
          For current student support, academic advising, or general assistance:{" "}
          <br />
          Phone: +91 87654 32109 <br />
          Email: studentsupport@vivekanandcollege.edu
        </p>
        <h2>Find Us on the Map</h2>
        <a
          href="https://maps.google.com/?q=Vivekanand+College"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
        <h2>Send Us a Message </h2> [A contact form with fields for Name, Email,
        Subject, Message can be added here.]
      </div>
    </div>
  );
};

export default ContactPage;
