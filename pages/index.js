import { Text, SimpleGrid, Stack } from "@chakra-ui/react";
import HomeHackathons from "../components/home/hackathons";
import HomeHero from "../components/home/hero";
import HomeCallToAction from "../components/home/homecta";



export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeHackathons />
      <HomeCallToAction/>
    </>
  );
}
