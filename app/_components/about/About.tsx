import { CardTrack } from '../cardTrack/CardTrack';
import './about.scss';

export const About = () => (
  <section className="about">
    <div className="row row--center">
      <div className="about__content col-6">
        <div className="about__content-text">
          <h2>Sobre mi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.  Quod, alias reprehenderit,
            sint rerum eos magni quas, quidem nemo
            fuga autem assumenda aliquam dict
            tenetur voluptate nulla beatae
            blanditiis debitis excepturi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quod, alias reprehenderit
            , sint rerum eos magni quas, quidem
            nemo fuga autem assumenda aliquam
            dicta tenetur voluptate nulla beatae
            blanditiis debitis excepturi?
          </p>
          <button className="btn btn--m btn--center" type="button">Contact me</button>
        </div>
      </div>
      <CardTrack className="about__image col-6" />

    </div>

  </section>
);

export default About;
