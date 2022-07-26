import NextLink from "next/link";
import {
  Link,
  Stack,
  Heading,
  Box,
  Button,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import Section from "../src/components/section";
import EmailSubs from "../src/components/emailsubs";

const About = () => {
  return (
    <>
      <Section delay={0.2}>
        <Text fontSize="xl" align="center" mt={50}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          magni doloremque maiores aspernatur architecto facilis omnis odio
          deleniti? Adipisci deserunt minus nobis. Perferendis earum repellendus
          minima, unde possimus veniam nisi!
        </Text>
        <EmailSubs />

        {/* Hackathons Cards will come here */}

        {/*
        !Todo 
        MUSABATE CODE YANGU */}

        <div className="flex text-blue-200 w-full justify-between items-center py-12">
          <div className=" h-24 w-56 rounded flex items-center justify-center border border-black">
            A
          </div>
          <div className=" h-24 w-56 rounded flex items-center justify-center border border-black">
            A
          </div>
          <div className=" h-24 w-56 rounded flex items-center justify-center border border-black">
            A
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
