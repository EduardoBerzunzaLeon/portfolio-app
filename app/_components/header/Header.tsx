import Image from 'next/image';

import profilePic from './profile.jpg';
import './header.scss';

export const Header = () => (
  <>
    <nav className="nav">
      <span className="nav__heading">Eduardo Berzunza</span>
      <div className="nav__links-box">
        <a href="#home">Inicio</a>
        <a href="#about">Nosotros</a>
        <a href="#project">Proyectos</a>
        <a href="#comments">Testimonios</a>
        <a href="#contact">Contacto</a>
      </div>
      <a href="#blog">Blog</a>
    </nav>
    <header className="header">

      <ul className="floating-boxes">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>

      <div className="header__text-box">
        <h1>Hi, I&apos;m Eduardo berzunza</h1>
        <h3>Developer, Full Stack, Web designer</h3>
        <button type="button">Contact me</button>
      </div>

      <figure className="header__profile">
        <Image
          src={profilePic}
          alt="profile"
        />
      </figure>

      <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
        </svg>
      </div>

    </header>
  </>
);

export default Header;
