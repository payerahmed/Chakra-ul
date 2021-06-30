import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import inviteperson from './icons/inviteperson.png';
import more from './icons/more.png';
import imageone from './images/imageone.png';
import imagetwo from './images/imagetwo.png';
import imagethree from './images/imagethree.png';
import imagefour from './images/imagefour.png';
import imagefive from './images/imagefive.png';
import imagesix from './images/imagesix.png';

import closeIcon from './icons/close.png';
import tikIcon from './icons/tik.png';
import addIcon from './icons/add.png';

const Invited = () => {
  const invteArr = [
    { friendimg: imagetwo, name: 'Note', icons: closeIcon, item: 'one' },
    { friendimg: imageone, name: 'Jim', icons: closeIcon, item: 'two' },
    { friendimg: imagesix, name: 'Angela', icons: tikIcon, item: 'three' },
    { friendimg: imagethree, name: 'Bhaaji', icons: addIcon, item: 'four' },
    { friendimg: imagefive, name: 'Billo', icons: addIcon, item: 'five' },
    { friendimg: imagefour, name: 'Alex', icons: addIcon, item: 'six' }
  ];
  return (
    <Box mt='52px'>
      <Flex
        w='323px'
        ml='32px'
        justifyContent='space-between'
        alignItems='center'
      >
        <Flex alignItems='center'>
          <Box>
            <Image src={inviteperson} />
          </Box>
          <Box
            fontSize='20px'
            color='#3E3C50'
            lineHeight='23px'
            opacity='0.8'
            ml='10px'
          >
            Invite Friends
          </Box>
        </Flex>
        <Image src={more} />
      </Flex>
      <Flex mt='-4px' flexWrap='wrap' ml='19px' w='336px'>
        {invteArr.map((e, indx) => {
          return (
            <Flex
              flexDirection='column'
              alignItems='center'
              borderRadius='14px'
              bgColor={
                e.item === 'one'
                  ? '#ECFAFF'
                  : e.item === 'two'
                  ? '#FFEFBC'
                  : e.item === 'three'
                  ? '#FFE2BF'
                  : e.item === 'four'
                  ? '#EEECFF'
                  : e.item === 'five'
                  ? '#FFE8E8'
                  : e.item === 'six'
                  ? '#DDFFE9'
                  : ''
              }
              w='99px'
              h='124px'
              position='relative'
              ml='13px'
              mt='36px'
            >
              <Flex
                justifyContent='center'
                alignItems='center'
                w='52px'
                h='52px'
                mt='15px'
                borderRadius='50%'
                border='1px solid #fff'
                boxShadow='0px 4px 15px rgba(160, 230, 255, 0.2)'
              >
                <Image src={e.friendimg} />
              </Flex>
              <Box
                color='#010101'
                letterSpacing='0.01em'
                fontSize='12px'
                mt='7px'
                lineHeight='14px'
              >
                {e.name}
              </Box>
              <Flex
                alignItems='center'
                justifyContent='center'
                borderRadius='50%'
                position='absolute'
                bottom='-12px'
                w='24px'
                h='24px'
                border='2px solid #fff'
                bgColor={
                  e.item === 'one'
                    ? '#B5D9E7 '
                    : e.item === 'two'
                    ? '#F0DB99'
                    : e.item === 'three'
                    ? '#F3D0A6'
                    : e.item === 'four'
                    ? '#E0DEFD'
                    : e.item === 'five'
                    ? '#FCD7D7'
                    : e.item === 'six'
                    ? '#B1F1C6'
                    : ''
                }
              >
                <Image src={e.icons} />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Invited;
