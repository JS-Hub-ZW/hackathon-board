"use client"

import {
  Flex,
  Circle,
  Box,
  SimpleGrid,
  GridItem,
  Image,
  Stack,
  Badge,
  TabPanel,
  Heading,
  Text,
  Link,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';


import { getPublishedTime, processName } from '../../utils/general.utils';
import { Hackathon } from '@/types/types';

function HackathonCardList({ hackathons }: { hackathons: Hackathon[] }) {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
    >
      {
        hackathons.map((hackathon, i) => {

          console.log(hackathon)
          return (<GridItem key={i} >
            <NextLink href={`/detail/${hackathon.id}`} >
              <Flex p={3} w="full" alignItems="center" justifyContent="center">
                <HackathonCard hackathon={hackathon} />
              </Flex>
            </NextLink>
          </GridItem>)
        })
      }
    </SimpleGrid>
  )
}

function HackathonCard({ hackathon }: { hackathon: Hackathon }) {

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' borderColor="gray.300" overflow='hidden'>
      <Image src={hackathon.images.landscape} alt={"Hackathon image"} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          {hackathon.status == 1 && <Badge borderRadius='full' px='2' colorScheme='purple'>
            Upcoming
          </Badge>}

          {hackathon.status == 2 && <Badge borderRadius='full' px='2' colorScheme='teal'>
            Ongoing
          </Badge>}

          {hackathon.status == 3 && <Badge borderRadius='full' px='2' colorScheme='yellow'>
            Past
          </Badge>}
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {getPublishedTime(hackathon.createdAt)}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}

        >
          {hackathon.name}
        </Box>

        <Box>
          <span> Some gibberish text here to draw attention to the fact that this is a hackathon.</span> <span style={{ width: 20 }}></span>
          <NextLink href={`/detail/`} >Learn More...</NextLink>
        </Box>
      </Box>
    </Box>
  )
}


export default HackathonCardList