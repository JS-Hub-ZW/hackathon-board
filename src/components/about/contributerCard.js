import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Link } from '@chakra-ui/react'

  import {GoMarkGithub} from 'react-icons/go'
  
  export default function ContributerCard({contributer}) {
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
     >
      
          
          <Box p={6}>
          <Flex justify={'center'} >
            <Avatar
              size={'xl'}
              src={
                contributer.image
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'md'} fontWeight={"bold"}>
                {contributer.name}
              </Heading>
              <Text color={'gray.500'}>{contributer.role}</Text>
            </Stack>

            <Link href={contributer.link} passHref isExternal target="_blank">
            <Button
            w={'full'}
            
            colorScheme="green"
            color={'white'}
            rounded={'md'}
            rightIcon={<GoMarkGithub/>}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button>
            </Link>
          </Box>
        </Box>
      </Center>
    );
  }