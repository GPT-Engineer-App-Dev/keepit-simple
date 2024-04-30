import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <VStack spacing={8} p={8}>
      <Heading>Welcome to GPT Engineer Note-Taking App</Heading>
      <Box>
        <Link to="/notes">
          <Button colorScheme="teal">Go to Notes</Button>
        </Link>
      </Box>
    </VStack>
  );
};

export default Index;