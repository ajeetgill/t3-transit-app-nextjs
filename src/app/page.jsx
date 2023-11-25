import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-16 gap-4 px-4">
      <Heading as="h1" size="lg" className="text-center">
        Timetables
      </Heading>
      <Select
        placeholder="Select Bus stop"
        defaultValue={"Confederation Centre"}
      >
        <option value="Confederation Centre">Confederation Centre</option>
        <option value="upeibc">UPEI Browns Court</option>
      </Select>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList border="2px solid #9FE199" className="rounded-full">
          <Tab>From Downtown</Tab>
          <Tab>To Downtown</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Accordion allowToggle width={"full"}>
        <AccordionItem
          border={"2px solid hsla(118, 43%, 50%, 1)"}
          rounded={"md"}
          paddingY={"4"}
        >
          <h2>
            <AccordionButton>
              <Flex
                textAlign="left"
                alignItems={"center"}
                gap={"4"}
                width={"full"}
              >
                <h3 className="text-4xl font-black">03</h3>
                <Flex direction={"column"}>
                  <p className="text-[.8rem]">next bus at</p>
                  <p className="text-2xl font-bold -mt-2">11:45 AM</p>
                </Flex>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
