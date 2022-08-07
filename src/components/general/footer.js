import { Link } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'



const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} JavaScript Hub Zimbabwe. All Rights Reserved. Images from <Link target={"_blank"}  to="https://unsplash.com/" isExternal passHref>Unsplash</Link>
    </Box>
  )
}

export default Footer
