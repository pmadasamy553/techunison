import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaLinkedin, FaGooglePlus, FaTwitter } from 'react-icons/fa';

function MySection() {
  return (
    <>
      <section className="slider6" id="slide6">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>We Lead your business through innovative technology</h2>
              <p className="text-center footoff">"The Offshore Partner for Creating Your Ideas"</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <h5 className="color-white">ORACLE JD EDWARDS </h5>
              <ul>
                <li> Why JDE Application Management Services with Techunison?</li>
                <li> Our Application Management Services</li>
                <li> Our Application Professional Services</li>
                <li> Benefits of our Services</li>
                <li> JD Edwards Orchestration - Automation</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h5 className="color-white">CUSTOM APP DEVELOPMENT </h5>
              <ul>
                <li>Bolt-On Product Development for Oracle JD Edwards</li>
                <li>Microsoft Dot Net Technology</li>
                <li>Windows Application Development & Web Application Development</li>
                <li>Java J2EE Practice</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h5 className="color-white">Data science and Machine Learning</h5>
              <ul>
                <li>Python & R</li>
                <li>Apache Hadoop & Spark</li>
                <li>NoSQL Database</li>
                <li>Data Analytics</li>
                <li>AWS Cloud</li>
                <li>Azure Cloud</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h5 className="color-white">India Address </h5>
              <p>
                No 77 Ganesh Nagar,<br />
                Third Street, GN Mills Post,<br />
                Coimbatore 641029<br />
                Landmark: Backside to Bharath Electronics & Appliances 
              </p>
              <iframe
  title="Google Maps"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.59301576000394!2d76.94471905872956!3d11.056999671440222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8589e28beaefd%3A0x8d4d1ca181a01acf!2sTechunison%20Software!5e0!3m2!1sen!2sin!4v1717074899516!5m2!1sen!2sin"
  width="300"
  height="75"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

              <h5 className="color-white">USA Address </h5>
              <p>
                4746 English pleasure drive<br />
                MASON<br />
                OHIO 45040
              </p>
              <ul className="s_media">
                <li className="dock-tab social-facebook"> <a href="https://www.facebook.com/techunison.india.1" rel="noreferrer" title="Facebook" target="_blank"><FaFacebook size={24} /></a> </li>
                <li className="dock-tab social-linkedin"> <a href="https://www.linkedin.com/feed/" rel="noreferrer" title="LinkedIn" target="_blank"><FaLinkedin size={24} /></a> </li>
                <li className="dock-tab social-google"> <a href="https://plus.google.com/u/2/discover?pageId=none" rel="noreferrer" title="Google" target="_blank"><FaGooglePlus size={24} /></a> </li>
                <li className="dock-tab social-twitter"> <a href="https://twitter.com/techunison" rel="noreferrer" title="Twitter" target="_blank"><FaTwitter size={24} /></a> </li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      <div class="end-footer">
        <div class="container">
            <div class="row">
                <div class="col-10">
                    <div class="last-card">
                        <p>© 2024 All Rights Reserved by<a href="https://madasamy.vercel.app/">P.S.MADASAMY</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default MySection;
