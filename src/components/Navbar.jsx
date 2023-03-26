import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  position,
} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Wallet connected",
      description: "Successfully connected",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
    });
  };
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1">MemETH</Heading>
      <Spacer />

      <HStack spacing="20px">
        <ConnectButton />
      </HStack>
    </Flex>
  );
}
