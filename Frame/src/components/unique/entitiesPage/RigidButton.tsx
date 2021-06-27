import styled from 'styled-components';

import { Colors } from '../../../helper/styled/Colors';
import ArrowDown from '../../../svgs/arrowDown';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: ${Colors.switchButtonBackgroundColor};
  border-radius: 5px;
  margin-right: 5px;
`;

const DotContainer = styled.div`
  font-size: 1.5vw;
  font-weight: 900;
  /* margin-top: -20px; */
  margin-right: 5px;
  width: 5px;
  height: 5px;
  color: ${Colors.rigidButtonTextColor};
  border: 2px solid ${Colors.rigidButtonTextColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 3px;
  align-items: center;
`;

const Dot = styled.div`
  margin-top: -16.675px;
`;

const All = styled.div`
  margin-right: 5px;
  color: ${Colors.rigidButtonTextColor};
`;

const RigidButton = () => (
  <Container>
    <DotContainer>
      <Dot>.</Dot>
    </DotContainer>
    <All>All</All>
    <ArrowDown fill="#2A3F9D" />
  </Container>
);

export default RigidButton;
