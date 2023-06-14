import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { Button } from 'react-bootstrap';
import Logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <section className='nav'>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/features">Features</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <Button className='button'>Free Trial!</Button>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
