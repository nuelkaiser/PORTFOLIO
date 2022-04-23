import React from 'react';
import Orange from '../Images/Orange-GTP.svg';
import Proi from '../Images/Project-Pics.svg';
import Chain from '../Images/Chain-Pic.svg';
import Github from '../Images/Github-Pic.svg';
import White from '../Images/White-Sec.svg';
import Projects from '../Resusable/Projects';
import './Works.css';


function Works() {

    const details = [
        {
            id: 1,
            img:  Proi ,
            text: `I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar. 
                   I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar.
                   I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar.`,
           title: 'People Management Application',
            tech: 'Technologies',
            github:  Github ,
            chain:  Chain 
        },

        {
            id: 2,
            img:  Proi ,
            text: `I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar. 
                   I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar.
                   I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar.`,
           title: 'People Management Application',
            tech: 'Technologies',
            github:  Github ,
            chain:  Chain 
        },

        {
            id: 3,
            img:  Proi ,
            text: `I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar. 
                   I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar.
                   I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar.`,
           title: 'People Management Application',
            tech: 'Technologies',
            github:  Github ,
            chain:  Chain 
        },

        {
            id: 4,
            img:  Proi ,
            text: `I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar. 
                   I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar.
                   I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar.`,
           title: 'People Management Application',
            tech: 'Technologies',
            github:  Github ,
            chain:  Chain 
        }

    ]

    return (
        <div className='work-container'>
            <div className='work-work'>
                <div className='inner-work'>
                    <h2>
                        Immanuel Majekodunmi
                    </h2>

                    <button className='btn-1'>
                        Let's Talk
                    </button>
                </div>
                <div className='inner-work-2'>
                    <div className='projects'>
                        <h3>My Works</h3>
                        <div className='selected'>
                            <img src={Orange} alt='Orange Dot' />
                            <p>Selected Projects</p>
                        </div>
                    </div>
                    <div className='projects-2'>
                        <h3>My Experiences</h3>
                        <div className='selected-2'>
                            <img src={Orange} alt='Orange Dot' />
                            <p>Some of my work experiences</p>
                        </div>
                    </div>
                </div>

                <img className='wite' src={White} alt='white circle'/>

               <div className='proj-cont'>
                   {
                       details.map(
                           (i) =>  <Projects
                           key={i.id}
                           id={i.id}
                           img={i.img}
                           text={i.text}
                           title={i.title}
                           tech={i.tech}
                           github={i.github}
                           chain={i.chain}
                       />
                       )
                   }
               </div>



            </div>
        </div>
    )
}

export default Works