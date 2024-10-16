import { Heading } from "@chakra-ui/react";
import { Stack, Box, Image, Text } from "@chakra-ui/react";
import {DescriptionItem, ListItems} from "./descriptionItem";
import { Hackathon } from "@/types/types";

export default function HackathonMainDetail({ hackathon }:{hackathon:Hackathon}) {
  return (
    <Box
      width={{
        lg: "70%",
        md: "70%",
        sm: "100%",
      }}
    >
      <Heading>{hackathon.name}</Heading>

      <Box mt={10}>
      
        <DescriptionItem heading="Description" text={hackathon.description} isRichText={false}>
          
          
        </DescriptionItem>
        <ListItems heading="Prizes" items={hackathon.prizes.map(prize => prize.name + " - $" +prize.amount)} isRichText={true}>
          
        </ListItems>
      </Box>
    </Box>
  );
}
