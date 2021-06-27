import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  Container,
  TitleContainer,
  RightIconContainer
} from '../../../helper/styled/ChildElementComponents';

interface IProps {
  leftIconPath: string;
  title: string;
  rightIconPath?: string;
  withRightIcon: boolean;
  marginBottom?: number;
  navigateTo: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ChildElement = (props: IProps) => {
  const {
    leftIconPath,
    title,
    rightIconPath,
    withRightIcon,
    marginBottom,
    navigateTo
  } = props;

  return (
    <StyledLink to={navigateTo}>
      <Container marginBottom={marginBottom}>
        <img src={leftIconPath} alt="" />
        <TitleContainer>{title}</TitleContainer>
        {withRightIcon && (
          <RightIconContainer>
            <img src={rightIconPath} alt="" />
          </RightIconContainer>
        )}
      </Container>
    </StyledLink>
  );
}

export default ChildElement;
