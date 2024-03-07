import { PropsWithChildren } from 'react';
import { IconType } from 'react-icons';

import './card-rotate.scss';

interface Props {
  Icon: IconType;
  title: string;
  gradient: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

export const CardRotate = ({
  children, Icon, title, gradient, className = '',
}: PropsWithChildren<Props>) => (
  <div className={`card-rotate ${className}`}>
    <div className={`card-rotate__side card-rotate__side--front card-rotate__ribbon--${gradient}`}>
      <Icon className={`card-rotate__icon card-rotate__icon--${gradient}`} />
      <h3 className={`card-rotate__title text-grad--${gradient}`}>{title}</h3>
    </div>
    <div className={`card-rotate__side card-rotate__side--back bg-grad--${gradient}`}>
      {children}
    </div>
  </div>
);

export default CardRotate;
