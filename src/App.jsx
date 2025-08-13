import React, { useState } from "react";
import { Box, Heading, Button } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box textAlign="center" p={6}>
      <Heading mb={4}>Hello Chakra UI!</Heading>
      <Button colorScheme="teal" onClick={() => setCount(count + 1)}>
        Count is {count}
      </Button>
    </Box>
  );
}

export default App;
