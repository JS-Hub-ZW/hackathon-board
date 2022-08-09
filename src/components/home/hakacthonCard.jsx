import {
  Flex,
  Circle,
  Box,
  SimpleGrid,
  GridItem,
  Image,
  Stack,
  TabPanel,
  Heading,
  Text,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { getPublishedTime, processName } from '../../utils/general.utils';


function HackathonCard({hackathons}) {
    return (
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
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
                  {(
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
                      alt={`Picture of ${hackathon.name}`}
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

  
  export default HackathonCard