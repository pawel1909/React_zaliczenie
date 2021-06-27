import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import axios from 'axios';

import { Colors } from '../../../helper/styled/Colors';
import LeftMenu from '../../common/leftMenu/LeftMenu';
import FilterButton from '../entitiesPage/FilterButton';
import RigidButton from '../entitiesPage/RigidButton';
import SwitchButton from '../entitiesPage/SwitchButton';
import EntitiesList from '../entitiesPage/EntitiesList';

interface IProps {
  showHamburgerMenu: boolean;
}

interface IContainer {
  isFullScreen: boolean;
}

const Container = styled.div<IContainer>`
  ${({ isFullScreen }) => isFullScreen ? css`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: white;
    margin-top: -30px;
  ` : css`
    display: flex;
    align-items: center;
    flex: 1;
    margin-top: 55px;
    flex-direction: column;
    justify-content: flex-start;
  `}
`;

const Wrapper = styled.div<IContainer>`
  width: ${({ isFullScreen }) => isFullScreen ? '100%' : '90%'};
  background-color: ${Colors.white};
  margin-top: 30px;
`;

const TopBarContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${Colors.black};
  font-weight: 700;
  font-size: 1vw;
`;

const BottomBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 5px;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 5px;
  color: ${Colors.black};
  font-size: 1.5vw;
  font-weight: 900;
  margin-top: -15px;
`;

const Border = styled.div`
  border-right: 1px solid ${Colors.subProfileTextColor};
  width: 1px;
  height: 25px;
`;

const Image = styled.img`
  width: 12.5px;
  height: 12.5px;
  margin-top: -5px;
`;

const Span = styled.span`
  margin-right: 10px;
`;

const BottomBarChild = styled.div`
  display: flex;
  flex-direction: row;
`;

const EntititiesPage = (props: IProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [sortType, setSortType] = useState('random');
  const [selectedView, setSelectedView] = useState('mosaic');

  const { showHamburgerMenu } = props;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      setImageList(res.data.slice(0, 30));
    });
  }, []);

  const handleShareClick = () => {
    const dummy = document.createElement('input');
    const url = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Url copied');
  }

  const handleFullScreenClick = () => {
    setIsFullScreen(prevState => !prevState);
  }

  const handleSortClick = () => {
    const imageListCopy = [...imageList];

    if (sortType === 'DESC' || sortType === 'random') {
      // @ts-ignore
      const sortedImageList = imageListCopy.sort((a, b) => b.title.localeCompare(a.title)).reverse();
      setImageList(sortedImageList);
      setSortType('ASC');
    } else {
      // @ts-ignore
      const sortedImageList = imageListCopy.sort((a, b) => b.title.localeCompare(a.title));
      setImageList(sortedImageList);
      setSortType('DESC');
    }
  }

  const handleSwitchClick = (type: string) => () => {
    setSelectedView(type);
  }

  return (
    <Container isFullScreen={isFullScreen}>
      <Wrapper isFullScreen={isFullScreen}>
        {showHamburgerMenu && <LeftMenu showHamburgerMenu={showHamburgerMenu} />}
        <TopBarContainer>
          <LabelContainer>
            <Span>Entities</Span>
            <Image src="/media/icons/cog.svg" alt="" />
          </LabelContainer>
          <SwitchButton onClick={handleSwitchClick} selectedView={selectedView} />
        </TopBarContainer>
        <BottomBarContainer>
          <BottomBarChild>
            <RigidButton />
            <DotsContainer>...</DotsContainer>
            <Border />
            <FilterButton text="Sort" iconUrl="/media/icons/sort.svg" appendText onClick={handleSortClick} />
            <FilterButton text="Filters" iconUrl="/media/icons/filter.svg" appendText />
            <Border />
            <FilterButton isMarginLeft iconUrl="/media/icons/full-screen.svg" onClick={handleFullScreenClick} />
            <Border />
            <FilterButton text="Share" iconUrl="/media/icons/share.svg" appendText onClick={handleShareClick} />
          </BottomBarChild>
        </BottomBarContainer>
        <EntitiesList imageList={imageList} selectedView={selectedView} />
      </Wrapper>
    </Container>
  );
}

export default EntititiesPage;
