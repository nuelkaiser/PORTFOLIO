import React from 'react';
import './WorkExp.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const WorkExp = ({ Orange, work }) => {
    return (
        <div className='exp-container'  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="6000" >
            <div className='selected-inner'>
                <img src={Orange} alt='Orange dot' />
                Work Experience
            </div>


            <div className='date-header'>
                <div>
                    <h4 className='other-tools'>{work.where} -</h4>
                    <h4 className='year`'>{work.year}</h4>
                </div>

                <p>
                    {work.details}
                </p>

                <h4 className='responsible'>Responsibilities</h4>
                <ul className='res-list'>
                    {
                        work.role.map(
                            (i) =>
                                <div key={i}>
                                    <li>
                                        <img src={Orange} alt='Orange' />
                                        <p>{i.first}</p>
                                    </li>

                                    <li>
                                        <img src={Orange} alt='Orange' />
                                        <p>{i.second}</p>
                                    </li>

                                    {
                                        i.third ? 
                                        <li>
                                            <img src={Orange} alt='Orange' />
                                            <p>{i.third}</p>
                                        </li> : ''
                                    }
                                </div>

                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default WorkExp