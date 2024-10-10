"user client";
import { Divider, Flex, HStack, SimpleGrid, Wrap } from "@chakra-ui/react";
import { Stack, Box, Image, Text } from "@chakra-ui/react";
import HackathonMainDetail from "../../components/hackathonDetails/mainDetails";
import HackathonSideDetails from "../../components/hackathonDetails/sideDetails";
import Section from "../../components/section";
import { requestData } from "../../utils/network.utils";





export default function Detail({hackathon}) {
    return (
        <Section delay={0.2}>
            <HStack>
                <Image
                    roundedBottom={"lg"}
                    height={{sm: "sm", "md": "md", "lg": "lg"}}
                    width={"full"}
                    src={hackathon.landscapeImage?.sizes.card.url}/>
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
    // get total docs 
    let method = "GET"
    const response = await requestData(`${process.env.BACKEND_ENDPOINT}/hackathons`, method);
    const totalDocs = response.totalDocs;

    // Now fetch all hackathons
    const hackathons = await requestData(`${process.env.BACKEND_ENDPOINT}/hackathons?limit=${totalDocs}&depth=2`, method);
    const paths = hackathons.docs.map(hackathon => ({params: {id: hackathon.id}}))
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params: {id}}) {
    console.log("The id is: ", id);
    let method = "GET"
    const hackathon = await requestData(`${process.env.BACKEND_ENDPOINT}/hackathons/${id}`, method)

    return {
        props: {
            hackathon
        }
    }
}