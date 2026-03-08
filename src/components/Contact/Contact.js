import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import "./contact.css";
import { FiMail, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {

  const form = useRef();
  const [loading, setLoading] = useState(false);

const sendEmail = (e) => {
e.preventDefault();

if(form.current.bot_field.value !== ""){
return;
}

setLoading(true);

emailjs.sendForm(
"service_rxipoao",
"template_y6urlbm",
form.current,
"GeWmVyhjhb4PBlDcU"
)
.then(() => {

// AUTO REPLY
emailjs.sendForm(
"service_rxipoao",
"template_i631nna", // palitan ng ID ng auto reply template
form.current,
"GeWmVyhjhb4PBlDcU"
);

toast.success("Message sent successfully!");
form.current.reset();
setLoading(false);

})
.catch(() => {
toast.error("Failed to send message.");
setLoading(false);
});

}

  return (
    <section className="contactWrapper">

      {/* HERO */}
      <div className="contactHero" id="contactHero">
        <div className="heroGrid">

          <div className="heroLeft">
            <div className="contactLabel">
              <span className="dot"></span>
              <span>Get In Touch</span>
            </div>

            <h1>
              Let's <br /> Connect
            </h1>
          </div>

          <div className="heroRight">

            <Link
              to="intro"
              smooth
              duration={500}
              offset={-112}
              className="breadcrumbLink"
            >
              Home
            </Link>

            <span>/</span>
            <span className="active">Contact</span>

          </div>

        </div>
      </div>

      {/* CONTACT CARDS */}
      <div className="contactCards">

        <div className="contactCardItem">
          <div className="iconBox">
            <FiMail />
          </div>
          <h3>Email</h3>
          <p>louisesoledad55@gmail.com</p>
        </div>

        <div className="contactCardItem">
          <div className="iconBox">
            <FiMapPin />
          </div>
          <h3>Location</h3>
          <p>Philippines</p>
        </div>

      </div>

      {/* CONTACT SECTION */}
      <div className="contactBottom">

        {/* CONTACT FORM */}
        <div className="contactFormBox">

          <h2>Send Me a Message</h2>

          <form ref={form} onSubmit={sendEmail}>

            {/* Honeypot anti-spam */}
            <input type="text" name="bot_field" style={{display:"none"}} />

            <div className="formGroup">
              <label>Full Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="formGroup">
              <label>Email Address</label>
              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="formGroup">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="sendBtn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

        {/* RIGHT INFO */}
        <div className="contactInfoBox">

          <div className="contactLabel">
            <span className="dot"></span>
            <span>Contact Details</span>
          </div>

          <h2>
            Let’s Build Something <br /> Great Together
          </h2>

          <p>
            I'm a passionate web developer who loves creating modern,
            responsive, and user-friendly websites. If you have a project
            idea, collaboration, or opportunity in mind, feel free to
            reach out. I'm always open to building something amazing.
          </p>

          <a href="/Louise-CV.pdf" className="cvButton">
            Get My CV
          </a>

        </div>

      </div>

      {/* GOOGLE MAP */}
      <div className="mapWrapper">

        <iframe
          src="https://maps.google.com/maps?q=14.772565,121.068483&z=17&output=embed"
          loading="lazy"
          allowFullScreen=""
          title="Location Map"
        ></iframe>

      </div>

    </section>
  );
}

export default Contact;