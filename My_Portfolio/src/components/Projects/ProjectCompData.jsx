import React, { createContext, useContext } from 'react';
import "./Projects.css"

const DataContext = createContext();

const ProjectComp = ({ children }) => {
    const data = [
        {
            head: 'RPI Investment Project',
            image: '/rpi.png',
            link: 'https://rpi.sectrage.io/rpis/',
            techUsed: "React js, Javascript, Html, CSS",
            description:"This is an investment project in that user can invest money and after perticular time they recived some extra amount over an invested amount. In this we have an system to contract within company and user related that investment. "
        },
        {
            head: 'React Blog Project',
            image: '/reactblog.png',
            link: 'https://paresh-blog-project.netlify.app/',
             techUsed: "React js, Javascript, Html, CSS",
              description:"This is an React blog project, This project "
        },
        {
            head: 'Ecommerce Project',
            image: '/ecom.png',
            link: 'https://paresh-ecommerce-project.netlify.app/',
             techUsed: "React, Node js, Express js, Javascript, Html, CSS",
             description: ""
        },
        {
            head: 'TODO App JS',
            image: '/todoApp.png',
            link: 'https://paresh09pat.github.io/TodoAppJS/',
             techUsed: "Javascript, Html, CSS, BootStrap",
             description: ""
        },
        {
            head: 'Digital Clock Project',
            image: '/digitalclock.png',
            link: 'https://paresh09pat.github.io/digitalclock/',
            techUsed: "Javascript, Html, CSS, BootStrap",
             description:""
        }
    ];

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

const useData = () => {
    return useContext(DataContext);
};

export { ProjectComp, useData };
