import * as React from 'react';
import { Box } from '@chakra-ui/layout';
import LogoNew from '../../images/assets/logo.png';

const Logo = () => {
  return (
    <Box w={'100%'}>
      <img src={LogoNew} alt="Keaton Rodgers Motion And Stills" />
    </Box>
  );
};

export default Logo;
