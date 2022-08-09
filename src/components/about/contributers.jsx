
import {
    Heading,
    Box,
    Button,
    Text,
} from "@chakra-ui/react";
import {SimpleGrid} from "@chakra-ui/react";
import {GridItem} from "@chakra-ui/react";
import { useHackathonContext } from "../../state/provider.state";
import ContributerCard from "./contributerCard";


function Contributers() {

    const  {state} = useHackathonContext()

    console.log("Current state:",state)

    return ( 
    
    <Box><Heading>Contributors</Heading>

    <Text mt={5} mb={10} align={"center"}>This project wouldnt come this far without
        these lovely heroes. I mean if you need someone to do your work, Please get in
        touch with these guys. They are awesome!.
    </Text>

    <SimpleGrid
        columns={{
        base: 1,
        sm: 2,
        md: 3,
        lg: 4
    }}
        spacing="12">
        {state.contributors.map(contributer => (
            <GridItem><ContributerCard contributer={contributer}/></GridItem>
        ))}

    </SimpleGrid> </Box>);
}

export default Contributers;