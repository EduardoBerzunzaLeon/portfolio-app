'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import './card-lumpy.scss';

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
          <h3 className="text--left">Tutor App</h3>
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
          <h2>down side</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur
          </p>
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
