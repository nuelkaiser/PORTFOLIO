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
            id: 0,
            img:  Proi ,
            text: `An aplication that fetches data of a list of countries and renders out the list with thier distinctive details,
                   enables you to search for different countries, view them and filter them by thier regions using a drop down menu.
                   Also implemented with a light theme and dark theme feature.`,
           title: 'Country API',
            tech: 'Technologies',
            github:  Github ,
            chain:  Chain,
            p:'REACT JS, CSS and Material UI',
            link: `https://github.com/nuelkaiser/COUNTRY-API-PROJECT`,
            view:  `https://countrynew.netlify.app/`
        },

        {
            id: 1,
            img:  Proi ,
            text: `A todo list application that enables you to create and delete todos, 
                   tick the completeed todos and filter based on completed 
                   and uncompleted todos. Also implemented with a light theme and dark theme feature.`,
           title: 'TODO',
            tech: 'Technologies',
            github:  Github ,
            chain:  Chain,
            p:'HTML, CSS and JAVASCRIPT',
            link: `https://github.com/nuelkaiser/Todo-App`,
            view:  `https://kaisertodo.netlify.app/`
        },


        {
            id: 2,
            img:  Proi ,
            text: `A static landing Page for a next generation digital banking application (Easy Bank), 
                   built to perfection, fit mobile screen sizes, and very responsive.`,
           title: 'Eazy Bank',
            tech: 'Technologies',
            github:  Github,
            chain:  Chain,
            p:'REACT JS  and CSS',
            link: `https://github.com/nuelkaiser/EasyBank`,
            view:  `https://nuelkaiser.github.io/EasyBank/`
        },

        {
            id: 3,
            img:  Proi ,
            text: `I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar. 
                   I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar.
                   I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoar.`,
           title: 'MANAGE',
            tech: 'Technologies',
            github:  Github ,
            chain:  Chain ,
            p:'REACT JS and CSS',
            link: `https://github.com/nuelkaiser/Manage-Responsive-Website`,
            view:  `https://man10.netlify.app/`
        },

       


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
                           p={i.p}
                           link={i.link}    
                           view={i.view}
                           />
                       )
                   }
               </div>



            </div>
        </div>
    )
}

export default Works