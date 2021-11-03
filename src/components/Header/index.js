import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Flex, HStack, Link, IconButton, Button, useDisclosure, useColorModeValue, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../Logo';

const Links = [
  { text: 'video', url: '/videography' },
  { text: 'photo', url: '/photography' },
  { text: 'contact', url: '/contact' },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white', 'black')} px={4} mt={3} fontFamily={'Poppins'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            background={'white'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={'center'}>
            <Logo />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              fontWeight={500}
              // text color for links
              color={useColorModeValue('black', 'white')}
            >
              {Links.map((link) => (
                <Link as={GatsbyLink} key={link.url} to={link.url} _hover={'none'}>
                  {link.text}
                </Link>
              ))}
            </HStack>
          </HStack>
          {/* <Flex alignItems={'center'}>
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar size={'lg'} src={AvatarImage} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <a href="https://www.instagram.com/keatonrodgers">Instagram</a>
                </MenuItem>
                <MenuItem>
                  <a href="https://www.instagram.com/keatonrodgers">Instagram</a>
                </MenuItem>
                <MenuItem>
                  <a href="https://www.instagram.com/keatonrodgers">Instagram</a>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
        </Flex>

        {/* mobile menu */}
        {isOpen ? (
          <Box my={4} display={{ md: 'none' }} p="20px" rounded="md" shadow="md">
            <Stack as={'nav'} spacing={6} fontWeight={500}>
              {Links.map((link) => (
                <Link as={GatsbyLink} key={link.url} to={link.url} display="inline-block" _hover={'none'}>
                  <Button colorScheme={'blackAlpha'} isFullWidth>
                    {link.text}
                  </Button>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
