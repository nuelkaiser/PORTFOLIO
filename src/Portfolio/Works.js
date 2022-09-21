import React from 'react';
import Orange from '../Images/Orange-GTP.svg';
import Eazy from '../Images/Eazy Money.png';
import Manage from '../Images/Manage.png';
import Country from '../Images/Country API.png';
import Todo from '../Images/Todo.png';
import Chain from '../Images/Chain-Pic.svg';
import Github from '../Images/Github-Pic.svg';
import White from '../Images/White-Sec.svg';
import Projects from '../Resusable/Projects';
import { Link } from 'react-scroll';
import './Works.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();




function Works() {

    const details = [

        {
            id: 0,
            img: Country,
            text: `An application that fetches data of a list of countries and renders out the list with thier distinctive details,
                   enables you to search for different countries, view them and filter them by thier regions using a drop down menu.
                   Also implemented with a light theme and dark theme feature.`,
            title: 'Country API',
            tech: 'Technologies',
            github: Github,
            chain: Chain,
            p: 'REACT JS, CSS and Material UI',
            link: `https://github.com/nuelkaiser/COUNTRY-API-PROJECT`,
            view: `https://countrynew.netlify.app/`
        },

        {
            id: 1,
            img: Todo,
            text: `A todo list application that enables you to create and delete todos, 
                   tick the completeed todos and filter based on completed 
                   and uncompleted todos. Also implemented with a light theme and dark theme feature.`,
            title: 'TODO',
            tech: 'Technologies',
            github: Github,
            chain: Chain,
            p: 'HTML, CSS and JAVASCRIPT',
            link: `https://github.com/nuelkaiser/Todo-App`,
            view: `https://kaisertodo.netlify.app/`
        },


        {
            id: 2,
            img: Eazy,
            text: `A static landing Page for a next generation digital banking application (Easy Bank), 
                   built to perfection, fit mobile screen sizes, and very responsive.`,
            title: 'Eazy Bank',
            tech: 'Technologies',
            github: Github,
            chain: Chain,
            p: 'REACT JS  and CSS',
            link: `https://github.com/nuelkaiser/EasyBank`,
            view: `https://nuelkaiser.github.io/EasyBank/`
        },

        {
            id: 3,
            img: Manage,
            text: `A static landing Page of a next generation application (MANAGE), used for collaboration. 
            Built to perfection, fit mobile screen sizes, and very responsive.`,
            title: 'MANAGE',
            tech: 'Technologies',
            github: Github,
            chain: Chain,
            p: 'REACT JS and CSS',
            link: `https://github.com/nuelkaiser/Manage-Responsive-Website`,
            view: `https://man10.netlify.app/`
        },




    ]

    return (
        <div className='work-container'>
            <div className='work-work'>
                <div className='inner-work'>

                    <div className='btn-work-container' data-aos="zoom-out-down">
                        <Link className='btn-work' to="talk" spy={true} smooth={true} offset={50} duration={500} >
                            Let's Talk
                        </Link>
                    </div>

                </div>
                <div className='inner-work-2'>
                    <div className='projects'>
                        <h3>My Works</h3>
                        <div className='selected' data-aos="fade-right">
                            <img src={Orange} alt='Orange Dot' />
                            <p>Selected Projects</p>
                        </div>
                    </div>
                    <div className='projects-2'>
                        <h3>My Experiences</h3>
                        <div className='selected-2' data-aos="fade-left">
                            <img src={Orange} alt='Orange Dot' />
                            <p>Some of my work experiences</p>
                        </div>
                    </div>
                </div>

                <img className='wite' src={White} alt='white circle' />

                <div className='proj-cont'>
                    {
                        details.map(
                            (i) => <Projects
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