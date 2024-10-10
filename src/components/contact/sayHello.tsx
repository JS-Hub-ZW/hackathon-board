
import {
    Text,
    Heading,
    Box,
    Center,
    useColorModeValue,
    Stack,
    SimpleGrid,
    Image,
    Button,
} from '@chakra-ui/react'

import { MdWavingHand } from 'react-icons/md'


import NextLink from 'next/link'


const HELLO_IMAGE = 'https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80';


function SayHello({ useColorModeValue }:{useColorModeValue: any}) {
    return (<Box role={'group'} p={6} maxW={'500px'} w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1}>
        <Box rounded={'lg'} mt={-12} pos={'relative'} height={'230px'} _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${HELLO_IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1
        }} _groupHover={{
            _after: {
                filter: 'blur(20px)'
            }
        }}>
            <Image rounded={'lg'} height={230} width={445} objectFit={'cover'} src={HELLO_IMAGE} />
        </Box>
        <Stack pt={10} align={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                Say Hi
            </Heading>
            <Stack direction={'row'}>
                <Text fontSize={'sm'} align={'center'}>
                    Do you want to make an enquiry? Or perhaps you want to share some memes? Please  come through....

                </Text>

            </Stack>
            <NextLink href="mailto:jshubzw@gmail.com" target="_blank" >

                <Button colorScheme={"green"} rightIcon={<MdWavingHand />}>Get In Touch</Button>
            </NextLink>
        </Stack>
    </Box>);
}

export default SayHello;

