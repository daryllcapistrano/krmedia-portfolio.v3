import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Text, Flex, HStack, Link, IconButton, useDisclosure, Stack, SlideFade, SimpleGrid } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../Logo';

const Links = [
  // { text: 'PHOTO', url: '/photo' },
  { text: 'WORK', url: '/work' },
  { text: 'CONTACT', url: '/contact' },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <SimpleGrid columns={[1, null, 2]} spacing={'4'} maxW={'1200px'} margin={'auto'} px={'4'} pt={'4'}>
          <Box maxW={'300px'} ml={'-9'}>
            <Logo />
          </Box>
          <HStack as={'nav'} spacing={'8'} display={{ base: 'none', md: 'flex' }} justifyContent={'flex-end'}>
            {Links.map((link) => (
              <Link as={GatsbyLink} key={link.url} to={link.url} _hover={'none'}>
                <Text letterSpacing={'widest'} fontWeight={'medium'}>
                  {link.text}
                </Text>
              </Link>
            ))}
          </HStack>
        </SimpleGrid>
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
