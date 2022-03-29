import { styled } from 'theme';

interface InputProps {
  value?: string;
  onChange?: (value: any) => void;
  placeHolder?: string;
}

const inputOptions = {
  width: '100%',
  height: '56px',
  outline: 'none',
  lineHeight: '28.8px',
  color: '$primary',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$neutralWhite',
  borderRadius: '$2',
  marginTop: '$1',
  paddingTop: '$2',
  paddingBottom: '$2',
  paddingRight: '$2',
  paddingLeft: '$9',
  '&:focus': {
    boxShadow: '$1'
  }
};
const InputStyled = styled('input', inputOptions);

export const Input = ({ value, onChange, placeHolder }: InputProps) => {
  return (
    <InputStyled placeholder={placeHolder} value={value} onChange={onChange} />
  );
};
