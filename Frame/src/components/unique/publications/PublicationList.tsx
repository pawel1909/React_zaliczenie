import React, { ReactElement } from 'react';

import PublicationComponent, { PublicationDto } from './PublicationComponent';
import { Container } from '../../../helper/styled/PublicationListComponents';

interface IProps {
  collection: PublicationDto[];
  showHamburgerMenu: boolean;
}

const PublicationList = (props: IProps) => {
  const { collection, showHamburgerMenu } = props;

  const renderPublications = () => {
    return collection.map((publication: PublicationDto, index: number): ReactElement => {
      return (
        <PublicationComponent
          key={index}
          publication={publication}
          showHamburgerMenu={showHamburgerMenu}
        />
      );
    })
  }

  return (
    <Container>
      {renderPublications()}
    </Container>
  );
}

export default PublicationList;
