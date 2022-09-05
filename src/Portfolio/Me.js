import React from 'react';
import Dashed from '../Images/Dashed-Line.svg';
import Orange from '../Images/Orange-GTP.svg';
import './Me.css';
import { Link } from 'react-scroll';

function Me() {
    return (
        <div className='white-guy'>
            <div className='sec-bck'>
                <div className='proper'>
                    <h2>
                        Immauel Majekodunmi
                    </h2>

                    <div className='proper-inner'>
                        <h1>
                            I am Immanuel Majekodunmi <br />
                            a Frontend Developer, <br />
                            Tech Enthusisat, <br />
                            and an Anime Lover.
                        </h1>
                        <img className='dashed' src={Dashed} alt='Dashed Line' />

                        <div className='link-deal'>
                            <div className='btns-container'>
                                <Link className='btn-1' to="talk" spy={true} smooth={true} offset={50} duration={500}>
                                    Let's Talk
                                </Link>

                                <button className='btn-2'>
                                    My  Resume
                                </button>
                            </div>

                            <a  href='/' className='link'>
                                majekodunmiimmanuel9@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <ul className='my-pro'>
                    <li>
                        <a href='/'>
                            Github
                        </a>
                    </li>

                    <li>
                        <a href='/'>
                            Twitter
                        </a>
                    </li>

                    <li>
                        <a href='/'>
                            Linkedin
                        </a>
                    </li>

                    <li>
                        <a href='/'>
                            Medium
                        </a>
                    </li>

                </ul>
            </div>
            <img className='org-1' src={Orange} alt='Orange Dot' />
            <img className='org-2' src={Orange} alt='Orange Dot' />
        </div>
    )
}

export default Me