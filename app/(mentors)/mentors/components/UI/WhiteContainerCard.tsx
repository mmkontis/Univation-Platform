import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;