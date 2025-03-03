import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HealthCare.css';

function HealthCare() {
  useEffect(() => {
    const loadCSS = (href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    };

    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    loadCSS('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    loadCSS('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
    loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');

    return () => {
      document.querySelectorAll('link, script').forEach(el => el.remove());
    };
  }, []);

  const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '5 Lakh' },
    { id: 2, name: 'Assets under holding', value: '$1 Million' },
    { id: 3, name: 'New users annually', value: '10 Million' },
  ];

  const supportTeamData = [
    {
      title: "Clinical Operations Support",
      image: "https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2148998692.jpg",
    },
    {
      title: "24/7 Medical Assistance",
      image: "https://img.freepik.com/free-photo/doctor-hospital_23-2148491396.jpg",
    },
    {
      title: "Patient Consultation",
      image: "https://img.freepik.com/free-photo/patient-doctor-examining_23-2148518672.jpg",
    },
    {
      title: "Advanced Diagnostics",
      image: "https://img.freepik.com/free-photo/healthcare-diagnosis-doctor_23-2148491768.jpg",
    }
  ];

  return (
    <div className="healthcare-page">
      {/* Page Title */}
      <section className="page-title">
        <h1>Healthcare Services</h1>
        <p>We provide world-class healthcare solutions with expert guidance.</p>
      </section>

      {/* Explore Solutions */}
      <section className="explore-solutions">
        <h2 className="text-center mb-4">Explore Our Solutions</h2>
        <div className="card-container">
          {supportTeamData.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <Link to="#" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-container">
        <h2 className="text-center mb-4">Our Impact</h2>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-name">{stat.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HealthCare;
