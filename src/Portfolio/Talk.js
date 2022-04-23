import React from 'react';
import Smiley from '../Images/Smiley.svg';
import './Talk.css';

const Talk = () => {
    return (
        <div className='talk-container'>
            <div className='talk-inner'>
        
                <div className='inner-talkset'>
                    <h2>
                        Immanuel Majekodunmi
                    </h2>

                    <button className='btn-1'>
                        Let's Talk
                    </button>
                </div>

                <div className='form-container'>
                    <h1>Let's Talk</h1>
                    <span>
                        <p>Have a project to work on?, Let's talk</p>
                        <img src={Smiley} alt='emoji'/>
                    </span>

                  <div>
                  <form>
                        <input className='name-text' placeholder='Name' type='Name' />
                        <textarea className='word-text' placeholder='Message' type='text' >
                       </textarea>
                    </form>


                  </div>

                </div>
            </div>
        </div>
    )
}

export default Talk