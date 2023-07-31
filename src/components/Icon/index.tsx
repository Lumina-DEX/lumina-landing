import React from 'react'
import svgs from './svgByName';

type IconProps = {
  name: string;
  direction?: 'n' | 's' | 'e' | 'w';
  loading?: boolean;
  spin?: boolean;
  style?: string;
  viewBox?: string;
};

const Icon = ({ name, ...props }: IconProps) => {
  const path = '';
  return (
    <svg
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  )
}

export default Icon;