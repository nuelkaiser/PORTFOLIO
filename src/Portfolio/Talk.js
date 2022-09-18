import React, {useState} from 'react';
import Smiley from '../Images/Smiley.svg';
import Tri from '../Images/Orange-Tri.svg';
import White from '../Images/White-Sec.svg';
import Rec from '../Images/White-Rec.svg';
import './Talk.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Talk = () => {



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
                  <form onSubmit={submit}  data-aos="fade-right" data-aos-duration="2500">
                        <input className='name-text' placeholder='Name' type='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <textarea className='word-text' placeholder='Message' type='text' value={message}  onChange={(e) => setMessage(e.target.value)}>
                       </textarea>
                    </form>

                    <button  data-aos="fade-down" data-aos-duration="2500" onClick={clicked} className='btn-send send'>Send</button>
                  </div>

                </div>
            </div>

            <img className='abs big'  data-aos="fade-up-right" data-aos-duration="3000"src={Tri} alt='Orange Triangle' />
            <img className='abs ci-1' data-aos="fade-up" data-aos-duration="3000" src={White} alt='Orange Triangle' />
            <img className='abs ci-2'  data-aos="fade-down-left" data-aos-duration="3000" src={White} alt='Orange Triangle' />
            <img className='abs tri-1'  data-aos="fade-up-right" data-aos-duration="3000" src={Rec} alt='Orange Triangle' />
            <img className='abs tri-2'  data-aos="fade-down" data-aos-duration="3000" src={Rec} alt='Orange Triangle' />
        </div>
    )
}

export default Talk