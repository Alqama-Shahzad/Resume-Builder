import { Avatar, Box, Flex, Icon, SimpleGrid, useColorModeValue, Container, Heading, Text, Stack } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import './about.css';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const testimonials = [
    {
        name: 'Alqama',
        role: 'Front-end Developer',
        content:
            'I built this resume tool because I was tired of complicated resume builders with too many options. This simple tool focuses on what matters - helping you create a clean, professional resume without the hassle.',
        avatar:
            '',
    }
];


function TestimonialCard(props) {
    const { name, role, content, avatar } = props;
    const bgColor = useColorModeValue('white', 'gray.800');
    
    return (
        <MotionFlex
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            boxShadow={'lg'}
            maxW={'640px'}
            direction={{ base: 'column-reverse', md: 'row' }}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={bgColor}
            className="testimonial-card"
        >
            <Stack
                direction={'column'}
                textAlign={'left'}
                justifyContent={'space-between'}
                spacing={4}
            >
                <MotionText
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    fontSize={'lg'}
                    fontWeight={500}
                    className="testimonial-content"
                >
                    {content}
                </MotionText>
                <MotionText
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    fontWeight={600}
                    fontSize={'lg'}
                >
                    {name}
                    <Text
                        as="span"
                        fontWeight={400}
                        color={'gray.500'}
                        ml={2}
                    >
                        - {role}
                    </Text>
                </MotionText>
            </Stack>
            <Avatar
                src={avatar}
                height={'80px'}
                width={'80px'}
                alignSelf={'center'}
                m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
                className="testimonial-avatar"
            />
        </MotionFlex>
    );
}

export default function About() {
    return (
        <>
            <Helmet>
                <title>About - Resume Builder</title>
                <meta name="description" content="A simple resume builder I created to help people make professional resumes quickly without all the unnecessary features." />
                <meta name="keywords" content="resume builder, about, simple resume tool" />
                <meta name="author" content="Alqama" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="About - Resume Builder" />
                <meta property="og:description" content="A simple resume builder I created to help people make professional resumes quickly without all the unnecessary features." />
                <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
                <meta property="og:url" content="https://quick-resume.netlify.app/about" />
                <meta property="og:type" content="website" />
            </Helmet>
            
            <Box className="about-section">
                <Container maxW="1200px" py={20}>
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        textAlign={'center'}
                        mb={16}
                    >
                        <MotionText
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="about-subtitle"
                            textTransform="uppercase"
                            fontWeight={600}
                            letterSpacing={1}
                            mb={3}
                        >
                            Why I built this
                        </MotionText>
                        
                        <MotionHeading
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="about-title"
                            fontSize={{ base: '3xl', md: '5xl' }}
                            mb={6}
                        >
                            Resume Builder
                        </MotionHeading>
                        
                        <MotionText
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            fontSize={{ base: 'lg', md: 'xl' }}
                            maxW="700px"
                            mx="auto"
                            className="about-description"
                        >
                            Simple. Fast. No nonsense.
                        </MotionText>
                    </MotionBox>
                    
                    <SimpleGrid columns={{ base: 1 }} spacing={10}>
                        {testimonials.map((cardInfo, index) => (
                            <TestimonialCard key={index} {...cardInfo} />
                        ))}
                    </SimpleGrid>
                    
                    <MotionBox
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        textAlign="center"
                        mt={20}
                    >
                        <Icon viewBox="0 0 40 35" boxSize={10} className="heart-icon">
                            <path
                                fill={'currentColor'}
                                d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
                            />
                        </Icon>
                        <MotionText
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            mt={4}
                            fontSize="lg"
                            className="footer-text"
                        >
                            Made with passion and code
                        </MotionText>
                    </MotionBox>
                </Container>
            </Box>
        </>
    );
}