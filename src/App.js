import { Flex, Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Menu from './Menu';
import Home from './Home';
import Added from './Added';
function App() {
  return (
    <Flex justifyContent='center'>
      <Flex>
        <Box>
          <Navbar />
          <Flex>
            <Menu />
            <Home />
          </Flex>
        </Box>
        <Added />
      </Flex>
    </Flex>
  );
}

export default App;
