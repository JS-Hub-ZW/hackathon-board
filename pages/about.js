import NextLink from "next/link";
import {
    Link,
    Stack,
    Heading,
    Box,
    Button,
    Text,
    List,
    ListItem
} from "@chakra-ui/react";
import Section from "../src/components/section";
import EmailSubs from "../src/components/emailsubs";
import TeamCards from "../src/components/about/teamCard";
import {SimpleGrid} from "@chakra-ui/react";
import {GridItem} from "@chakra-ui/react";

const CONTRIBUTERS = [
    {
        name: "Richson Simbabure",
        image: "https://avatars.githubusercontent.com/u/76937134?v=4",
        role: "Software Developer",
        link: "https://github.com/RSimmz98"
    }, {
        name: "George Chakama",
        image: "https://avatars.githubusercontent.com/u/37905683?v=4",
        role: "Software Developer",
        link: "https://github.com/gtchakama"
    }, {
        name: "Dante Midzi",
        image: "https://avatars.githubusercontent.com/u/34038162?v=4",
        role: "Half Stack Developer",
        link: "https://github.com/Psypher1"
    }, {
        name: "Ashley Hwacha",
        image: "https://avatars.githubusercontent.com/u/22978304?v=4",
        role: "Software Developer",
        link: "https://github.com/ashleyhwacha"
    }, {
        name: "Takunda Madechangu",
        image: "https://avatars.githubusercontent.com/u/42911769?v=4",
        role: "Full Stack Developer",
        link: "https://github.com/takumade"
    }

]

const About = () => {
    return (
      
      <Section delay={0.2}>
        <Heading
        fontSize='6xl'
        align="center"
          padding={6}
        >
       About
       </Heading>

      

       <Box mb={10}>

       <Heading>Purpose</Heading>
        <Text  mt={5}>The purpose of Hackthon Board is to display hackathons that people can see and  participate. Its kind boring
          hear that some people just won a hackathon but you didnt hear about it. We want to help people to find hackathons 
          and hack stuff. Thats the purpose of Hackthon Board.
        </Text>

        

       </Box>
       <Box mb={10}>
        <Heading>Target Audience</Heading>
        <Text  mt={3}>
          Hackthon Board displays hackathons in Zimbabwe and mainly targets Zimbabwe hackers so they showcase their skills. However we may
          display hackathons in other countries and target other countries hackers. 
        </Text>
        </Box>


        <Box mb={10}>
            <Heading>Contributers</Heading>

            <Text mt={5} mb={10} align={"center"}>This project wouldnt come this far without
                these lovely heroes. I mean if you need someone to do your work, Please get in
                touch with these guys. They are awesome!.
            </Text>

            <SimpleGrid
                columns={{
                base: 1,
                sm: 2,
                md: 3,
                lg: 4
            }}
                spacing="12">
                {CONTRIBUTERS.map(contributer => (
                    <GridItem><TeamCards contributer={contributer}/></GridItem>
                ))}

            </SimpleGrid>
        </Box>
    </Section> 
  );
};

export default About;