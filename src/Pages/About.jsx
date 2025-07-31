import React from 'react';
import './About.css';
import { Helmet } from 'react-helmet';


export default function About() {
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
    <section className="dar-about-section position-relative overflow-hidden py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-accent fadeInUp">About Dar Al Rahma</h2>
          <p className="lead fadeInUp" style={{ maxWidth: "750px", margin: "0 auto",color:"beige"  }}>
            Since 2025, Dar Al Rahma Document Clearing Services has proudly served the Dubai community with fast, transparent, and professional documentation solutions.
          </p>
        </div>

        {/* Info Blocks */}
        <div className="row g-4">
          <div className="col-md-6 fadeInUp">
            <div className="info-box p-4 rounded shadow-sm h-100 bg-white text-accentab">
              <h5>💼 One-Stop Government Services</h5>
              <p>
                We specialize in handling all types of government-related paperwork: Emirates ID registration, visa applications, medical and health card typing,
                immigration and labor forms, attestation, Tasheel, Tawjeeh, and more. Our clients save valuable time and avoid bureaucratic confusion.
              </p>
            </div>
          </div>

          <div className="col-md-6 fadeInUp">
            <div className="info-box p-4 rounded shadow-sm h-100 bg-white text-accentab">
              <h5>🗣️ Multilingual Team</h5>
              <p>
                Communication is key. Our friendly staff speaks Arabic, English, Urdu, Hindi, and other languages to ensure a smooth, stress-free process for every customer.
              </p>
            </div>
          </div>

          <div className="col-md-6 fadeInUp">
            <div className="info-box p-4 rounded shadow-sm h-100 bg-white text-accentab">
              <h5>🤝 Personalized Support</h5>
              <p>
                We treat every individual with care and integrity. Whether you’re a first-time visitor or a regular client, we’re here to answer your questions, offer guidance, and deliver results.
              </p>
            </div>
          </div>

          <div className="col-md-6 fadeInUp">
            <div className="info-box p-4 rounded shadow-sm h-100 bg-white text-accentab">
              <h5>🚀 Trusted by Thousands</h5>
              <p>
                Businesses, families, and individuals across Dubai rely on Dar Al Rahma for accurate documentation, legal clarity, and complete transparency.
                Our loyal client base is the result of consistent professionalism and respect.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="philosophy-section mt-5 fadeInUp">
          <h3 className="text-center fw-bold text-accent mb-4">Our Philosophy</h3>
          <p className="text-center" style={{ maxWidth: "900px", margin: "0 auto",color:"beige" }}>
            At Dar Al Rahma, we believe that every customer deserves not just a service—but a solution. Our mission is to remove the stress of paperwork and
            government procedures, offering peace of mind and efficient results. With ever-changing regulations and policies in the UAE, we stay updated, so you don’t have to.
          </p>
        </div>

        {/* History Section */}
        <div className="row align-items-center mt-5">
          <div className="col-md-6 fadeInUp">
            <div className="info-box p-4 rounded shadow-sm h-100 bg-white text-accentab">
              <h5>🏢 Our Journey</h5>
              <p>
                Dar Al Rahma began with a single goal: to make document processing easier for everyone. From our small beginnings in 2016, we have grown
                into one of Dubai’s most reliable and respected documentation centers, thanks to our dedication and your trust.
              </p>
            </div>
          </div>
          <div className="col-md-6 fadeInUp">
            <div className="info-box p-4 rounded shadow-sm h-100 bg-white text-accentab">
              <h5>📍 Our Location</h5>
              <p>
                Strategically located in the heart of Dubai, our office is easily accessible and welcomes walk-ins. Visit us to experience hassle-free government services with a smile.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="row mt-5 g-4 fadeInUp">
          <h3 className="text-center fw-bold text-accent mb-4">Our Core Values</h3>
          <div className="col-md-4">
            <div className="info-box p-4 bg-white shadow-sm rounded text-center h-100 text-accentab">
              <h6>🎯 Accuracy</h6>
              <p>We double-check every form, detail, and document—ensuring no errors and zero rejections.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-box p-4 bg-white shadow-sm rounded text-center h-100 text-accentab">
              <h6>⏱️ Speed</h6>
              <p>Your time matters. We focus on rapid turnaround without compromising quality.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-box p-4 bg-white shadow-sm rounded text-center h-100 text-accentab">
              <h6>🔒 Trust</h6>
              <p>Confidentiality and ethics are central to every service we provide. Your information is safe with us.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Background */}
      <div className="circle-bg-1"></div>
      <div className="circle-bg-2"></div>
    </section>
    </>
  );
}
