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
import { useHackathonContext } from '../../state/provider.state';
import HackathonCard from './hakacthonCard';


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






