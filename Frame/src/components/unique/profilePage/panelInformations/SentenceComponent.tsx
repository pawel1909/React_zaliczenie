import React, { useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../../helper/styled/Colors';

interface IProps {
 title: string;
 value: string;
 color?: string;
 fontSize?: string;
 isBold?: boolean;
 isFormVisible: boolean;
 isMainElement?: boolean;
}

const TitleSpan = styled.div` 
  margin-top: 20px;
  margin-left: 20px;
`;

const ValueSpan = styled.div`
  color: ${Colors.black};
  margin-left: 20px;
  margin-top: 10px;
  font-size: 0.85vw;
`;

const SentenceComponent = (props: IProps) => {
  const {
    title,
    value,
    color,
    fontSize,
    isBold,
    isFormVisible,
    isMainElement
  } = props;

  const [valueForm, setValueForm] = useState(value);

  const inputStyles = {
    border: 'none',
    color: `${Colors.subProfileTextColor}`,
    padding: 5,
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 10
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValueForm(newValue);
  }

  return (
    <>
      <TitleSpan
        style={{
          color: color ? color : Colors.subProfileTextColor,
          fontSize: fontSize ? fontSize : '0.85vw',
          fontWeight: isBold ? 700 : undefined
        }}
      >
        {title}
      </TitleSpan>
      <ValueSpan>{valueForm}</ValueSpan>
      <div style={{ marginLeft: isMainElement ? 20 : undefined }}>
        {isFormVisible && (
          <input
            type="text"
            value={valueForm}
            onChange={onChange}
            style={inputStyles}
          />
        )}
      </div>
    </>
  );
}

export default SentenceComponent;
