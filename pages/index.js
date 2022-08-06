
import { useEffect } from "react";
import HomeHackathons from "../src/components/home/hackathons";
import HomeHero from "../src/components/home/hero";
import HomeCallToAction from "../src/components/home/homecta";
import { useHackathonContext } from "../src/state/provider.state";



export default function Home({hackathons}) {

  const {populateHackathons} = useHackathonContext();

  useEffect(() => {
    if (hackathons && hackathons.docs){
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
  let hackathons = await fetch('http://localhost:4000/api/hackathons', options)
  hackathons = await hackathons.json()

  return {
    props: {
       hackathons
    },
  };
}
