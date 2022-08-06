import { HStack } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import {
  Flex,
  Circle,
  Box,
  SimpleGrid,
  GridItem,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Stack,
  TabPanel,
  Heading,
  Text,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useHackathonContext } from '../../state/provider.state';
import { getPublishedTime, processName } from '../../utils/general.utils';


const data = {
  isNew: true,
  imageURL:
    'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ebb4a9afeaaa463c23a6b5127e3ce224',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};





function HackathonCard({hackathons}) {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
    >
      {
        hackathons.map((hackathon, i) => {

          console.log(hackathon)
          return (<GridItem key={i} >
            <Link href={`/detail/${hackathon.id}`} passHref>
            <Flex p={3} w="full" alignItems="center" justifyContent="center">
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                width="full"
                position="relative">
                {data.isNew && (
                  <Circle
                    size="10px"
                    position="absolute"
                    top={2}
                    right={2}
                    bg="green.200"
                  />
                )}

                <Stack px="3" py="2" mt="6">

                  <Heading fontSize="20" height="10" mb="3" align="center">
                    {processName(hackathon.name, 33)}
                  </Heading>
                  <Text fontSize={['sm']} px="2">{getPublishedTime(hackathon.createdAt)}</Text>
                </Stack>

                <Box px="3" pb="3">
                  <Image
                    src={hackathon.landscapeImage?.sizes.thumbnail.url}
                    alt={`Picture of ${data.name}`}
                    roundedTop="lg"
                    roundedBottom="lg"
                    height={40}
                    width={"100%"}
                  />

                  {/* Like Icon  */}

                  {/* <Box>
                    <HStack mt="1">
                      <ThumbUpIcon boxSize={6} />
                    </HStack>
                  </Box> */}
                </Box>
              </Box>

            </Flex>
            </Link>
          </GridItem>)
        })
      }
    </SimpleGrid>
  )
}




function HomeHackathons() {


  const {state} = useHackathonContext()

  
  const { colorMode, toggleColorMode } = useColorMode()



  return (
    <>
      <Heading
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        Hackathons{' '}
      </Heading>
      <Tabs variant='soft-rounded' colorScheme='green' mt="10">
        <TabList>
          <Tab color={colorMode == "dark" ? "white" : ""}>Ongoing</Tab>
          <Tab color={colorMode == "dark" ? "white" : ""}>Upcoming</Tab>
          <Tab color={colorMode == "dark" ? "white" : ""}>Previous</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HackathonCard hackathons={state.hackathons.filter(h => h.timepoint == "ongoing")} />
          </TabPanel>
          <TabPanel>
            <HackathonCard hackathons={state.hackathons.filter(h => h.timepoint == "upcoming")}/>
          </TabPanel>
          <TabPanel>
            <HackathonCard hackathons={state.hackathons.filter(h => h.timepoint == "past")}/>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </>
  );
}

export default HomeHackathons;






