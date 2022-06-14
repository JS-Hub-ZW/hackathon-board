import { Text, 
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


import Section from '../components/section'
 
const IMAGE = 'https://t4.ftcdn.net/jpg/03/52/27/51/240_F_352275189_nZYNVgytI13P58jgqxpQCGs7wTdeA3In.jpg';
const Contact = () => {
  return(
  <>
    <Section delay={0.3}>
      <Text
        fontSize='6xl'
        align="center"
          padding={6}
        >
       Contact Us
       </Text>

    <Center py={12}>
      <SimpleGrid
          columns={[1,2]}
          gap={8}>
       <Box
        role={'group'}
        p={6}
        maxW={'500px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={445}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Talk To a member of our community
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontSize={'sm'}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur  
             </Text>
              
            </Stack>
                   <Button>Get In Touch</Button>
        </Stack>
      </Box>
                <Box
        role={'group'}
        p={6}
        maxW={'500px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={300}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Talk To a member of our community
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontSize={'sm'}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
              
             </Text>
              
            </Stack>
                   <Button>Get In Touch</Button>
        </Stack>
      </Box>
      </SimpleGrid>
    </Center>

        <Heading align="center">
          Press Inquiry ?
        </Heading>

          <Text 
          align="center">Please Email jshubzw@gmail.com</Text>

          <Text 
            padding={8}></Text>
  </Section>
 
  </>
  )
  }
export default Contact

