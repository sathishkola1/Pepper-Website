import brandLogo from './images/brand logo.png'
import cart from './images/cart.png'

const Navbar = () => {
    return (
        <header>
        <div className="navbar">
            <div className="start-menu">
                <img src={brandLogo} alt="brand-logo"/>
            </div>
            <div className="mid-menu">
                <ul>
                    <li className="menu-items">About</li>
                    <li className="menu-items">Blog</li>
                    <li className="menu-items">Pricing</li>
                    <li className="menu-items">Careers</li>
                    <li className="menu-items contact">Contact</li>
                </ul>
            </div>
            <div className="end-menu">
                <ul>
                    <li className="cart"><img src={cart} alt="cart-logo"/></li>
                    <li className="login"><button>Login</button></li>
                    <li className="getStarted"><button>Get Started</button></li> 
                </ul>
            </div>
        </div>
        </header>
            );
}

            export default Navbar;