import { Box, Button, HStack, Stack, VStack,Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
import {FaSpotify, FaGithub,FaInstagram} from "react-icons/fa6"
const Footer = () => {
  return (
    <Box
    bgColor={'blackAlpha.900'}
    minH={'40'}
    p='16'
    color={'white'}
    >
        <Stack direction={['column','row']}>
<VStack alignItems={'stretch'} w={'full'} px={'4'} >
<Heading size="md" textTransform={'uppercase'} textAlign={'center'}>
    Subscribe to get updates
</Heading>
<HStack 
borderBottom={'2px solid white'}
py='2'
>
    <Input placeholder='Enter Email Here...'
    border={'none'}
    borderRadius={'none'}
    outline={'none'}
    focusBorderColor={'purple.600'}
    
    />
    <Button
    p={'0'}
    colorScheme={'purple'}
    variant={'ghost'}
    borderRadius={'0 20px 20px 0'}
    
    >
        <AiOutlineSend size={20}/>
    </Button>
</HStack>

</VStack>
<VStack w={'full'}
 borderLeft={['none','1px solid white']}
 borderRight={['none','1px solid white']}
 
 ><Heading  textTransform={"uppercase"} textAlign={'center'}>

    VIDEO HUB
 </Heading>
<Text>All rights received</Text>
 </VStack>
 <VStack w={'full'}>
    <Heading size={'md'}
    textTransform={'uppercase'}
    >
        Social Media
    </Heading>
 <Button variant={'link'} colorScheme={'white'}>
    <a href="https://music.youtube.com/">
       <FaSpotify/>
    </a>
 </Button>
 <Button variant={'link'} colorScheme={'white'}>
    <a href="https://www.instagram.com/?hl=en">
       <FaInstagram/>
    </a>
 </Button>
 <Button variant={'link'} colorScheme={'white'}>
    <a href="https://github.com/nupur2705">
       < FaGithub/>
    </a>
 </Button>

 </VStack>
        </Stack>

    </Box>
  )
}

export default Footer