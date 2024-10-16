"user client";
import { Divider, Flex, HStack, SimpleGrid, Wrap } from "@chakra-ui/react";
import { Stack, Box, Image, Text } from "@chakra-ui/react";
import HackathonMainDetail from "../../components/hackathonDetails/mainDetails";
import HackathonSideDetails from "../../components/hackathonDetails/sideDetails";
import Section from "../../components/section";
import { requestData } from "../../utils/network.utils";
import { Hackathon, RequestMethod } from "@/types/types";
import events from "../../../data/events";





export default function Detail({hackathon}:{hackathon:Hackathon}) {
    return (
        <Section delay={0.2}>
            <HStack>
                <Image
                    roundedBottom={"lg"}
                    height={{sm: "sm", "md": "md", "lg": "lg"}}
                    width={"full"}
                    src={hackathon.images.landscape}/>
            </HStack>

            <Stack direction={["column", "row"]} mt="12" spacing="6">
                <HackathonMainDetail  
                    hackathon={hackathon}
                />

               <HackathonSideDetails  
                    hackathon={hackathon}
                />
            </Stack>

        </Section>
    )
}





export async function getStaticPaths() {
    
     const paths: never[] = []
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params: {id}}:{params:{id:string}}) {

    const hackathon = events[0]
    return {
        props: {
            hackathon
        }
    }
}