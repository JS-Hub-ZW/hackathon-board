import { Divider, Flex, HStack, SimpleGrid, Wrap } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Stack, Box, Image, Text } from "@chakra-ui/react";
import DetailItem from "./detailItem";

import { EyeIcon } from "../icons/eyeIcon";
import { GlobeIcon } from "../icons/globeIcon";
import { UsersIcon } from "../icons/users";
import { CashIcon } from "../icons/cashIcon";
import { titleCase } from "../../utils/general.utils";
import { Hackathon } from "@/types/types";




export default function HackathonSideDetails({ hackathon }:{hackathon:Hackathon}) {
  return (
    <Box
      width={{
        md: "30%",
        sm: "100%",
        lg: "30%",
      }}
    >
      <Box mb={"6"}>
        <Heading fontSize={"1.5em"}>Details</Heading>
        <HStack spacing="12" mt="3">
          <DetailItem
            icon={<GlobeIcon boxSize={6} />}
            text={hackathon.type ? titleCase(hackathon.type) : ""}
          />
        </HStack>
        <HStack spacing={"12"} mt="3">
          <DetailItem icon={<CashIcon boxSize={6} />} text={String(hackathon.total_prizes)} />
          <DetailItem
            icon={<UsersIcon boxSize={6} />}
            text={hackathon.participants ? hackathon.participants : "0"}
          />
        </HStack>
      </Box>

      <Heading fontSize={"1.5em"}>Sponsors</Heading>
      <Wrap spacing="12px" p="3">
        {hackathon?.sponsors?.map((sponsor, index) => {
          return <Image key={index} maxWidth={"74"} src={sponsor.imageURL} />;
        })}
      </Wrap>
    </Box>
  );
}
