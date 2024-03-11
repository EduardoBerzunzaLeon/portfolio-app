'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import Image from 'next/image';
import './card-lumpy.scss';
import { AiOutlineEye } from 'react-icons/ai';
import proyectPic from './proyect.png';

export const CardLumpy = () => {
  const [ isToggle, setIsToggle ] = useState(false);

  const onClick = () => {
    setIsToggle((toggle) => !toggle);
  };

  return (
    <div className="card-lumpy col-4">
      <div className="card-lumpy__container-button">
        <button type="button" className={`card-lumpy__button ${isToggle ? 'isClicked' : ''}`} onClick={onClick} />
      </div>
      <div className="card-lumpy__content">
        <div className="card-lumpy__content-text">
          {/* // eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={proyectPic}
            alt="project"
            className="card-lumpy__content-image"
          />
          <h3>
            Tutor App
          </h3>
          <div className="icon__container">
            <span>Ver más</span>
            <AiOutlineEye className="icon" />
          </div>

          <p>Sistema de gestion de alumnos de univerdad y sus tutores</p>
        </div>
        <div className={`card-lumpy__bg-content ${isToggle ? 'drippping-top' : ''}`}>
          <div className="drip drip--top" />
          <div className="drip drip--top" />
          <div className="drip drip--top" />
        </div>
      </div>

      <div className={`card-lumpy__description ${isToggle ? 'isRed' : ''}`}>
        <div className={`card-lumpy__description-content ${isToggle ? 'opacity-move' : ''}`}>
          <h3>Tecnologías</h3>
          <div className="bagde__container">
            <span className="badge bg--react">Reactjs</span>
            <span className="badge bg--node">Nodejs</span>
            <span className="badge bg--mongo">Mongodb</span>
            <span className="badge bg--redux">Redux</span>
            <span className="badge bg--typescript">Typescript</span>
          </div>
        </div>
        <div className={`card-lumpy__bg-description ${isToggle ? 'drippping-bottom' : ''}`}>
          <div className="drip drip--bottom" />
          <div className="drip drip--bottom" />
          <div className="drip drip--bottom" />
        </div>
      </div>

    </div>
  );
};

export default CardLumpy;
