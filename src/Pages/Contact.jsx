// src/Pages/Contact.js
import React from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet';


export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Dar Al Rahma - Document Clearing Services in Dubai</title>
        <meta
          name="description"
          content="Get in touch with Dar Al Rahma for Emirates ID, Medical Typing, Visa Services, Attestation, and more. Visit us in Al Qusais, Dubai or send us a message."
        />
        <meta
          name="keywords"
          content="Contact Dar Al Rahma, Typing Center Dubai, Visa Help UAE, Emirates ID Support, Dubai Document Services"
        />
      </Helmet>
    <section className="contact-wrapper">
      <div className="contact-card shadow-lg">
        <div className="contact-left">
          <h2>Let’s Connect</h2>
          <p className="subtitle">
            Reach out to us for any inquiries related to document clearing, Emirates ID, visa services, and more.
          </p>

          <form
            className="row g-3"
            method="POST"
            action="https://formsubmit.co/kavvayikaran@gmail.com"
          >
            <div className="form-floating col-md-6">
              <input type="text" name="name" className="form-control" id="name" placeholder="Name" required />
              <label htmlFor="name">Full Name</label>
            </div>
            <div className="form-floating col-md-6">
              <input type="email" name="email" className="form-control" id="email" placeholder="Email" required />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-floating col-md-6">
              <input type="text" name="mobile" className="form-control" id="mobile" placeholder="Mobile" required />
              <label htmlFor="mobile">Mobile Number</label>
            </div>
            <div className="form-floating col-md-6">
              <input type="text" name="service" className="form-control" id="service" placeholder="Service" />
              <label htmlFor="service">Service Interested In</label>
            </div>
            <div className="form-floating col-12">
              <textarea name="message" className="form-control" placeholder="Message" id="message" style={{ height: "120px" }} required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <input type="hidden" name="_autoresponse" value="Thank you for contacting Dar Al Rahma. We will get back to you shortly." />
            <input type="hidden" name="_subject" value="New Contact Form Submission - Dar Al Rahma" />
            <input type="hidden" name="_template" value="box" />

            <div className="col-12 d-flex flex-wrap align-items-center gap-2">
              <button type="submit" className="btn btn-success rounded-pill px-4">Send Message</button>
              <a href="https://wa.me/971581264868"className="btn btn-dark rounded-pill px-4" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </div>
          </form>
        </div>

        <div className="contact-right">
          <h4 className="mb-3">Our Office</h4>
          <p><strong>📍 Location:</strong> Al Qusais, Dubai, UAE</p>
          <p><strong>✉️ Email:</strong> kavvayikaran@gmail.com</p>
          <p><strong>📞 Phone:</strong> +971581264868</p>

          <iframe
            title="Our Location"
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14434.713587113782!2d55.29078061891095!3d25.247754861852837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43c10b93870b%3A0x4b563d7f30da08ca!2sDar%20al%20Rahma!5e0!3m2!1sen!2sae!4v1753975576415!5m2!1sen!2sae" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
 
          ></iframe>
        </div>
      </div>
    </section>
    </>
  );
}
