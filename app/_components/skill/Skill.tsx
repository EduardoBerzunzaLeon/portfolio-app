import { AiFillHeart, AiFillRocket, AiFillSafetyCertificate } from 'react-icons/ai';

// import { colorPrimaryDark } from '*.module.scss';

import './skill.scss';

export const Skill = () => (
  <section className="skill">
    <div className="row row--center">
      <h2 className="col-12 text--center">Caracteristicas</h2>
      <div className="card col-4">
        <div className="card__side card__side--front card__ribbon--primary">
          <AiFillSafetyCertificate className="card__icon card__icon--primary" />
          <h3 className="card__title text-grad--primary">Aplicaciones seguras</h3>
        </div>
        <div className="card__side card__side--back bg-grad--primary-2" />
      </div>
      <div className="card col-4">
        <div className="card__side card__side--front card__ribbon--secondary">
          <AiFillRocket className="card__icon  card__icon--secondary" />
          <h3 className="card__title text-grad--secondary ">Rapidas y escalables</h3>
        </div>
        <div className="card__side card__side--back bg-grad--secondary" />
      </div>
      <div className="card col-4">
        <div className="card__side card__side--front card__ribbon--tertiary">
          <AiFillHeart className="card__icon card__icon--tertiary" />
          <h3 className="card__title text-grad--tertiary">Desarrollado a la medida</h3>
        </div>
        <div className="card__side card__side--back bg-grad--tertiary" />
      </div>
    </div>
  </section>
);

export default Skill;
