import { Flex, Container, Heading, Stack, Text, Button, Box, useColorModeValue } from '@chakra-ui/react';
import './introduction.css';
import homeLogo from './../../Assets/home-logo.png'
import { Image } from '@chakra-ui/react'
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn)
    }

    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }

    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'white');

    return (
        <>
            <Helmet>
                <title>Resume Builder - Quick and Easy</title>
                <meta name="description" content="Create a standout resume in just a few minutes. No sign-up required, just pick a template and start building!" />
                <meta name="keywords" content="resume maker, cv creator, job application, free resume builder" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Alqama" />
                <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
                <meta property="og:url" content="https://quick-resume.netlify.app/about" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Box className="hero-section">
                <Container maxW={'7xl'} py={16}>
                    <Flex 
                        direction={{ base: 'column', md: 'row' }} 
                        align="center" 
                        justify="space-between"
                        gap={10}
                    >
                        <Stack 
                            width={{ base: '100%', md: '45%' }}
                            spacing={8}
                            align={{ base: 'center', md: 'flex-start' }}
                            textAlign={{ base: 'center', md: 'left' }}
                        >
                            {selectBtn ? (
                                <>
                                    <MotionHeading
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="hero-title"
                                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                                        lineHeight={'1.1'}
                                        fontWeight={700}
                                    >
                                        Make your resume in{' '}
                                        <Text as={'span'} className="text-gradient">
                                            minutes{' '}
                                        </Text>
                                        not hours
                                    </MotionHeading>

                                    <MotionText
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        color={'gray.500'}
                                        fontSize={{ base: 'lg', md: 'xl' }}
                                        maxW={'3xl'}
                                    >
                                        No more struggling with complicated resume builders. This simple tool helps you create a professional resume quickly. Just pick a template, fill in your details, and download. Perfect for students, professionals, or anyone needing a resume fast.
                                    </MotionText>

                                    <MotionBox
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="steps-container"
                                        w="full"
                                    >
                                        <Box className='step-item'>
                                            <Box className="step-number">1</Box>
                                            <Text fontSize={'xl'}>
                                                Pick a template you like
                                            </Text>
                                        </Box>
                                        <Box className='step-item'>
                                            <Box className="step-number">2</Box>
                                            <Text fontSize={'xl'}>
                                                Fill in your details
                                            </Text>
                                        </Box>
                                        <Box className='step-item'>
                                            <Box className="step-number">3</Box>
                                            <Text fontSize={'xl'}>
                                                Download and start applying!
                                            </Text>
                                        </Box>
                                    </MotionBox>
                                </>
                            ) : (
                                <MotionHeading
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="hero-title"
                                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                                    lineHeight={'1.1'}
                                    fontWeight={700}
                                >
                                    Choose a{' '}
                                    <Text as={'span'} className="text-gradient">
                                        template{' '}
                                    </Text>
                                    to get started
                                </MotionHeading>
                            )}
                        </Stack>

                        {selectBtn ? (
                            <MotionBox
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="hero-image-container"
                            >
                                <MotionImage 
                                    src={homeLogo} 
                                    alt='home logo' 
                                    className="hero-image"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                />
                                <MotionButton
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    onClick={handleSelectTemplate}
                                    className="cta-button"
                                    size="lg"
                                    fontSize="md"
                                    rounded={'full'}
                                    px={6}
                                    colorScheme={'teal'}
                                    bg={'#38B2AC'}
                                    _hover={{ bg: '#319795' }}
                                >
                                    Browse Templates
                                </MotionButton>
                            </MotionBox>
                        ) : (
                            <MotionBox
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="templates-grid"
                                width={{ base: '100%', md: '55%' }}
                            >
                                {ThemeTemplateData.map((item, index) => (
                                    <MotionBox
                                        key={index}
                                        className="template-card"
                                        whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        onClick={showTheme}
                                        bg={bgColor}
                                        borderRadius="lg"
                                        overflow="hidden"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ 
                                            opacity: 1, 
                                            y: 0,
                                            transition: { delay: index * 0.1 }
                                        }}
                                    >
                                        <img 
                                            id={item.id} 
                                            src={item.imageSrc} 
                                            alt={item.imageAlt} 
                                            className="template-image"
                                        />
                                        <Box p={4} className="template-info">
                                            <Text fontWeight="600" fontSize="md" color={textColor}>
                                                {item.name || `Template ${index + 1}`}
                                            </Text>
                                        </Box>
                                    </MotionBox>
                                ))}
                            </MotionBox>
                        )}
                    </Flex>
                </Container>
            </Box>
        </>
    );
}
