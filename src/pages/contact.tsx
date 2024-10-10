"user client";

import {
  Text,
  Heading,
  Center,
  useColorModeValue,
  Stack,
  SimpleGrid,

} from '@chakra-ui/react'
import Contribute from '../components/contact/contribute'
import SayHello from '../components/contact/sayHello'

import Section from '../components/section'
import React from 'react'

export default function Contact(){
  return (
    <React.Fragment>
      <Section delay={0.2}>
        <Heading
          fontSize='6xl'
          textAlign="center"
          padding={6}
        >
          Contact Us
        </Heading>

        <Center py={12}>
          <SimpleGrid
            columns={[1, 2]}
            gap={8}>
            <SayHello useColorModeValue={useColorModeValue} />
            <Contribute useColorModeValue={useColorModeValue} />
          </SimpleGrid>
        </Center>



        <Text
          padding={8}></Text>
      </Section>

    </React.Fragment>
  )
}

