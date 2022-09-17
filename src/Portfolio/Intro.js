import React, {useRef, useEffect} from 'react';
import WhiteRec from '../Images/White-Rec.svg';
import WhiteSec from '../Images/White-Sec.svg';
import OrangeRec from '../Images/Orange-Rec.svg';
import OrangeStar from '../Images/Orange-Star.svg';
import './Intro.css';
import { gsap, Power3 } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);



function Intro() {
   

    let myName = useRef('Immanuel Majekodunmi Kaiser');
    let myStar = useRef(null);
    let myCir = useRef(null);
    let myWhite = useRef(null);
    let myTri = useRef(null);

     
   useEffect(
    () => {
        gsap.to(
            myName,
            .8,
            {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut,
                delay: .6
            }
        );

        gsap.to(
            myStar,
            .8,
            {
                opacity: 1,
                x: 1,
                y: -35,
                ease: Power3.ease,
                delay: .5,
                rotate: 360
            }
        );

        gsap.to(
            myCir,
            .8,
            {
                opacity: 1,
                x: 1,
                y: -35,
                ease: Power3.ease,
                delay: .5,
            }
        );

        gsap.to(
            myWhite,
            .8,
            {
                opacity: 1,
                x: 30,
                ease: Power3.ease,
                delay: .6
            }
        );

        gsap.to(
            myTri,
            .8,
            {
                opacity: 1,
                y: 30,
                ease: Power3.ease,
                delay: .6
            }
        );
    }
   )

    
  return (
    <div className='my-intro'>
        <h2>
            Immanuel    Majekodunmi
        </h2>

        <div className='my-name' ref={me => {myName = me}}>
            <h1>
                Immanuel <br /> Majekodunmi
            </h1>
        </div>

        <div>
            <img className='star' src={OrangeStar} alt='Orange Star' ref={star => {myStar = star}}/>
            <img className='orange-rec' src={OrangeRec} alt='Orange Rec' ref={tri => {myTri = tri}}/>
            <img className='white-rec' src={WhiteRec} alt='White Rec'   ref={white => {myWhite = white}}/>
            <img className='white-sec' src={WhiteSec} alt='White Star'  ref={cir => {myCir = cir}}/>
        </div>
    </div>
  )
}

export default Intro