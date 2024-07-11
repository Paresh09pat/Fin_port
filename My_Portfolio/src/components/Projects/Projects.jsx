// DataComponent.js
import React from 'react';
import { useData } from './ProjectCompData';
import "./Projects.css"
import { Icon } from '@iconify/react';

const Projects = () => {
  const data = useData();

  return (
    <div className='whole_main_pro'>
      <h1 className='myprojects'><Icon icon="logos:react" /> My Projects <Icon icon="logos:react" /></h1>
      {data.map((item, index) => (
        <div key={index} className='com_div'>
          <div className='com_subdiv1'>
            <img className='image_section' src={item.image} alt={item.head} />
          </div>

          <div className='com_subdiv2'>
            <h2 className='head'>{item.head}</h2>

            <p className='text_size'>Technolgy Used : {item.techUsed}</p>

            <p className='text_size disc'>Description : <span style={{fontSize:"16px"}}>{item.description}</span></p>

            <a className='projectlink' target='_blank' href={item.link}>Live Project Demo</a>
          </div>
        </div>
      ))
      }
    </div >
  );
};

export default Projects;
