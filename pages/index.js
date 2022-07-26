import { Text, SimpleGrid, Stack } from "@chakra-ui/react";
import HomeHackathons from "../src/components/home/hackathons";
import HomeHero from "../src/components/home/hero";
import HomeCallToAction from "../src/components/home/homecta";



export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeHackathons />
      <HomeCallToAction/>
    </>
  );
}
