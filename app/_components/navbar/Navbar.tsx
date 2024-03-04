import './navbar.scss';

export const Navbar = () => (
  <nav className="nav">
    <div className="row row--center">
      <span className="nav__heading col-3 w-full">Eduardo Berzunza</span>
      <div className="nav__links-box col-7 w-full">
        <a href="#home">Inicio</a>
        <a href="#about">Nosotros</a>
        <a href="#project">Proyectos</a>
        <a href="#comments">Testimonios</a>
        <a href="#contact">Contacto</a>
      </div>
      <a href="#blog" className="nav__settings col-2 w-full">Blog</a>
    </div>
  </nav>
);

export default Navbar;
