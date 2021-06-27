import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode
  right?: number;
  top?: number;
  left?: number;
}

const AbsoluteContainer = (props: IProps) => {
  const { children, right, top, left } = props;
  return (
    <div
      style={{
        position: 'absolute',
        right: right,
        top: top,
        left: left
      }}
    >
      {children}
    </div>
  );
}

export default AbsoluteContainer;
