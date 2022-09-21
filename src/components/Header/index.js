import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Text, Flex, HStack, Link, IconButton, useDisclosure, Stack, SlideFade } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../Logo';

const Links = [
  { text: 'VIDEO', url: '/video' },
  { text: 'PHOTO', url: '/photo' },
  { text: 'CONTACT', url: '/contact' },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex alignItems={'center'} justifyContent={'space-around'}>
          <Box maxW={'300px'}>
            <Logo />
          </Box>
          <HStack as={'nav'} spacing={'8'} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <Link as={GatsbyLink} key={link.url} to={link.url} _hover={'none'}>
                <Text letterSpacing={'widest'} fontWeight={'medium'}>
                  {link.text}
                </Text>
              </Link>
            ))}
          </HStack>
        </Flex>
        <Flex justifyContent={'center'}>
          <IconButton
            variant={'ghost'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            size={'lg'}
            mb={'5'}
            color={'black.500'}
            colorScheme={'blackAlpha'}
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          />
        </Flex>
      </Box>

      {/* mobile menu */}
      {isOpen ? (
        <SlideFade in={isOpen} offsetY="20px">
          <Flex display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={'6'} textAlign={'center'}>
              {Links.map((link) => (
                <Link as={GatsbyLink} key={link.url} to={link.url} fontSize={'lg'} _hover={'none'}>
                  <Text letterSpacing={'widest'}>{link.text}</Text>
                </Link>
              ))}
            </Stack>
          </Flex>
        </SlideFade>
      ) : null}
    </>
  );
}
