import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../../store/reducers';
import { Colors } from '../../../helper/styled/Colors';
import MainViewElement from './MainViewElement';
import PublicationList from './PublicationList';
import { User } from '../../../store/actions/userActions';
import { Publication } from '../../../store/actions/publicationActions';
import { Photo } from '../../../store/actions/photoActions';
import { PublicationDto } from './PublicationComponent';
import {
  Container,
  LeftContainer,
  LeftWrapper,
  RightContainer,
  RightWrapper
} from '../../../helper/styled/PublicationViewComponents';

interface IProps {
  showHamburgerMenu: boolean;
  publications: Publication[];
  userList: User[];
  photos: Photo[];
}

const PublicationView = (props: IProps) => {
  const [collection, setCollection] = useState<PublicationDto[]>([]);

  const { showHamburgerMenu, publications, userList, photos } = props;

  useEffect(() => {
    const tmp: PublicationDto[] = []
    publications.slice(20).forEach((publication: Publication): void => {
      const { title, body, userId } = publication;

      const foundUser = userList.filter((user: User): boolean => user.id === userId);
      if(!foundUser[0]) {
        return;
      }

      const { name }: User = foundUser[0];

      const foundPhoto = photos.filter((photo: Photo): boolean => photo.id === userId);
      const urls: string[] = [];
      if(!foundPhoto[0]) {
        return;
      }
      urls.push(foundPhoto[0].url);
      urls.push(photos[Math.floor(Math.random() * photos.length)].url);


      tmp.push({ title, body, userId, name, urls });
    });
    setCollection(tmp);
  }, [photos, publications, userList]);

  const latestStyles = {
    color: Colors.profileItemTextColor,
    fontWeight: 700,
    fontSize: showHamburgerMenu ? '2.7vw' : '0.95vw'
  }

  const moreStyles = {
    color: Colors.profileTextColor,
    fontWeight: 700,
    fontSize: showHamburgerMenu ? '2.7vw' : '0.95vw'
  }

  return (
    <Container style={{ flexDirection: showHamburgerMenu ? 'column' : 'row' }}>
      <LeftContainer style={{ width: showHamburgerMenu ? '100%' : '30%' }}>
        <LeftWrapper>
          <MainViewElement
            body={collection.length !== 0 ? collection[0].body : ''}
            userName={collection.length !== 0 ? collection[0].name : ''}
            userPhotoUrl={collection.length !== 0 && collection[0].urls[0] ? collection[0].urls[0] : ''}
            backgroundImageUrl={collection.length !== 0 && collection[0].urls[1] ? collection[0].urls[1] : ''}
            showHamburgerMenu={showHamburgerMenu}
          />
        </LeftWrapper>
      </LeftContainer>
      <RightContainer style={{ width: showHamburgerMenu ? '100%' : '70%' }}>
        <RightWrapper>
          <span style={latestStyles}>Latest publications</span>
          <PublicationList collection={collection.slice(1, 4)} showHamburgerMenu={showHamburgerMenu} />
          <span style={moreStyles}>See more publications</span>
        </RightWrapper>
      </RightContainer>
    </Container>
  );
}

function mapStateToProps(state: StoreState) {
  return {
    publications: state.publications.publications,
    userList: state.user.userList,
    photos: state.photos.photos,
  };
}

export default connect(mapStateToProps)(PublicationView);
