import Head from 'next/head'
import NavBar from '../general/navbar'

import { Box, Container } from '@chakra-ui/react'
import Footer from '../general/footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={6}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="JSZW" />
        <meta name="author" content="JSZW" />
        <meta name="author" content="JSZW" />
      
        <title>Hackathon Board</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
      

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
