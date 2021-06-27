import React from 'react';
import styled from 'styled-components';

interface IProps {
  title?: string;
  iconUrl: string
  isRotatedIcon?: boolean;
}

const Container = styled.div`
  margin: 10px;
  flex-direction: row;
  display: flex;
  align-items: center;
  font-size: 0.8vw;
`;

const SingleButton = (props: IProps) => {
  const { iconUrl, title, isRotatedIcon } = props;

  const buttonIconStyles = {
    width: 20,
    height: 20,
    marginRight: 5,
    transform: isRotatedIcon ? 'rotate(45deg)' : undefined
  }

  return (
    <Container>
      <img
        src={iconUrl}
        alt=""
        style={buttonIconStyles}
      />
      <div>{title ? title : ''}</div>
    </Container>
  );
}

export default SingleButton;
