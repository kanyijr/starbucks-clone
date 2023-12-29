import React, {useState} from 'react'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
    
       <div className="app__Navbar-container">
          <div className="app__Navbar-container_navmenu">
                <div className="app__Navbar-container_navmenu-logo">
                    <Link to="/"><img src={Logo} alt="Starbucks logo" /></Link>
                </div>
                <ul className="app__Navbar-container_navmenu-links">
                <li><Link to="menu" className='app__Navbar-container_navmenu-links_tags'>Menu</Link></li>
                <li><Link to="rewards" className='app__Navbar-container_navmenu-links_tags'>Rewards</Link></li>
                <li><Link to="gifts" className='app__Navbar-container_navmenu-links_tags'>Gift Cards</Link></li>  
                </ul>
          </div>
          <div className="app__Navbar-container_side">
                <div className="app__Navbar-container_side-find">
                        <i class="bi bi-geo-alt-fill"></i>
                        <span>Find a store</span>
                </div>
                <button className="app_Navbar-container_side-btn">Sign in</button>
                <button className="app_Navbar-container_side-btn">Join now</button>

          </div>

          {/* navbar for smallscreens */}
          <div className="app__Navbar-smallscreens">
            {showMenu?(<div className='app__Navbar-smallscreens_icons rotate-center'><i class="bi bi-x" onClick={()=>{setShowMenu(false)}}></i></div>):( <div className='app__Navbar-smallscreens_icons'><i class="bi bi-list" onClick={()=>{setShowMenu(true)}}></i></div>)}
           
            {showMenu && (
                <div className="app__Navbar-smallscreens_overlay slide-left">
                 
                    <ul className="app__Navbar-smallscreens_links">
                        <li><Link to="/menu" className='app__Navbar-smallscreens_links-tags'>Menu</Link></li>
                        <li><Link to="/rewards" className='app__Navbar-smallscreens_links-tags'>Rewards</Link></li>
                        <li><Link to="/gifts" className='app__Navbar-smallscreens_links-tags'>Gift Cards</Link></li>
                    </ul>
                    

                    <div className="app__Navbar-smallscreens_side">
                            <div className="app__Navbar-smallscreens_side-find">
                                    <i class="bi bi-geo-alt-fill"></i>
                                    <span>Find a store</span>
                            </div>
                            {/* <button className="app__Navbar-smallscreens_side-btn">Sign in</button> */}
                            <button className="app__Navbar-smallscreens_side-btn">Join now</button>

                    </div>


                </div>
            )}
          </div>
       </div>
   
  )
}

export default Navbar
