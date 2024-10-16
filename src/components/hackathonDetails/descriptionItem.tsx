import { OrderedList, Stack, Text, ListItem } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { SerializeToJSX } from "../general/SerializeToJSX";

export function DescriptionItem({ heading, isRichText, text }:{heading:string, text:string, isRichText:boolean}) {


    return (
        <Stack mt={"3"} mb={"6"}>
            <Heading fontSize={"1.5em"}>{heading}</Heading>
    
            <Text>{text ? text.toString() : ""}</Text>
        </Stack>
    )
}

export function ListItems({ heading, isRichText, items }:{heading:string, items:string[], isRichText:boolean}) {


    return (
        <Stack mt={"3"} mb={"6"}>
            <Heading fontSize={"1.5em"}>{heading}</Heading>
    
            <OrderedList>
                { items.map(item =>  <ListItem>{item}</ListItem>)}
 

</OrderedList>
        </Stack>
    )
}
