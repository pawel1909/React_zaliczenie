import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../../helper/styled/Colors';

interface IProps {
  isFormVisible: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  background-color: ${Colors.subProfileTextColor};
  border-radius: 5px;
`;

const TextSpan = styled.span`
  color: ${Colors.black};
  font-size: 0.85vw;
`;

const FileTaker = (props: IProps) => {
  const [fileName, setFileName] = useState('image.jpg');

  const { isFormVisible } = props;

  const inputStyles = {
    border: 'none',
    marginLeft: 20,
    marginTop: 10
  }

  const onSelectedFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if(files && files[0]) {
      const { name } = files[0];
      setFileName(name);
    }
  }

  return (
    <>
      <Container>
        <img
          src="/media/icons/writing.svg"
          alt=""
          style={{ width: 20, height: 20, marginRight: 5 }}
        />
        <TextSpan>{fileName}</TextSpan>
      </Container>
      {isFormVisible && (
          <input
            type="file"
            placeholder="Browse file(s)"
            onChange={onSelectedFile}
            style={inputStyles}
          />
        )
      }
    </>
  );
}

export default FileTaker;
