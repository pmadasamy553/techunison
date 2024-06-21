import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
  return (   
     <>
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
    <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/banner1.jpg" class="d-block w-100" alt="banner1" />
      <div class="carousel-caption">
        <h1><span>Specialist in<br/> Oracle JD Edwards</span></h1>
        <div class="banner_animate">
          <h3><span>Innovation | Customer Focused | Perfection</span></h3>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img/banner2.jpg" class="d-block w-100" alt="banner2" />
      <div class="carousel-caption">
        <h1><span>Specialist in<br/> Data Science</span></h1>
        <div class="banner_animate">
          <h3><span>Innovation | Customer Focused | Perfection</span></h3>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img/banner3.jpg" class="d-block w-100" alt="banner3" />
      <div class="carousel-caption">
        <h1><span>Specialist in<br/> Custom Application Development</span></h1>
        <div class="banner_animate">
          <h3><span>Innovation | Customer Focused | Perfection</span></h3>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>




      <section className="slider2" id="slide2">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2>OUR KEY SERVICES </h2>
              <p>Techunison is your trusted partner for Oracle JDE Enterprise application services and bolt-on application development for more than 20 years. Techunison is known for its distinguished technology, talents and trends to foresee the client requirement and process the best expected outcome. We are a 100% focused delivery organization with Customer Service as our prime motive. We bridge the gap between the implementation and client needs by providing an innovative solution with current trends and technologies. We challenge ourselves </p>
              <ul className="fa_icon">
                <li><i className="fa fa-globe"></i>Oracle JD Edwards EnterpriseOne Practice</li>
                <li><i className="fa fa-globe"></i>Bolt-On Product Development for Oracle JDEdwards</li>
                <li><i className="fa fa-globe"></i>Microsoft Dot Net Technology<br />
                  <small>(Windows Application Development & Web Application Development)</small></li>
                <li><i className="fa fa-globe"></i>Java J2EE Technology<br />
                  <small>( Application Development & Interface Tool Development)</small></li>
                <li><i className="fa fa-globe"></i>Enterprise Mobile Development</li>
                <li><i className="fa fa-globe"></i>Data Science<br />
                  <small>(Python Programming & Machine Learning)</small></li>
                <li><i className="fa fa-globe"></i>Gender Equality Program <br />
                  <small>(A concept towards Sustainability) </small></li>
              </ul>
            </div>
            <div className="col-sm-6 text-center">
              <div id="object" className="pulse"><br /><br />
                <img src="img/banner/services2.jpg" alt="services" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slider3" id="slide3">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2>THE INDUSTRY FOCUS</h2>
              <p>"Value Driven Digital Transformation"</p>
              <p>Techunison is an Inshore and Offshore Development Company working to reform the businesses across Industry. We perform 360-degree Experience to drive the theme of industrial cultures and portray your vision as a sophisticated IT service for your core business solutions.</p>
              <ul className="fa_icon">
                <li><i className="fa fa-briefcase"></i>Retail Business</li>
                <li><i className="fa fa-thumbs-up"></i> Manufacturing</li>
                <li><i className="fa fa-recycle"></i> Electronics Waste Recycling Business</li>
                <li><i className="fa fa-thumbs-up"></i> Health Care - Genomics (Data Sequencing)</li>
              </ul>
            </div>
            <div className="col-sm-6 text-center">
              <div id="object" className="pulse"><img src="img/banner/industrial.jpg" alt="industrial focus" /></div>
            </div>
          </div>
        </div>
      </section>


      <section class="slider4" id="slide4">
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <h2>TECHNOLOGY TOUCH</h2>
        <p>"Where Creativity Meets Technology"</p>
        <p>Techunison Supports various global industry leaders to flourish in their associated world and see the fresh challenges. We are reinventing the methods that technology benefits the business in the global market.</p>
        <ul>
          <li> <i class="fa fa-globe"></i> Dot Net Development </li>
          <li> <i class="fa fa-globe"></i> Java Development </li>
          <li> <i class="fa fa-globe"></i> Python & R </li>
          <li> <i class="fa fa-globe"></i> Machine Learning </li>
          <li> <i class="fa fa-globe"></i> SQL & NoSQL </li>
          <li> <i class="fa fa-globe"></i> Apache Spark & Hadoop </li>
          <li> <i class="fa fa-globe"></i> Azure Cloud </li>
          <li> <i class="fa fa-globe"></i> AWS Cloud </li>
          <li> <i class="fa fa-globe"></i> iOS App Development </li>
          <li> <i class="fa fa-globe"></i> Android App Development </li>
        </ul>
      </div>
      <div class="col-sm-6 text-center">
      <div id="object" class="pulse"><img src="img/kowlo.png" alt="img"/></div>

      </div>
    </div>
  </div>
</section>

<section class="slider2" id="slide10">
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <h2>DATA SCIENCE PRACTICE</h2>
        <p>Our Data science professionals understand the business of customers and analysis the large amount of data in order to uncover useful intelligence of their organizations, our team of data scientists and Data Science Analyst, master the full spectrum of the data science life cycle and possess a level of flexibility and understanding to maximize returns at each phase of the process.</p>
        <ul>
          <li> <i class="fa fa-globe"></i> Data Acquisition <br/></li>
          <li> <i class="fa fa-globe"></i> Data Warehousing <br/></li>
          <li> <i class="fa fa-globe"></i> Data Cleansing <br/></li>
          <li> <i class="fa fa-globe"></i> Data Staging <br/></li>
          <li> <i class="fa fa-globe"></i> Data Mining <br/></li>
          <li> <i class="fa fa-globe"></i> Data Modeling <br/></li>
          <li> <i class="fa fa-globe"></i> Predictive Analysis <br/><small>(Machine Learning)</small> </li>
          <li> <i class="fa fa-globe"></i> Data Reporting <br/><small>(Tableau)</small> </li>
          <li> <i class="fa fa-globe"></i> Support & maintenance </li>
          <li> <i class="fa fa-globe"></i> Data Visualization </li>
          <li> <i class="fa fa-globe"></i> Decision Making </li>
        </ul>
      </div>
      <div class="col-sm-6 text-center">
        <div id="object" class="pulse"><br/><img src="img/banner/data-science.jpg" width="100%" alt="Data Science Banner"/></div>
      </div>
    </div>
  </div>
</section>



<section class="slider5" id="slide5">
  <div class="container">
    <div class="row">
      <div class="col-sm-5">
        <h2>TECHUNISON STRENGTH </h2>
        <p>"We Push the Limits of Perfection"</p>
        <p>We focus on solving critical business challenges that cross functional areas and provide the highest value for our clients. Our people are truly what sets us apart. </p>
        <ul>
          <li> <i class="fa fa-angle-right"></i> Over 18 years of JDE implementation</li>
          <li> <i class="fa fa-angle-right"></i> On-time project delivery</li>
          <li> <i class="fa fa-angle-right"></i> Standard process</li>
          <li> <i class="fa fa-angle-right"></i> Easy Customization</li>
          <li> <i class="fa fa-angle-right"></i> Passion for Technology & knowledge</li>
          <li> <i class="fa fa-angle-right"></i> 24/7 Availability</li>
          <li> <i class="fa fa-angle-right"></i> High Quality Result</li>
        </ul>
      </div>
      <div class="col-sm-3 text-center">
        <div class="wpb_wrapper">
          <div class="section5 mobile-tech-create tech-create"> 
            <img class="tec1 tossing" title="On-time project delivery" src="img/tech1.png" alt="On-time project delivery" /><br/>
            <img class="tec2 tossing" title="Varied technology execution" src="img/tech2.png" alt="Varied technology execution" /><br/>
            <img class="tec3 tossing" title="Unique standard process" src="img/tech3.png" alt="Unique standard process"/><br/>
            <img class="tec4 tossing" title="24/7 availability" src="img/tech4.png" alt="24/7 availability" /><br/>
            <img class="tec5 tossing" title="High quality result" src="img/tech5.png" alt="High quality result"/><br/>
            <img class="tec6 tossing" title="Straightforwardness in communication" src="img/tech6.png" alt="Straightforwardness in communication"/><br/>
            <img class="tec7 tossing" title="Well-timed support" src="img/tech7.png" alt="Well-timed support" />
          </div>
          <img class="tec8 tossing" title="Well-timed support" src="img/tech7.png" alt="Well-timed support" />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="slider9" id="slide9">
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <h2 class="text-uppercase">Sustainability Development goal</h2>
        <p>Gender Equality is our long-established priority and is also an integral part of our sustainability strategy</p>
        <p>Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision making in Techunison</p><br/>
        <h3>EQUALITY</h3>
        <p> No individual and no nation must be denied the opportunity to benefit from development. The equal rights and opportunities of women and men must be assured. </p>
      </div>
      <div class="col-sm-6 text-center">
        <div id="object" class="pulse"><img src="img/banner/hand-holding-a-city.jpg" alt="Hand holding a city" /></div>
      </div>
    </div>
  </div>
</section>
</>
   
  );
}

export default Home;
