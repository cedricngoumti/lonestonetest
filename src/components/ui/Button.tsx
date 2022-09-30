import React, { ReactNode } from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  
  className?: string;
}

function Button(props: Props) {
  const { children, className = '', ...rest } = props;

  return (
    <button
      type="button"
      className={`button btn-joueur ${className}`}
      {...rest}
    >
        {children}
    </button>
  );
}

export default Button