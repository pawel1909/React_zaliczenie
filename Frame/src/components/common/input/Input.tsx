import React, { ChangeEventHandler } from 'react';

import {
  Container,
  inputStyles
} from '../../../helper/styled/InputComponents';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ placeholder, value, onChange }: InputProps) => (
  <Container>
    <input
      type="text"
      style={inputStyles}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <img src="/media/icons/search.svg" alt="" />
  </Container>
);

export default Input;
