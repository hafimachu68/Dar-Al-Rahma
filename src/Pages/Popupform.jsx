// src/Components/PopupForm.js
import React, { useEffect, useState } from 'react';
import './popupform.css';
import logo from '../images/daru-logo.png'; // adjust path if needed

export default function PopupForm() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn-pop" onClick={() => setShow(false)}>×</button>

        <div className="popup-header">
          <img src={logo} alt="Logo" className="popup-logo" />
          <h3 className="twinkle">Dar Al Rahma</h3>
        </div>

        <p>Need help? Contact us for quick support or services. We'll get back to you shortly.</p>

        <form method="POST" action="https://formsubmit.co/info@daralrahma.ae">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="3" placeholder="Your Message" required></textarea>
          <input type="hidden" name="_autoresponse" value="Thank you for reaching out to Dar Al Rahma!" />
          <input type="hidden" name="_template" value="table" />
          <button className='ppobutton' type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
