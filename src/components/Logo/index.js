import * as React from 'react';
import { Container } from '@chakra-ui/layout';
import GifLogo from '../../images/assets/logo-blend.gif';

const Logo = () => {
  return (
    <Container w={'100px'} p={'0'} mr={{ base: '2', md: 'auto' }}>
      <img src={GifLogo} alt="Keaton Rodgers Motion And Stills" />
    </Container>
  );
};

export default Logo;
