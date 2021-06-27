import React from 'react';

import {
  BodySpan,
  Container,
  DetailsContainer,
  DetailsSpan,
  imgStyles
} from '../../../helper/styled/MainViewElementComponents';

export interface IProps {
  userName?: string;
  userPhotoUrl?: string;
  body?: string;
  backgroundImageUrl?: string;
  showHamburgerMenu?: boolean;
}

const MainViewElement = (props: IProps) => {
  const {
    userName,
    userPhotoUrl,
    body,
    backgroundImageUrl,
    showHamburgerMenu
  } = props;

  return (
    <Container backgroundImageUrl={backgroundImageUrl} style={{paddingTop: showHamburgerMenu ? 10 : 0}} >
      <div style={{ marginBottom: 25}}>
      <BodySpan style={{ fontSize: showHamburgerMenu ? '1.7vw' : '1vw'}}>{body}</BodySpan>
      <DetailsContainer>
        <DetailsSpan style={{ fontSize: showHamburgerMenu ? '1.4vw' : '0.7vw'}}>7 Jan 2020</DetailsSpan>
        <img src={userPhotoUrl} alt="" style={imgStyles} />
        <DetailsSpan style={{ fontSize: showHamburgerMenu ? '1.4vw' : '0.7vw'}}>{userName}</DetailsSpan>
      </DetailsContainer>
      </div>
    </Container>
  );
}

export default MainViewElement;
