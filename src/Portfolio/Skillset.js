import React from 'react';
import './Skillset.css';
import Orange from '../Images/Orange-GTP.svg';
import WorkExp from '../Resusable/WorkExp';
import WhiteFill from '../Images/White-Fill.svg';

function Skillset() {
    return (
        <div className='skillset-container'>
            <div className='inner-inner'>
                <div className='inner-skillset'>
                    <h2>
                        Immanuel Majekodunmi
                    </h2>

                    <button className='btn-1'>
                        Let's Talk
                    </button>
                </div>

                <div className='exper-bar-container'>
                    <div className='exper-bar'>
                        <h1>My Experiences</h1>

                        <div className='selected-inner'>
                            <img src={Orange} alt='Orange dot' />
                            My skillset
                        </div>

                        <h4 className='skiller'>Skillset</h4>

                        <h4 className='lang'>Languages & framework</h4>

                        <ul className='prom-lang'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap 4</li>
                            <li>Angular js</li>
                            <li>React Js</li>
                            <li>Tailwind CSS</li>
                            <li>Vue js</li>
                        </ul>

                        <h4 className='other-tools'>Other Tools</h4>
                        <ul className='tools-container'>
                            <li>Git collaboration tool</li>
                            <li>Jira Task management tool</li>
                            <li>Trello Task management too</li>
                        </ul>
                    </div>

                    <div className='detailed-bar'>
                        <WorkExp Orange={Orange} />
                        <WorkExp Orange={Orange} />
                        <WorkExp Orange={Orange} />
                        <WorkExp Orange={Orange} />



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