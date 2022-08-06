import { Divider, Flex, HStack, SimpleGrid, Wrap } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { Stack, Box, Image, Text } from "@chakra-ui/react";
import { CashIcon } from "../../src/icons/cashIcon";
import { EyeIcon } from "../../src/icons/eyeIcon";
import { GlobeIcon } from "../../src/icons/globeIcon";
import { UsersIcon } from "../../src/icons/users";



export default function Detail({hackathon}) {
    return (
        <>
            <HStack>
                <Image
                    roundedBottom={"lg"}
                    height={{sm: "sm", "md": "md", "lg": "lg"}}
                    width={"full"}
                    src="https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            </HStack>

            <Stack direction={["column", "row"]} mt="12" spacing="6">
                <Box width={{ lg: "70%", md:"70%", sm: "100%"}}>

                    <Heading>{hackathon.name}</Heading>

                    <Box mt={10}>
                        <DescriptionItem heading="Description" text={hackathon.description} />
                        <DescriptionItem heading="Requirements" text={hackathon.requirements} />
                        <DescriptionItem heading="Rules" text={hackathon.rules} />
                        <DescriptionItem heading="Selection Criteria" text={hackathon.selection_criteria}/>
                        <DescriptionItem heading="Prizes" text={hackathon.prizes} />
                    </Box>

                </Box>

                <Box width={{ md:"30%",sm:"100%", lg:"30%"}}>
                    <Box mb={'6'}>
                        <Heading fontSize={"1.5em"}>Details</Heading>
                        <HStack spacing="12" mt="3">
                            <DetailItem icon={<GlobeIcon boxSize={6} />} text={hackathon.type}/>
                            <DetailItem icon={<EyeIcon boxSize={6} />} text={hackathon.setting} />
                            <Divider color="gray.200" />
                        </HStack>
                        <Stack mt="3">
                            <DetailItem icon={<CashIcon boxSize={6} />} text={hackathon.prices} />
                            <DetailItem icon={<UsersIcon boxSize={6} />} text={hackathon.participants} />
                        </Stack>
                    </Box>

                    <Heading fontSize={"1.5em"}>Sponsors</Heading>
                    <Wrap spacing="12px" p="3" >
                        {
                            hackathon.sponsors.map((sponsor, index) => {
                                return (
                                    <Image key={index} maxWidth={"74"} src={sponsor.imageURL} />
                                )
                            })
                        }
                 
                    </Wrap>

                </Box>
            </Stack>

        </>
    )
}

function DetailItem({ icon, text }) {
    return (
        <HStack>
            {icon}
            <Text fontWeight={"light"}>{text}</Text>
        </HStack>
    )
}

function DescriptionItem({ heading, text }) {
    return (
        <Stack mt={"3"} mb={"6"}>
            <Heading fontSize={"1.5em"}>{heading}</Heading>
            <Text>{text}</Text>
        </Stack>
    )
}


export async function getStaticPaths() {
    // get total docs 
    const response = await fetch(`${process.env.BACKEND_ENDPOINT}/hackathons`);
    const resJson = await response.json();
    const totalDocs = resJson.totalDocs;

    // Now fetch all hackathons
    const res = await fetch(`${process.env.BACKEND_ENDPOINT}/hackathons?limit=${totalDocs}&depth=2`);
    const hackathons = await res.json()
    const paths = hackathons.docs.map(hackathon => ({params: {id: hackathon.id}}))
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params: {id}}) {
    const res = await fetch(`${process.env.BACKEND_ENDPOINT}/hackathons/${id}`)
    const hackathon = await res.json()
    return {
        props: {
            hackathon
        }
    }
}