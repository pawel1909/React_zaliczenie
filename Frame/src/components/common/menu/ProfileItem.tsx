import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Colors } from '../../../helper/styled/Colors';
import { fontSize } from '../../../helper/styled/FontSizes';

interface IProps extends RouteComponentProps {
  photoUrl: string;
  name: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 15px;
`;

const LinkSpan = styled.span`
  color: ${Colors.profileTextColor};
  font-weight: 700;
  font-size: ${fontSize[14]};
  cursor: pointer;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const ProfileItem = (props: IProps) => {
  const { photoUrl, name, history } = props;

  const onProfileRedirect = () => {
    history.push({ pathname: '/profile' });
  }

  return (
    <Container>
      <Image src={photoUrl} alt="" />
      <NameContainer>
        {name}
        <LinkSpan onClick={onProfileRedirect}>
          See profile
        </LinkSpan>
      </NameContainer>
    </Container>
  );
}

export default withRouter(ProfileItem);
