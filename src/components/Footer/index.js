import * as React from 'react';
import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { FaInstagram, FaVimeoV, FaYoutube } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const currDate = new Date().getFullYear();

export default function Footer() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')} mt={'36'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        minH={'md'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'end', md: 'end' }}
        pb={{ md: '16' }}
      >
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Vimeo'} href={'https://vimeo.com/user135455357'}>
            <FaVimeoV />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'https://www.youtube.com/user/keatonrodgers/featured'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/keatonrodgers'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
        <Text fontWeight={'hairline'}>© {currDate} Keaton Rodgers. All rights reserved</Text>
      </Container>
    </Box>
  );
}
