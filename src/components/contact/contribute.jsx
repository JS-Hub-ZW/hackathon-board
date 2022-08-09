import {
  Text,
  Heading,
  Link,
  Box,
  Center,
  useColorModeValue,
  Stack,
  SimpleGrid,
  Image,
  Button,
} from '@chakra-ui/react'

import { GoMarkGithub } from 'react-icons/go'


const CONTRIBUTE_IMAGE = "https://images.unsplash.com/photo-1483817101829-339b08e8d83f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"

function Contribute({ useColorModeValue }) {
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
      <Image rounded={'lg'} height={230} width={"full"} objectFit={'cover'} src={CONTRIBUTE_IMAGE} />
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
      <Link target="_blank" href='https://github.com/JS-Hub-ZW/hackathon-board' passHref isExternal>
        <Button colorScheme="green" rightIcon={<GoMarkGithub />}>Hack the Board!</Button>
      </Link>
    </Stack>
  </Box>);
}

export default Contribute;