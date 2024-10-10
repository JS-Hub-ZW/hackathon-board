import { Heading } from "@chakra-ui/react";
import { Stack, Box, Image, Text } from "@chakra-ui/react";
import DescriptionItem from "./descriptionItem";
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
        <DescriptionItem heading="Description" isRichText={true}>
          {hackathon.description}
        </DescriptionItem>
        <DescriptionItem heading="Requirements" isRichText={true}>
          {hackathon.requirements}
        </DescriptionItem>
        <DescriptionItem heading="Rules" isRichText={true}>
          {hackathon.rules}
        </DescriptionItem>
        <DescriptionItem heading="Selection Criteria" isRichText={true}>
          {hackathon.selection_criteria}
        </DescriptionItem>
        <DescriptionItem heading="Prizes" isRichText={true}>
          {hackathon.prizes}
        </DescriptionItem>
      </Box>
    </Box>
  );
}
