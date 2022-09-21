import React from 'react';
import './Skillset.css';
import Orange from '../Images/Orange-GTP.svg';
import WorkExp from '../Resusable/WorkExp';
import WhiteFill from '../Images/White-Fill.svg';




function Skillset() {


    const workExper = [
        {
            id: 1,
            where: 'HNG',
            year: '2021',
            details: `I interned at HNG in collaboration with Ingressive4good for 3 months, where i sharpened my tech skills and communication skills, learnt more about REACT, got 
            to build an awesome project in a working enviroment by collaborating with brilliant minds.`,
            role: [
                {
                    first: `Built and maintained webpages, using REACT Framework, content creation tools and management tools.`,
                    second: `Perfomed direct website updates.`,
                    third: `wrote and edited web page content and other producing content.`,
                }
            ],
        },

        {
            id: 2,
            where: 'Zuri',
            year: '2021',
            details: `I interned at Zuri, an online internship program where learnt about frontend development, built projects using HTML,CSS and Javascript and
            collaborated with other developer.`,
            role: [
                {
                    first: `Built responsive webpages`,
                    second: `Maintained understanding of current web technologies and programming practices through continual education, reading and particpating in groups and
                    workshops`
                }
            ],
        },


    ]

    return (
        <div className='skillset-container'>
            <div className='inner-inner'>

                <div className='exper-bar-container'>
                    <div className='exper-bar'>
                        <h1>My Experiences</h1>

                        <div className='selected-inner'>
                            <img src={Orange} alt='Orange dot' />
                            My skillset
                        </div>

                        <h4 className='lang'>Languages & framework</h4>

                        <ul className='prom-lang'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap 4</li>
                            <li>React Js</li>
                            <li>Tailwind CSS</li>
                        </ul>

                        <h4 className='other-tools'>Other Tools</h4>
                        <ul className='tools-container'>
                            <li>Git collaboration tool</li>
                            <li>Jira Task management tool</li>
                            <li>Trello Task management too</li>
                        </ul>
                    </div>

                    <div className='detailed-bar'>

                        <div className='selected-inner'>
                            <img src={Orange} alt='Orange dot' />
                            Work Experience
                        </div>

                        {
                            workExper.map(
                                (work) => <WorkExp work={work} Orange={Orange} key={work.id} />
                            )
                        }



                        <img className='white-1' src={WhiteFill} alt='White Circle' />
                        <img className='white-2' src={WhiteFill} alt='White Circle' />
                        <img className='white-3' src={WhiteFill} alt='White Circle' />
                        <img className='white-4' src={WhiteFill} alt='White Circle' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skillset