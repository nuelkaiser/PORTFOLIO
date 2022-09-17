import React, {useRef, useEffect} from 'react';
import Dashed from '../Images/Dashed-Line.svg';
import Orange from '../Images/Orange-GTP.svg';
import './Me.css';
import { Link } from 'react-scroll';
import MyResume from '../Resume Folder/My Resume.pdf';
import { gsap, Power4, Power2 } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);


function Me() {


    let persona = useRef('Immanuel Majekodunmi Kaiser');
    let links = useRef(null);
    let myBtns = useRef(null);
    let email = useRef(null);
    let line = useRef(null)


    useEffect(
        () => {
            gsap.to(
                persona,
                .9,
                {
                        opacity: 1,
                        ease: Power4.ease,
                        x: 10,
                        delay: .8
                }
            );

            gsap.to(
                links,
                .5,
                {
                        opacity: 1,
                        y: -7,
                        ease: Power4.ease,
                        delay: .8
                }
            );

            gsap.to(
                myBtns,
                .5,
                {
                        opacity: 1,
                        y: 7,
                        ease: Power2.ease,
                        delay: .9,
                        yoyo: true,
                }
            );

            gsap.to(
                email,
                .6,
                {
                        opacity: 1,
                        ease: Power4.ease,
                        delay: .9
                }
            );

            gsap.to(
                line,
                .5,
                {
                        opacity: 1,
                        x: -7,
                        ease: Power4.ease,
                        delay: .8
                }
            );
        }
    )

    return (
        <div className='white-guy'>
            <div className='sec-bck'>
                <div className='proper'>
                    <h2>
                        Immauel Majekodunmi
                    </h2>

                    <div className='proper-inner'>
                        <h1 ref={per => { persona = per}}>
                            I am Immanuel Majekodunmi <br />
                            a Frontend Developer, <br />
                            Tech Enthusisat, <br />
                            and an Anime Lover.
                        </h1>
                        <img className='dashed' src={Dashed} alt='Dashed Line' ref={dashed => line = dashed}/>

                        <div className='link-deal'>
                            <div className='btns-container' ref={btns => myBtns = btns}>
                                <Link className='btn-1' to="talk" spy={true} smooth={true} offset={50} duration={500}>
                                    Let's Talk
                                </Link>

                                <a href={MyResume} download='MyResume' target='_blank' rel='noreferrer'>
                                    <button className='btn-2'>
                                        My  Resume
                                    </button>
                                </a>
                            </div>

                            <a href='/' className='link' ref={mess => email = mess}>
                                majekodunmiimmanuel9@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <ul className='my-pro' ref={link => { links = link}}>
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