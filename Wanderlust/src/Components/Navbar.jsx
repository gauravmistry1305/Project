// import { Navigate } from 'react-router-dom
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
           <nav className="navbar">
    <div className="container">
            <a href="#" className="brand">Wanderlust</a>
            <ul className="nav-links">
                <li><a href="#destinations">Destinations</a></li>
                <li><a href="#packages">Packages</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
