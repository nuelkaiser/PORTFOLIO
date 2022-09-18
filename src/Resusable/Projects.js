import React from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



function Projects({img, text, title, tech, github, chain,  id, p, link, view}) {



  return (
    <div className={id % 2 !== 0 ? 'pro' : 'inverse-pro' } >
        <img className='img' src={img} alt='my projects display' data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-duration="7000"/>
        <div  data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-duration="7000">
            <h3 className='title-header'>{title}</h3>
            <p className='title-p'>
                {text}
            </p>

            <h3 className='tech-header'>{tech}</h3>
            <p className='stack'>{p}</p>

            <div className='proj-btn-container'>
              <button>
                <img src={chain} alt='btn-chain'/>
                <a href={view}>Link</a>
              </button>

              <button>
                <img src={github} alt='btn-github'/>
                <a href={link}>Github</a>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Projects