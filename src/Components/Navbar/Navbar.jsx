import { Box, Flex, HStack, IconButton, useDisclosure, useColorMode, useColorModeValue, Stack, Button, Text, Container } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';
import logo from './../../Assets/logo.png';
import './navbar.css';

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box 
                id='navbar' 
                className='glass-nav'
                position="sticky"
                top="0"
                zIndex="1000"
                backdropFilter="blur(10px)"
                px={4} 
                py={2}
            >
                <Container maxW="1200px">
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <ReachLink to='/'>
                            <Box display="flex" alignItems="center">
                                <img className='logo-image' src={logo} alt="logo" />
                                <Text ml={3} fontWeight="700" fontSize="xl" className="logo-text">
                                    Resume<span>Builder</span>
                                </Text>
                            </Box>
                        </ReachLink>

                        <HStack spacing={8} alignItems={'center'}>
                            <HStack
                                as={'nav'}
                                spacing={6}
                                display={{ base: 'none', md: 'flex' }}>
                                <ReachLink className="nav-link" to={'/'}>Home</ReachLink>
                                <ReachLink className="nav-link" to={'/about'}>About</ReachLink>
                            </HStack>
                            <Button 
                                onClick={toggleColorMode} 
                                size="md" 
                                variant="ghost"
                                className="theme-toggle"
                                borderRadius="full"
                                _hover={{
                                    bg: colorMode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'
                                }}
                            >
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </HStack>

                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                            className="mobile-menu-btn"
                        />
                    </Flex>

                    {isOpen ? (
                        <Box pb={4} display={{ md: 'none' }} className="mobile-menu">
                            <Stack as={'nav'} spacing={4}>
                                <ReachLink className="nav-link-mobile" to={'/'} onClick={onClose}>Home</ReachLink>
                                <ReachLink className="nav-link-mobile" to={'/about'} onClick={onClose}>About</ReachLink>
                            </Stack>
                        </Box>
                    ) : null}
                </Container>
            </Box>
        </>
    );
}