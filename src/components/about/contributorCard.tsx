"use client"

import { Contributor } from '@/types/types';
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
import React from 'react';

  
  export default function ContributorCard({contributor}:{contributor:Contributor}) {
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
                contributor.avatar_url
              }
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'md'} fontWeight={"bold"}>
                {contributor.login}
              </Heading>
              <Text color={'gray.500'}>Full Stack Developer</Text>
            </Stack>

            <Button
            w={'full'}
            onClick={() => window.location.href = contributor.html_url}
            colorScheme="green"
            color={'white'}
            rounded={'md'}
            rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>
          }
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button>
          
          </Box>
        </Box>
      </Center>
    );
  }