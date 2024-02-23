import './about.scss';

export const About = () => (
  <section className="about">
    <h2>Nosotros</h2>

    <div className="about__content">
      <div className="about__content-text">
        {/* eslint-disable-next-line max-len */}
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, alias reprehenderit, sint rerum eos magni quas, quidem nemo fuga autem assumenda aliquam dicta tenetur voluptate nulla beatae blanditiis debitis excepturi?</p>
      </div>
      <div className="about__content-image">
        <h3>IMAGE HERE</h3>
      </div>
    </div>

  </section>
);

export default About;
