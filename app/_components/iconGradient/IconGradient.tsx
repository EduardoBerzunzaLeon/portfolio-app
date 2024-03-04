import './icon-gradient.scss';

export interface IconGradientProps {
  colorStart: string;
  colorEnd: string;
  id: string;
}

export const IconGradient = ({ colorStart, colorEnd, id }: IconGradientProps) => (
  <svg width="0" height="0" className="icon-gradient">
    <linearGradient id={id} x1="100%" y1="100%" x2="0%" y2="0%">
      <stop stopColor={colorStart} offset="0%" />
      <stop stopColor={colorEnd} offset="100%" />
    </linearGradient>
  </svg>
);

export default IconGradient;
