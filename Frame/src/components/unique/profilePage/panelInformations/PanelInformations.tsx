import React from 'react';
import styled from 'styled-components';

import { Colors } from '../../../../helper/styled/Colors';
import Correspondants from './Correspondants';
import FileTaker from './FileTaker';
import SentenceComponent from './SentenceComponent';

interface IProps {
  isFormVisible: boolean;
}

const MainTitle = styled.div`
  color: ${Colors.black};
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.1vw;
  padding-left: 20px;
  padding-top: 20px;
`;

const PanelInformations = (props: IProps) => {
  const { isFormVisible } = props;

  return (
    <>
      <MainTitle>
        Panel informations
      </MainTitle>
      <SentenceComponent
        title="Hourly fee"
        value="610E/hour (Negociated)"
        isFormVisible={isFormVisible}
      />
      <SentenceComponent
        title="Terms & conditions"
        value="Monthly 10kE retainer - see with Jeanny Smith"
        isFormVisible={isFormVisible}
      />
      <FileTaker
        isFormVisible={isFormVisible}
      />
      <SentenceComponent
        title="Services & projects"
        value="Corporate M&A and international acquisitions"
        color={Colors.black}
        fontSize="0.9vw"
        isBold
        isFormVisible={isFormVisible}
      />
      <Correspondants isFormVisible={isFormVisible} />
    </>
  );
}

export default PanelInformations;
