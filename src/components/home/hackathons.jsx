"use client"
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

import { useSelector } from 'react-redux';
import React from 'react';
import HackathonCardList from './hakacthonCardList';



function HomeHackathons() {

  let  hackathons = useSelector(state => state.hackathon.hackathons)


  
  const { colorMode, toggleColorMode } = useColorMode()



  return (
<React.Fragment>    
      <Heading
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        Hackathons{' '}
      </Heading>
      <Tabs variant='soft-rounded' colorScheme='green' mt="10">
        <TabList>
          <Tab color={colorMode == "dark" ? "white" : ""}>Upcoming</Tab>
          <Tab color={colorMode == "dark" ? "white" : ""}>Ongoing</Tab>
          <Tab color={colorMode == "dark" ? "white" : ""}>Past</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HackathonCardList hackathons={hackathons.filter(h => h.status == 1)} />
          </TabPanel>
          <TabPanel>
            <HackathonCardList hackathons={hackathons.filter(h => h.status == 2)}/>
          </TabPanel>
          <TabPanel>
            <HackathonCardList hackathons={hackathons.filter(h => h.status == 3)}/>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </React.Fragment>
  );
}

export default HomeHackathons;






