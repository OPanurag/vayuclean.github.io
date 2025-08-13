// src/App.jsx
import { useState } from 'react';
import { Box, Heading, Button, Text, Image, Link, Stack } from '@chakra-ui/react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Box textAlign="center" maxW="1280px" mx="auto" p={6}>
      
      {/* Logos */}
      <Stack direction="row" spacing={6} justify="center" mb={6}>
        <Link href="https://vite.dev" isExternal>
          <Image src={viteLogo} boxSize="60px" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" isExternal>
          <Image src={reactLogo} boxSize="60px" alt="React logo" />
        </Link>
      </Stack>

      {/* Heading */}
      <Heading mb={4}>Vite + React + Chakra UI</Heading>

      {/* Counter Button */}
      <Button colorScheme="teal" size="lg" onClick={() => setCount((c) => c + 1)}>
        Count is {count}
      </Button>

      {/* Info Text */}
      <Text mt={4}>
        Edit <code>src/App.jsx</code> and save to test HMR
      </Text>

      {/* Footer */}
      <Text fontSize="sm" color="gray.500" mt={4}>
        Click on the Vite and React logos to learn more
      </Text>
    </Box>
  );
}
