
import {
    Heading,
    Box,
    Button,
    Text,
} from "@chakra-ui/react";

function PurposeAndAudience() {
    return (  <Box>
        <Box mb={10}>
        <Heading>Purpose</Heading>
        <Text  mt={5}>The purpose of Hackthon Board is to display hackathons that people can see and  participate. Its kind boring
          hear that some people just won a hackathon but you didnt hear about it. We want to help people to find hackathons 
          and hack stuff. Thats the purpose of Hackthon Board.
        </Text>

        

       </Box>
       <Box mb={10}>
        <Heading>Target Audience</Heading>
        <Text  mt={3}>
          Hackthon Board displays hackathons in Zimbabwe and mainly targets Zimbabwe hackers so they showcase their skills. However we may
          display hackathons in other countries and target other countries hackers. 
        </Text>
    </Box>
    </Box>);
}

export default PurposeAndAudience;