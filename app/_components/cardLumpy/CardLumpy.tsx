'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';

import Image, { StaticImageData } from 'next/image';
import { AiOutlineEye } from 'react-icons/ai';

import { Badge, BadgeProps } from '../badge/Badge';

import './card-lumpy.scss';

interface Props {
  title: string;
  image: StaticImageData;
  altImage: string;
  description: string;
  technologies: BadgeProps[];
}

export const CardLumpy = ({
  title, image, altImage, description, technologies,
}: Props) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const onClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className={`card-lumpy col-4 ${isOpen ? 'open' : ''}`}>
      <div className="card-lumpy__container-button">
        <button type="button" className="card-lumpy__button" onClick={onClick} />
      </div>
      <div className="card-lumpy__container">
        <div className="card-lumpy__container-text">
          <Image
            src={image}
            alt={altImage}
            className="card-lumpy__container-image"
          />
          <h3 className="text--left">
            { title }
          </h3>
          <div className="card-lumpy__container-icon">
            <span>Ver más</span>
            <AiOutlineEye className="card-lumpy__icon" />
          </div>
          <p>{ description }</p>
        </div>
        <div className="card-lumpy__bg">
          <div className="card-lumpy__drip card-lumpy__drip--top" />
          <div className="card-lumpy__drip card-lumpy__drip--top" />
          <div className="card-lumpy__drip card-lumpy__drip--top" />
        </div>
      </div>

      <div className="card-lumpy__description">
        <div className="card-lumpy__description-container">
          <h3 className="text--center">Tecnologías</h3>
          <div className="bagde__container">
            {technologies.map((badge) => (
              <Badge {...badge} key={badge.className} />
            ))}
          </div>
        </div>
        <div className="card-lumpy__bg">
          <div className="card-lumpy__drip card-lumpy__drip--bottom" />
          <div className="card-lumpy__drip card-lumpy__drip--bottom" />
          <div className="card-lumpy__drip card-lumpy__drip--bottom" />
        </div>
      </div>

    </div>
  );
};

export default CardLumpy;
