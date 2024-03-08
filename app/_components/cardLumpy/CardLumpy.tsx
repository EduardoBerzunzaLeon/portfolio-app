'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import './card-lumpy.scss';
import { AiOutlineEye } from 'react-icons/ai';

export const CardLumpy = () => {
  const [ isToggle, setIsToggle ] = useState(false);

  const onClick = () => {
    setIsToggle((toggle) => !toggle);
  };

  return (
    <div className="card-lumpy">
      <div className="card-lumpy__container-button">
        <button type="button" className={`card-lumpy__button ${isToggle ? 'isClicked' : ''}`} onClick={onClick} />
      </div>
      <div className="card-lumpy__content">
        <div className="card-lumpy__content-text">
          <div className="card-lumpy__content-image" />
          <div className="card-lumpy__content-header">
            <h3 className="text--left">
              Tutor App
            </h3>
            <div className="icon__container">
              <span className="tooltip">Ver más</span>
              <AiOutlineEye className="icon" />
            </div>
          </div>

          <p>Sistema de gestion de alumnos y tutores</p>
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
