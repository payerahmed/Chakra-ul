import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import compass from './icons/compass-g.png';
import chevronl from './icons/chevronl.svg';
import chevron from './icons/chevron.svg';
import arrowcolor from './icons/arrow-color.png';
import loction from './icons/Vector.png';
import group from './icons/Group.png';
import Rectangle from './images/Rectangle.png';
import Rectanglee from './images/Rectanglee.png';
import Rectangleee from './images/Rectangleee.png';

import Invited from './Invited';
import Mamber from './Mamber';
const Home = () => {
  const cardArr = [
    {
      image: Rectangle,
      name: 'Phi Phi Islands',
      group: group,
      location: loction,
      locationName: 'Thailand',
      price: '$1,480'
    },
    {
      image: Rectanglee,
      name: 'Kudahuvadhoo Island',
      group: group,
      location: loction,
      locationName: 'Maldives',
      price: '$1,480'
    },
    {
      image: Rectangleee,
      name: 'Greecevillage',
      group: group,
      location: loction,
      locationName: 'Maldives',
      price: '$1,480'
    }
  ];
  return (
    <Box>
      <Flex
        pt='54px'
        pl='31px'
        pb='49px'
        pr='29px'
        alignItems='center'
        justifyContent='space-between'
      >
        <Flex alignItems='center'>
          <Image src={compass} />
          <Box color='#3E3C50' fontSize='20px' ml='10'>
            Explore
          </Box>
        </Flex>
        <Box>
          <Image src={chevron} />
          <Image src={chevronl} />
        </Box>
      </Flex>
      <Flex>
        <Flex justifyContent='center' alignItems='center'>
          <Box
            backgroundImage={arrowcolor}
            h='100'
            w='24px'
            backgroundSize='cover'
          ></Box>
          <Flex flexDirection='column'>
            <Box
              transform='rotate(-90deg)'
              ontSize='14px'
              color='#353646'
              opacity='0.4'
            >
              America
            </Box>
            <Box
              transform='rotate(-90deg)'
              mb='64px'
              mt='50px'
              ontSize='14px'
              color='#FF6647'
            >
              Sights
            </Box>
            <Box
              transform='rotate(-90deg)'
              fontSize='14px'
              color='#353646'
              opacity='0.4'
            >
              Europe
            </Box>
          </Flex>
        </Flex>
        <Flex ml='31px'>
          <Flex w='883px'>
            {cardArr.map((e, indx) => {
              return (
                <Box
                  borderRadius='25px'
                  mr='31px'
                  pt='13px'
                  pl='12px'
                  pb='20px'
                  pr='14px'
                  bgColor='#fff'
                  boxShadow='0px 100px 80px rgba(153, 165, 236, 0.05), 0px 64.8148px 46.8519px rgba(153, 165, 236, 0.037963), 0px 38.5185px 25.4815px rgba(153, 165, 236, 0.0303704), 0px 20px 13px rgba(153, 165, 236, 0.025), 0px 8.14815px 6.51852px rgba(153, 165, 236, 0.0196296), 0px 1.85185px 3.14815px rgba(153, 165, 236, 0.012037);'
                >
                  <Box position='relative' height='170px' w='270px'>
                    <Image position='absolute' src={e.image} />
                    <Image
                      position='absolute'
                      bottom='-30px'
                      right='7px'
                      src={e.group}
                    />
                  </Box>
                  <Box
                    mt='13px'
                    color='#353646'
                    fontSize='16px'
                    lineHeight='127%'
                  >
                    {e.name}
                  </Box>
                  <Flex
                    justifyContent='space-between'
                    alignItems='center'
                    mt='6px'
                  >
                    <Flex alignItems='center'>
                      <Image h='14px' w='11px' mr='9px' src={e.location} />
                      <Box
                        color='#353646'
                        lineHeight='127%'
                        fontSize='14px'
                        opacity='0.4'
                      >
                        {e.locationName}
                      </Box>
                    </Flex>
                    <Box color='#34A59F' fontSize='14px' lineHeight='127%'>
                      {e.price}
                    </Box>
                  </Flex>
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Invited />
        <Mamber />
      </Flex>
    </Box>
  );
};

export default Home;
