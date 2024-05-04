import { HeaderContainer, LinkRoute } from '../style/style';

const Header = () => {
  return (
    <HeaderContainer>
      <LinkRoute to='/' padding='1rem' color='white'>
        Home
      </LinkRoute>
    </HeaderContainer>
  );
};

export default Header;
