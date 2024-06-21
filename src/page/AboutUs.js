import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function aboutus() {
  return (
    <>

<section id="slide-1">
  <div id="demo-1" data-zs-src='["img/banner/about.jpg"]' data-zs-overlay="dots">
    <div class="demo-inner-content">
      <h2><span>About Us</span></h2>
    </div>
  </div>
</section>
<section class="consecpage">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center">
        <h1>About US</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p>Techunison was incorporated in the State of California, USA, in the year 2000.</p>
        <p> Techunison offers services in ERP Consultancy especially implementing and supporting JD Edwards Enterpriseone System. Techunisonis an emerging solution provider and a technology organization. Our core business is to provide Oracle JD Edwards Consulting, product development using enterprise Mobile Technology and develop custom applications.</p>
      </div>
    </div>
  </div>
  </section>

  <section className="consecpage" style={{ background: "#f1f1f1" }}>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <h3>Our Core Values:</h3>
        <br/>
        <ul>
          <li><i class="fa fa-caret-right"></i> Ensure customer satisfaction by honoring commitment at all times</li>
          <li><i class="fa fa-caret-right"></i> Transparent, Relationship and Mutual trust</li>
          <li><i class="fa fa-caret-right"></i> Provide a learning environment and Innovative thinking</li>
        </ul>
      </div>
      <div class="col-sm-6"> <img src="img/banner/core-values.png" alt='values' /> </div>
    </div>
  </div>
  </section>
  <section className="consecpage" style={{ background: "#f1f1f1" }}>
  <div class="container text-center">
    <div class="row">
      <div class="col-sm-4 text-center">
        <div class="vms"> <img src="img/banner/vison.jpg" alt='img' />
          <h3>Vision</h3>
          <p> Transform</p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="vms"> <img src="img/banner/misson.jpg" alt='img' />
          <h3>Mission </h3>
          <p>Highly focused in solutions and delivery with measurable timelines and business outcomes</p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="vms"> <img src="img/banner/value.jpg" alt='img' />
          <h3>Values </h3>
          <p>Innovation | Customer Focused | Perfection</p>
        </div>
      </div>
    </div>
  </div>
 </section>

 <section id="contact" className="consecpage" style={{ background: "url(img/banner/bgcont.jpg)", backgroundSize: "cover" }}>
<div class="contact-section">
 </div>
  </section>
<section className="consecpage" style={{ background: "#f1f1f1" }}>
  <div class="container ">
   <div class="row">
      
      <div class="col-sm-6">
        <h3>INDIA </h3>
        <p>No 77 Ganesh Nagar,<br/>
Third Street, GN Mills Post,<br/>
Coimbatore 641029<br/>
Landmark: Backside to Bharath Electronics and Appliances.</p>
      </div>
	  
	  <div class="col-sm-6">
        <h3>USA </h3>
        <p>4746 English pleasure drive<b/>
MASON<br/>
OHIO 45040</p>


      </div>
	  
	  
    </div>
  </div>
  
</section>


    </>
  );
}

export default aboutus;