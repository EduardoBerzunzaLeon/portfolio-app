import { CardLumpy } from '../cardLumpy/CardLumpy';

import ProjectPic from './proyect.png';
import './project.scss';

const technologies = [
  { className: 'bg--react', text: 'Reactjs' },
  { className: 'bg--typescript', text: 'Typescript' },
  { className: 'bg--node', text: 'Nodejs' },
  { className: 'bg--mongo', text: 'Mongojs' },
  { className: 'bg--redux', text: 'Redux' },
];

const project = {
  title: 'Tutor App',
  image: ProjectPic,
  altImage: 'tutor app',
  description: 'Lorem ipsum dolor sit amet consectetur',
  technologies,
};

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
      <CardLumpy {...project} />
      <CardLumpy {...project} />
      <CardLumpy {...project} />
      <CardLumpy {...project} />
      <CardLumpy {...project} />
      <CardLumpy {...project} />
    </div>
  </section>
);

export default Project;
