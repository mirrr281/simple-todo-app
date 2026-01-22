import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'danger';
  onClick?: () => void;
};

const base =
  'px-2 py-1 transition-colors';

const variants = {
  default: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};


const Button = ({children, variant = "default", onClick}: ButtonProps) => {
  return <button className={`${base} ${variants[variant]}`} onClick={onClick}>{children}</button>;
};

export default Button;
