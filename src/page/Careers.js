import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCaretRight } from 'react-icons/fa';

function Careers() {
  return (
    <>
      <section id="slide-1">
        <div id="demo-1" data-zs-src='["img/carreer.jpg"]' data-zs-overlay="dots">
          <div className="demo-inner-content">
            <h2><span>Careers </span></h2>
          </div>
        </div>
      </section>
      
      <section className="consecpage">
        <Container>
          <Row>
            <Col>
              <div className="careersec">
                <h1 className="text-center">Careers</h1>
                <p className="text-center">Techunison is a Great place to work!</p>
                <p>Freedom to plan and execute your work and a fantastic collaborative work environment with supportive and diverse team give everyone a good work life balance and we do provide excellent on-site opportunities.</p>
                <h3 style={{ color: '#0234a0' }}>Current Openings</h3>
                <p><strong>Job Role :</strong></p>
                <ul style={{ padding: '1em' }}>
                  <li>Jr. Data Scientist</li>
                </ul>
                <p><strong>Job Description :</strong></p>
                <ul style={{ padding: '1em' }}>
                  <li>5+ years of experience in data science</li>
                  <li>Strong knowledge on applied statistics skills, such as distributions, statistical testing, regression, etc.</li>
                  <li>Strong business sense to connect between data and products.</li>
                  <li>Strong experience using Python with NumPy, R, scikit-learn, Pandas.</li>
                  <li>Experience on frameworks like TensorFlow, PyTorch, OpenCV, Keras.</li>
                  <li>Experience with web service development using PySpark.</li>
                  <li>Experience on databases SQL and NoSQL.</li>
                  <li>Experience in software engineering, with a good understanding of software architecture, optimization, and programming patterns and paradigms.</li>
                </ul>
                <p><strong>Primary Skills :</strong></p>
                <ul style={{ padding: '1em' }}>
                  <li>Strong background in mathematical and statistical modeling.</li>
                  <li>Hands-on Python, R and related frameworks, ETL process, data mining concepts</li>
                  <li>Unix/Linux Platform</li>
                  <li>Strong communication skill with clients</li>
                </ul>
                <p><strong>Contact :</strong></p>
                <ul style={{ padding: '1em' }}>
                  <li>Email: <a href="cdn-cgi/l/email-protection.html" className="__cf_email__" data-cfemail="0d657f4d79686e657863647e6263236e6260">[email&#160;protected]</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="consecpage" style={{ background: '#f1f1f1' }}>
        <Container>
          <Row>
            <Col>
              <h3>Why Techunison</h3>
              <ul className="career">
                <li className="abt1">
                  <FaCaretRight /> <span className="abt-span"> We acknowledge and reward the hard work of our employees</span>
                </li>
                <li className="abt2">
                  <FaCaretRight /> <span className="abt-span">Listen to the employees feedback and suggestion</span>
                </li>
                <li className="abt3">
                  <FaCaretRight /> <span className="abt-span">Encourage creativity and innovations</span>
                </li>
                <li className="abt4">
                  <FaCaretRight /> <span className="abt-span">Provide excellent growth opportunities</span>
                </li>
              </ul>
              <p>With Techunison, you can build a fulfilling career in technology; working on cutting-edge technologies like cloud, mobility, to manage some of the most complex projects for international organizations. We are a fast-growing and future-ready technology provider. We also offer opportunities to work with unique and unexplored challenges.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="consecpage">
        <Container>
          <Row>
            <Col sm={6}>
              <h3>Our Culture</h3>
              <p>Values of our HR Management Systems:</p>
              <ul className="career">
                <li className="abt1">
                  <FaCaretRight /> <span className="abt-span">Relationship built on trust</span>
                </li>
                <li className="abt1">
                  <FaCaretRight /> <span className="abt-span">Creating our team culture</span>
                </li>
                <li className="abt1">
                  <FaCaretRight /> <span className="abt-span">People-centric environment</span>
                </li>
                <li className="abt1">
                  <FaCaretRight /> <span className="abt-span">Achieve work quality</span>
                </li>
              </ul>
            </Col>
            <Col sm={6}>
              <img src="img/banner/culture.png" alt="Culture Banner" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Careers;
