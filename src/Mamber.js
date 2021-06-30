import React from 'react';
import { Box, Flex, Image, Input, Progress, Stack } from '@chakra-ui/react';
import more from './icons/more.png';
import fire from './icons/fire.png';

const Mamber = () => {
  const rangeArr = [
    { range: 1 },
    { range: 2 },
    { range: 3 },
    { range: 4 },
    { range: 5 },
    { range: 7 },
    { range: 6 }
  ];

  return (
    <Box mt='52px' ml='38' mr='24px'>
      <Flex justifyContent='space-between' alignItems='center'>
        <Flex alignItems='center'>
          <Box>
            <Image src={fire} />
          </Box>
          <Box
            fontSize='20px'
            color='#3E3C50'
            lineHeight='23px'
            opacity='0.8'
            ml='10px'
          >
            Members
          </Box>
        </Flex>
        <Image src={more} />
      </Flex>
      <Flex justifyContent='flex-end' alignItems='center' mt='32px'>
        <Box color='#8E9FB9' fontSize='16px' lineHeight='19px'>
          Guests
        </Box>
        <Box
          h='18px'
          w='44px'
          borderRadius='45px'
          bgColor='#F96549'
          ml='32px'
          mr='12px'
        ></Box>
        <Box color='#8E9FB9' fontSize='16px' lineHeight='19px'>
          Registered
        </Box>
      </Flex>
      <Flex mt='22px'>
        <Flex flexDirection='column' mr='41px'>
          <Box color='#AAB0C0'>40</Box>
          <Box mt='32px' color='#AAB0C0'>
            30
          </Box>
          <Box mt='39px' color='#AAB0C0'>
            20
          </Box>
          <Box mt='39px' color='#AAB0C0'>
            10
          </Box>
          <Box mt='39px' color='#AAB0C0'></Box>
        </Flex>
        <Flex>
          <Flex justifyContent='space-between' w='530px'>
            {rangeArr.map((e, indx) => {
              return (
                <Flex position='relative' alignItems='center'>
                  <Box
                    h='200px'
                    w='15px'
                    bgColor='#EDEFEF'
                    borderRadius='75px'
                    position='relative'
                  ></Box>
                  <Box
                    h={
                      e.range === 1
                        ? '50%'
                        : e.range === 2
                        ? '30%'
                        : e.range === 3
                        ? '20%'
                        : e.range === 4
                        ? '35%'
                        : e.range === 5
                        ? '40%'
                        : e.range === 6
                        ? '70%'
                        : '50%'
                    }
                    w='15px'
                    bgColor='#F86549'
                    borderRadius='75px'
                    position='absolute'
                    bottom='13px'
                  ></Box>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
      <Flex ml='52px' justifyContent='space-between'>
        <Box color='#AAB0C0'>Mon</Box>
        <Box color='#AAB0C0'>Tue</Box>
        <Box color='#AAB0C0'>Wed</Box>
        <Box color='#AAB0C0'>Thu</Box>
        <Box color='#AAB0C0'>Fri</Box>
        <Box color='#AAB0C0'>Sat</Box>
        <Box color='#AAB0C0'>Sun</Box>
      </Flex>
    </Box>
  );
};

export default Mamber;
