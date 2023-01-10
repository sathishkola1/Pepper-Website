import brandLogo from './images/brand logo.png'
import cart from './images/cart.png'
import axios from 'axios'
import {useState} from 'react'

const Navbar = () => {
    const [image,setImage] = useState(brandLogo)

    const main=async()=>{
    try{
        let {data} = await axios.get('https://pepper-adminpanel.onrender.com/api/components')
        setImage(data.image)
    }
    catch(err){
        console.log(err)
    }
    }
    main()
    return (
        <header>
        <div className="navbar">
            <div className="start-menu">
                <img src={image} alt="brand-logo"/>
            </div>
            <div className="mid-menu">
                <ul>
                    <li className="menu-items fontStyleA">About</li>
                    <li className="menu-items fontStyleA">Blog</li>
                    <li className="menu-items fontStyleA">Pricing</li>
                    <li className="menu-items fontStyleA">Careers</li>
                    <li className="menu-items fontStyleA contact">Contact</li>
                </ul>
            </div>
            <div className="end-menu">
                <ul>
                    <li className="cart"><img src={cart} alt="cart-logo"/></li>
                    <li className="login"><button className="fontStyleA">Login</button></li>
                    <li className="getStarted"><button className="fontStyleB">Get Started</button></li> 
                </ul>
            </div>
        </div>
        </header>
            );
}

            export default Navbar;