import React from 'react';

import {
  Container,
  ItemContainer
} from '../../../helper/styled/WorkspaceDetailsComponents';

interface IProps {
  photoUrl: string;
  type: string;
  users: number;
  icon: string;
  showHamburgerMenu: boolean;
}

const WorkspaceDetails = (props: IProps) => {
  const { type, users, icon, showHamburgerMenu } = props;

  const smallIconStyles = {
    width: showHamburgerMenu ? 7.5 : 15,
    height: showHamburgerMenu ? 7.5 : 15
  }

  const itemContainerStyles = {
    fontSize: showHamburgerMenu ? '1.5vw' : '0.7vw'
  }

  return (
    <Container>
      <ItemContainer>
        <img src={icon} alt="" style={smallIconStyles} />
      </ItemContainer>
      <ItemContainer style={itemContainerStyles}>
        {type}
      </ItemContainer>
      <ItemContainer style={itemContainerStyles}>.</ItemContainer>
      <ItemContainer>
        <img src="/media/icons/people.png" alt="" style={smallIconStyles} />
      </ItemContainer>
      <ItemContainer style={itemContainerStyles}>{users} users</ItemContainer>
    </Container>
  );
}

export default WorkspaceDetails;
