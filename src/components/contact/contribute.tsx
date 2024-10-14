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


const CONTRIBUTE_IMAGE = "https://images.unsplash.com/photo-1483817101829-339b08e8d83f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"

export default function Contribute({ useColorModeValue }:{useColorModeValue: any}) {
  return (<Box role={'group'} p={6} maxW={'500px'} w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1}>
    <Box rounded={'lg'} mt={-12} pos={'relative'} height={'230px'} _after={{
      transition: 'all .3s ease',
      content: '""',
      w: 'full',
      h: 'full',
      pos: 'absolute',
      top: 5,
      left: 0,
      backgroundImage: `url(${CONTRIBUTE_IMAGE})`,
      filter: 'blur(15px)',
      zIndex: -1
    }} _groupHover={{
      _after: {
        filter: 'blur(20px)'
      }
    }}>
      <Image rounded={'lg'} height={230} width={"full"} alt={"Contribute"} objectFit={'cover'} src={CONTRIBUTE_IMAGE} />
    </Box>
    <Stack pt={10} align={'center'}>
      <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
        Contribute
      </Heading>
      <Stack direction={'row'} align={'center'}>
        <Text fontSize={'sm'} align={'center'}>
          Hackathon Board is far from perfect and its free and open source. We could use some extra hands inorder to
          improve it.



        </Text>

      </Stack>

        <Button 
        onClick={() => window.open("https://github.com/JS-Hub-ZW/hackathon-board", "_blank") } 
        colorScheme="green" rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
      }
        >Hack the Board!</Button>
    </Stack>
  </Box>);
}
