import React, {useState, useEffect} from 'react';
import Smiley from '../Images/Smiley.svg';
import Tri from '../Images/Orange-Tri.svg';
import White from '../Images/White-Sec.svg';
import Rec from '../Images/White-Rec.svg';
import './Talk.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Talk = () => {

    useEffect(
        () => {
            let talk = gsap.timeline({
                // yes, we can add it to an entire timeline!
                scrollTrigger: {
                  trigger: ".talk-container",
                  start: "top top", 
                  end:"+=800",
                  scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                }
              });

              talk.to(
                '.form-container h1',
                {
                    opacity: 1,
                    x: 5,
                    delay: .7,
                },
                600,
              );


              talk.to(
                '.span',
                {
                    opacity: 1,
                    x: 5,
                    delay: .6,
                },
                700,
              );

              talk.to(
                '.name-text',
                {
                    opacity: 1,
                    x: 3,
                    delay: .7,
                },
                800,
              );

              talk.to(
                '.word-text',
                {
                    opacity: 1,
                    x: 3,
                    delay: .5,
                },
                900,
              );

              talk.to(
                '.send',
                {
                    opacity: 1,
                    y: 6,
                    delay: .5,
                    ease: 'Power3.ease',
                },
                1000,
              );

              talk.to(
                '.big, .tri-1, .tri-2',
                200,
                {
                    opacity: 1,
                    ease: 'Power3.ease',
                    delay: .10,
                    rotate: 360
                },
              );

              talk.to(
                '.ci-1, .ci-2',
                .20,
                {
                    opacity: 1,
                    ease: 'Power3.ease',
                    delay: .5,
                    rotateX: 360
                },
              );
        }, []
    )

    const [name, setName] = useState('');
    const [message, setMessage] = useState('')

    const submit = (e) => {
        e.preventDefault()
    }

    const clicked = () => {
        setName('');
        setMessage('')
        console.log(name, message)
    }

    return (
        <div className='talk-container' id="talk">
            <div className='talk-inner'>
        
                <div className='inner-talkset'>
                    <h2>
                        Immanuel Majekodunmi
                    </h2>
                </div>

                <div className='form-container'>
                    <h1>Let's Talk</h1>
                    <span className='span'>
                        <p>Have a project to work on?, Let's talk</p>
                        <img src={Smiley} alt='emoji'/>
                    </span>

                  <div>
                  <form onSubmit={submit}>
                        <input className='name-text' placeholder='Name' type='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <textarea className='word-text' placeholder='Message' type='text' value={message}  onChange={(e) => setMessage(e.target.value)}>
                       </textarea>
                    </form>

                    <button onClick={clicked} className='btn-send send'>Send</button>
                  </div>

                </div>
            </div>

            <img className='abs big' src={Tri} alt='Orange Triangle' />
            <img className='abs ci-1' src={White} alt='Orange Triangle' />
            <img className='abs ci-2' src={White} alt='Orange Triangle' />
            <img className='abs tri-1' src={Rec} alt='Orange Triangle' />
            <img className='abs tri-2' src={Rec} alt='Orange Triangle' />
        </div>
    )
}

export default Talk