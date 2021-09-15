import * as React from 'react';
import { Container } from '@chakra-ui/layout';
import GifLogo from '../../images/assets/logo-blend.gif';

const Logo = () => {
  return (
    <Container w="100px" margin="auto">
      <img src={GifLogo} alt="Keaton Rodgers Motion And Stills" />
    </Container>
  );
};

export default Logo;
