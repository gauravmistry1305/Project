import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="hero">
        <div className="hero-content">
          <h1>Explore India with Wanderlust</h1>
          <p>Your dream vacation in India is just a click away.</p>
          <br />
          <a href="#destinations" className="cta-button">
            Discover More
          </a>
        </div>
      </header>

      <section id="destinations" className="destinations">
        <h2>Popular Destinations in India</h2>
        <div className="destinations-list">
          <div className="destination-item">
            <img src="src/assets/img/tajmahal.jpg" alt="Taj Mahal" />
            <h3>Agra</h3>
            <p>
              Agra, famed for the majestic Taj Mahal, epitomizes Mughal grandeur
              and architectural finesse. It also houses the Agra Fort, a <b> UNESCO </b>
              World Heritage site, showcasing rich history and cultural
              significance. The city attracts millions annually, offering a
              glimpse into India&apos;s glorious past and enduring artistic legacy.
            </p>
          </div>
          <div className="destination-item">
            <img src="src/assets/img/goa.webp" alt="Goa Beach" />
            <h3>Goa Beaches</h3>
            <p>
              Goa&apos;s pristine beaches are renowned for their golden sands, lively
              beach shacks, and vibrant nightlife. They offer a perfect blend of
              relaxation and adventure with water sports and picturesque
              sunsets, making it a top destination for both domestic and
              international travelers seeking a tropical getaway.
            </p>
          </div>
          <div className="destination-item">
            <img src="src/assets/img/kerela.webp" alt="Kerala Backwaters" />
            <h3>Kerala Backwaters</h3>
            <p>
              Kerala&apos;s backwaters are a serene network of lakes, canals, and
              rivers lined with lush greenery and coconut palms. This
              picturesque landscape offers a tranquil escape where visitors can
              enjoy houseboat cruises, Ayurvedic treatments, and glimpses of
              rural Kerala life, making it a must-visit destination for nature
              lovers and those seeking relaxation.
            </p>
          </div>
        </div>
        <div className="section-footer">
          <a href="more-destinations.html" className="explore-button">
            Explore More Destinations
          </a>
        </div>
      </section>

      <section id="packages" className="packages">
        <h2>Best Travel Packages in India</h2>
        <div className="packages-list">
          <div className="package-item">
            <h3>Golden Triangle Tour</h3>
            <p>Explore Delhi, Agra, and Jaipur in this cultural journey.</p>
            <span>₹60,000</span>
          </div>
          <div className="package-item">
            <h3>Kerala Ayurveda Retreat</h3>
            <p>Experience rejuvenation with traditional Ayurvedic treatments.</p>
            <span>₹70,000</span>
          </div>
          <div className="package-item">
            <h3>Goa Adventure</h3>
            <p>Enjoy water sports and beach activities in Goa.</p>
            <span>₹40,000</span>
          </div>
        </div>
        <div className="section-footer">
          <a href="more-packages.html" className="explore-button">
            Explore More Packages
          </a>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonials-list">
          <div className="testimonial-item">
            <p>
              &quot;Visiting the Taj Mahal was a once-in-a-lifetime experience.
              Highly recommend Wanderlust!&quot;
            </p>
            <h4>John Doe</h4>
          </div>
          <div className="testimonial-item">
            <p>
              &quot;Kerala backwaters were so peaceful and serene. Thank you for the
              wonderful trip!&quot;
            </p>
            <h4>Jane Smith</h4>
          </div>
          <div className="testimonial-item">
            <p>
              &quot;Goa beaches exceeded my expectations. Wanderlust made everything
              so easy.&quot;
            </p>
            <h4>Emily Brown</h4>
          </div>
        </div>
        <div className="section-footer">
          <a href="more-reviews.html" className="explore-button">
            Explore More Reviews
          </a>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form id="contact-form">
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
