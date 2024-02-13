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
import { timingsUpeiToRoyalty } from "./timetable";

// import Timings from "./components/timings";

export default function Home() {

  const convertTimeTo12HourFormat = (time, showAmPm = false) => {
    // convert time to 12 hour format
    // if hour is 00, convert to 12
    const [hours, minutes] = time?.split(":");
    const amPm = hours >= 12 ? "PM" : "AM";
    return showAmPm
      ? `${hours % 12 || 12}:${minutes} ${amPm}`
      : `${hours % 12 || 12}:${minutes}`;
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

  // const showUpcomingBusTime = () => {
  //   // gets the localtime in 24hr format,
  //   // const currentTime = new Date().toTimeString()?.split(":");
  //   const currentTime = ["07", "04"];
  //   const currentHour = currentTime[0];
  //   const currentMinutes = currentTime[1];
  //   // after last bus, return next day
  //   if(currentTime[0] > 22) {
  //     return `next day`;
  //   }

  //   console.log(`currentTime`, currentTime[0], currentTime[1]);
  //   //  get all timings from the timingsUpeiToRoyalty array, which are equal to current hour and greater than current minutes, if no such time is found, return the bus time for the next hour
  //   const nextBusTime = timingsUpeiToRoyalty.filter((timeStamp) => {
  //     const [busHour, busMinutes] = timeStamp?.split(":");
  //     return (
  //       busHour === currentHour && busMinutes > currentMinutes
  //     );
      
  //   });
  //   console.log(`nextBusTime`, nextBusTime);
  //   return nextBusTime[0];
  //   // return convertTimeTo12HourFormat(nextBusTime);
  // };
  function showUpcomingBusTime( schedule = timingsUpeiToRoyalty) {
    // Parse current time to minutes
    const currentTimestamp = new Date().toTimeString()?.split(":");
    console.log(`currentTimestamp`, currentTimestamp);
    // const currentTime = ["07", "04"];
    // const currentTime = "20:54";
    // const currentTime = `${currentTimestamp[0]}:${currentTimestamp[1]}`;
    // console.log(`currentTime`, currentTime);

    const currentHours = +currentTimestamp[0];
    const currentMinutes = +currentTimestamp[1];
    const currentTotalMinutes = currentHours * 60 + currentMinutes;

    // Convert schedule times to minutes and find the next departure time
    for (const time of schedule) {
      const [hours, minutes] = time.split(":").map(Number);
      const totalMinutes = hours * 60 + minutes;
      if (totalMinutes > currentTotalMinutes) {
        return time; // Return the next departure time
      }
    }

    // If no next departure time is found, return the first time of the next day or an indication that no more departures today.
    return "No more departures today.";
  }

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
                  {convertTimeTo12HourFormat(showUpcomingBusTime(), true)}
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
