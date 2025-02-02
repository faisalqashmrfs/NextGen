/* eslint-disable no-unused-vars */
import './Information.css'

import React from 'react';
import RH_img from '../../assets/images/flag.png'
import RH_arrow2 from '../../assets/images/down-arrow.svg'
import RH_arrow3 from '../../assets/images/arrowblack.svg'

function Information() {
    return (
        <section className='FatherInformation'> 
            <form className='RH-form'>
                <div className='RH-item1'>
                    <div className='RH-subItems'>
                        <h5>FIRST NAME</h5>
                        <input placeholder='Enter First Name' className='RH_ITEM_MARGIN'></input>
                    </div>
                    <div className='RH-subItems'>
                        <h5>LAST NAME</h5>
                        <input placeholder='Enter Last Name' className='RH_ITEM_MARGIN'></input>
                    </div>
                </div>
                <div className='RH-item1'>
                    <div className='RH-subItems'>
                        <h5>EMAIL</h5>
                        <input placeholder='Enter your Email' className='RH_ITEM_MARGIN'></input>
                    </div>
                    <div className='RH-subItems'>
                        <h5>PHONE NUMBER</h5>
                        <div className='RH-item-form'>
                            <div className='RH-img-arrow'>
                                <img src={RH_img} className='RH-img' />
                                <img src={RH_arrow2} />
                            </div>
                            <input placeholder='Enter Phone Number' className='RH_ITEM_MARGIN'></input>
                        </div>
                    </div>
                </div>
                <div className='RH-item2'>
                    <h5>MESSAGE</h5>
                    <input placeholder='Enter your Message' className='RH_input RH_ITEM_MARGIN'  ></input>
                </div>
                <div className='RH-item3'>
                    <div className='RH-item3-left'>
                        <input type='checkbox'></input>
                        <div>I agree with Terms of Use and Privacy Policy</div>
                    </div>
                    <button>SEND YOUR MESSAGE<img src={RH_arrow3} /></button>
                </div>
            </form>

        </section>
    )
}

export default Information