import React , { useState} from 'react'
import './BigSectionBlogOpen.css'
import RH_imgSection from '../../assets/images/blogs-5.png'
import RH_img1 from '../../assets/images/twitter.png'
import RH_img2 from '../../assets/images/Smile (2).png'
import RH_img3 from '../../assets/images/facebook (3).png'
import RH_img4 from '../../assets/images/Image.png'
import RH_img5 from '../../assets/images/arrow.svg'
import RH_img6 from '../../assets/images/Share (1).png'
import { FaHeart } from "react-icons/fa6";
import firstPara from '../../Data/BigBlogs';
import secondPara from'../../Data/BigBlogs';
import thirdPara from'../../Data/BigBlogs';



function BigSectionBlogOpen() {
    const[isRed,setIsRed]=useState(false);
    const handleClick=()=>{
        setIsRed(!isRed);
    }
    return (
        <section className='Father-BigSection'>
            <img src={RH_imgSection} className='RH_imgSection' />
            <div className='RH_BigSectionDown'>
                <div className='RH_DivImges'>
                    <div className='Div_RH_img1'><img src={RH_img1} className='RH_img1' /></div>
                    <div className='Div_RH_img1'><img src={RH_img2} className='RH_img1' /></div>
                    <div className='Div_RH_img1'><img src={RH_img3} className='RH_img1' /></div>
                </div>
                <div className='RH_DivDives'>
                    <div className='RH_DivDives_1'>
                        <h2>{firstPara.headig}</h2>
                        <div className='RH_SubDivDives RH_SubDivDives1'>
                            <p className='RH_DivDives_P'>{firstPara.fpara}
                            </p>
                            <p className='RH_DivDives_P RH_None'>{firstPara.spara}
                            </p>
                            <p className='RH_None'>{firstPara.tpara}
                            </p>
                        </div>
                    </div>
                    <div className='RH_DivDives_1'>
                        <h2>{secondPara.headig}</h2>
                        <div className='RH_SubDivDives RH_SubDivDives1'>
                            <p className='RH_DivDives_P'>{secondPara.fpara}
                            </p>
                            <p className='RH_None'>{secondPara.spara}
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2>{thirdPara.headig}</h2>
                        <div className='RH_SubDivDives' >
                            <p className='RH_DivDives_P'>{thirdPara.fpara}
                            </p>
                            <p className='RH_DivDives_P RH_None'>{thirdPara.spara}
                            </p>
                            <p className='RH_None'>{thirdPara.tpara}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='RH_DivEnd'>
                    <div className='RH_DivEnd1'>
                        <div className='RH_SubDivEnd1'>
                            <div className='RH_DivEnd11'>
                                <img src={RH_img4} />
                                <div>
                                    <h5>Wade Warren</h5>
                                    <p>Art Director</p>
                                </div>
                            </div>
                            <div className='RH_DivEnd12'>
                                Crafting visual narratives that captivate and inspire, weaving creativity into every chapter of the design journey.
                            </div>
                        </div>
                        <div className='RH_DivEndButton'>
                            <button className='RH_EndButton'>
                                <div>
                                    <img src={RH_img1} className='RH_img_small' />
                                    <h5>@wadewa r r en</h5>
                                </div>
                                <img src={RH_img5} />
                                </button>
                        </div>
                    </div>
                    <div className='RH_SubDivEnd2'>
                        <div className='RH_SubDivEnd22 RH_margin'>

                            <div className='Div_RH_img1_3'> <FaHeart className='RH_heart' onClick={handleClick} style={{color:isRed?'red':""}}/></div>

                            <div className='RH_EndDivShare'>
                                <h6>LIKED BY</h6>
                                <div className='RH_EndDivShareDiv'>
                                    <p className='RH_EndNumber'>2.6K</p>
                                    <div></div>
                                    <p className='RH_EndText'>USERS</p>
                                </div>
                            </div>
                        </div>
                        <div className='RH_SubDivEnd22'>
                            <div className='Div_RH_img1_3'><img src={RH_img6} className='RH_img1' /></div>
                            <div className='RH_EndDivShare'>
                                <h6>SHARED BY</h6>
                                <div className='RH_EndDivShareDiv'>
                                    <p className='RH_EndNumber'>120</p>
                                    <div></div>
                                    <p className='RH_EndText'>USERS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BigSectionBlogOpen;