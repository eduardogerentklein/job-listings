import { styled } from 'theme';
import React from 'react';

interface InputProps {
  value?: string;
  onChange?: (value: any) => void;
  onKeyPress?: (value: any) => void;
  placeHolder?: string;
  css?: {};
}

const inputOptions = {
  fontSize: '$2',
  fontFamily: '$spartan',
  height: '56px',
  outline: 'none',
  lineHeight: '28.8px',
  color: '$black',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$neutralWhite',
  borderRadius: '$2',
  paddingTop: '$2',
  paddingBottom: '$2',
  paddingRight: '$2',
  paddingLeft: '$5',
  boxShadow: '$3',
  '&:focus': {
    boxShadow: '$1'
  }
};
const InputStyled = styled('input', inputOptions);

export const Input = ({
  value,
  onChange,
  onKeyPress,
  placeHolder,
  css
}: InputProps) => {
  return (
    <InputStyled
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      css={css}
    />
  );
};
