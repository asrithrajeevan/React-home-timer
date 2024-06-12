import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import menu  from '../../../assets/icons/menus.png'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './style.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const Hamburger = () =>{
    return(
        <div>
            <img src={menu} alt='haburger'width={25} height={25}/>
        </div>
    )
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Brand /> */}
          <h1>WEGLOO</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                {/* <div className='download-app'>
                    <NavLink className={'downlad-link'} style={{color:'white'}} to="/#">Download App</NavLink>
                </div> */}
                <button className="square" onClick={() => console.log('click')}>
                    Download App
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar