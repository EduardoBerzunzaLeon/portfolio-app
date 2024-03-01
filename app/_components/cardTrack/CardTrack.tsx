'use client';

import { MouseEvent, PropsWithChildren, useRef } from 'react';

import './cardTrack.scss';

interface Props {
  className?: string;
}

export const CardTrack = ({ children, className = '' }: PropsWithChildren<Props>) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();

      const {
        clientY,
        clientX,
      } = event;

      const {
        top, height, width, left,
      } = rect;

      const middleY = (height / 2);
      const middleX = (width / 2);

      const positionY = clientY - top;
      const offsetY = ((positionY - middleY) / middleY) * 15;

      const positionX = clientX - left;
      const offsetX = ((positionX - middleX) / middleX) * 15;

      const delay = '0s';

      elementRef.current.style.setProperty('--rotateX', `${offsetX}deg`);
      elementRef.current.style.setProperty('--rotateY', `${-1 * offsetY}deg`);
      elementRef.current.style.setProperty('--delay', delay);
    }
  };

  const handleMouseLeave = (event: MouseEvent<HTMLElement>) => {
    const { currentTarget: element } = event;
    element.style.setProperty('--rotateX', '0deg');
    element.style.setProperty('--rotateY', '0deg');
    element.style.setProperty('--delay', '.5s');
  };

  return (
    <div
      className={`card-track ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={elementRef}
    >
      {children}
    </div>
  );
};

export default CardTrack;
