import {
  ChevronRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Grid,
  GridItem,
  Image,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={3}>
      <GridItem w="100%" h="100%">
        <Card
          borderTop="8px"
          borderColor="purple.400"
          bg="white"
          w="100%"
          h="100%"
        >
          <CardBody>
            <Image src="https://cdn.discordapp.com/attachments/1087107481479692369/1089548455434784929/Top-100-Crypto-Memes-of-2022-18-cant-stop-cryptos.png" />
            <Heading color="gray.650" textAlign="center" as="h3">
              Meme Name
            </Heading>
          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<TriangleUpIcon />}>
                {" "}
                435
              </Button>
              <Button variant="ghost" leftIcon={<TriangleDownIcon />}>
                11
              </Button>
              <Button leftIcon={<ChevronRightIcon />}>Donate</Button>
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem w="100%">
        <Card
          borderTop="8px"
          borderColor="purple.400"
          bg="white"
          w="100%"
          h="100%"
        >
          <CardBody>
            <Image src="https://cdn.discordapp.com/attachments/1087107481479692369/1089549030931042354/30518724-ac82-49bc-a14e-a4bd444370aa.jpeg" />
            <Heading color="gray.650" textAlign="center" as="h3">
              Meme Name
            </Heading>
          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<TriangleUpIcon />}>
                178
              </Button>
              <Button variant="ghost" leftIcon={<TriangleDownIcon />}>
                58
              </Button>
              <Button leftIcon={<ChevronRightIcon />}>Donate</Button>
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem w="100%">
        <Card
          borderTop="8px"
          borderColor="purple.400"
          bg="white"
          w="100%"
          h="100%"
        >
          <CardBody>
            <Image src="https://cdn.discordapp.com/attachments/1087107481479692369/1089549135348244570/d0dcfba6-7518-4b5a-90e6-839cf8ab9ef8.jpeg" />
            <Heading color="gray.650" textAlign="center" as="h3">
              Meme Name
            </Heading>
          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<TriangleUpIcon />}>
                426
              </Button>
              <Button variant="ghost" leftIcon={<TriangleDownIcon />}>
                17
              </Button>
              <Button leftIcon={<ChevronRightIcon />}>Donate</Button>
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem w="100%">
        <Card
          borderTop="8px"
          borderColor="purple.400"
          bg="white"
          w="100%"
          h="100%"
        >
          <CardBody>
            <Image src="https://cdn.discordapp.com/attachments/1087107481479692369/1089549453742055424/0ae6d38e-db82-4da7-acb8-5ea64705ebc4.jpeg" />
            <Heading color="gray.650" textAlign="center" as="h3">
              Meme Name
            </Heading>
          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<TriangleUpIcon />}>
                377
              </Button>
              <Button variant="ghost" leftIcon={<TriangleDownIcon />}>
                25
              </Button>
              <Button leftIcon={<ChevronRightIcon />}>Donate</Button>
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
}
