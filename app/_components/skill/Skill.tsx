import { AiFillTool, AiFillRocket, AiFillSafetyCertificate } from 'react-icons/ai';

import { CardRotate } from '../cardRotate/CardRotate';

export const Skill = () => (
  <section className="skill">
    <div className="row row--center">
      <h2 className="col-12 text--center">Caracteristicas</h2>
      <CardRotate
        Icon={AiFillSafetyCertificate}
        title="Aplicaciones seguras"
        gradient="primary"
        className="col-4"
      >
        {/* eslint-disable-next-line max-len */}
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum accusamus eius officiis obcaecati. Beatae commodi repudiandae, quisquam blanditiis enim ipsa illo, officia ad odio vitae odit assumenda error, aut cumque?</p>
      </CardRotate>
      <CardRotate
        Icon={AiFillRocket}
        title="Rapidas y escalables"
        gradient="secondary"
        className="col-4"
      >
        {/* eslint-disable-next-line max-len */}
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum accusamus eius officiis obcaecati. Beatae commodi repudiandae, quisquam blanditiis enim ipsa illo, officia ad odio vitae odit assumenda error, aut cumque?</p>
      </CardRotate>
      <CardRotate
        Icon={AiFillTool}
        title="Desarrollado a la medida"
        gradient="tertiary"
        className="col-4"
      >
        {/* eslint-disable-next-line max-len */}
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum accusamus eius officiis obcaecati. Beatae commodi repudiandae, quisquam blanditiis enim ipsa illo, officia ad odio vitae odit assumenda error, aut cumque?</p>
      </CardRotate>
    </div>
  </section>
);

export default Skill;
