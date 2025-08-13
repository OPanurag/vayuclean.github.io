import { useState } from 'react';
import { Box, Heading, Button, Text, Image, Link, Stack } from '@chakra-ui/react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box textAlign="center" p={6}>
      <Stack direction="row" spacing={6} justify="center" mb={6}>
        <Link href="https://vite.dev" isExternal>
          <Image src={viteLogo} boxSize="60px" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" isExternal>
          <Image src={reactLogo} boxSize="60px" alt="React logo" />
        </Link>
      </Stack>

      <Heading mb={4}>Vite + React + Chakra UI</Heading>

      <Button colorScheme="teal" onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </Button>

      <Text mt={4}>
        Edit <code>src/App.jsx</code> and save to test HMR
      </Text>

      <Text fontSize="sm" color="gray.500" mt={4}>
        Click on the Vite and React logos to learn more
      </Text>
    </Box>
  );
}

export default App;
