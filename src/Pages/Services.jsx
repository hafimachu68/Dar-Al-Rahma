import React, { useState } from 'react';
import './service.css';
import ID from '../images/Id.png';
import ID1 from '../images/Report.png';
import ID2 from '../images/health.png';
import ID3 from '../images/board.png';
import ID4 from '../images/id2.png';
import ID5 from '../images/attested.png';
import ID6 from '../images/conversation.png';
import ID7 from '../images/documentation.png';
import ID8 from '../images/upwards.png';






export default function Services() {
  const services = [
    {
  title: "Emirates ID Application & Renewal",
 icon: (
    <img
      src={ID}
      alt="Emirates ID"
      className="icon-size"
    />),

      intro: "Fast-track your Emirates ID needs with complete support — from application to biometric appointment booking and renewals.",
      brief: (
        <>
          <p>
            Whether you're applying for a new Emirates ID, renewing an existing one, or replacing a lost card, we provide end-to-end typing, submission, and follow-up services. We also offer expiration alerts and reminder services.
          </p>
          <p>
            Avoid rejections and delays — our team ensures documentation accuracy and compliance with ICA regulations.
          </p>
        </>
      )
    },
    {
      title: "Medical Typing Services",
      icon: (
    <img
      src={ID1}
      alt="Emirates ID"
      className="icon-size"
    />),
      intro: "Get your DHA/MOH medical typing done with precision — essential for visa processing and health clearance.",
      brief: (
        <>
          <p>
            We handle accurate medical typing required for government health tests. This includes data entry for fitness assessments, pre-employment screening, and residency visa health checks.
          </p>
          <p>
            We coordinate with medical centers and ensure that all medical records align with immigration requirements.
          </p>
        </>
      )
    },
    {
      title: "Occupational Health Card",
      icon: (
    <img
      src={ID2}
      alt="Emirates ID"
      className="icon-size"
    />),
      intro: "Essential for food industry and salon professionals — get your health card processed without delay.",
      brief: (
        <>
          <p>
            Our services cover new applications and renewals for Occupational Health Cards, which are required by the Dubai Municipality and DHA for specific professions.
          </p>
          <p>
            We ensure your applications include all necessary health checks and compliance forms, saving you time.
          </p>
        </>
      )
    },
    {
      title: "Visa & Immigration Typing",
       icon: (
    <img
      src={ID3}
      alt="Emirates ID"
      className="icon-size"
    />),
      intro: "Let us manage your entire visa documentation — residence, family sponsorship, and status changes.",
      brief: (
        <>
          <p>
            Our experts guide you through visa applications, renewals, cancellations, and dependent visa support. We manage MOHRE and immigration coordination for seamless approval.
          </p>
          <p>
            Stay worry-free while we ensure accuracy, compliance, and timely submissions.
          </p>
        </>
      )
    },
    {
      title: "Tasheel & Tawjeeh",
     icon: (
    <img
      src={ID4}
      alt="Emirates ID"
      className="icon-size"
    />),
      intro: "We process employment contracts, labor cards, and MOHRE documents with full support at Tasheel & Tawjeeh centers.",
      brief: (
        <>
          <p>
            From work permits to offer letters, we ensure smooth handling of all labor-related documentation. We also assist with booking Tawjeeh sessions and follow-up processes.
          </p>
          <p>
            Our team stays updated with UAE labor law to guarantee full legal compliance.
          </p>
        </>
      )
    },
    {
      title: "Attestation & Legal Translation",
      icon: (
        <img
      src={ID5}
      alt="Emirates ID"
      className="icon-size"
    />),
      intro: "Certified translations and embassy-level attestations done by professionals for global legal recognition.",
      brief: (
        <>
          <p>
            We handle the entire attestation chain — from Notary to Ministry of Foreign Affairs to embassy. Our licensed translators prepare accurate Arabic/English legal translations.
          </p>
          <p>
            Essential for education certificates, contracts, and personal documents.
          </p>
        </>
      )
    }
  ];

  const [activeService, setActiveService] = useState(null);
  const toggleDetails = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section className="services-section py-5">
     <div className="container  mb-5">
  <h2 className="display-5 fw-bold text-dark text-center">What We Offer</h2>
  <p className="text-accentab fw-semibold mt-2 mb-3 text-center" style={{ letterSpacing: "1px" }}>
    Document Expertise • Government Services • Trusted Since 2025
  </p>
  <p className="section-subtitle text-muted text-center pb-5" style={{ maxWidth: "800px", margin: "0 auto" }}>
    Whether you're an individual or a business, we deliver reliable, end-to-end solutions for all your documentation and legal processing needs across the UAE — with clarity, speed, and care.
  </p>


        <div className="services-list">
          {services.map((service, index) => (
            <article
              className={`service-item ${activeService === index ? 'active' : ''}`}
              key={index}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-intro fadeIn">{service.intro}</p>
                <button
                  className="btn btn-service"
                  onClick={() => toggleDetails(index)}
                >
                  {activeService === index ? 'Hide Details' : 'More Info'}
                </button>
                {activeService === index && (
                  <div className="service-description fadeIn mt-2">
                    {service.brief}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* How We Work Section */}
<section className="how-we-work-section py-5 fadeIn">
  <div className="container">
    <h2 className="section-heading text-center mb-4">How We Work</h2>
    <p className="section-subtitle text-center mb-5">
      A simple and transparent process from start to finish.
    </p>

    <div className="row g-5">
      <div className="col-md-4 text-center">
        <div className="work-step">
          <div className="work-icon mb-3">
             <img
      src={ID6}
      alt="Emirates ID"
      className="icon-size"
    />
          </div>
          <h5>1. Consultation</h5>
          <p>We start by understanding your requirements through a short consultation — online, by phone, or in-person.</p>
        </div>
      </div>

      <div className="col-md-4 text-center">
        <div className="work-step">
          <div className="work-icon mb-3">
             <img
      src={ID7}
      alt="Emirates ID"
      className="icon-size"
    />
          </div>
          <h5>2. Documentation</h5>
          <p>We prepare, type, and submit all necessary documents, ensuring accuracy and compliance with regulations.</p>
        </div>
      </div>

      <div className="col-md-4 text-center">
        <div className="work-step">
          <div className="work-icon mb-3">
            <img
      src={ID8}
      alt="Emirates ID"
      className="icon-size"
    />
          </div>
          <h5>3. Delivery</h5>
          <p>Once approved, we notify you immediately and deliver your final documents via your preferred method.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </section>
    
  );
}
