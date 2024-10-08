import Head from "next/head";
import NavBar from "../general/navbr";

import { Box, Container } from "@chakra-ui/react";
import Footer from "../general/footer";

const Main = ({ children, router }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="JSZW" />
        <meta name="author" content="JSZW" />
        <meta name="author" content="JSZW" />

        <title>Hackathon Board</title>
      </Head>

      <Box as="main" pb={6}>
        <NavBar path={router.asPath} />

        <Container maxW="container.lg" pt={14} minH="100vh">
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Main;
