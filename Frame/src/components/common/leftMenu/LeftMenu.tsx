import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { fetchUserMe, fetchUserPhoto } from '../../../store/actions/userActions';
import { StoreState } from '../../../store/reducers';
import ChildElement from './ChildElement';
import {
  BottomContainer,
  Container,
  ProfileContainer,
  TopContainer,
  NameContainer,
  JobTitleContainer,
  ItemsContainer,
} from '../../../helper/styled/LeftMenuComponents';

interface IProps extends RouteComponentProps {
  fetchUserMe: Function;
  fetchUserPhoto: Function;
  showHamburgerMenu: boolean;
  userMe: {
    name: string;
    company: {
      name: string;
    };
    id: number;
  };
  userPhotoUrl: {
    url: string;
  };
}

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const LeftMenu = (props: IProps) => {
  const {
    fetchUserMe,
    fetchUserPhoto,
    showHamburgerMenu,
    history,
    userMe,
    userPhotoUrl,
  } = props;

  const { name, company, id } = userMe;
  const { url } = userPhotoUrl;

  useEffect(() => {
    fetchUserMe();
  }, [fetchUserMe]);

  useEffect(() => {
    if(id !== 0) {
      fetchUserPhoto(id);
    }
  }, [fetchUserPhoto, id]);

  const bottomContainerPaddingStyles = {
    paddingTop: showHamburgerMenu ? 30 : 15,
    paddingBottom: showHamburgerMenu ? 15 : 15,
    paddingLeft: showHamburgerMenu ? 30 : 15,
    paddingRight: showHamburgerMenu ? 30 : 15
  }

  const onProfileRedirect = () => {
    history.push({ pathname: '/profile' });
  }

  return (
    <Container showHamburgerMenu={showHamburgerMenu}>
      <ProfileContainer showHamburgerMenu={showHamburgerMenu}>
        <TopContainer showHamburgerMenu={showHamburgerMenu} onClick={onProfileRedirect}>
          <Image src={url} alt="" />
          <NameContainer>{name}</NameContainer>
          <JobTitleContainer>{company.name}</JobTitleContainer>
        </TopContainer>
        <BottomContainer style={bottomContainerPaddingStyles}>
          <ChildElement
            title="Your network"
            leftIconPath="/media/icons/network.png"
            rightIconPath="/media/icons/user-plus.svg"
            marginBottom={showHamburgerMenu ? 20 : undefined}
            withRightIcon={true}
            navigateTo="/test"
          />
          <ChildElement
            title="Your Publications"
            leftIconPath="/media/icons/publications.svg"
            rightIconPath="/media/icons/plus.svg"
            marginBottom={showHamburgerMenu ? 20 : undefined}
            withRightIcon={true}
            navigateTo="/test"
          />
          {showHamburgerMenu && (
            <>
              <ChildElement
                title="Publications"
                leftIconPath="/media/icons/publications.svg"
                withRightIcon={false}
                marginBottom={20}
                navigateTo="/test"
              />
              <ChildElement
                title="Ecosystem"
                leftIconPath="/media/icons/ecosystem.svg"
                withRightIcon={false}
                marginBottom={20}
                navigateTo="/test"
              />
              <ChildElement
                title="Entities"
                leftIconPath="/media/icons/entities2.svg"
                withRightIcon={false}
                marginBottom={20}
                navigateTo="/entities"
              />
            </>
          )}
        </BottomContainer>
      </ProfileContainer>
      {!showHamburgerMenu && (
        <ItemsContainer>
          <ChildElement
            title="Publications"
            leftIconPath="/media/icons/publications.svg"
            withRightIcon={false}
            marginBottom={20}
            navigateTo="/test"
          />
          <ChildElement
            title="Ecosystem"
            leftIconPath="/media/icons/ecosystem.svg"
            withRightIcon={false}
            marginBottom={20}
            navigateTo="/test"
          />
          <ChildElement
            title="Entities"
            leftIconPath="/media/icons/entities2.svg"
            withRightIcon={false}
            marginBottom={20}
            navigateTo="/entities"
          />
        </ItemsContainer>
      )}
    </Container>
  );
}

function mapStateToProps(state: StoreState) {
  return {
    userMe: state.user.user,
    userPhotoUrl: state.user.userPhotoUrl,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchUserMe: () => dispatch(fetchUserMe()),
    fetchUserPhoto: (id: number) => dispatch(fetchUserPhoto(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter<any, any>(LeftMenu));
