import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import HeaderInput from './HeaderInput';
import {
  Container,
  PartialContainer,
  TextContainer,
  ArrowDownMenuContainer,
  CircleDiv,
  CircleWhiteDiv,
  CounterContainer
} from '../../../helper/styled/HeaderComponents';
import DropdownMenu from '../menu/DropdownMenu';

interface IProps {
  title?: string
  isGray?: boolean;
  showHamburgerMenu: boolean;
  wrapperRef: React.RefObject<HTMLDivElement>
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  setDropdownUrl: Function;
  setDropdownTitle: Function;
  dropdownUrl: string;
  dropdownTitle: string;
}

const Image = styled.img`
  margin: 15px;
`;

const Wrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const TextContainerWrapper = styled(TextContainer)`
  margin: 15px;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

const Dropdown = styled.div`
  position: relative;
  z-index: 1000;
`;

const DropdownChild = styled.div`
  position: absolute;
  width: 250px;
`;

const Header = (props: IProps) => {
  const {
    showHamburgerMenu,
    wrapperRef,
    toggleDropdown,
    dropdownOpen,
    dropdownTitle,
    dropdownUrl,
    setDropdownTitle,
    setDropdownUrl
  } = props;

  const arrowDownContainerStyles = {
    width: showHamburgerMenu ? 50 : 250,
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  }

  return (
    <Container>
      <PartialContainer>
        <Image src="/media/logo.png" alt="" width="35" height="35" />
        <div ref={wrapperRef}>
          <ArrowDownMenuContainer style={arrowDownContainerStyles} onClick={toggleDropdown}>
            <Wrapper>
              <img src={dropdownUrl} alt="" />
              <TextContainerWrapper>
                <LinkWrapper to="/">{dropdownTitle}</LinkWrapper>
              </TextContainerWrapper>
            </Wrapper>
            <img src="/media/icons/arrow-down.svg" alt="" />
          </ArrowDownMenuContainer>
          {!showHamburgerMenu && dropdownOpen && (
            <Dropdown>
              <DropdownChild>
                <DropdownMenu
                  setDropdownUrl={setDropdownUrl}
                  setDropdownTitle={setDropdownTitle}
                />
              </DropdownChild>
            </Dropdown>
          )}
        </div>
      </PartialContainer>
      {!showHamburgerMenu && <HeaderInput />}
      <PartialContainer>
        <CircleWhiteDiv>
          <img src="/media/icons/house.svg" alt="" />
        </CircleWhiteDiv>
        <CircleDiv>
          <CounterContainer>3</CounterContainer>
          <img src="/media/icons/comments.svg" alt="" />
        </CircleDiv>
        <CircleDiv>
          <CounterContainer>3</CounterContainer>
          <img src="/media/icons/bell.svg" alt="" />
        </CircleDiv>
      </PartialContainer>
    </Container>
  );
}

export default Header;

