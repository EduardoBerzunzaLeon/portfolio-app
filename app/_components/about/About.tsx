import './about.scss';

export const About = () => (
  <section className="about">
    <div className="row">
      <div className="about__content col-6">
        <h2>Sobre mi</h2>
        <div className="about__content-text">
          {/* eslint-disable-next-line max-len */}
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, alias reprehenderit, sint rerum eos magni quas, quidem nemo fuga autem assumenda aliquam dicta tenetur voluptate nulla beatae blanditiis debitis excepturi?</p>
        </div>
      </div>
      <div className="about__image col-6">
        <img src="./profile.jpg" alt="profile" />
      </div>

    </div>

  </section>
);

export default About;
