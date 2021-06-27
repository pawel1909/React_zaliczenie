import React from 'react';

import {
  Container,
  inputStyles
} from '../../../helper/styled/HeaderInputComponents';

const HeaderInput = () => (
  <Container>
    <input
      id="searchLegalclusterInput"
      type="text"
      style={inputStyles}
      placeholder="Search Legal cluster"
    />
    <img src="/media/icons/search.svg" alt="Search icon" />
  </Container>
);

export default HeaderInput;
