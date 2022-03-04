type HeaderProps = {
  children?: JSX.Element | JSX.Element[];
};

export const Header = ({ children }: HeaderProps) => {
  return <header>{children}</header>;
};
