import { AiFillTool, AiFillRocket, AiFillSafetyCertificate } from 'react-icons/ai';

import { CardRotate } from '../cardRotate/CardRotate';

import './skill.scss';

export const Skill = () => (
  <section className="skill">
    <div className="row row--center row--min-content">
      <h2 className="col-12 heading-section">Caracteristicas</h2>
      <CardRotate
        Icon={AiFillSafetyCertificate}
        title="Aplicaciones seguras"
        gradient="primary"
        className="col-4"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eum accusamus eius
          officiis obcaecati. Beatae commodi
          repudiandae, quisquam blanditiis enim
          ipsa illo, officia ad odio vitae odit
          assumenda error, aut cumque?
        </p>
      </CardRotate>
      <CardRotate
        Icon={AiFillRocket}
        title="Rapidas y escalables"
        gradient="secondary"
        className="col-4"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eum accusamus eius
          officiis obcaecati. Beatae commodi
          repudiandae, quisquam blanditiis enim
          ipsa illo, officia ad odio vitae odit
          assumenda error, aut cumque?
        </p>
      </CardRotate>
      <CardRotate
        Icon={AiFillTool}
        title="Desarrollado a la medida"
        gradient="tertiary"
        className="col-4"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eum accusamus eius
          officiis obcaecati. Beatae commodi
          repudiandae, quisquam blanditiis enim
          ipsa illo, officia ad odio vitae odit
          assumenda error, aut cumque?
        </p>
      </CardRotate>
    </div>
  </section>
);

export default Skill;
