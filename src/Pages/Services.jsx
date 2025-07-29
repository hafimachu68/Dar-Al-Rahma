import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Emirates ID Typing',
      details: 'New application, renewal, lost ID replacement, passport & visa required.'
    },
    {
      title: 'Medical Typing Services',
      details: 'DHA/MOH medical forms, fitness application for new/renewal visas.'
    },
    {
      title: 'Occupational Health Card',
      details: 'For food handlers, salon workers, health staff. Renewal & new cards.'
    },
    {
      title: 'Visa & Immigration Services',
      details: 'Typing support for residence, family, employment visas, immigration typing.'
    },
    {
      title: 'Tasheel & Tawjeeh',
      details: 'Labour card processing, MOHRE services, appointment bookings.'
    },
    {
      title: 'Attestation & Translation',
      details: 'Legal document translation, embassy and ministry attestation.'
    }
  ];

  return (
    <div className="container py-5">
      <h2>Our Services</h2>
      <div className="row mt-4">
        {services.map((s, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{s.title}</h5>
                <p className="card-text">{s.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}