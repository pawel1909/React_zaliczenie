import useDropdown from 'react-dropdown-hook';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { StoreState } from '../../../store/reducers';
import {
  Container,
  ItemContainer,
  SmallerContainer,
  SmallestContainer
} from '../../../helper/styled/FollowedButtonComponents';

interface IProps {
  onClick?: () => {};
  showHamburgerMenu: boolean;
  setSearchTerm: Function;
  userMe: {
    name: string;
  };
}

interface IFollowedContainer {
  showHamburgerMenu: boolean;
}

const FollowedContainer = styled.div<IFollowedContainer>`
  margin-left: ${({ showHamburgerMenu }) => showHamburgerMenu ? '2px' : '10px'};
  margin-top: 2px;
  font-size: ${({ showHamburgerMenu }) => showHamburgerMenu ? '2.5vw' : '0.9vw'};
`;

const ImageContainer = styled.div<IFollowedContainer>`
  margin-left: ${({ showHamburgerMenu }) => showHamburgerMenu ? '2px' : '10px'};
  margin-top: -2px;
`;

const FollowedButton = (props: IProps) => {
  const { showHamburgerMenu, setSearchTerm, userMe: { name } } = props;
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

  const searchResumes = (value: string) => {
    setSearchTerm(value);
    closeDropdown();
  }

  return (
    <div ref={wrapperRef}>
      <Container onClick={toggleDropdown}>
        (
          <SmallerContainer>(</SmallerContainer>
          <SmallestContainer>o</SmallestContainer>
          <SmallerContainer>)</SmallerContainer>
        )
        <FollowedContainer showHamburgerMenu={showHamburgerMenu}>Followed</FollowedContainer>
        <ImageContainer showHamburgerMenu={showHamburgerMenu}>
          <img src="/media/icons/arrow-down.svg" alt="" />
        </ImageContainer>
      </Container>
      {dropdownOpen && (
        <div style={{position: 'relative'}}>
          <div style={{position: 'absolute', width: '100%'}}>
            <ItemContainer onClick={() => searchResumes(name)}>My</ItemContainer>
            <ItemContainer onClick={() => searchResumes('')}>All</ItemContainer>
          </div>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state: StoreState) {
  return {
    userMe: state.user.user,
  };
}

export default connect(mapStateToProps)(FollowedButton);
