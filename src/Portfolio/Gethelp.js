import React from 'react';
import './Gethelp.css'
import GTP from '../Images/GTP.svg';
import GTPLogo from '../Images/GTP-Logo.svg';
import Els from '../Images/Els-GTP.svg';
import Billy from '../Images/Billy-GTP.svg';
import Orange from '../Images/Orange-GTP.svg';
import Purple from '../Images/Purple-GTP.svg';
import Grey from '../Images/Semi-Grey-Ellipse.svg';

function Gethelp() {
  return (
    <div>
      <div className='gtp-container'>
        <div className='nav-gtp'>
          <div className='nav-logo'>
            <div>

              <div className='nav-color'>
                <img src={Orange} alt='Orange-color' />
                <img src={Purple} alt='Purple-color' />
              </div>

              <img src={GTPLogo} alt='Logo' />
            </div>
            <p>Gethelp.co</p>
          </div>

          <div className='nav-features'>
            <ul>
              <li>Services</li>
              <li>Helps</li>
              <li>Contacts</li>
            </ul>
          </div>

          <button>
            Signup
          </button>
        </div>

        <div className='get-help-container'>
          <div>
            <h1>
              Get helps, one less <br /> chore to worry <br /> about.
            </h1>

            <p>
              verified helps to take care of your home need for a token.
              You would really have one less chore to worry about.
            </p>

            <button className='gtp-help'>
              Get Help
            </button>
          </div>

          <div className='gtp-gtp'>
            <img className='comment els' src={Els} alt='Els Chat' />
            <img className='comment first-billy' src={Billy} alt='Billy Chatg ' />
            <img className='comment second-billy' src={Billy} alt='Billy Chat ' />
            <img className='gtp-bck' src={GTP} alt='GTP Background' />
          </div>
        </div>

        <div className='bck-attachment'> 
          <img className='grey' src={Grey} alt=''/>
          <img className='orange-1' src={Orange} alt='Orange Color'/>
          <img className='orange-2' src={Orange} alt='Orange Color'/>
          <img className='orange-3' src={Orange} alt='Orange Color'/>
          <img className='orange-4' src={Orange} alt='Orange Color'/>
          <img className='orange-5' src={Orange} alt='Orange Color'/>
          <img className='purple-1' src={Purple} alt='Purple Color'/>
          <img className='purple-2' src={Purple} alt='Purple Color'/>
          <img className='purple-3' src={Purple} alt='Purple Color'/>
        </div>
      </div>
    </div>
  )
}

export default Gethelp