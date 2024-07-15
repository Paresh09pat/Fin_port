// DataComponent.js
import React from 'react';
import { useData } from './ProjectCompData';
import "./Projects.css"
import { Icon } from '@iconify/react';

const Projects = () => {
  const data = useData();

  return (
    <>

      <div className='whole_main_pro'>
        <h1 className='myprojects'><Icon icon="logos:react" /> My Projects <Icon icon="logos:react" /></h1>

        <div id="main_card_item">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <img className='image_section' src={item.image} alt={item.head} />
              <div className="overlay">
                <div className='discrip_div'>
                  <p><span className='text_clr'>Title :</span> {item.head}</p>
                  <p> <span className='text_clr'>Technology Used :</span> {item.techUsed}</p>
                  <p> <span className='text_clr'>Description :</span> {item.description}</p>
                </div>

                <div className='btn_positioning'>
                  <p className="btnnn"><a target='_blank' href={item.link}><Icon className='linkicon' icon="fluent-emoji-high-contrast:link" /></a></p>
                  <p className="btnnn"><a target='_blank' href={item.gitLink}><Icon className='linkicon' icon="mdi:github" style={{ color: "#FFC448" }} /> </a></p>
                </div>
              </div>
            </div>
          ))
          }
        </div >
      </div>


    </>
  );
};

export default Projects;


// <div  className='com_div'>
//   <div className='com_subdiv1'>
//     <img className='image_section' src={item.image} alt={item.head} />
//   </div>

//   <div className='com_subdiv2'>
//     <h2 className='head'>{item.head}</h2>

//     <p className='text_size'>Technolgy Used : {item.techUsed}</p>

//     <p className='text_size disc'>Description : <span style={{fontSize:"16px"}}>{item.description}</span></p>

//     <a className='projectlink' target='_blank' href={item.link}>Live Project Demo</a>
//   </div>
// </div>