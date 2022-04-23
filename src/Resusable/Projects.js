import React from 'react';
import './Projects.css';

function Projects({img, text, title, tech, github, chain,  id}) {
  return (
    <div className={id % 2 !== 0 ? 'pro' : 'inverse-pro' }>
        <img src={img} alt='my projects display' />
        <div>
            <h3>{title}</h3>
            <p>
                {text}
            </p>

            <h3>{tech}</h3>
            <p className='stack'>HTML CSS  Tailwind CSS  React Js</p>

            <div className='proj-btn-container'>
              <button>
                <img src={chain} alt='btn-chain'/>
                <p>Link</p>
              </button>

              <button>
                <img src={github} alt='btn-github'/>
                <p>Github</p>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Projects