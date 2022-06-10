import {
    Flex,
    Circle,
    Box,
    Grid,
    GridItem,
    Image,
    Badge,
    Button,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Heading,
    Text,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';

  import { FiShoppingCart } from 'react-icons/fi';
  
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };


    
function OngoingHackathons() {
    return (
        <Grid templateColumns='repeat(4, 1fr)' >
        {
           [1,2,3,4].map((_, i) => {
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
                        bg="red.200"
                      />
                    )}
            
                    <Image
                      src={data.imageURL}
                      alt={`Picture of ${data.name}`}
                      roundedTop="lg"
                    />
            
                    <Box p="3">
                      <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                          fontSize="md"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          isTruncated>
                          {data.name}
                        </Box>
                      </Flex>
        
                      <Flex mt="3" justifyContent="space-between" alignContent="center">
                        <Box
                          fontSize="md"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          isTruncated>
                          <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Hack Now!
            </Button>
                        </Box>
                      </Flex>
        
                    </Box>
                  </Box>
                </Flex>
                </GridItem>)
            })
        }
      </Grid>
    )
}
  
function UpcomingHackathons() {
    return (
        <Grid templateColumns='repeat(4, 1fr)' >
        {
           [1,2,3,4].map((_, i) => {
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
                        bg="red.200"
                      />
                    )}
            
                    <Image
                      src={data.imageURL}
                      alt={`Picture of ${data.name}`}
                      roundedTop="lg"
                    />
            
                    <Box p="3">
                      <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                          fontSize="md"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          isTruncated>
                          {data.name}
                        </Box>
                      </Flex>
        
                      <Flex mt="3" justifyContent="space-between" alignContent="center">
                        <Box
                          fontSize="md"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          isTruncated>
                          <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Hack Now!
            </Button>
                        </Box>
                      </Flex>
        
                    </Box>
                  </Box>
                </Flex>
                </GridItem>)
            })
        }
      </Grid>
    )
}
  
function PreviousHackathons() {
    return (
        <Grid templateColumns='repeat(4, 1fr)' >
        {
           [1,2,3,4].map((_, i) => {
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
                        bg="red.200"
                      />
                    )}
            
                    <Image
                      src={data.imageURL}
                      alt={`Picture of ${data.name}`}
                      roundedTop="lg"
                    />
            
                    <Box p="3">
                      <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                          fontSize="md"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          isTruncated>
                          {data.name}
                        </Box>
                      </Flex>
        
            
        
                    </Box>
                  </Box>
                </Flex>
                </GridItem>)
            })
        }
      </Grid>
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
       <OngoingHackathons/>
    </TabPanel>
    <TabPanel>
        <UpcomingHackathons/>
    </TabPanel>
    <TabPanel>
        <PreviousHackathons/>
    </TabPanel>
  </TabPanels>
</Tabs>

      </>
    );
  }
  
  export default HomeHackathons;






