import Footer from "./footer";
import axios from 'axios'
import {useState,useEffect} from 'react'

const Home = (props) => {
    const [text,setText] = useState('Save more and get your finances right')
    const main=async()=>{
        try{
            let {data} = await axios.get('https://pepper-adminpanel.onrender.com/api/components')
            setText(data.text)
        }
        catch(err){
            console.log(err)
        }
        }
    
        useEffect(()=>{
            main()
        },[])

        const handleClick=async()=>{
            try{
                await axios.get('https://pepper-adminpanel.onrender.com/api/components/increment-count')
            }
            catch(err){
                console.log(err)
            }
        }

    return ( 
        <div className="home">
            <div className="head">
                <div className="text">
                    <div className="text1">
                        {text}
                    </div>
                    <div className="text2 fontStyleA">
                        Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.
                    </div>
                </div>
                <div className="demoButton">
                    <button onClick={()=>{handleClick()}}>Request a demo</button>
                </div>
            </div>
            <div className="compInfo">
                <img src={props.img1} alt="company-info" />
            </div>
            <div className='trustees'>
                <div className='trustText'>
                  Trusted and loved by the world’s best teams
                </div>
                <div className='trustComps'>
                <img src={props.img2} alt="trusted-Companies" />
                <div className='trustComps1'><img src={props.img3} alt="trusted-Companies1" /></div>
                <div className='trustComps2'><img src={props.img4} alt="trusted-Companies2 " /></div>
                </div>
            </div>
            <div className='finances'>
                    <img className='finImg1' src={props.img5} alt="img"/>
                    <img className='finImg2' src={props.img6} alt="img"/>
                <div className='financeCard'>
                    <div className='financeTextHead fontStyleC'>A nice and simple financial overview</div>
                    <div className='financeTextBody fontStyleA'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                    
                    <div className='numbersCard'>
                        <div className='numbersCard1'>
                            <div className='financenumber'>120+</div>
                            <div className='financeText fontStyleD'>Useful widgets</div>
                        </div>
                        <div className='vl'></div>
                        <div className='numbersCard2'>
                            <div className='financenumber'>20+</div>
                            <div className='financeText fontStyleD'>Integrations</div>
                        </div>
                        <div className='vl'></div>
                        <div className='numbersCard3'>
                            <div className='financenumber'>65+</div>
                            <div className='financeText fontStyleD'>Features out</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='features'>
                <div className='featuresTop'>
                    <img src={props.img7} alt="img"/>
                    <img src={props.img8} alt="img"/>
                    <img src={props.img9} alt="img"/>
                    <img src={props.img10} alt="img"/>
                    <img src={props.img11} alt="img"/>
                    <img src={props.img12} alt="img"/>
                    <img src={props.img13} alt="img"/>
                </div>
                <div className='featuresBottom'>
                <img src={props.img14} alt="img"/>
                <img src={props.img15} alt="img"/>
                <img src={props.img16} alt="img"/>
                <img src={props.img17} alt="img"/>
                <img src={props.img18} alt="img"/>
                <img src={props.img19} alt="img"/>
                <img src={props.img20} alt="img"/>
                </div>
            </div>
            <div className="facilities">
                <div className="facilitiesContent">
                    <div className="facHead">
                      <div className="headText1 fontStyleC">Supercharge your workflow to get started</div>
                      <div className="headText2 fontStyleA">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                    </div>
                    <div className="facBody">
                        <div className="facCard">
                            <img src={props.img21} alt="icon"/>
                            <div>Email Management</div>
                            <p className="fontStyleE">Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
                        </div>     
                        <div className="facCard">
                            <img src={props.img22} alt="icon"/>
                            <div>Campaign Calender</div>
                            <p className="fontStyleE">Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
                        </div>     
                        <div className="facCard">
                            <img src={props.img23} alt="icon"/>
                            <div>Personal assistance</div>
                            <p className="fontStyleE">Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
                        </div>     
                        <div className="facCard">
                            <img src={props.img24} alt="icon"/>
                            <div>Payment feature</div>
                            <p className="fontStyleE">Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
                        </div>     
                        <div className="facCard">
                            <img src={props.img25} alt="icon"/>
                            <div>Utility apps</div>
                            <p className="fontStyleE">Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
                        </div>     
                        <div className="facCard">
                            <img src={props.img26} alt="icon"/>
                            <div>Sale notification</div>
                            <p className="fontStyleE">Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
                        </div>     
                    </div>
                </div>
            </div>
            <div className="threeCards">
                <div className="threeCardContent">
                    <div className="threeCardimg">
                        <img src={props.img27} alt="card-img"/>
                    </div>
                    <div className="threeCardbody">
                        <div className="fontStyleC">Manage and Track Your Projects</div>
                        <p className="fontStyleA">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <ul>
                            <li className="fontStyleB"><img src={props.img30} alt="tickMark"/>Create posts, reels and stories.</li>
                            <li className="fontStyleB"><img src={props.img30} alt="tickMark"/>Publish your Facebook posts dynamically.</li>
                            <li className="fontStyleB"><img src={props.img30} alt="tickMark"/>Schedule any Twitter posts.</li>
                        </ul>
                    </div>
                </div>
                <div className="threeCardContent threeCardContentMiddle">
                    <div className="threeCardimg">
                        <img src={props.img28} alt="card-img"/>
                    </div>
                    <div className="threeCardbody">
                        <div className="fontStyleC">Easily manage your team's tasks</div>
                        <p className="fontStyleA">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <ul>
                            <li className="fontStyleB"><img src={props.img30} alt="tickMark"/>Create posts, reels and stories.</li>
                            <li className="fontStyleB"><img src={props.img30} alt="tickMark"/>Publish your Facebook posts dynamically.</li>
                            <li className="fontStyleB"><img src={props.img30} alt="tickMark"/>Schedule any Twitter posts.</li>
                        </ul>
                    </div>
                </div>
                <div className="threeCardContent">
                    <div className="threeCardimg">
                        <img src={props.img29} alt="card-img"/>
                    </div>
                    <div className="threeCardbody">
                        <div className="fontStyleC">Simple financial overview for you</div>
                        <p className="fontStyleA">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <ul>
                            <li className="fontStyleB"><img src={props.img30} alt="tickMark"/>Create posts, reels and stories.</li>
                            <li className="fontStyleB"><img src={props.img30} alt="tickMark"/>Publish your Facebook posts dynamically.</li>
                            <li className="fontStyleB"><img src={props.img30} alt="tickMark"/>Schedule any Twitter posts.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ratingsContent">
              <div className="ratingsHead">
                <div className="fontStyleC">Don’t take our words for it - listen to our clients</div>
                <p className="fontStyleA">Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
              </div>
            </div>
            <div className="ratingsCards">
                <div className="ratingsCardsrow">
                    <div className="ratingsCardBody">
                        <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
                        <img src={props.img40} alt="ratings-img"/>
                        <div className="ratingsCardBodyChild">
                            <div>Ronald Richards</div>
                            <p>CEO- Utlta</p>
                        </div>
                    </div>
                    <div className="ratingsCardBody">
                        <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
                        <img src={props.img40} alt="ratings-img"/>
                        <div className="ratingsCardBodyChild">
                            <div>Ronald Richards</div>
                            <p>CEO- Utlta</p>
                        </div>
                    </div>
                    <div className="ratingsCardBody">
                        <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
                        <img src={props.img40} alt="ratings-img"/>
                        <div className="ratingsCardBodyChild">
                            <div>Ronald Richards</div>
                            <p>CEO- Utlta</p>
                        </div>
                    </div>
                </div>
                <div className="ratingsCardsrow rowTwo">
                    <div className="ratingsCardBody">
                        <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
                        <img src={props.img40} alt="ratings-img"/>
                        <div className="ratingsCardBodyChild">
                            <div>Ronald Richards</div>
                            <p>CEO- Utlta</p>
                        </div>
                    </div>
                    <div className="ratingsCardBody">
                        <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
                        <img src={props.img40} alt="ratings-img"/>
                        <div className="ratingsCardBodyChild">
                            <div>Ronald Richards</div>
                            <p>CEO- Utlta</p>
                        </div>
                    </div>
                    <div className="ratingsCardBody">
                        <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
                        <img src={props.img40} alt="ratings-img"/>
                        <div className="ratingsCardBodyChild">
                            <div>Ronald Richards</div>
                            <p>CEO- Utlta</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="build">
                <div className="buildContent">
                  <div className="fontStyleC">Build a powerful website for your startup.</div>
                  <p className="fontStyleE">Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>  
                  <button className="fontStyleA">Read more</button>
                </div>
                <div className="buildCards">
                    <div className="buildCardsLeft">
                        <div className="buildCardsSub">
                            <img src={props.img23} alt="msg-icon"/>
                            <div>7.000 Happy users</div>
                            <p className="fontStyleA">Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac</p>
                        </div>
                        <div className="buildCardsSub">
                            <img src={props.img34} alt="msg-icon"/>
                            <div>24/7 Support</div>
                            <p className="fontStyleA">Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac</p>
                        </div>
                    </div>
                    <div className="buildCardsRight">
                        <div className="buildCardsSub">
                            <img src={props.img35} alt="msg-icon"/>
                            <div>Global community</div>
                            <p className="fontStyleA">Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac</p>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="homeEndCard">
                <img className='homeEndCardImgOne' src={props.img36} alt="img"/>
                <img className='homeEndCardImgTwo' src={props.img37} alt="img"/>
                <img className='homeEndCardRingRight' src={props.img38} alt="ring-img"/>
                <img className='homeEndCardRingLeft' src={props.img39} alt="ring-img"/>
                <div className='homeEndCardSub'>
                    <div className="homeEndCardContent">
                        <div className="homeEndCardText">
                            <div className='homeEndCardTextHead fontStyleC'>Focus on the analytics that matter.</div>
                            <div className='homeEndCardTextBody fontStyleE'>Grow faster with a website that helps you convert more customers.</div>
                        </div>
                        <div className="homeEndCardButtons">
                            <button className="homeEndCardButton1 fontStyleB">Get started now</button>
                            <button className="homeEndCardButton2 fontStyleB">Compare plans</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Home;