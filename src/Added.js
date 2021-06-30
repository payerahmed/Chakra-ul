import React from 'react';
import {
  Grid,
  GridItem,
  Box,
  Flex,
  Button,
  Image,
  Text
} from '@chakra-ui/react';
import bgimage from './images/imagebg.png';
import leftarrow from './icons/arrowleft.png';
import rightarrow from './icons/arrowright.png';
import love from './icons/love.png';
import leaf from './icons/leaf.png';
import loading from './icons/loading.png';
import send from './icons/send.png';
import comparsion from './icons/comparsion.png';
import bed from './icons/bed.png';
import propertyone from './icons/propertyone.png';
import map from './icons/map.png';
import more from './icons/more.png';

//
import photos from './images/photos.png';
import photosone from './images/photosone.png';
import photostwo from './images/photostwo.png';
import photosthree from './images/photosthree.png';
import photosfour from './images/photosfour.png';
import photosfive from './images/photosfive.png';

const Added = () => {
  return (
    <Box
      bgColor='rgba(255, 255, 255, 0.9)'
      backdropFilter=' blur(64px)'
      maxW='363px'
      boxSizing='border-box'
      ml='5px'
      padding='18px'
    >
      <Box
        backgroundImage={bgimage}
        h='210px'
        backgroundSize='cover'
        borderRadius='10'
      >
        <Button
          colorScheme='#fff'
          color='#757575'
          py='5'
          px='8'
          boxShadow=' 0px 4px 4px rgba(0, 0, 0, 0.16);'
          borderRadius='5'
          ml='10'
          mt='13'
          border='none'
        >
          Added Today
        </Button>
        <Flex
          justifyContent='space-between'
          alignItems='center'
          mt='56px'
          mx='14px'
        >
          <Flex
            w='20px'
            h='20px'
            justifyContent='center'
            alignItems='center'
            bg=' rgba(196, 196, 196, 0.8)'
            borderRadius='50%'
          >
            <Image src={leftarrow} alt='Segun Adebayo' />
          </Flex>
          <Flex
            w='20px'
            h='20px'
            justifyContent='center'
            alignItems='center'
            bg=' rgba(196, 196, 196, 0.8)'
            borderRadius='50%'
          >
            <Image src={rightarrow} alt='Segun Adebayo' />
          </Flex>
        </Flex>
      </Box>
      <Box my='27px' fontSize='20px' lineHeight='31px' color='#000'>
        25 Lakeland Terrace, Westland, Michigan, USA
      </Box>
      <Flex justifyContent='space-between' alignItems='center'>
        <Box color='#757575' fontSize='16px' lineHeight='25px'>
          Apartment | by Robbin Johnson
        </Box>
        <Image src={love} />
      </Flex>
      <Flex mt='27px' justifyContent='space-between' alignItems='center'>
        <Flex>
          <Flex
            justifyContent='center'
            alignItems='center'
            h='32px'
            w='32px'
            borderRadius='50%'
            bg='#fff'
            mr='10px'
            boxShadow='0px 4px 4px rgb(0 0 0 / 25%)'
          >
            <Image src={leaf} />
          </Flex>
          <Flex
            justifyContent='center'
            alignItems='center'
            h='32px'
            w='32px'
            borderRadius='50%'
            bg='#fff'
            mr='10px'
            boxShadow='0px 4px 4px rgb(0 0 0 / 25%)'
          >
            <Image src={loading} />
          </Flex>
          <Flex
            justifyContent='center'
            alignItems='center'
            h='32px'
            w='32px'
            borderRadius='50%'
            bg='#fff'
            mr='10px'
            boxShadow='0px 4px 4px rgb(0 0 0 / 25%)'
          >
            <Image src={send} />
          </Flex>
        </Flex>
        <Box color='#3246D3' fontSize='20px' lineHeight='31px'>
          $ 2,900.00
        </Box>
      </Flex>
      <Flex mt='27px' justifyContent='space-between' alignItems='center'>
        <Flex>
          <Image src={propertyone} />
          <Box color='#757575' lineHeight='25px' fontSize='16px' ml='4px'>
            Used property
          </Box>
        </Flex>
        <Flex>
          <Image src={bed} />
          <Box color='#757575' lineHeight='25px' fontSize='16px' ml='4px'>
            4
          </Box>
        </Flex>
        <Flex mr='20px'>
          <Image src={comparsion} />
          <Box color='#757575' lineHeight='25px' fontSize='16px' ml='3px'>
            170 m2
          </Box>
        </Flex>
      </Flex>
      <Flex h='122px' width='362px' mt='39px' bgSize='cover' backgroundImage={map}></Flex>

      <Flex mt='40px' justifyContent='space-between' alignItems='center'>
        <Box color='#000000' fontSize='20px' lineHeight='31px'>
          Photos
        </Box>
        <Box>
          <Image src={more} />
        </Box>
      </Flex>
      <Grid
        mt='14px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(3, 1fr)'
        gap='13px 15px'
      >
        <Image src={photos} />
        <Image src={photosone} />
        <Image src={photostwo} />
        <Image src={photosthree} />
        <Image src={photosfour} />
        <Image src={photosfive} />
      </Grid>
    </Box>
  );
};

export default Added;
