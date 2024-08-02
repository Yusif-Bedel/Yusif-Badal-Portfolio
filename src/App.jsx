
import React, { useRef, useState } from 'react';
import './App.css'; // Ensure you have this CSS file to style the component
import { useEffect } from 'react';
import Typed from 'typed.js';
import men1 from './assets/men1.jpg'
import men2 from './assets/github.jpg'
import firstsite from './assets/firstsite.png'
import secondsite from './assets/secondsite.png'

const App = () => {
  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ["HTML & CSS Developer", "Javascript Developer", "React Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 650,
      loop: true
    };

    const typed = new Typed(".text", options);

    // Cleanup function to destroy Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const bars = document.querySelectorAll('.progress-line span');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-progress');
            progressBar.style.width = `${width}%`;
            observer.unobserve(progressBar);
          }
        });
      },
      { threshold: 0.2 } // Trigger when at least 20% of the section is in view
    );

    bars.forEach((bar) => {
      observer.observe(bar);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <a href="#" className="logo">Yusif Badal</a>
        <nav className="navbar">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className='bx bx-menu bx-flip-vertical'></i>
          </label>
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#skills-section">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main">
        {/* Home Section */}
        <section className="home" id="home">
      <div className="home-image">
        <img style={{borderRadius:"33%"}} width={"400px"} height={"400px"} src={men1} alt="Home Background" />
      </div>
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Yusif</h1>
        <h3>
          Innovative <span style={{color:"cyan"}} className="text"></span>
        </h3>
        <div className="home-sci">
          <a href="https://www.linkedin.com/in/yusif-b%C9%99d%C9%99l-1b7767308/" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/Yusif-Bedel" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github'></i>
          </a>
        </div>
        <a href="#about" className="btn-box">More About Me</a>
      </div>
    </section>

        {/* About Section */}
        <section className="about" id="about">
  <img style={{ borderRadius: "33%" }} width={"370px"} src={men2} alt="Profile Picture" />
  <div className="about-text">
    <h2>About <span>Me</span></h2>
    <h4>Front-End Developer</h4>
    <p>I am a dedicated front-end developer with a strong foundation in HTML5, CSS3, and JavaScript, complemented by my experience with React.js and various UI frameworks like Bootstrap. My primary focus is on creating visually appealing and highly interactive user interfaces that provide an exceptional user experience.</p>
    <p>In addition to my front-end skills, I have a solid understanding of the MERN stack, including Express.js, Mongoose, and Node.js. This knowledge enables me to collaborate effectively with back-end developers and contribute to full-stack projects, although my passion lies in front-end development.</p>
    <p>My projects include developing responsive websites and web applications, where I strive to merge creativity with functionality. I am constantly exploring new trends and technologies to enhance my skills and deliver innovative solutions that meet user needs and exceed expectations.</p>
    <p>I enjoy working in dynamic environments and thrive on challenges that push my abilities to the next level. If you're looking for a developer who can bring your vision to life with a keen eye for design and a deep understanding of modern web technologies, I'm here to help.</p>
    <a href="#services" className="btn-box">More About Me</a>
  </div>
</section>


        {/* Services Section */}
        <section className="services" id="services">
          <div className="container">
            <h1 className='sub-title'>My <span>Services</span></h1>
            <div className="services-list">
              <div>
                <i className='bx bxl-html5' style={{ color: '#00eeff' }}></i>
                <i className='bx bxl-css3' style={{ color: '#00eeff' }}></i>
                <i class='bx bxl-react' style={{ color: '#00eeff' }}></i>
                <h3>Frontend Development:</h3>
                <ul>
                  <li>Responsive web design using HTML5 and CSS3.</li>
                  <li>Interactive and dynamic user interfaces with JavaScript and React.js.</li>
                </ul>
              </div>
              <div>
                <i className='bx bxl-nodejs' style={{ color: '#00eeff' }}></i>
                <i className='bx bxl-express' style={{ color: '#00eeff' }}></i>
                <h3>Backend Development:</h3>
                <ul>
                  <li>RESTful API development with Express.js and Node.js.</li>
                  <li>Database management with Mongoose and MongoDB.</li>
                </ul>
              </div>
              <div>
                <i className='bx bxl-bootstrap' style={{ color: '#00eeff' }}></i>
                <h3>UI/UX Design:</h3>
                <ul>
                  <li>Designing user-friendly and visually appealing interfaces with Bootstrap.</li>
                  <li>Custom styling and responsive design to meet user needs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

       {/* Skills Section */}
       <section className="skills animate-on-scroll" id="skills-section" ref={sectionRef}>
      <div className="container1">
        <h1 className='sub-title'>Technical <span>Skills</span></h1>
        <div className="technical-bar">
          <div className="bar">
            <i className='bx bxl-html5' style={{ color: '#c95d2e' }}></i>
            <div className="info"><span>HTML5</span></div>
            <div className={`progress-line html ${isVisible ? 'animate' : ''}`}>
              <span data-progress="90" className="percentage"></span>
            </div>
          </div>
          <div className="bar">
            <i className='bx bxl-css3' style={{ color: '#147bbc' }}></i>
            <div className="info"><span>CSS3</span></div>
            <div className={`progress-line css ${isVisible ? 'animate' : ''}`}>
              <span data-progress="90" className="percentage"></span>
            </div>
          </div>
          <div className="bar">
            <i className='bx bxl-sass' style={{ color: '#cc6699' }}></i>
            <div className="info"><span>Sass</span></div>
            <div className={`progress-line sass ${isVisible ? 'animate' : ''}`}>
              <span data-progress="90" className="percentage"></span>
            </div>
          </div>
          <div className="bar">
            <i className='bx bxl-javascript' style={{ color: '#f0db4f' }}></i>
            <div className="info"><span>JavaScript</span></div>
            <div className={`progress-line js ${isVisible ? 'animate' : ''}`}>
              <span data-progress="70" className="percentage"></span>
            </div>
          </div>
          <div className="bar">
            <i className='bx bxl-react' style={{ color: '#61dafb' }}></i>
            <div className="info"><span>React</span></div>
            <div className={`progress-line react ${isVisible ? 'animate' : ''}`}>
              <span data-progress="80" className="percentage"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      {/* Projects Section */}
      <section className="projects animate-on-scroll">
        <div id="portfolio">
          <h2 className='sub-title'>Latest <span>Projects</span></h2>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} className="portfolio-content">
            <div className="row">
              <img src={firstsite} alt="Project 1"/>
              <div className="layer">
                <h5>FURN site</h5>
                <p>Developed a responsive and interactive portfolio website that you can like,search,add and also buy furniture.Created with React.js,Node.js,Express.js</p>
                <a href="https://furn1.netlify.app/" target='_blank'><i className='bx bx-link-external'></i></a>
              </div>
            </div>
            <div className="row">
              <img src={secondsite} alt="Project 1"/>
              <div className="layer">
                <h5>Weather condition site</h5>
                <p>Developed HTMl,CSS and Javascript.In this site you can learn weather condition about your city.this site is written with API.</p>
                <a href="https://weather-conditions-api.netlify.app/" target='_blank'><i className='bx bx-link-external'></i></a>
              </div>
            </div>
            {/* Additional projects */}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="contact animate-on-scroll" id="contact">
        <div className="contact-text">
          <h2>Contact <span>Me</span></h2>
          <h4>Let's Work Together</h4>
          <p style={{fontSize:"18px"}}>I'm always excited to connect with fellow tech enthusiasts and potential collaborators. Let's discuss how we can innovate together!</p>
          <div className="contact-list">
            <li style={{fontSize:"20px"}}><i className='bx bxs-send'></i> yusifbedel01@gmail.com</li>
            <li style={{fontSize:"20px"}}><i className='bx bxs-phone'></i> whatsapp: (+994) 077-305-88-78</li>
          </div>
          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/yusif-b%C9%99d%C9%99l-1b7767308/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square'></i></a>
            <a href="https://www.instagram.com/yusif_bedel" target="_blank" rel="noopener noreferrer"><i class='bx bxl-instagram'></i></a>
            <a href="https://github.com/Yusif-Bedel" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="last-text">
        <p>Developed with love by Yusif © 2024</p>
      </footer>
      </main>
    </div>
  );
};

export default App;
