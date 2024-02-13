"use client";
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
  Text,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

// import Timings from "./components/timings";

export default function Home() {
  const timingsUpeiToRoyalty = [
    "6:53",
    "7:08",
    "7:23",
    "7:38",
    "7:53",
    "8:08",
    "8:23",
    "8:38",
    "8:53",
    "9:08",
    "9:23",
    "9:38",
    "9:53",
    "10:08",
    "10:23",
    "10:38",
    "10:53",
    "11:08",
    "11:23",
    "11:38",
    "11:53",
    "12:08",
    "12:23",
    "12:38",
    "12:53",
    "13:08",
    "13:23",
    "13:38",
    "13:53",
    "14:08",
    "14:23",
    "14:38",
    "14:53",
    "15:08",
    "15:23",
    "15:38",
    "15:53",
    "16:08",
    "16:18",
    "16:28",
    "16:38",
    "16:48",
    "16:58",
    "17:08",
    "17:18",
    "17:28",
    "17:38",
    "17:48",
    "18:08",
    "18:23",
    "18:38",
    "18:53",
    "19:08",
    "19:23",
    "19:38",
    "19:53",
    "20:08",
    "20:23",
    "20:38",
    "20:53",
    "21:08",
    "21:23",
    "21:38",
    "21:53",
    "22:08",
  ];

  const convertTimeTo12HourFormat = (time) => {
    // convert time to 12 hour format
    // if hour is 00, convert to 12
    if(!time) {return `next day`;}

    const [hours, minutes] = time?.split(":");
    const amPm = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12}:${minutes}`;
  };

  const timeBox = () => {
    // map over timingsUpeiToRoyalty, for each time, show the timings in a grid, and each time is displayed in a box, each box styled according to early-day, mid-day, and late-day

    const getStyledTime = (timeVal) => {
      // styles each time according to early-day, mid-day, and late-day
      const [time, amPm] = timeVal?.split(" ");
      if (parseInt(time) < 12) {
        return "bg-green-300";
      } else if (parseInt(time) < 18) {
        return "bg-yellow-300";
      } else {
        return "bg-red-300";
      }
    };
    return (
      <div className="grid grid-cols-4 gap-4">
        {timingsUpeiToRoyalty.map((time) => (
          <div
            key={time}
            className={`rounded-md text-center text-black ${getStyledTime(
              time
            )}`}
          >
            {/* show time in 12hr format */}
            <p>{convertTimeTo12HourFormat(time)}</p>
          </div>
        ))}
      </div>
    );
  };

  const showUpcomingBusTime = () => {
    // gets the localtime in 24hr format,
    // const currentTime = new Date().toTimeString()?.split(":");
    const currentTime = ["05", "04"];
    //  get all timings from the timingsUpeiToRoyalty array, which are equal to current hour and greater than current minutes, if no such time is found, return the bus time for the next hour
    const nextBusTime = timingsUpeiToRoyalty.find((time) => {
      const [hour, minutes] = time?.split(":");
      console.log(hour, minutes, currentTime[0], currentTime[1]);
      return (
        parseInt(hour) === parseInt(currentTime[0]) &&
        parseInt(minutes) > parseInt(currentTime[1])
      );
    });
    return nextBusTime;
    // return convertTimeTo12HourFormat(nextBusTime);
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-16 gap-4 px-4">
      <Heading as="h1" size="lg" className="text-center">
        Timetables
      </Heading>
      <Select placeholder="Select Bus stop" defaultValue={"upeibc"}>
        <option value="upeibc">UPEI Browns Court</option>
        {/* <option value="Confederation Centre">Confederation Centre</option> */}
        <option value="Confederation Centre">More coming soon...</option>
      </Select>
      {/* <Tabs variant="soft-rounded" colorScheme="green">
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
      </Tabs> */}
      <Text as="h3" className="uppercase font-bold">
        Towards Royalty Crossing
      </Text>
      <Accordion allowToggle width={"full"}>
        <AccordionItem
          border={"2px solid hsla(118, 43%, 50%, 1)"}
          rounded={"md"}
          paddingY={"4"}
          bg={"hsla(118, 43%, 50%, 1)"}
        >
          <AccordionButton>
            <Flex
              textAlign="left"
              alignItems={"center"}
              gap={"4"}
              width={"full"}
            >
              <h3 className="text-4xl font-black">01</h3>
              <Flex direction={"column"}>
                <p className="text-[.8rem]">next bus at</p>
                <p className="text-2xl font-bold -mt-2">
                  {convertTimeTo12HourFormat(showUpcomingBusTime())}
                </p>
              </Flex>
            </Flex>
            <AccordionIcon />
          </AccordionButton>

          {/* <Timings
            busNumber={1}
            busStopName={"upeibc"}
            direction={"toDowntown"}
          /> */}
          <AccordionPanel pb={4}>
            <div className="timings">{timeBox()}</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Link
        href="https://forms.gle/tUBBx41cgNmxdqCd9"
        isExternal
        className="underline fixed bottom-4 right-4 -z-10 bg-slate-600 py-1 px-2 rounded-md text-white"
      >
        T32 Feedback/Collaboration <ExternalLinkIcon mx="2px" />
      </Link>
    </main>
  );
}
