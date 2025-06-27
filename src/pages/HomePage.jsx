import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "../styles/Pages.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div class="layout">
        <div class="main-layout">
          {/* This is Header */}
          <div className="hero-banner">
            <div className="banner-img">
              <img src="/images/college-banner.png" />
            </div>
            <div class="banner-section">
              <h1>Welcome to Vivekanand College!</h1>
              <p>Your journey to excellence starts here.</p>
              <div class="call-to-action">
                <a class="btn" href="/admission" data-discover="true">
                  Apply Now!
                </a>
              </div>
            </div>
          </div>

          {/* below content is body  */}
          <p>
            <strong>Vivekanand College</strong> is a premier educational
            institution dedicated to fostering academic excellence, innovation,
            and holistic development. Established in <em>1980</em>, we have
            proudly served generations of students, empowering them to achieve
            their full potential.
          </p>
          <p>
            At Vivekanand College, we believe in a vibrant learning environment
            that extends beyond textbooks. Our state-of-the-art facilities,
            experienced faculty, and diverse student community create a unique
            ecosystem where curiosity thrives and future leaders are shaped.
          </p>
          <h2>Why Choose Vivekanand College?</h2>
          <ul>
            <li>
              <strong>Legacy of Excellence:</strong> Decades of commitment to
              quality education.
            </li>
            <li>
              <strong>Experienced Faculty:</strong> Learn from renowned experts
              and passionate educators.
            </li>
            <li>
              <strong>Modern Facilities:</strong> Well-equipped labs, expansive
              library, and comfortable campus.
            </li>
            <li>
              <strong>Holistic Development:</strong> Focus on co-curricular
              activities, sports, and community service.
            </li>
            <li>
              <strong>Strong Placements:</strong> Excellent career opportunities
              with leading companies.
            </li>
          </ul>
          <h2>Campus Life & Facilities</h2>

          {/* This is Image  */}

          <div class="image-gallery">
            <img
              alt="Students studying in library"
              src="/images/campus.jpg"
            />
            <img
              alt="Students on campus ground"
              src="/images/students.jpeg"
            />
          </div>

          <p>
            Explore our vibrant campus and state-of-the-art facilities designed
            to enhance your learning experience and personal growth.
          </p>
          <div class="call-to-action">
            <p>Ready to explore our courses?</p>

            {/* This is button */}

            <a class="btn" href="/Courses" data-discover="true">
              Explore Courses
            </a>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
