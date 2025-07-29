import React from 'react';

export default function Contact() {
  return (
    <div className="container py-5">
      <h2>Contact Us</h2>
      <p>We're here to help you with your documentation needs.</p>
      <form className="row g-3">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Name" required />
        </div>
        <div className="col-md-6">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Mobile" required />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Service Interested In" />
        </div>
        <div className="col-12">
          <textarea className="form-control" rows="4" placeholder="Message"></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Submit</button>
          <a href="https://wa.me/971xxxxxxxxx" className="btn btn-dark ms-2" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </div>
      </form>
      <div className="mt-4">
        <strong>Location:</strong> <br />
        Al Qusais, Dubai, UAE <br />
        <strong>Email:</strong> info@daralrahma.ae <br />
        <strong>Phone:</strong> +971-XX-XXX-XXXX <br />
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
