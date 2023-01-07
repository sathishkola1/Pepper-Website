import Footer from "./footer";

const Home = (props) => {
    return ( 
        <div className="home">
            <div className="head">
                <div className="text">
                    <div className="text1">
                        Save more and get your finances right
                    </div>
                    <div className="text2">
                        Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.
                    </div>
                </div>
                <div className="demoButton">
                    <button>Request a demo</button>
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
                    <div className='financeTextHead'>A nice and simple financial overview</div>
                    <div className='financeTextBody'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                    
                    <div className='numbersCard'>
                        <div className='numbersCard1'>
                            <div className='financenumber'>120+</div>
                            <div className='financeText'>Useful widgets</div>
                        </div>
                        <div className='vl'></div>
                        <div className='numbersCard2'>
                            <div className='financenumber'>20+</div>
                            <div className='financeText'>Integrations</div>
                        </div>
                        <div className='vl'></div>
                        <div className='numbersCard3'>
                            <div className='financenumber'>65+</div>
                            <div className='financeText'>Features out</div>
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
                      <div className="headText1">Supercharge your workflow to get started</div>
                      <div className="headText2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                    </div>
                    <div className="facBody">
                        <div className="facCard">
                            <img src={props.img21} alt="icon"/>
                            <div>Email Management</div>
                            <p>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
                        </div>     
                        <div className="facCard">
                            <img src={props.img22} alt="icon"/>
                            <div>Campaign Calender</div>
                            <p>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
                        </div>     
                        <div className="facCard">
                            <img src={props.img23} alt="icon"/>
                            <div>Personal assistance</div>
                            <p>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
                        </div>     
                        <div className="facCard">
                            <img src={props.img24} alt="icon"/>
                            <div>Payment feature</div>
                            <p>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
                        </div>     
                        <div className="facCard">
                            <img src={props.img25} alt="icon"/>
                            <div>Utility apps</div>
                            <p>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
                        </div>     
                        <div className="facCard">
                            <img src={props.img26} alt="icon"/>
                            <div>Sale notification</div>
                            <p>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</p>
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
                        <div>Manage and Track Your Projects</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <ul>
                            <li><img src={props.img30} alt="tickMark"/>Create posts, reels and stories.</li>
                            <li><img src={props.img30} alt="tickMark"/>Publish your Facebook posts dynamically.</li>
                            <li><img src={props.img30} alt="tickMark"/>Schedule any Twitter posts.</li>
                        </ul>
                    </div>
                </div>
                <div className="threeCardContent threeCardContentMiddle">
                    <div className="threeCardimg">
                        <img src={props.img28} alt="card-img"/>
                    </div>
                    <div className="threeCardbody">
                        <div>Easily manage your team's tasks</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <ul>
                            <li><img src={props.img30} alt="tickMark"/>Create posts, reels and stories.</li>
                            <li><img src={props.img30} alt="tickMark"/>Publish your Facebook posts dynamically.</li>
                            <li><img src={props.img30} alt="tickMark"/>Schedule any Twitter posts.</li>
                        </ul>
                    </div>
                </div>
                <div className="threeCardContent">
                    <div className="threeCardimg">
                        <img src={props.img29} alt="card-img"/>
                    </div>
                    <div className="threeCardbody">
                        <div>Simple financial overview for you</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <ul>
                            <li><img src={props.img30} alt="tickMark"/>Create posts, reels and stories.</li>
                            <li><img src={props.img30} alt="tickMark"/>Publish your Facebook posts dynamically.</li>
                            <li><img src={props.img30} alt="tickMark"/>Schedule any Twitter posts.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ratingsContent">
              <div className="ratingsHead">
                <div>Don’t take our words for it - listen to our clients</div>
                <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
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
                  <div>Build a powerful website for your startup.</div>
                  <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>  
                  <button>Read more</button>
                </div>
                <div className="buildCards">
                    <div className="buildCardsLeft">
                        <div className="buildCardsSub">
                            <img src={props.img23} alt="msg-icon"/>
                            <div>7.000 Happy users</div>
                            <p>Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac</p>
                        </div>
                        <div className="buildCardsSub">
                            <img src={props.img34} alt="msg-icon"/>
                            <div>24/7 Support</div>
                            <p>Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac</p>
                        </div>
                    </div>
                    <div className="buildCardsRight">
                        <div className="buildCardsSub">
                            <img src={props.img35} alt="msg-icon"/>
                            <div>Global community</div>
                            <p>Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac</p>
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
                            <div className='homeEndCardTextHead'>Focus on the analytics that matter.</div>
                            <div className='homeEndCardTextBody'>Grow faster with a website that helps you convert more customers.</div>
                        </div>
                        <div className="homeEndCardButtons">
                            <button className="homeEndCardButton1">Get started now</button>
                            <button className="homeEndCardButton2">Compare plans</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Home;