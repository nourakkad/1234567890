import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 0,
      title: "Software",
      icon: "fas fa-code",
      content: {
        title: "Software Development",
        description: "At Elyptek, we create tailored solutions that align perfectly with your needs, from concept to deployment. Our experienced team of developers specializes in crafting robust software to empower your business.",
        features: [
          "Custom Software Solutions",
          "Scalable Architecture", 
          "User-Centric Design",
          "Cross-Platform Compatibility",
          "Continuous Updates & Support",
          "Advanced Technology Integration"
        ],
        quote: "Your Software, Your Way",
        image: "assets/images/Software-Development.png"
      }
    },
    {
      id: 1,
      title: "Application",
      icon: "fas fa-laptop",
      content: {
        title: "Application Development",
        description: "Transform your app idea into reality with our application development services. We build engaging mobile and desktop applications that solve real-world problems and captivate users with innovative features.",
        features: [
          "Cross-Platform Compatibility",
          "Intuitive User Experience",
          "Regular Feature Updates",
          "Seamless App Store Deployment",
          "Performance Optimization",
          "Scalable App Architecture"
        ],
        quote: "Your App, Our Expertise",
        image: "assets/images/Application-Development.png"
      }
    },
    {
      id: 2,
      title: "Website",
      icon: "fas fa-globe",
      content: {
        title: "Website Development",
        description: "Elevate your online presence with our expert web development services. We design and build responsive, engaging websites, from personal blogs to complex e-commerce platforms, tailored to drive results.",
        features: [
          "Mobile-Responsive Design",
          "User-Centric Interfaces",
          "SEO Optimization",
          "E-commerce Functionality",
          "Content Management Systems",
          "Enhanced Security Features"
        ],
        quote: "Your Website, Your Online Identity",
        image: "assets/images/Website-Development.png"
      }
    },
    {
      id: 3,
      title: "Marketing",
      icon: "fas fa-bullhorn",
      content: {
        title: "Digital Marketing",
        description: "Boost your brand's visibility with our comprehensive digital marketing solutions. Our data-driven campaigns, engaging content, and creative strategies connect you with your audience and deliver measurable results.",
        features: [
          "Targeted Social Media Campaigns",
          "High-Quality Content Creation",
          "Strategic Brand Development",
          "SEO & SEM Expertise",
          "Effective Email Marketing",
          "Detailed Analytics & Reporting"
        ],
        quote: "Your Brand, Our Mission",
        image: "assets/images/Marketing.png"
      }
    },
    {
      id: 4,
      title: "Graphic",
      icon: "fas fa-paint-brush",
      content: {
        title: "Graphic Design",
        description: "Transform your brand's visual identity with our graphic design services. We create stunning, memorable designs for logos, marketing materials, and more, ensuring your brand leaves a lasting impression.",
        features: [
          "Unique Brand Identity Design",
          "Custom Graphic Creations",
          "Print and Digital Media Design",
          "Creative Design Consultation",
          "Versatile File Format Support",
          "Iterative Revision Process"
        ],
        quote: "Designing Creativity, Delivering Impact",
        image: "assets/images/Graphic-Designing.png"
      }
    }
  ];

  return (
    <>
      <div className="section-divider">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block',width:'100%',height:'60px'}}><path fill="rgba(255,167,0,0.8)" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path></svg>
      </div>
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h6>Our Services</h6>
                <h4>Our Comprehensive <em>Services</em></h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <div className="menu">
                          {services.map((service, index) => (
                            <div 
                              key={service.id}
                              className={index === activeTab ? 'active' : ''}
                              onClick={() => setActiveTab(index)}
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="thumb">
                                <span className="icon"><i className={service.icon}></i></span>
                                {service.title}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="service-content-wrapper">
                        <div className="service-tab-card">
                          <div className="service-tab-image">
                            <img src={services[activeTab].content.image} alt={services[activeTab].content.title} />
                          </div>
                          <div className="service-tab-content">
                            <h4>{services[activeTab].content.title}</h4>
                            <p>{services[activeTab].content.description}</p>
                            <div className="ticks-list">
                              {services[activeTab].content.features.map((feature, index) => (
                                <span key={index}>
                                  <i className="fa fa-check"></i> {feature}
                                </span>
                              ))}
                            </div>
                            <p><em>"{services[activeTab].content.quote}"</em></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Services;