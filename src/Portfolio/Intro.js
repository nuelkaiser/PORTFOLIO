import React from 'react';
import WhiteRec from '../Images/White-Rec.svg';
import WhiteSec from '../Images/White-Sec.svg';
import OrangeRec from '../Images/Orange-Rec.svg';
import OrangeStar from '../Images/Orange-Star.svg';
import './Intro.css';
import { useSpring, animated } from 'react-spring'

function Intro() {
 
    const props = useSpring({ to: { opacity: 1, }, from: { opacity: 0, }, delay: 1000 });


    


    
  return (
    <div className='my-intro'>
        <h2>
            Immanuel    Majekodunmi
        </h2>

        <div className='my-name'>
            <animated.h1 style={props}>
                Immanuel <br /> Majekodunmi
            </animated.h1>
        </div>

        <div>
            <img className='star' src={OrangeStar} alt='Orange Star' />
            <img className='orange-rec' src={OrangeRec} alt='Orange Rec' />
            <img className='white-rec' src={WhiteRec} alt='White Rec' />
            <img className='white-sec' src={WhiteSec} alt='White Star' />
        </div>
    </div>
  )
}

export default Intro