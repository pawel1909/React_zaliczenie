import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../../helper/styled/Colors';

interface IProps {
  iconUrl: string;
  routeUrl: string;
  title: string;
  setDropdownTitle: Function;
  setDropdownUrl: Function;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const TextContainer = styled.div`
  color: ${Colors.black};
  margin-left: 15px;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MenuItem = (props: IProps) => {
  const {
    iconUrl,
    routeUrl,
    title,
    setDropdownTitle,
    setDropdownUrl
  } = props;

  const onClick = () => {
    setDropdownTitle(title);
    setDropdownUrl(iconUrl);
  }

  return (
    <Container onClick={onClick}>
      <Image src={iconUrl} alt="" />
      <TextContainer>
        <StyledLink to={routeUrl}>
          {title}
        </StyledLink>
      </TextContainer>
    </Container>
  );
}

export default MenuItem;
