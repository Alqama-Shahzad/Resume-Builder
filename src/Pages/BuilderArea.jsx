import React, { useContext } from 'react';
import { Button, Box, Container, Flex, useColorModeValue, Heading, Text } from '@chakra-ui/react';
import { FiPrinter, FiGrid } from 'react-icons/fi';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css';
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const BuilderArea = (props) => {
    const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext);
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent);
    }

    return (
        <>
            {loading && (
                <Box className="loader-container">
                    <PropagateLoader id='spinner' color="#319795" size={30} />
                </Box>
            )}

            <Container maxW="1400px" px={{ base: 2, md: 4 }} py={8}>
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    mb={6}
                >
                    <Heading fontSize="2xl" mb={2}>Create Your Resume</Heading>
                    <Text color="gray.500">Fill in your details and customize your resume</Text>
                </MotionBox>
                
                <Flex 
                    direction={{ base: 'column', lg: 'row' }}
                    gap={6}
                    align="flex-start"
                >
                    <MotionBox
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="form-container"
                        flex="1"
                        minW={{ base: '100%', lg: '350px' }}
                        maxW={{ base: '100%', lg: '400px' }}
                    >
                        <UserDataCollect />
                    </MotionBox>
                    
                    <MotionBox
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="resume-preview"
                        flex="2"
                        bg={bgColor}
                        borderRadius="md"
                        border="1px solid"
                        borderColor={borderColor}
                        overflow="hidden"
                        boxShadow="lg"
                    >
                        {props.theme}
                    </MotionBox>
                </Flex>
                
                <Flex 
                    justify="center" 
                    mt={10} 
                    gap={4}
                    direction={{ base: 'column', sm: 'row' }}
                >
                    <MotionButton
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        colorScheme="teal"
                        size="lg"
                        leftIcon={<FiPrinter />}
                        onClick={handlePrint}
                        className="action-button"
                    >
                        Print Resume
                    </MotionButton>
                    
                    <MotionButton
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variant="outline"
                        colorScheme="teal"
                        size="lg"
                        leftIcon={<FiGrid />}
                        onClick={handleSelectNewTemplate}
                        className="action-button"
                    >
                        Change Template
                    </MotionButton>
                </Flex>
            </Container>
            
            <Footer />
        </>
    );
}

export default BuilderArea
