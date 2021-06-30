import React from 'react';
import { Box, Image, Flex, Center, Text, Input } from '@chakra-ui/react';
import bar from './icons/bar.png';
import search from './icons/search.png';
import tune from './icons/tune.svg';
const Navbar = () => {
  return (
    <Box d='flex' h='113'>
      <Flex bg='#393D46' minW='131px' alignItems='center' justifyContent='center'>
        <Image src={bar} alt='home' />
      </Flex>
      <Flex
        w='100%'
        bg=' #F6F7FB'
        pl='41px'
        pr='31px'
        alignItems='center'
        justifyContent='space-between'
        boxSizing='border-box'
      >
        <Text fontSize='26px' color='#000000'>
          Shanta .
        </Text>
        <Flex alignItems='center'>
          <Flex
            alignItems='center'
            w='326px'
            bg='#fff'
            padding='14px'
            borderRadius='30px'
            boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
          >
            <Image src={search} mr='10px' />
            <Input
              placeholder='search'
              colorScheme='#AFAFAF'
              outline='none'
              border='none'
              fontSize='15px'
            />
          </Flex>
          <Box
            bg='#FF6647'
            w='52px'
            h='52px'
            borderRadius='50%'
            p='14px'
            ml='10px'
            boxSizing='border-box'
            boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
          >
            <Image src={tune} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
