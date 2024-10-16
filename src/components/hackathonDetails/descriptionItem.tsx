import { Stack, Text } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { SerializeToJSX } from "../general/SerializeToJSX";

export default function DescriptionItem({ heading, isRichText, value }:{heading:string, value:string, isRichText:boolean}) {

    console.log("The Text: ", children)
    return (
        <Stack mt={"3"} mb={"6"}>
            <Heading fontSize={"1.5em"}>{heading}</Heading>
    
            <Text>{value ? value.toString() : ""}</Text>
        </Stack>
    )
}
