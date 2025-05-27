import { Box, Container, Text, Image, useColorModeValue, HStack, Link, Flex, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from './../../Assets/logo.png';
import './footer.css';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const SocialButton = ({ children, label, href }) => {
    return (
        <Link
            href={href}
            isExternal
            className="social-button"
            aria-label={label}
        >
            {children}
        </Link>
    );
};

export default function Footer() {
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.100', 'gray.700');
    
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            bg={bgColor}
            color={useColorModeValue('gray.600', 'gray.300')}
            mt="auto"
            borderTop="1px solid"
            borderColor={borderColor}
            className="footer"
        >
            <Container maxW={'1200px'} py={6}>
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align="center"
                    gap={4}
                >
                    <MotionFlex
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        align="center"
                        gap={2}
                    >
                        <Image className="footer-logo" src={logo} alt="logo" />
                        <Text className="footer-brand" fontWeight="600">
                            Resume<span>Builder</span>
                        </Text>
                    </MotionFlex>
                    
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Text fontSize="sm" className="copyright-text">
                            © {new Date().getFullYear()} Resume Builder. All rights reserved
                        </Text>
                    </MotionBox>
                    
                    <HStack spacing={4} className="social-links">
                        <SocialButton label="GitHub" href="https://github.com/Alqama-Shahzad">
                            <Icon as={FaGithub} w={5} h={5} />
                        </SocialButton>
                        <SocialButton label="LinkedIn" href="#">
                            <Icon as={FaLinkedin} w={5} h={5} />
                        </SocialButton>
                        <SocialButton label="Twitter" href="#">
                            <Icon as={FaTwitter} w={5} h={5} />
                        </SocialButton>
                    </HStack>
                </Flex>
            </Container>
        </MotionBox>
    );
}
