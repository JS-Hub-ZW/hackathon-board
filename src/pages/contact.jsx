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

const Contact = () => {
  return (
    <>
      <Section delay={0.1}>
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

    </>
  )
}
export default Contact

