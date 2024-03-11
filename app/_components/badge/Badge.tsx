import './badge.scss';

export interface BadgeProps {
  className: string;
  text: string;
}

export function Badge({ className, text }: BadgeProps) {
  return (
    <span className={`badge ${className}`}>{ text }</span>
  );
}

export default Badge;
