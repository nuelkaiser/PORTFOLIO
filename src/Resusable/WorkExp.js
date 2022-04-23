import React from 'react';
import './WorkExp.css'

const WorkExp = ({Orange}) => {
    return (
        <div className='exp-container'>
            <div className='selected-inner'>
                <img src={Orange} alt='Orange dot' />
                Work Experience
            </div>


            <div className='date-header'>
                <div>
                    <h4 className='other-tools'>ABC International -</h4>
                    <h4 className='year`'>March 2020</h4>
                </div>

                <p>
                    I interned at ABC international is a company that lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempoar. I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempoar.I am Immanuel Majekodunmi a lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempoar.
                </p>

                <h4 className='responsible'>Responsibilities</h4>
                <ul className='res-list'>
                    <li>
                        <img src={Orange} alt='Orange' />
                        <p>Creating and converting UI designs to webpages using REACTjs</p>
                    </li>

                    <li>
                        <img src={Orange} alt='Orange' />
                        <p>Jira Task Management Tool</p>
                    </li>

                    <li>
                        <img src={Orange} alt='Orange' />
                        <p>Trello Task Management Tool</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WorkExp