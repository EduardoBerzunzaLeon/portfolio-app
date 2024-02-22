import './navbar.scss';

export const Navbar = () => (
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
);

export default Navbar;
