import React from 'react';

const Team = () => (
  <>
    <div className="section-divider">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block',width:'100%',height:'60px'}}><path fill="rgba(255,167,0,0.8)" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path></svg>
    </div>
    <div id="team" className="team-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
              <h6>Our Team</h6>
              <h4>Meet Our Team of <em>Innovators</em></h4>
              <div className="line-dec"></div>
            </div>
          </div>
        </div>
        <div className="row team-grid">
          <div className="col-lg-4 col-md-6">
            <div className="team-member wow fadeInUp" data-wow-delay="0.1s">
              <div className="member-img">
                <img src="assets/images/nour1.png" alt="Nour Akkad" />
              </div>
              <div className="member-info">
                <h3>Nour Akkad</h3>
                <span>CEO</span>
                <p>Leading innovation and strategic development</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-member wow fadeInUp" data-wow-delay="0.3s">
              <div className="member-img">
                <img src="assets/images/anas.png" alt="Anas Omari" />
              </div>
              <div className="member-info">
                <h3>Anas Omari</h3>
                <span>COO</span>
                <p>Driving growth and business development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Team; 