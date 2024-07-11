import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import './Home.css';

const Home = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const toRotate = [
        "A Full Stack Developer",
        "I Love to Develop.",
        "I am Creative.",
    ];
    const period = 100;

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % toRotate.length;
            const fullText = toRotate[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), period);
                setTypingSpeed(50);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(150);
            } else if (isDeleting) {
                setTypingSpeed(100);
            }
        };

        const timer = setTimeout(() => handleType(), typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, typingSpeed, loopNum, toRotate, period]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "/paresh_resume.pdf";
        link.download = 'Paresh_Patil_Resume.pdf';
        link.click();
    };

    return (
        <div className="home-container">
            <div className="text-section">
                <div className="com_adjust">
                    <div className='iam'>I'M</div>
                    <div className="name">
                        PARESH BALU PATIL
                    </div>

                    <h2 className="title">
                        {text}
                        <span className="cursor"></span>
                    </h2>
                    <p className="description">
                        I am a dedicated and passionate web developer with a focus on creating dynamic and responsive web applications. My skills include Html, Css, JavaScript, React js, Node.js,Mongodb and more. Let's work together to build something amazing.
                    </p>

                    <div className='myresume1' onClick={handleDownload}>
                        <p className='resumelink' >
                            <Icon className='upload_icon' icon="ic:outline-cloud-upload" style={{ color: "white" }} />
                            <span className='resumetext1'>Get Resume</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="image-section">
                {/* <img src={profileImage} alt="Profile" className="profile-image" /> */}
            </div>
        </div>
    );
};

export default Home;
