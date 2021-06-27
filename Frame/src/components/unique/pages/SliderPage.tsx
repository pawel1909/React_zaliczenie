import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import SliderPlaceholder from '../sliderPage/SliderPlaceholder';
import MattersContainer from '../sliderPage/MattersContainer';
import ResumeView from '../resume/ResumeView';
import { fetchAllUsers } from '../../../store/actions/userActions';
import { fetchAllPhotos } from '../../../store/actions/photoActions';
import LeftMenu from '../../common/leftMenu/LeftMenu';

interface IProps {
  showHamburgerMenu: boolean;
  fetchAllUsers: Function;
  fetchAllPhotos: Function;
}

interface SliderItemState {
  icon: string;
  photoUrl: string;
  title: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 55px;
  flex-direction: column;
`;

const SliderPage = (props: IProps) => {
  const location = useLocation<SliderItemState>();
  const { state: { photoUrl, title } } = location;

  const {
    showHamburgerMenu,
    fetchAllPhotos,
    fetchAllUsers
  } = props;

  useEffect(() => {
    fetchAllPhotos();
    fetchAllUsers();
  }, [fetchAllPhotos, fetchAllUsers]);

  return (
    <Container>
      {showHamburgerMenu && <LeftMenu showHamburgerMenu={showHamburgerMenu} />}
      <SliderPlaceholder photoUrl={photoUrl} title={title} />
      <MattersContainer />
      <ResumeView
        showHamburgerMenu={showHamburgerMenu}
        placeholderTitle="Latest updates"
        isComponentsBar={true}
      />
    </Container>
  );
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  }
}

export default connect(null, mapDispatchToProps)(SliderPage);
