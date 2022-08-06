
import { useEffect } from "react";
import HomeHackathons from "../src/components/home/hackathons";
import HomeHero from "../src/components/home/hero";
import HomeCallToAction from "../src/components/home/homecta";
import { useHackathonContext } from "../src/state/provider.state";



export default function Home({hackathons}) {

  const {populateHackathons} = useHackathonContext();

  useEffect(() => {
    if (hackathons.length > 0){
      populateHackathons(hackathons);
    }
  }, [hackathons]);

  return (
    <>
      <HomeHero />
      <HomeHackathons />
      <HomeCallToAction/>
    </>
  );
}


export async function getStaticProps() {
  const options = {method: 'GET'};
  const mainUrl = `${process.env.BACKEND_ENDPOINT}/hackathons?depth=2&`
  let upcomingHackathons =  await fetch(`${mainUrl}where[timepoint][equals]=upcoming`, options)
  let ongoingHackathons = await fetch(`${mainUrl}where[timepoint][equals]=ongoing`, options)
  let pastHackathons = await fetch(`${mainUrl}where[timepoint][equals]=past`, options)

  let upcomingHackathonsData = await upcomingHackathons.json()
  let ongoingHackathonsData = await ongoingHackathons.json()
  let pastHackathonsData = await pastHackathons.json()


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
