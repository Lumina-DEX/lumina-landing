import React from 'react';
import Icon from './Icon';

type ButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  coin?: string;
  dropdown?: boolean;
};

const Button = ({ text, variant = 'primary', onClick, coin = '', dropdown = false }: ButtonProps) => {
  let backgroundColor;
  let textColor;
  let width;

  // Set button colors based on variant prop
  if (variant === 'primary') {
    backgroundColor = 'bg-black';
    textColor = 'text-black';
  } else {
    backgroundColor = 'bg-red-500';
    textColor = 'text-white';
    width = 'w-full';
  }

  return (
    <button
      className={`flex flex-row justify-center items-center px-4 py-2 gap-4 bg-opacity-9 rounded-lg ${backgroundColor} ${textColor} ${width}`}
      onClick={onClick}
    >
      {coin &&
        <img src="" alt="mina coin" />
      }
      {text}
      {dropdown &&
        <Icon name="dropdown" />
      }
    </button>
  );
};

export default Button;