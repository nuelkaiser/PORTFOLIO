import React, {useEffect} from 'react';
import './Projects.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Projects({img, text, title, tech, github, chain,  id, p, link, view}) {



  useEffect(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".inner-work h2",
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
      });

      let newTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".inverse-pro",
          start: 'bottom bottom',
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
      });

      tl.to(
        '.inverse-pro .img',
        {
          x: -10,
          opacity: 1,
          delay: .4,
        },
        70,
      );

      tl.to(
        '.inverse-pro .title-header',
        {
          opacity:1,
          x: 5,
          delay: 7,
        },
        50,
      )

      tl.to(
        '.inverse-pro .title-p',
        {
          opacity:1,
          x: 5,
          delay: 8,
        },
        55,
      )

      tl.to(
        '.inverse-pro .tech-header',
        {
          opacity:1,
          x: 5,
          delay: 8.5,
        },
        60,
      )

      tl.to(
        '.inverse-pro .stack',
        {
          opacity:1,
          x: 5,
          delay: 8.5,
        },
        65,
      )

      tl.to(
        '.inverse-pro .proj-btn-container',
        {
          opacity:1,
          x: 5,
          delay: 9,
        },
        65,
      )

      newTl.to(
        '.pro .title-header',
        {
          opacity:1,
          x: -5,
          delay: 9,
        },
        50,
      )

      newTl.to(
        '.pro .img',
       {
          x: 10,
          opacity: 1,
          delay: 9,
        },
        70,
      )

      newTl.to(
        '.pro .title-p',
        {
          opacity:1,
          x: -10,
          delay: 8,
        },
        55,
      )

      newTl.to(
        '.pro .tech-header',
        {
          opacity:1,
          x: -10,
          delay: 8.5,
        },
        60,
      )

      newTl.to(
        '.pro .stack',
        {
          opacity:1,
          x: -5,
          delay: 8.5,
        },
        65,
      )

      newTl.to(
        '.pro .proj-btn-container',
        {
          opacity:1,
          x: -5,
          delay: 9,
        },
        .6,
      )


    }
  )



  return (
    <div className={id % 2 !== 0 ? 'pro' : 'inverse-pro' }>
        <img className='img' src={img} alt='my projects display' />
        <div>
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