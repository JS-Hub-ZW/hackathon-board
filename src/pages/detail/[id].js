import { Divider, Flex, HStack, SimpleGrid, Wrap } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { Stack, Box, Image, Text } from "@chakra-ui/react";
import { SerializeToJSX } from "../../src/components/general/SerializeToJSX";
import { CashIcon } from "../../src/icons/cashIcon";
import { EyeIcon } from "../../src/icons/eyeIcon";
import { GlobeIcon } from "../../src/icons/globeIcon";
import { UsersIcon } from "../../src/icons/users";
import { titleCase } from "../../src/utils/general.utils";


export default function Detail({hackathon}) {
    return (
        <>
            <HStack>
                <Image
                    roundedBottom={"lg"}
                    height={{sm: "sm", "md": "md", "lg": "lg"}}
                    width={"full"}
                    src={hackathon.landscapeImage?.sizes.card.url}/>
            </HStack>

            <Stack direction={["column", "row"]} mt="12" spacing="6">
                <Box width={{ lg: "70%", md:"70%", sm: "100%"}}>

                    <Heading>{hackathon.name}</Heading>

                    <Box mt={10}>
                        <DescriptionItem heading="Description" isRichText={true}>{hackathon.description}</DescriptionItem>
                        <DescriptionItem heading="Requirements" isRichText={true}>{hackathon.requirements}</DescriptionItem>
                        <DescriptionItem heading="Rules" isRichText={true}>{hackathon.rules}</DescriptionItem>
                        <DescriptionItem heading="Selection Criteria" isRichText={true}>{hackathon.selection_criteria}</DescriptionItem>
                        <DescriptionItem heading="Prizes" isRichText={true}>{hackathon.prizes}</DescriptionItem>
                    </Box>

                </Box>

                <Box width={{ md:"30%",sm:"100%", lg:"30%"}}>
                    <Box mb={'6'}>
                        <Heading fontSize={"1.5em"}>Details</Heading>
                        <HStack spacing="12" mt="3">
                            <DetailItem icon={<GlobeIcon boxSize={6} />} text={hackathon.type ? titleCase(hackathon.type) : ""}/>
                            <DetailItem icon={<EyeIcon boxSize={6} />} text={hackathon.setting ? titleCase(hackathon.setting) : "Public"} />
                   
                        </HStack>
                        <HStack spacing={"12"} mt="3">
                            <DetailItem icon={<CashIcon boxSize={6} />} text={hackathon.prices} />
                            <DetailItem icon={<UsersIcon boxSize={6} />} text={hackathon.participants} />
                        </HStack>
                    </Box>

                    <Heading fontSize={"1.5em"}>Sponsors</Heading>
                    <Wrap spacing="12px" p="3" >
                        {
                            hackathon.sponsors?.map((sponsor, index) => {
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

function DescriptionItem({ heading, isRichText, children }) {

    console.log("The Text: ", children)
    return (
        <Stack mt={"3"} mb={"6"}>
            <Heading fontSize={"1.5em"}>{heading}</Heading>
    
            {isRichText && children && children.length > 0 && typeof(children) == 'object' ? SerializeToJSX(children) : <Text></Text> }
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
    console.log("The id is: ", id);
    const res = await fetch(`${process.env.BACKEND_ENDPOINT}/hackathons/${id}`)
    const hackathon = await res.json()
    return {
        props: {
            hackathon
        }
    }
}