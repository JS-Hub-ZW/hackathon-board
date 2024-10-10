import { Container } from "@chakra-ui/react";

export default function SiteWrapper({ children }: { children: React.ReactNode }) {
  return <Container maxW={"7xl"}>{children}</Container>;
}
