import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import './Home.css';

const testimonials = [
  {
    text: "Excellent service and very fast processing. Highly recommend Dar Al Rahma.",
    author: "Aisha K."
  },
  {
    text: "The staff was helpful and friendly. They made my Emirates ID process easy.",
    author: "Mohammed S."
  },
  {
    text: "Great customer support and knowledgeable team. Everything was smooth.",
    author: "Rania D."
  },
  {
    text: "Quick and efficient service, very pleased with the whole experience.",
    author: "Sara L."
  },
  {
    text: "Friendly staff and excellent follow-up. Highly recommend for Emirates ID.",
    author: "Omar F."
  },
  {
    text: "Very professional and fast service. Made the visa process simple.",
    author: "Laila M."
  },
];

function chunkArray(arr, chunkSize) {
  const result = [];
  for(let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}
export default function Home() {

    const testimonialGroups = chunkArray(testimonials, 3);


   const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "Emirates ID Application",
      brief: "We handle all aspects of your Emirates ID application, renewal, and updates with end-to-end support and timely reminders.",
      icon: "🆔",
    },
    {
      title: "Medical Typing",
      brief: "Accurate and fast typing for government-approved medical fitness applications, ensuring no delays in your visa process.",
      icon: "🩺",
    },
    {
      title: "Occupational Health Card",
      brief: "Quick application and renewal for food industry workers and other professionals, following Dubai Health Authority norms.",
      icon: "💼",
    },
    {
      title: "Visa & Immigration Services",
      brief: "We manage visa applications, renewals, dependent sponsorships, status changes, and immigration approvals seamlessly.",
      icon: "🛂",
    },
    {
      title: "Tasheel & Tawjeeh",
      brief: "Full support for MOHRE services including offer letters, work permits, employment contracts, and legal translations.",
      icon: "📑",
    },
    {
      title: "Attestation & Legal Translation",
      brief: "Get your certificates attested and translated by licensed professionals. We handle MOFA, embassy, and legal steps.",
      icon: "📜",
    },
  ];

  const toggleDetails = (index) => {
    setActiveService(activeService === index ? null : index);
  };
  return (
    <div>
      {/* Hero Section */}
      <Carousel fade interval={5000} controls={true} indicators={true}>
      {/* Slide 1 */}
      <Carousel.Item>
        <section className="hero-slide hero-slide-1 d-flex align-items-center position-relative">
<div className="circle-bg-modern">
  <span className="circle circle-1"></span>
  <span className="circle circle-2"></span>
  <span className="circle circle-3"></span>
  <span className="circle circle-4"></span>
  <span className="circle circle-5"></span>
</div>

          <div className="container text-center text-white">
            <div className="hero-content-blur p-4 rounded">
              <h1>Fast, Reliable Government Services Under One Roof</h1>
              <p className="lead mt-3">We simplify your documentation needs – Emirates ID, Medical Typing, and more.</p>
              <p className="small mt-2">Serving residents across UAE with speed and transparency since 2016.</p>
              <Link to="/contact" className="btn btn-light mt-4 shadow-lg">Get Started</Link>
            </div>
          </div>
        </section>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <section className="hero-slide hero-slide-2 d-flex align-items-center position-relative">
<div className="circle-bg-modern">
  <span className="circle circle-1"></span>
  <span className="circle circle-2"></span>
  <span className="circle circle-3"></span>
  <span className="circle circle-4"></span>
  <span className="circle circle-5"></span>
</div>
          <div className="container text-center text-white">
            <div className="hero-content-blur p-4 rounded">
              <h1>Your Partner for Medical & Visa Typing</h1>
              <p className="lead mt-3">Avoid delays with our expert handling of Health Cards, Emirates ID, Tasheel, Tawjeeh and more.</p>
              <p className="small mt-2">We handle the process so you can focus on what matters.</p>
              <Link to="/services" className="btn btn-light mt-4 shadow-lg">Explore Services</Link>
            </div>
          </div>
        </section>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <section className="hero-slide hero-slide-3 d-flex align-items-center position-relative">
<div className="circle-bg-modern">
  <span className="circle circle-1"></span>
  <span className="circle circle-2"></span>
  <span className="circle circle-3"></span>
  <span className="circle circle-4"></span>
  <span className="circle circle-5"></span>
</div>
          <div className="container text-center text-white">
            <div className="hero-content-blur p-4 rounded">
              <h1>Accuracy. Speed. Trust.</h1>
              <p className="lead mt-3">We’ve helped thousands of Dubai residents and businesses with paperwork, attestation & PRO services.</p>
              <p className="small mt-2">Dar Al Rahma – your one-stop documentation partner.</p>
              <Link to="/about" className="btn btn-light mt-4 shadow-lg">Learn More</Link>
            </div>
          </div>
        </section>
      </Carousel.Item>
    </Carousel>

    {/* About Section - No Image Version */}
<section className="dar-about-brief py-5 position-relative overflow-hidden">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="display-6 fw-bold text-accent-1 fadeInUp">About Dar Al Rahma</h2>
      <p className="lead fadeInUp" style={{ maxWidth: "750px", margin: "0 auto" }}>
        Established in 2016, Dar Al Rahma has become a trusted name in Dubai for fast, transparent, and accurate government documentation services.
      </p>
    </div>

    <div className="row g-4">
      <div className="col-md-6 fadeInUp">
        <div className="info-block p-4 h-100">
          <h5>💼 Our Services</h5>
          <p>
            From Emirates ID to visa processing, medical typing, and attestation—we simplify every government-related process under one roof.
          </p>
        </div>
      </div>

      <div className="col-md-6 fadeInUp">
        <div className="info-block p-4 h-100">
          <h5>🌍 Multilingual Support</h5>
          <p>
            Our team speaks Arabic, English, Urdu, and more—ensuring comfort and clarity for every customer, no matter their background.
          </p>
        </div>
      </div>

      <div className="col-md-6 fadeInUp">
        <div className="info-block p-4 h-100">
          <h5>🤝 Customer Commitment</h5>
          <p>
            We believe in transparency, respect, and personalized care. Every customer is treated with integrity and professionalism.
          </p>
        </div>
      </div>

      <div className="col-md-6 fadeInUp">
        <div className="info-block p-4 h-100">
          <h5>🚀 Why Choose Us?</h5>
          <p>
            Fast turnaround, government-approved accuracy, and a passionate team that goes above and beyond—that’s the Dar Al Rahma promise.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Light Floating Circles Background */}
  <div className="circle-bg-1"></div>
  <div className="circle-bg-2"></div>
</section>

      {/* Services */}
        <section className="services-section text-center py-5">
      <div className="container">
        <h2 className="section-heading mb-4 fw-bold">What We Offer</h2>
        <p className="section-subtitle mb-5">Reliable solutions for individuals and businesses across the UAE</p>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="service-card h-100 shadow-lg position-relative">
                <div className="service-icon">{service.icon}</div>
                <h5 className="mt-3">{service.title}</h5>
                <button
                  className="btn btn-service mt-2"
                  onClick={() => toggleDetails(index)}
                >
                  {activeService === index ? 'Hide Details' : 'More Info'}
                </button>
                {activeService === index && (
                  <p className="service-description fadeIn mt-3">{service.brief}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
<section className="why-choose-section py-5 text-center bg-light position-relative">
  <div className="container">
    <h2 className="display-6 fw-bold mb-4 text-accent-w fadeInUp">Why Choose Dar Al Rahma?</h2>
    <p className="lead mb-5 fadeInUp" style={{ maxWidth: "750px", margin: "0 auto" }}>
      We go beyond document typing—we deliver trust, speed, clarity, and care with every step of your journey.
    </p>
    <div className="row g-4 justify-content-center align-items-start">
      <div className="col-md-6 text-start">
        <ul className="list-unstyled px-3">
          <li className="mb-3">✅ <strong>Government Approved</strong> – Licensed and compliant with UAE regulations.</li>
          <li className="mb-3">✅ <strong>Transparent Pricing</strong> – No hidden charges. We value honesty.</li>
          <li className="mb-3">✅ <strong>Fast Turnaround</strong> – Your time matters. We prioritize efficiency.</li>
          <li className="mb-3">✅ <strong>Multilingual Support</strong> – Arabic, English, Urdu, and more for your comfort.</li>
          <li className="mb-3">✅ <strong>Dedicated Experts</strong> – Our experienced staff walks you through every detail.</li>
          <li className="mb-3">✅ <strong>Complete Service Portfolio</strong> – From visa to typing to attestation—under one roof.</li>
        </ul>
      </div>
      <div className="col-md-6">
        <div className="why-card p-4 shadow-lg rounded bg-white fadeInUp">
          <h5 className="text-accent-w">What Sets Us Apart</h5>
          <p className="mb-3">
            Since 2016, Dar Al Rahma has served thousands of residents, delivering reliable, fast, and multilingual documentation services.
          </p>
          <p className="mb-0">
            Whether you're applying for an Emirates ID, medical fitness certificate, or attestation, we're your trusted guide.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Optional animated background accents */}
  <div className="circle-bg-1"></div>
  <div className="circle-bg-2"></div>
</section>

      {/* Who We Are - Dar Al Rahma */}
<section className="dar-about-section py-5 position-relative text-white">
  <div className="container text-center">
    <h4 className="display-5 fw-bold mb-4 fadeInUp">Dar Al Rahma — Excellence in Service</h4>
    <p className="lead fadeInUp" style={{ maxWidth: "800px", margin: "0 auto" }}>
      A trusted center for all your government documentation services in Dubai.
      We’re built on teamwork, discipline, innovation, and genuine respect for every customer.
    </p>

    <div className="row mt-5 g-4 text-start justify-content-center">
      <div className="col-md-4 fadeInUp">
        <div className="info-card p-4 h-100">
          <h4 className="text-accent fw-bold">Our Mission</h4>
          <p>
            Simplifying government documentation with exceptional service and seamless processes for UAE residents.
          </p>
        </div>
      </div>
      <div className="col-md-4 fadeInUp">
        <div className="info-card p-4 h-100">
          <h4 className="text-accent">Our Vision</h4>
          <p>
            To exceed expectations with outstanding service, building lasting client relationships through trust and quality.
          </p>
        </div>
      </div>
      <div className="col-md-4 fadeInUp">
        <div className="info-card p-4 h-100">
          <h4 className="text-accent">Our Values</h4>
          <p>
            We’re driven by teamwork, discipline, and customer satisfaction—ensuring every client’s success and peace of mind.
          </p>
        </div>
      </div>
      <div className="col-md-10 mt-4 fadeInUp">
        <div className="info-card p-4">
          <h4 className="text-accent">Who We Are</h4>
          <p>
            Established in 2016, Dar Al Rahma offers all-in-one government documentation services with a friendly, multilingual team. From individuals to corporations, we provide a smooth and comfortable experience with unmatched professionalism and care.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials */}
     <section className="testimonials-section py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">Client Testimonials</h2>
        <Carousel 
  indicators={true}      // Show indicators (dots)
  controls={true}        // Show prev/next arrows
  interval={3000}        // Auto-slide every 3000 ms = 3 seconds
  pause="hover"          // Pause auto-slide on mouse hover
  className="testimonial-carousel"
>
  {testimonialGroups.map((group, idx) => (
    <Carousel.Item key={idx}>
      <div className="d-flex justify-content-center gap-4">
        {group.map((item, i) => (
          <div 
            key={i} 
            className="card shadow-sm p-4" 
            style={{ maxWidth: '300px', minWidth: '280px' }}
          >
            <p className="testimonial-text fst-italic">“{item.text}”</p>
            <strong className="testimonial-author">- {item.author}</strong>
          </div>
        ))}
      </div>
    </Carousel.Item>
  ))}
</Carousel>

      </div>
    </section>

      {/* Call to Action */}
      <section className="cta-section text-white text-center py-5">
        <div className="container">
          <h3>Need help with government paperwork?</h3>
          <p className="mt-2">Let our experts guide you every step of the way.</p>
          <Link className="btn btn-light mt-3" to="/contact">Contact Us Now</Link>
        </div>
      </section>
    </div>
  );
}
