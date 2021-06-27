import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../helper/styled/Colors';
import Entities2 from '../../../svgs/entities2';
import MatterItem from '../sliderPage/MatterItem';
import Ecosystem from '../../../svgs/ecosystem';
import Comments from '../../../svgs/comments';

const Container = styled.div`
  width: 90%;
  background-color: ${Colors.constantPartContainer};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-top: 35px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 300px;
`;

const LabelContainer = styled.div`
  margin-left: 30px;
  color: ${Colors.subProfileTextColor};
  font-size: 1.2vw;
  margin-top: 10px;
  font-weight: 700;
`;

const MattersContainer = () => {
  const [bigIconSize, setBigIconSize] = useState(150);
  const [height, setHeight] = useState(200);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const updateLayout = () => {
    if (window.innerWidth < 900) {
      setIsSmallScreen(true);
      setBigIconSize(50);
    } else if (window.innerWidth < 1050) {
      setHeight(300);
      setIsSmallScreen(false);
    } else if (window.innerWidth < 1350) {
      setBigIconSize(100)
      setHeight(250);
      setIsSmallScreen(false);
    } else {
      setBigIconSize(150);
      setHeight(200);
      setIsSmallScreen(false);
    }
  }

  return (
    <Container>
      <LabelContainer>Start working on corporate matters</LabelContainer>
      <Wrapper
        style={{
          flexDirection: isSmallScreen ? 'column': 'row',
          justifyContent: isSmallScreen ? 'center': 'space-between',
          alignItems: isSmallScreen ? 'center' : undefined,
          flexWrap: isSmallScreen? 'nowrap' : 'wrap'
        }}
      >
        <MatterItem
          smallIcon={<Entities2 fill="darkblue" height={70} width={40} />}
          bigIcon={<Entities2 fill="#F4F5FA" height={bigIconSize} width={bigIconSize} />}
          firstTitle="Explore your "
          secondTitle="entities"
          body="Take a few minutes to look at the most important elements and specificities of your entities"
          minHeight={height}
          isSmallScreen={isSmallScreen}
        />
        <MatterItem
          smallIcon={<Ecosystem fill="darkblue" height={70} width={40} />}
          bigIcon={<Ecosystem fill="#F4F5FA" height={bigIconSize} width={bigIconSize} />}
          firstTitle="Structure the "
          secondTitle="ownership"
          body="Get a clear view of the ownership by looking at the relations between individuals and entities."
          minHeight={height}
          isSmallScreen={isSmallScreen}
        />
        <MatterItem
          smallIcon={<Comments fill="darkblue" height={70} width={40} />}
          bigIcon={<Comments fill="#F4F5FA" height={bigIconSize} width={bigIconSize} />}
          firstTitle="Define the "
          secondTitle="calendar"
          body="Prepare future events by creating detailed plans around the life of your entity."
          minHeight={height}
          isSmallScreen={isSmallScreen}
        />
      </Wrapper>
    </Container>
  );
}

export default MattersContainer;
