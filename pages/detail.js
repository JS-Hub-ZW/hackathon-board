import { Divider, Flex, HStack, SimpleGrid, Wrap } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { Stack, Box, Image, Text } from "@chakra-ui/react";
import { CashIcon } from "../src/icons/cashIcon";
import { EyeIcon } from "../src/icons/eyeIcon";
import { GlobeIcon } from "../src/icons/globeIcon";
import { UsersIcon } from "../src/icons/users";



export default function Detail() {
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

                    <Heading>Lets hack some poop guys. Lots of prices to be won</Heading>

                    <Box mt={10}>
                        <DescriptionItem heading="Description" text="Lets hack some poop guys. Lots of prices to be won" />
                        <DescriptionItem heading="Requirements" text="Lets hack some poop guys. Lots of prices to be won" />
                        <DescriptionItem heading="Rules" text="Lets hack some poop guys. Lots of prices to be won" />
                        <DescriptionItem heading="Selection Criteria" text="Lets hack some poop guys. Lots of prices to be won" />
                        <DescriptionItem heading="Prizes" text="Lets hack some poop guys. Lots of prices to be won" />
                    </Box>

                </Box>

                <Box width={{ md:"30%",sm:"100%", lg:"30%"}}>
                    <Box mb={'6'}>
                        <Heading fontSize={"1.5em"}>Details</Heading>
                        <HStack spacing="12" mt="3">
                            <DetailItem icon={<GlobeIcon boxSize={6} />} text="Global" />
                            <DetailItem icon={<EyeIcon boxSize={6} />} text="Public" />
                            <Divider color="gray.200" />
                        </HStack>
                        <Stack mt="3">
                            <DetailItem icon={<CashIcon boxSize={6} />} text="10K Prizes to be won" />
                            <DetailItem icon={<UsersIcon boxSize={6} />} text="255 Attending" />
                        </Stack>
                    </Box>

                    <Heading fontSize={"1.5em"}>Sponsors</Heading>
                    <Wrap spacing="12px" p="3" >
                            <Image maxWidth={"74"} src={"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"} />
                            <Image maxWidth={"74"} src={"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"} />
                            <Image maxWidth={"74"} src={"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"} />
                            <Image maxWidth={"74"} src={"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"} />
                            <Image maxWidth={"74"} src={"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"} />
                            <Image maxWidth={"74"} src={"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"} />
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