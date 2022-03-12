import * as React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
// import { FaInstagram, FaVimeoV, FaYoutube } from 'react-icons/fa';

// const SocialButton = ({ children, label, href }) => {
//   return (
//     <chakra.button
//       bg={'blackAlpha.300'}
//       rounded={'full'}
//       w={'12'}
//       h={'12'}
//       cursor={'pointer'}
//       as={'a'}
//       href={href}
//       display={'inline-flex'}
//       alignItems={'center'}
//       justifyContent={'center'}
//     >
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   );
// };

const currDate = new Date().getFullYear();

export default function Footer() {
  return (
    <Box bg={'gray.50'} color={'gray.700'} mt={'36'}>
      <Container pt={'32'} margin={'auto'}>
        {/* <Stack direction={'row'} justifyContent={'space-around'} mb={'24'} px={'16'}>
          <SocialButton label={'Vimeo'} href={'https://vimeo.com/user135455357'}>
            <FaVimeoV />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'https://www.youtube.com/user/keatonrodgers/featured'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/keatonrodgers'}>
            <FaInstagram />
          </SocialButton>
        </Stack> */}
        <Text textAlign={'center'} fontSize={'x-small'} fontWeight={'hairline'} my={'4'}>
          © {currDate} Keaton Rodgers. All rights reserved
        </Text>
      </Container>
    </Box>
  );
}
