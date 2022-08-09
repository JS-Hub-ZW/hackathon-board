
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import HomeHackathons from "../src/components/home/hackathons";
import HomeHero from "../src/components/home/hero";
import HomeCallToAction from "../src/components/home/homecta";
import { useHackathonContext } from "../src/state/provider.state";
import { requestData } from "../src/utils/network";



export default function Home({hackathons}) {

  const {populateHackathons} = useHackathonContext();

  useEffect(() => {
    if (hackathons.length > 0){
      populateHackathons(hackathons);
    }
  }, [hackathons]);

  return (
    <>
      <Box>
        <HomeHero />
      </Box>
      <Box>
        <HomeHackathons />
      </Box>
      <Box>
        <HomeCallToAction/>
      </Box>
    </>
  );
}


export async function getStaticProps() {
  const mainUrl = `${process.env.BACKEND_ENDPOINT}/hackathons?depth=2&`

  let method = 'GET';


  let upcomingHackathonsData = await requestData(`${mainUrl}where[timepoint][equals]=upcoming`, method)
  let ongoingHackathonsData = await requestData(`${mainUrl}where[timepoint][equals]=ongoing`, method)
  let pastHackathonsData = await requestData(`${mainUrl}where[timepoint][equals]=past`, method)


  let hackathons = [
    ...upcomingHackathonsData.docs,
    ...ongoingHackathonsData.docs,
    ...pastHackathonsData.docs
  ]

  console.log("Hackathons Length: ", hackathons.length)

  return {
    props: {
       hackathons
    },
  };
}
