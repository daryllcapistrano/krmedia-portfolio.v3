import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../Logo';
import AvatarImage from '../../images/assets/contact-image.jpg';

const Links = [
  { text: 'videography', url: '/videography' },
  { text: 'photography', url: '/photography' },
  { text: 'clients', url: '/clients' },
  { text: 'contact', url: '/contact' },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white', 'black')} px={4} mt={3}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
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

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} fontWeight={500}>
              {Links.map((link) => (
                <Link as={GatsbyLink} key={link.url} to={link.url} _hover={'none'} color="black">
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
