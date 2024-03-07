import { CardLumpy } from '../cardLumpy/CardLumpy';
import './project.scss';

export const Project = () => (
  <section className="project">
    <svg className="goo-filter" viewBox="0 0 1 1">
      <filter id="lumpy">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -20" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </svg>

    <div className="row row--center">
      <h2 className="col-12 text--center">Proyectos</h2>
      <div className="col-12 project__container">
        <CardLumpy />
        <CardLumpy />
        <CardLumpy />
        <CardLumpy />
        <CardLumpy />
        <CardLumpy />
      </div>
    </div>
  </section>
);

export default Project;
