import { useEffect } from "react";

import {
    Heading,
    Box,
    Button,
    Text,
} from "@chakra-ui/react";
import Section from "../src/components/section";
import Contributers from "../src/components/about/contributers";
import PurposeAndAudience from "../src/components/about/purposeAndAudience";
import { requestData } from "../src/utils/network";
import { useHackathonContext } from "../src/state/provider.state";





const About = ({contributers}) => {

  const { populateContributers } = useHackathonContext();

    useEffect(() => {
        if (contributers.length > 0){
            populateContributers(contributers);
        }
      
    }, [contributers]);

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
           <PurposeAndAudience/>
        </Box>


        <Box mb={10}>
           <Contributers/>
        </Box>
    </Section> 
  );
};

export default About;


export const getStaticProps = async () => {

  const mainUrl = `${process.env.BACKEND_ENDPOINT}/contributers`
  const method = "GET"

  let contributers = await requestData(mainUrl, method)

  return {
    props: {
      contributers: contributers.docs 
    }
  }
}