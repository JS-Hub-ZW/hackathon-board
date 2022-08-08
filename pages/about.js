import NextLink from "next/link";
import {
    Heading,
    Box,
    Button,
    Text,
} from "@chakra-ui/react";
import Section from "../src/components/section";
import Contributers from "../src/components/about/contributers";
import Purpose from "../src/components/about/purpose";


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

           <Purpose/>
        </Box>


        <Box mb={10}>
           <Contributers/>
        </Box>
    </Section> 
  );
};

export default About;