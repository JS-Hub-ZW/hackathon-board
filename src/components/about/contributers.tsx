"use client"
import {
    Heading,
    Box,
    Button,
    Text,
} from "@chakra-ui/react";
import {SimpleGrid} from "@chakra-ui/react";
import {GridItem} from "@chakra-ui/react";
// import { useHackathonContext } from "../../state/provider.state";
import ContributorCard from "./contributorCard";
import { useSelector } from "react-redux";
import { Contributor } from "@/types/types";
import { RootState } from "@/state/store.state";


function Contributers() {

    const contributors = useSelector((state: RootState) => state.hackathon.contributors) as Contributor[];

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
        {contributors.map(contributor => (
            <GridItem><ContributorCard contributor={contributor}/></GridItem>
        ))}

    </SimpleGrid> </Box>);
}

export default Contributers;