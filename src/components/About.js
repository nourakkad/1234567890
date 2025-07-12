import React, { useState, useEffect } from 'react';
import { getTranslation } from '../translations';

const About = () => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (event) => {
      setCurrentLanguage(event.detail.language);
    };

    // Get initial language from URL or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get('lang');
    const langFromStorage = localStorage.getItem('language');
    
    if (langFromUrl && (langFromUrl === 'EN' || langFromUrl === 'AR')) {
      setCurrentLanguage(langFromUrl);
    } else if (langFromStorage && (langFromStorage === 'EN' || langFromStorage === 'AR')) {
      setCurrentLanguage(langFromStorage);
    }

    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  return (
  <>
    <div className="section-divider">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block',width:'100%',height:'60px'}}><path fill="rgba(255,167,0,0.8)" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80,192,80,96,80,48,80L0,80Z"></path></svg>
    </div>
    <div id="about" className={`about section ${currentLanguage === 'AR' ? 'rtl-about' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="about-left-image wow fadeInLeft about-image-desktop-margin" data-wow-duration="1s" data-wow-delay="0.5s">
                  <img src="assets/images/About us.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 align-self-center wow fadeInRight order-lg-2 order-1" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="about-right-content">
                  <div className="section-heading" style={{
                    textAlign: currentLanguage === 'AR' ? 'center' : 'left'
                  }}>
                    <h6 style={{
                      textAlign: currentLanguage === 'AR' ? 'right' : 'left'
                    }} 
                    className="about-subtitle"
                    >{getTranslation('aboutTitle', currentLanguage)}</h6>
                    <h4 
                      dangerouslySetInnerHTML={{
                        __html: currentLanguage === 'AR' 
                          ? 'من هو إيليبـ<em>تيك</em>' 
                          : 'Who is Elyp<em>tek</em>'
                      }}
                      style={{
                        textAlign: currentLanguage === 'AR' ? 'right' : 'left',
                        '@media (max-width: 768px)': {
                          textAlign: 'center'
                        }
                      }}
                      className="about-heading"
                    />
                    <div className="line-dec about-line" style={{
                      marginLeft: currentLanguage === 'AR' ? 'auto' : '0',
                      marginRight: currentLanguage === 'AR' ? '0' : '0'
                    }}></div>
                  </div>
                  <p>
                    {currentLanguage === 'AR' 
                      ? 'في إيليبتك، نؤمن أن النجاح الرقمي الحقيقي يبدأ بفكرة جريئة، وينمو من خلال استراتيجية ذكية، ويأتي إلى الحياة من خلال التنفيذ الخبير. نحن وكالة إبداعية متخصصة في التسويق الرقمي وتصميم المواقع والتطوير، نساعد العلامات التجارية على التميز والتفاعل والازدهار في عالم اليوم الرقمي سريع الخطى.'
                      : 'At Elyptek , we believe that true digital success begins with a bold idea , grows through smart strategy , and comes to life through expert execution . We are a creative agency specializing in digital marketing , website design , and development , helping brands stand out , engage , and thrive in today\'s fast-paced digital world .'
                    }
                  </p>
                  <p>
                    {currentLanguage === 'AR'
                      ? 'منذ إطلاقنا، تعاونا مع عملاء من مختلف الصناعات لتقديم حلول متكاملة تبدأ ببناء هوية رقمية قوية وتمتد إلى إنشاء مواقع ويب مؤثرة وحملات تسويقية محققة للنتائج.'
                      : 'Since our launch , we\'ve partnered with clients across various industries to deliver integrated solutions that start with building a strong digital identity and extend to creating impactful websites and result-driven marketing campaigns .'
                    }
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" style={{marginTop: '40px'}}>
          <div className="col-lg-8 text-center">
            <h5 style={{marginBottom: '24px', color: '#ffa700', fontWeight: '600'}}> 
              {currentLanguage === 'AR' ? 'تشمل خدماتنا:' : 'Our Services Include:'} 
            </h5>
            <div className="services-list">
              <div className="service-item">
                <i className="fas fa-users"></i>
                <span
                  dangerouslySetInnerHTML={{
                    __html: currentLanguage === 'AR' 
                      ? 'إدارة احترافية لصفحات <b>فيسبوك</b> و <b>إنستغرام</b>'
                      : 'Professional management of <b>Facebook</b> and <b>Instagram</b> pages'
                  }}
                />
              </div>
              <div className="service-item">
                <i className="fas fa-pen-nib"></i>
                <span>
                  {currentLanguage === 'AR'
                    ? 'كتابة محتوى إبداعي ونشر منشورات جذابة'
                    : 'Creative content writing and engaging post publishing'
                  }
                </span>
              </div>
              <div className="service-item">
                <i className="fas fa-lightbulb"></i>
                <span>
                  {currentLanguage === 'AR'
                    ? 'استراتيجيات أعمال مبتكرة مخصصة لاحتياجاتك'
                    : 'Innovative business strategies tailored to your needs'
                  }
                </span>
              </div>
              <div className="service-item">
                <i className="fas fa-laptop-code"></i>
                <span>
                  {currentLanguage === 'AR'
                    ? 'تطوير مواقع ويب متميزة تعكس رؤيتك'
                    : 'Development of standout websites that reflect your vision'
                  }
                </span>
              </div>
              <div className="service-item">
                <i className="fas fa-paint-brush"></i>
                <span>
                  {currentLanguage === 'AR'
                    ? 'حلول تسويقية شاملة، تشمل الملصقات والكتيبات والهوية البصرية والشعارات والتصميم'
                    : 'Comprehensive marketing solutions, including posters, brochures, visual identity, logos, and design'
                  }
                </span>
              </div>
            </div>
            <p style={{marginTop: '30px', fontSize: '16px', lineHeight: '1.6'}}>
              {currentLanguage === 'AR'
                ? 'نحن هنا لمساعدتك في نمو علامتك التجارية وتحقيق أهدافك. دعنا نعمل معاً لخلق شيء مذهل.'
                : 'We are here to help you grow your brand and achieve your goals. Let\'s work together to create something amazing.'
              }
            </p>
            <div className="row justify-content-center about-skills-row" style={{marginTop: '30px'}}>
              <div className="col-lg-4 col-sm-4">
                <div className="skill-item first-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                  <div className="progress" data-percentage="80">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      <div>
                        100%<br />
                        <span>{currentLanguage === 'AR' ? 'حلول مخصصة' : 'Tailored Solutions'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4">
                <div className="skill-item second-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                  <div className="progress" data-percentage="80">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      <div>
                        100%<br />
                        <span>{currentLanguage === 'AR' ? 'فريق خبير' : 'Expert Team'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4">
                <div className="skill-item third-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                  <div className="progress" data-percentage="80">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      <div>
                        100%<br />
                        <span>{currentLanguage === 'AR' ? 'الابتكار في القلب' : 'Innovation at Heart'}</span>
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

export default About; 