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

    <div className="row row--center row--min-content">
      <h2 className="col-12 heading-section">Proyectos</h2>
      <CardLumpy />
      <CardLumpy />
      <CardLumpy />
      <CardLumpy />
      <CardLumpy />
      <CardLumpy />
    </div>
  </section>
);

export default Project;
