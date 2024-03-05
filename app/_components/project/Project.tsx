import { CardLumpy } from '../cardLumpy/CardLumpy';
import './project.scss';

export const Project = () => (
  <section className="project">
    <h2>Proyectos</h2>
    <div className="project__container">
      <CardLumpy />
    </div>
  </section>
);

export default Project;
