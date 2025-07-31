// src/Pages/Contact.js
import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
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
            src="https://www.google.com/maps/embed?pb=..." // Use full map URL here
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
