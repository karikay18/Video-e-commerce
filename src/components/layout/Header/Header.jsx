import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiMenu5Line } from 'react-icons/ri';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const LinkButton = ({ url = '/', title = 'Home' }) => (
    <Link to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
  const isAuthenticated = false;

  return (
    <>
      <ColorModeSwitcher />
      <Button
        colorScheme={'yellow'}
        width="12"
        height={'12'}
        rounded="full"
        position="fixed"
        top="6"
        left="6"
        onClick={onOpen}
      >
        <RiMenu5Line />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>Watch Box</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'8'} alignItems="flex-start">
              <LinkButton url="/" title="Home" />
              <LinkButton url="/courses" title="Browse All Courses" />
              <LinkButton url="/request" title="Request a Course" />
              <LinkButton url="/contact" title="Contact Us" />
              <LinkButton url="/about" title="About" />
            </VStack>
            <HStack
              justifyContent={'space-evenly'}
              position="absolute"
              bottom={'2rem'}
              width="80%"
            >
              {isAuthenticated ? (
                <></>
              ) : (
                <>
                  <Link to="/login">
                    <Button colorScheme={'yellow'}>Login</Button>
                  </Link>
                  <p>OR</p>
                  <Link to="/register">
                    <Button colorScheme={'yellow'}>Register</Button>
                  </Link>
                </>
              )}
              ;
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
