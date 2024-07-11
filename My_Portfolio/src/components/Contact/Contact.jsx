import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";
import { Icon } from '@iconify/react';

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    contact: "",
    message: ""
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact)
      });

      if (response.ok) {
        setContact({
          username: "",
          email: "",
          contact: "",
          message: ""
        });
        toast.success("Your message was received");
      } else {
        toast.error("Your message was not able to be sent");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="contactMain-container">
          <h1 className='getintouch'>Connect With Me <Icon className='rock' icon="fxemoji:rocket" /></h1>
          <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label"> Name: </label>
                <input
                  onChange={handleChange}
                  value={contact.username}
                  placeholder='Enter Full Name'
                  name='username'
                  type='text'
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label"> Email: </label>
                <input
                  onChange={handleChange}
                  value={contact.email}
                  placeholder='Enter Email'
                  name='email'
                  type='email'
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label"> Contact Number: </label>
                <input
                  onChange={handleChange}
                  value={contact.contact}
                  placeholder='Enter Contact Number'
                  name='contact'
                  type='number'
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label"> Message: </label>
                <textarea
                  onChange={handleChange}
                  value={contact.message}
                  placeholder='Enter Message'
                  name='message'
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="form-button">Submit</button>
            </form>
            <ToastContainer />
          </div>
        </div>

        <div className="follow-container">
          <h1 className='fallowme'>Follow Me On </h1>
          <div className='logo_main'>
            <div className='logo_sub'>
              <a href='https://github.com/Paresh09pat' target='_blank'><Icon icon="mdi:github" style={{ color: "white", fontSize: "50px" }} /></a>
            </div>
            <div className='logo_sub'>
              <a href='https://www.linkedin.com/in/paresh-patil-6bb7231a3/' target='_blank'><Icon icon="devicon:linkedin" style={{ fontSize: "50px" }} /></a>
            </div>
            <div className='logo_sub'>
              <a href='https://x.com/home' target='_blank'><Icon icon="logos:twitter" style={{ fontSize: "50px" }} /></a>
            </div>
            <div className='logo_sub'>
              <a href='https://www.instagram.com/pareshpatil2411/' target='_blank'><Icon icon="skill-icons:instagram" style={{ fontSize: "50px" }} /></a>
            </div>
            <div className='logo_sub'>
              <a href='https://www.facebook.com/paresh.patil.71697' target='_blank'><Icon icon="logos:facebook" style={{ fontSize: "50px" }} /></a>
            </div>
            <div className='logo_sub'>
              <a href='https://stackoverflow.com/users/20298392/paresh-patil' target='_blank'><Icon icon="devicon:stackoverflow" style={{ fontSize: "50px" }} /></a>
            </div>
          </div>

          <div className='contactMe'> Contact Me On Gmail : <a href="mailto: 09patilparesh@gmail.com">Click Here To Mail</a></div>
          <div className='contactMe'> Call Me  : <a href="tel: 8007988089">Click Here To Call Me</a></div>
        </div>
      </div>

    </>
  );
}

export default Contact;
