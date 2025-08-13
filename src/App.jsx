// src/App.jsx
import { Box, Heading, Button } from "@chakra-ui/react";

export default function App() {
  return (
    <Box textAlign="center" mt={20}>
      <Heading color="teal.500">Hello Chakra UI 🚀</Heading>
      <Button mt={4} colorScheme="teal">
        Click Me
      </Button>
    </Box>
  );
}
