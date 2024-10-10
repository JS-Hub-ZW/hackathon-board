"user client";

import {
  Text,
  Heading,
  Link,
  Box,
  Center,
  useColorModeValue,
  Stack,
  SimpleGrid,

} from '@chakra-ui/react'
import Contribute from '../components/contact/contribute'
import SayHello from '../components/contact/sayHello'

import Section from '../components/section'
import React from 'react'

const Contact = () => {
  return (
    <React.Fragment>
      <Section delay={0.2}>
        <Heading
          fontSize='6xl'
          align="center"
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
export default Contact

