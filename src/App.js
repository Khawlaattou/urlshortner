import React, { useState } from 'react';
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react';
import { Input, Stack, Flex, Box, Text, Heading } from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';
import AlertDialogExample from './trans.js'; // Adjust the import path

function App() {
  const [longURL, setLongURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState(''); // State to store the shortened URL

  const handleInputChange = (e) => {
    setLongURL(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://url-shortcut-generator.onrender.com/shortURL',
        {
          longURL: longURL,
        }
      );

      setShortenedURL(response.data.shortenedURL); // Set the shortened URL in state
    } catch (error) {
      console.error(error);
    }
  };

  const styles = {
    mr: '50px',
    ml: '50px',
    p: '50px',
    bgGradient: 'linear(bisque, bisque, white)',
    borderRadius: '15px',
    boxShadow: '0 8px 8px #9b9b9b, 0 8px 8px #9b9b9b',
  };

  return (
    <ChakraProvider>
      <Flex>
        <AttachmentIcon boxSize={16} color="red.500" m="20px" textShadow="0 8px 8px #e4e4e4" />
        <Text color="red.500" m="20px" fontSize="45px" fontWeight="bold" textShadow="0 8px 8px #e4e4e4">
          SHORTURL
        </Text>
      </Flex>

      <Flex
        height="100vh"
        width="100vw"
        justify="space-between"
        wrap="wrap"
        gap="1"
        mt="100px"
        bgGradient="linear(white, #f7efef, #f7efef)"
      >
        <Box maxW="32rem" ml="50px" mr="50px">
          <Heading mb={4}>Welcome to SHORTURL</Heading>
          <Text fontSize="xl">
            Are your links long, unruly, and difficult to share? Look no further! We're here to make your online
            experience smoother and more efficient. With <strong>SHORTURL</strong>, you can transform those lengthy
            URLs into concise, easy-to-share links.
          </Text>
        </Box>
        <Box
            sx={styles}
            width={{ base: '40%', md: '40%' }}
            height={{ base: '50%', md: '55%' }}
            flexGrow="1"
          >
        <form onSubmit={handleSubmit}>
          
            <Stack spacing={4}>
              <h5 style={{ textAlign: 'center',
  fontSize: "30px",
  fontWeight: "bold",
  color: "rgb(143, 84, 18)",
  textShadow: "5px 5px 5px #ffffff",
  mt: "20px",
  my: "40px" }}>Shorten any URL from here!</h5>
              <Input
                type="text"
                value={longURL}
                onChange={handleInputChange}
                placeholder="https://example.com"
                width={{ base: '70%', md: '70%' }}
                color="black"
                bg="#00000"
                margin="auto"
                my="30px"
              />
              <AlertDialogExample urlshort={shortenedURL} /> 
            </Stack>
        </form> 
          </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;