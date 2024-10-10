import Logo from "./logo";
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import {
  Container,
  Box,
  Button,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";



const ChakraLink = chakra<typeof NextLink, NextLinkProps>(NextLink, {
  shouldForwardProp: (prop) => ['href', 'target', 'children', 'scroll', 'replace', 'prefetch'].includes(prop),
})



const LinkItem = ({ href, path, target, children, ...props }:{href?:string,children?:any , target?:HTMLAttributeAnchorTarget,path?:string}) => {

  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    
      <ChakraLink
        p={2}
        bg={active ? "purple.50" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}

        href={`${href}`}  scroll={false}

      >
  
        
        {children}
   
      </ChakraLink>
    
  );
};

/* CREATE AN ARRAY TO HOLD NAV ITEMS */
const navItems = [
  {
    linkName: "Home",
    linkHref: "/",
  },
  // {
  //   linkName: "Leaderboard",
  //   linkHref: "/leaderboard",
  // },
  {
    linkName: "About",
    linkHref: "/about",
  },
  {
    linkName: "Contact",
    linkHref: "/contact",
  },
];

const Navbar = ({...props}) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        flexWrap={"wrap"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={6}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {/* mapping through link items with similar pattern */}
          {navItems.map((item, index) => (
            <LinkItem key={index} href={item.linkHref}>
              {item.linkName}
            </LinkItem>
          ))}
          {/* <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/leaderboard" path={path}>
            Leaderboard
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem> */}
          {/* <LinkItem
            target="_blank"
            href="https://github.com/JS-Hub-ZW/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            Our Work
          </LinkItem> */}
          {/* <LinkItem
            href={"auth/login"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="outline" colorScheme="purple" size="sm">
              Sign In
            </Button>
          </LinkItem>
          <LinkItem
            href={"auth/register"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="outline" colorScheme="purple" size="sm">
              Sign Up
            </Button>
          </LinkItem> */}
        </Stack>

        <Box flex={1} alignItems="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/">
                  <MenuItem>Home</MenuItem>
                </NextLink>
                <NextLink href="/leaderboard" >
                  <MenuItem>Leaderboard</MenuItem>
                </NextLink>
                <NextLink href="/about" >
                  <MenuItem>AboutUs</MenuItem>
                </NextLink>
                <NextLink href="/contact" >
                  <MenuItem>Contact</MenuItem>
                </NextLink>
                <MenuItem
                  as={ChakraLink}
                  target="_blank"
                  href="https://github.com/jshub"
                >
                  View Source
                </MenuItem>
                <MenuItem
                  as = {ChakraLink}
                  target="_blank"
                  href={"auth/login"}
                  rel="noopener noreferrer"
                >
                  Sign In
                </MenuItem>
                <MenuItem
                  as={ChakraLink}
                  target="_blank"
                  href={"auth/register"}
                  rel="noopener noreferrer"
                >
                  Sign In
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
