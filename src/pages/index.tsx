"user client";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import HomeHackathons from "../components/home/hackathons";
import HomeHero from "../components/home/hero";
import HomeCallToAction from "../components/home/homecta";
import Section from "../components/section";
import events from "../../data/events";
import { useDispatch } from "react-redux";
import { addHackathons } from "../state/reducer.state";
import { Hackathon } from "@/types/types";


export default function Home({ hackathons }:{hackathons: Hackathon[]}) {

  const dispatch = useDispatch()

  useEffect(() => {
    if (hackathons.length > 0){
      dispatch(addHackathons(hackathons))
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


  let hackathons = events

  console.log("Hackathons Length: ", hackathons.length)

  return {
    props: {
       hackathons
    },
  };
}
