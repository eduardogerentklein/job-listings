import { styled } from 'theme';

interface HeaderProps {
  children?: JSX.Element | JSX.Element[];
}

const headerOptions = {
  backgroundColor: '$primary',
  width: '100%',
  height: '156px',
  '& img': {
    width: '100%'
  }
};
const HeaderStyled = styled('header', headerOptions);

export const Header = ({ children }: HeaderProps) => {
  const mobileImageUrl = './icons/bg-header-mobile-375w.svg 415w';
  const desktopImageUrl = './icons/bg-header-desktop-1366w.svg';
  return (
    <HeaderStyled>
      <picture>
        <source media='(max-width: 415px)' srcSet={mobileImageUrl} />
        <source media='(min-width: 800px)' srcSet={desktopImageUrl} />
        <img
          src={desktopImageUrl}
          alt='Header image wave'
          aria-label='Header image wave'
          height='156px'
        />
      </picture>
      {children}
    </HeaderStyled>
  );
};
