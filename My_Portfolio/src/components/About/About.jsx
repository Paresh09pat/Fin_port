import React from 'react'
import "./About.css"
import { Icon } from '@iconify/react';

function About() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/paresh_resume.pdf";
    link.download = 'Paresh_Patil_Resume.pdf';
    link.click();
  };

  return (
    <>
      <div id="whole_main">
        <div className="main_div">
          <div className="section_first"></div>

          <div className="section_second">
            <div className="Info_div">
              <h1 className="head_text">Hello Everyone !!</h1>

              <div className="text_div">
                <p className="text_only">I'm Paresh Balu Patil, a passionate and driven Full Stack Web Developer with 1 year and 8 months of experience in the industry. My journey in web development began with a deep-seated fascination for creating dynamic and responsive web applications, which has grown into a comprehensive skill set encompassing both front-end and back-end technologies.</p>
                <p className="text_only">I thrive on challenges and constantly set goals for myself to continually push my limits. I’m not content with settling, and I am always looking for an opportunity to do better and achieve greatness.</p>
              </div>

              <div>
                <h1 className="head_text2">What I Value</h1>
                <p className="text_only">I believe in the power of innovation, collaboration, and integrity and strive to infuse these principles into every project I undertake. My approach is user-centered and creatively inspired, ensuring that my work not only meets but exceeds expectations.</p>
              </div>

              <div>
                <h1 className="head_text2">A Little More About Me</h1>
                <p className="text_only">When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes, or volunteering at local shelters. I believe that a well-rounded life enhances creativity and productivity, bringing fresh perspectives to my professional endeavors.</p>
              </div>

              <div className='myresume' onClick={handleDownload}>
                <p className='resumelink' >
                  <Icon className='upload_icon' icon="ic:outline-cloud-upload" style={{ color: "#778fa8" }} />
                  <span className='resumetext'>Get Resume</span>
                </p>
              </div>
            </div>



          </div>
        </div>

      </div>
    </>
  )
}

export default About