import { Text, SimpleGrid, Stack } from "@chakra-ui/react";
import HomeHackathons from "../components/home/hackathons";
import HomeHero from "../components/home/hero";
import HomeCallToAction from "../components/home/homecta";



export default function Home({hackathons}) {

  return (
    <>
      <HomeHero />
      <HomeHackathons hackathons={hackathons} />
      <HomeCallToAction/>
    </>
  );
}


export async function getStaticProps() {
  const options = {method: 'GET'};
  let hackathons = await fetch('http://localhost:4000/api/hackathons', options)
  hackathons = await hackathons.json()

  return {
    props: {
       hackathons
    },
  };
}
