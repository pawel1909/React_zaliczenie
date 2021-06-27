import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

import { inputStyles } from '../../../helper/styled/ProfileDataFormComponents';
import { Colors } from '../../../helper/styled/Colors';
import { cancelIconStyles, buttonStyles } from '../../../helper/styled/InlinePropertiesComponents';

interface IProps {
  data: string[];
  isMainElement?: boolean;
  setState?: Function;
  isFormVisible: boolean;
}

const WrapInlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const ItemContainer = styled.div`
  background-color: ${Colors.profilePropertiesBackground};
  color: ${Colors.profilePropertiesColor};
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.85vw;
`;

const InlineProperties = (props: IProps) => {
  const [newElement, setNewElement] = useState('');

  const { data, isMainElement, setState, isFormVisible } = props;

  const onRemoveItem = (indexToRemove: number) => {
    if (setState) {
      setState((data: string[]) => data.filter((item: string, index: number): boolean => index !== indexToRemove));
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setNewElement(newValue);
  }

  const onSubmit = () => {
    if(setState) {
      setState((oldArray: string[]) => [...oldArray, newElement]);
      setNewElement('');
    }
  }

  const renderItems = (): ReactNode => {
    return data.map((item: string, index: number): ReactNode => {
      return (
        <ItemContainer
          key={index}
          style={{
            marginLeft: isMainElement ? 20 : undefined,
          }}
        >
          <div style={{ marginRight: isFormVisible ? 5 : undefined }}>{item}</div>
          {isFormVisible ?
            <img
              src="/media/icons/plus.svg"
              style={cancelIconStyles}
              alt=""
              onClick={() => onRemoveItem(index)}
            /> : null
          }
        </ItemContainer>
      );
    });
  }

  return (
    <>
      <WrapInlineContainer>
        { renderItems() }
      </WrapInlineContainer>
      <div style={{ marginLeft: isMainElement ? 20 : undefined }}>
        { isFormVisible && (
          <div style={{ width: isMainElement ? '30%' : undefined }}>
            <input
              type="text"
              value={newElement}
              onChange={onChange}
              style={inputStyles}
            />
            <button
              onClick={() => onSubmit()}
              style={buttonStyles}
            >
              Add
            </button>
          </div>
        )}
      </div>
    </>
  );
}

InlineProperties.defaultProps = {
  isFormVisible: false
}

export default InlineProperties;
