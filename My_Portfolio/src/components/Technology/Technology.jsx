import React, { useState } from 'react'
import "./Technology.css"

function Technology() {

  const [activeSection, setActiveSection] = useState('experience');

  const showExperience = () => {
    setActiveSection('experience');
  };

  const showEducation = () => {
    setActiveSection('education');
  };

  return (
    <>
      <div id="whlesec_main">

        <div id='first_sec'>
          <h1 className='skillexp'>Skills & Experience</h1>
          <p className='extrainfo'>I'm a passionate web developer with a strong foundation in both <b>front-end and back-end development</b>. With a keen eye for design and a love for coding, I strive to create seamless and engaging web experiences. My journey in web development began from Jun 2022, and since then, I've honed my skills in various technologies and frameworks that is mentioned below.</p>

          <div className='com_div_textbar'>
            <div className='com_div_sec1'>
              <div className='text_percent'><p>HTML</p> <p>95%</p></div>
              <div class="progress">
                <div class="progress-value"></div>
              </div>
            </div>

            <div className='com_div_sec1'>
              <div className='text_percent'> <p>JAVASCRIPT</p> <p>90%</p></div>
              <div class="progress">
                <div class="progress-value1 color1"></div>
              </div>
            </div>

            <div className='com_div_sec1'>
              <div className='text_percent'><p>NODE JS / EXPRESS JS</p> <p>85%</p></div>
              <div class="progress">
                <div class="progress-value2 color2"></div>
              </div>
            </div>

            <div className='com_div_sec1'>
              <div className='text_percent'><p>CSS</p> <p>95%</p></div>
              <div class="progress">
                <div class="progress-value color3"></div>
              </div>
            </div>

            <div className='com_div_sec1'>
              <div className='text_percent'><p>REACT JS</p> <p>90%</p></div>
              <div class="progress">
                <div class="progress-value1 color4"></div>
              </div>
            </div>

            <div className='com_div_sec1'>
              <div className='text_percent'><p>MONGO DB</p> <p>85%</p></div>
              <div class="progress">
                <div class="progress-value2 color5"></div>
              </div>
            </div>
          </div>

        </div>

        <div id='second_sec'>
          <div className="portfolio">
            <div className='btncommon'>
              <button
                onClick={showExperience}
                className={`btn ${activeSection === 'experience' ? 'active' : ''}`}
              >
                Experience
              </button>
              <button
                onClick={showEducation}
                className={`btn ${activeSection === 'education' ? 'active' : ''}`}
              >
                Education
              </button>
            </div>

            {activeSection === 'experience' && (
              <div className="section">
                <h2>Technical Experience</h2>
                <h3>Web Developer at Redphantom Tech Novelty, Pune</h3>
                <p className='color_date'>May 2023 to Present</p>
                <ul>
                  <li>Developed and maintained web applications using modern frameworks.</li>
                  <li>Collaborated with designers and product managers to create intuitive user interfaces.</li>
                  <li>Optimized applications for maximum speed and scalability.</li>
                  <li>Creating an user friendly system that is simple to use and secure as well.</li>
                </ul>
                <h3>Trainee Web Developer at Prepbytes, Gurgaon</h3>
                <p className='color_date'>Jun 2022 to Mar 2023 ( 9 month's )</p>
                <ul>
                  <li>Delivered high-quality web solutions to a diverse range of clients.</li>
                  <li>Managed projects from concept to completion, ensuring client satisfaction.</li>
                  <li>During this I learn lot of new technology as well as work on the implementation of that technologies.</li>
                </ul>
              </div>
            )}

            {activeSection === 'education' && (
              <div className="section">
                <h2> My Education</h2>
                <div className='sect_deg'>
                  <h2>Bachelor's Degree ( B.E )</h2>
                  <h3>Indira College of Engineering and Management, Pune</h3>
                  <h4>University : Savitribai Phule Pune University, Pune</h4>
                  <p>CGPA / SGPA : 6.96</p>
                  <p>Passing year : 2020</p>
                </div>

                <div>
                  <h2> Diploma ( polytechnic ) </h2>
                  <h3>SMT. Sharachhandrika Suresh Patil Institute of Technology ( polytechnic ) , Chopda</h3>
                  <h4>University : MSBTE , Mumbai</h4>
                  <p>Percentage : 71.41 %</p>
                  <p>Passing year : 2017</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  )
}

export default Technology