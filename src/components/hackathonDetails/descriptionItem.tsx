import { Stack, Text } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { SerializeToJSX } from "../general/SerializeToJSX";

export default function DescriptionItem({ heading, isRichText, children }:{heading:string, isRichText:boolean, children:any}) {

    console.log("The Text: ", children)
    return (
        <Stack mt={"3"} mb={"6"}>
            <Heading fontSize={"1.5em"}>{heading}</Heading>
    
            {isRichText && children && children.length > 0 && typeof(children) == 'object' ? SerializeToJSX(children) : <Text></Text> }
        </Stack>
    )
}
