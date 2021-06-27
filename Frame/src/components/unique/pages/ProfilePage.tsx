import React, { useEffect, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Colors } from '../../../helper/styled/Colors';
import ButtonsContainer from '../profilePage/ButtonsContainer';
import { StoreState } from '../../../store/reducers';
import { fetchUserMe, fetchUserPhoto, User, UserPhoto } from '../../../store/actions/userActions';
import ProfileDataContainer from '../profilePage/ProfileDataContainer';
import ProfileDataForm from '../profilePage/ProfileDataForm';
import BottomProfileDataContainer from '../profilePage/BottomProfileDataContainer';
import LeftMenu from '../../common/leftMenu/LeftMenu';

interface IProps extends RouteComponentProps {
  showHamburgerMenu: boolean;
  fetchUserMe: Function;
  fetchUserPhoto: Function;
  userPhotoUrl: UserPhoto;
  userMe: User;
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 55px;
  flex-direction: column;
`;

const TopContainer = styled.div<{ width: string }>`
  border: 1px solid ${Colors.subProfileTextColor};
  margin-top: 30px;
  width: ${({ width }) => width};
`;

const InternalContainer = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.3;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const ProfileLinkSpan = styled.span`
  margin-top: 10px;
  color: ${Colors.profileTextColor};
  font-size: 0.8vw;
`;

const Image = styled.img<{ imgSize: number }>`
  width: ${({ imgSize }) => `${imgSize}px`};
  height: ${({ imgSize }) => `${imgSize}px`};
  border-radius: ${({ imgSize }) => `${imgSize / 2}px`};
`;

const ProfilePage = (props: IProps) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [city, setCity] = useState('New-york');
  const [width, setWidth] = useState('50%');
  const [imgSize, setImgSize] = useState(100);

  const { fetchUserMe, fetchUserPhoto, showHamburgerMenu, userMe, userPhotoUrl } = props;

  const { name, company, id, email, phone, company: { bs } } = userMe;
  const { url } = userPhotoUrl;

  useLayoutEffect(() => {
    window.addEventListener('resize', updateLayout);

    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    fetchUserMe();
  }, [fetchUserMe]);

  useEffect(() => {
    if(id !== 0) {
      fetchUserPhoto(id);
    }
  }, [fetchUserPhoto, id]);

  const onEditProfileDataClick = () => {
    setIsFormVisible(!isFormVisible);
  }

  const updateLayout = () => {
    if (window.innerWidth < 900) {
      setWidth('80%');
      setImgSize(40);
    } else if (window.innerWidth < 1050) {
      setWidth('70%');
      setImgSize(60);
    } else if (window.innerWidth < 1350) {
      setWidth('60%');
      setImgSize(80);
    } else {
      setWidth('50%');
      setImgSize(100);
    }
  }

  return (
    <Container>
      {showHamburgerMenu && <LeftMenu showHamburgerMenu={showHamburgerMenu} />}
      <TopContainer width={width}>
        <ButtonsContainer />
        <InternalContainer>
          <ImageContainer>
            <Image src={url} alt="" imgSize={imgSize} />
            <ProfileLinkSpan>See profile</ProfileLinkSpan>
          </ImageContainer>
          {!isFormVisible ? (
            <ProfileDataContainer
              name={name}
              companyName={company.name}
              city={city}
              bs={bs}
              email={email}
              onEditProfileDataClick={onEditProfileDataClick}
              phone={phone}
            />
            ) : (
              <ProfileDataForm
                onEditProfileDataClick={onEditProfileDataClick}
                setCity={setCity}
                userMe={userMe}
                city={city}
              />
            )
          }
        </InternalContainer>
      </TopContainer>
      <BottomProfileDataContainer width={width} />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage));
