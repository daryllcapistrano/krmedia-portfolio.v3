import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Flex, HStack, Link, IconButton, Button, useDisclosure, useColorModeValue, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../Logo';

const Links = [
  { text: 'VIDEO', url: '/videography' },
  { text: 'PHOTO', url: '/photography' },
  { text: 'CONTACT', url: '/contact' },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box fontFamily={'Poppins'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            variant={'ghost'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            ml={'4'}
            size={'lg'}
            color={'black'}
            colorScheme={'blackAlpha'}
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          />
          <HStack pl={'0'}>
            <Logo />
            <HStack as={'nav'} pl={'4'} mt={'4'} spacing={'8'} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link as={GatsbyLink} key={link.url} to={link.url} _hover={'none'} fontSize={'large'}>
                  {link.text}
                </Link>
              ))}
            </HStack>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box my={'4'} px={'4'} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={'6'}>
              {Links.map((link) => (
                <Link as={GatsbyLink} key={link.url} to={link.url} fontSize={'lg'} _hover={'none'}>
                  {link.text}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
