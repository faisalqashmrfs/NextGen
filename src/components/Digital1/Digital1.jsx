// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Digital1.css'
import RH_arrow from '../../assets/images/arrow.svg'

function Digital1() {
    return (
        <div className='Father-Digital'>
            <div className='RH_Child1'>
                <h2>READY TO TRANSFORM YOUR DIGITAL PRESENCE?</h2>
                <p>Take the first step towards digital success with NexGen by your side.
                    Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
            </div>
            <button>
                <p>GET IN TOUCH</p>
                <img src={RH_arrow} />
            </button>
        </div>
    )
}

export default Digital1