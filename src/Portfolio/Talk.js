import React from 'react';
import Smiley from '../Images/Smiley.svg';
import Tri from '../Images/Orange-Tri.svg';
import White from '../Images/White-Sec.svg';
import Rec from '../Images/White-Rec.svg';
import './Talk.css';
import { useState } from 'react';

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
                    <span>
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