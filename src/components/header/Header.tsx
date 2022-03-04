import { styled } from 'theme';

type HeaderProps = {
  children?: JSX.Element | JSX.Element[];
};

const headerOptions = {
  backgroundColor: '$primary',
  width: '100%',
  height: '156px',
  '& img': {
    content: 'url(./icons/bg-header-desktop.svg);'
  },
  '@small': {
    '& img': {
      content: 'url(./icons/bg-header-mobile.svg);'
    }
  }
};
const HeaderStyled = styled('header', headerOptions);

export const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderStyled>
      <img
        alt='Header image wave'
        aria-label='Header image wave'
        height='156px'
      ></img>
      {children}
    </HeaderStyled>
  );
};
