import React, { useState } from 'react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    code: ''
  });

  const [alert, setAlert] = useState({ visible: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check for empty fields
    for (let key in formData) {
      if (formData[key] === '') {
        setAlert({ visible: true, message: 'Please fill out all fields.', type: 'danger' });
        return;
      }
    }

    console.log('Form Data before submission:', formData); // Log form data before submission
    
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log('Response:', response); // Log response from the backend
      setAlert({ visible: true, message: 'Message sent successfully!', type: 'success' });
    } catch (error) {
      console.error('Error:', error); // Log any errors that occur
      setAlert({ visible: true, message: 'Failed to send message.', type: 'danger' });
    }

    console.log('Form Data after submission:', formData); // Log form data after submission
    
    // Clear the alert after a few seconds
    setTimeout(() => {
      setAlert({ visible: false, message: '', type: '' });
    }, 3000);
  };
  return (
    <>
      <section id="slide-2">
        <div id="demo-1" data-zs-src='["img/ser1.jpg"]' data-zs-overlay="dots">
          <div className="demo-inner-content">
            <h2><span>We Are At Your Reach </span></h2>
          </div>
        </div>
      </section>

      <section className="consecpage">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>Make A Quick Contact! Let's Get Started</h1>
              <p className="text-center">"Shoot Us a Mail or Call, You Can Expect a Response Shortly"</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-sm-4 cont_nu">
              <h3>CUSTOMER SUPPORT</h3>
              <p><i className="fa fa-mobile"></i> +15136023907, +15128079531 </p>
              <p><i className="fa fa-envelope"></i> <a href="cdn-cgi/l/email-protection.html" className="__cf_email__" data-cfemail="73000603031c0107330716101b061d1a001c1d5d101c1e">[email&#160;protected]</a></p>
            </div>
            
            <div className="col-sm-4 cont_nu">
              <h3>CAREER SUPPORT</h3>
              <p><i className="fa fa-mobile"></i> 0422 2645344</p>
              <p><i className="fa fa-mobile"></i> +91 9047708470</p>
              <p><i className="fa fa-envelope"></i> <a href="cdn-cgi/l/email-protection.html" className="__cf_email__" data-cfemail="7c140e3c08191f140912150f1312521f1311">[email&#160;protected]</a></p>
            </div>
            
            <div className="col-sm-4 cont_nu">
              <h3>SALES SUPPORT</h3>
              <p><i className="fa fa-mobile"></i> +15136023907</p>
              <p><i className="fa fa-envelope"></i> <a href="cdn-cgi/l/email-protection.html" className="__cf_email__" data-cfemail="bccfddd0d9cffcc8d9dfd4c9d2d5cfd3d292dfd3d1">[email&#160;protected]</a></p>
            </div>
          </div>
        </div>
      </section>
     
      <section id="contact" className="consecpage">
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section-header">
                <span className="content-header wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                  <h3>Contact Us</h3>
                </span>
              </h1>
              <p>Reach out to us, we would love to hear from you!</p>
            </div>
          </div>
          <div className="row">
      <form onSubmit={handleSubmit}>
        <div className="col-md-6 form-line">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email id"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">Company</label>
            <input
              type="text"
              className="form-control"
              id="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">What code is in the image?</label>
            <input
              type="text"
              className="form-control"
              id="code"
              placeholder=""
              value={formData.code}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-paper-plane" aria-hidden="true"></i> Submit
            </button>
          </div>
        </div>
      </form>
      {alert.visible && (
        <div className={`alert alert-${alert.type} mt-3`} role="alert">
          {alert.message}
        </div>
      )}
    </div>
        </div>
      </div>
    </section>

      <section className="consecpage" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3>INDIA</h3>
              <p>No 77 Ganesh Nagar,<br />
                Third Street, GN Mills Post,<br />
                Coimbatore 641029<br />
                Landmark: Backside to Bharath Electronics and Appliances.</p>
            </div>
            
            <div className="col-sm-6">
              <h3>USA</h3>
              <p>4746 English Pleasure Drive<br />
                MASON<br />
                OHIO 45040</p>
            </div>
          </div>
        </div>
        <div class="map-container">

       
  <iframe
    title="Google Maps"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.59301576000394!2d76.94471905872956!3d11.056999671440222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8589e28beaefd%3A0x8d4d1ca181a01acf!2sTechunison%20Software!5e0!3m2!1sen!2sin!4v1717074899516!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{border: "0"}}
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    allowfullscreen
  ></iframe>
</div>

      </section>
      
    
    </>
  );
}

export default Contact;
