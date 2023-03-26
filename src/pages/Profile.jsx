import { AtSignIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Grid,
  GridItem,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
  Heading,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Meme History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={AtSignIcon} />
              0x524C6FC16F9473BDBf130Bd5b9302aE3A6fAD3B2
            </ListItem>
            <ListItem>
              <ListIcon as={InfoOutlineIcon} />
              Someone who has dedicated his life to creating memes and is a
              lover of memes and blockchain.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
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
              </Card>
            </GridItem>
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
