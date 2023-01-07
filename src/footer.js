import brandLogo from './images/pepperfooter.png'
import linkedIn from './images/linkedin.png'
import twitter from './images/twitter.png'
import mail from './images/mail.png'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footerBody">
                <div className="footerContent">
                    <div className="footerContentLeft">
                        <img src={brandLogo} alt="brand-img"/>
                        <p>Pepper is one of the most reliable delievery patlform magement service to automate your network.</p>
                        <button>Get Started</button>
                        <ul>
                            <li><img src={linkedIn} alt="linkedIn-icon"/></li>
                            <li><img src={twitter} alt="twitter-icon"/></li>
                            <li><img src={mail} alt="mail-icon"/></li>
                        </ul>
                    </div>
                    <div className="footerContentRight">
                        <div className="footerContentRightOne">
                            <div>Pages main</div>
                            <ul>
                                <li>Home</li>
                                <li>Blog</li>
                                <li>Blog Template</li>
                                <li>Pricing</li>
                                <li>Pricing Ecommerce</li>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Careers Template</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="footerContentRightTwo">
                            <div>Template pages</div>
                            <ul>
                                <li>Style guide</li>
                                <li>Licenses</li>
                                <li>Changelog</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <footer>
                    <p><span>&copy;</span>All rights reserved.<span className="colorOne">Flowset</span>.Powered by <span className="colorTwo">Wf</span>.</p>
                </footer>
            </div>
        </div>
     );
}
 
export default Footer;