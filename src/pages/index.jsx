
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import HomeHackathons from "../components/home/hackathons";
import HomeHero from "../components/home/hero";
import HomeCallToAction from "../components/home/homecta";
import Section from "../components/section";
import { useHackathonContext } from "../state/provider.state";
import { requestData } from "../utils/network.utils";



export default function Home({hackathons}) {

  const {populateHackathons} = useHackathonContext();

  useEffect(() => {
    if (hackathons.length > 0){
      populateHackathons(hackathons);
    }
  }, [hackathons]);

  return (
    <Section delay={0.2}>
      <Box>
        <HomeHero />
      </Box>
      <Box>
        <HomeHackathons />
      </Box>
      <Box>
        <HomeCallToAction/>
      </Box>
    </Section>
  );
}


export async function getStaticProps() {
  const mainUrl = `${process.env.BACKEND_ENDPOINT}/hackathons?depth=2&`

  let method = 'GET';


  // let upcomingHackathonsData = await requestData(`${mainUrl}where[timepoint][equals]=upcoming`, method)
  // let ongoingHackathonsData = await requestData(`${mainUrl}where[timepoint][equals]=ongoing`, method)
  // let pastHackathonsData = await requestData(`${mainUrl}where[timepoint][equals]=past`, method)


  let hackathons = [
 
  ]

  console.log("Hackathons Length: ", hackathons.length)

  return {
    props: {
       hackathons
    },
  };
}
