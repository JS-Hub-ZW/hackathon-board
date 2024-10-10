
import { Box } from '@chakra-ui/react'
import NextLink from 'next/link';



const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} JavaScript Hub Zimbabwe. All Rights Reserved. Images from <NextLink target={"_blank"}  href="https://unsplash.com/" >Unsplash</NextLink>
    </Box>
  )
}

export default Footer
