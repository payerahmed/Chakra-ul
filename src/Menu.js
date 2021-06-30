import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import home from './icons/home.svg';
import calendar from './icons/calendar.png';
import compass from './icons/compass.png';
import person from './icons/person.png';
import setting from './icons/settings.png';
import power from './icons/power.png';

const Menu = () => {
  return (
    <Flex
      flexDirection='column'
      justifyContent='space-between'
      bg='#F6F7FB'
      w='131px'
      minH='calc(100vh - 113px)'
    >
      <Box>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          mt='56px'
        >
          <Box
            p='13px'
            bg='#FF6647'
            boxShadow=' 0px 10px 20px rgba(88, 92, 229, 0.25)'
            borderRadius='10px'
          >
            <Image src={home} />
          </Box>
          <Text color='#1C295D' mt='16px' fontSize='12px'>
            Dashboard
          </Text>
        </Flex>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          mt='30px'
        >
          <Box p='13px' bg='#FFFFFF' borderRadius='10px'>
            <Image src={calendar} />
          </Box>
          <Text color='#7987A5' mt='16px' fontSize='12px'>
            Upcoming
          </Text>
        </Flex>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          mt='30px'
        >
          <Box p='13px' bg='#FFFFFF' borderRadius='10px'>
            <Image src={compass} />
          </Box>
          <Text color='#7987A5' mt='16px' fontSize='12px'>
            Explore
          </Text>
        </Flex>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          mt='30px'
        >
          <Box p='13px' bg='#FFFFFF' borderRadius='10px'>
            <Image src={person} />
          </Box>
          <Text color='#7987A5' mt='16px' fontSize='12px'>
            Profile
          </Text>
        </Flex>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          mt='30px'
        >
          <Box p='13px' bg='#FFFFFF' borderRadius='10px'>
            <Image src={setting} />
          </Box>
          <Text color='#7987A5' mt='16px' fontSize='12px'>
            Settings
          </Text>
        </Flex>
      </Box>
      <Box>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Box p='13px' bg='#FFFFFF' borderRadius='10px'>
            <Image src={power} />
          </Box>
          <Text color='#7987A5' mt='16px' fontSize='12px'>
            Logout
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Menu;
