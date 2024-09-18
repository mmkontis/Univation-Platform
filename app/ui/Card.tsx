import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return (
    <div
      className="clickable-element bubble-element Group cnaCvaE bubble-r-container flex column"
      style={{
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: 'rgba(18, 25, 38, 0.1) 0px 1px 3px 0px',
        transition: 'background 250ms',
        alignSelf: 'flex-start',
        minWidth: '0px',
        order: 1,
        minHeight: '246px',
        maxHeight: '246px',
        width: '0px',
        flexGrow: 1,
        height: '246px',
        margin: '0px',
        zIndex: 6,
        overflow: 'visible',
        justifyContent: 'space-between',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'rgb(227, 232, 239)',
        borderRadius: '12px',
        opacity: 1,
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;