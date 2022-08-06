import { HStack } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
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


const data = {
  isNew: true,
  imageURL:
    'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ebb4a9afeaaa463c23a6b5127e3ce224',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};




function HackathonCard() {
  return (
    <SimpleGrid
      columns={[1, 3]}
    >
      {
        [1, 2, 3, 4].map((_, i) => {
          return (<GridItem>
            <Flex p={3} w="full" alignItems="center" justifyContent="center">
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"

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

                  <Heading fontSize="2xl" align="center">
                    Hackathon Title Here. Come Hack Some Stuff
                  </Heading>
                  <Text fontSize={['sm']} px="2">Today at 9:00 AM</Text>
                </Stack>

                <Box px="3" pb="3">
                  <Image
                    src={data.imageURL}
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
          </GridItem>)
        })
      }
    </SimpleGrid>
  )
}




function HomeHackathons() {
  return (
    <>
      <Heading
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        Hackthons{' '}
      </Heading>
      <Tabs variant='soft-rounded' colorScheme='green' mt="10">
        <TabList>
          <Tab>Ongoing</Tab>
          <Tab>Upcoming</Tab>
          <Tab>Previous</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HackathonCard />
          </TabPanel>
          <TabPanel>
            <HackathonCard />
          </TabPanel>
          <TabPanel>
            <HackathonCard />
          </TabPanel>
        </TabPanels>
      </Tabs>

    </>
  );
}

export default HomeHackathons;






