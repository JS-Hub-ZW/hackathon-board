import { HStack } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Stack,
  TabPanel,
  Heading,
} from '@chakra-ui/react';
import HackathonCard from './hakacthonCard';
import { useSelector } from 'react-redux';


function HomeHackathons() {

  let  hackathons = useSelector(state => state.hackathon.hackathons)


  
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
            <HackathonCard hackathons={hackathons.filter(h => h.timepoint == "ongoing")} />
          </TabPanel>
          <TabPanel>
            <HackathonCard hackathons={hackathons.filter(h => h.timepoint == "upcoming")}/>
          </TabPanel>
          <TabPanel>
            <HackathonCard hackathons={hackathons.filter(h => h.timepoint == "past")}/>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </>
  );
}

export default HomeHackathons;






