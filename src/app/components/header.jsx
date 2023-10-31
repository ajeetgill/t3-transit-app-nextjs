import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Flex
      as={"header"}
      className="logo"
      mx="auto"
      bg="#6DD164"
      marginTop={"-1rem"}
    >
      <Link href="/">
        <Flex
          alignItems={"center"}
          marginTop={"10px"}
          marginLeft={"1.5rem"}
          position={"relative"}
          top={"1.2rem"}
          gap={".3rem"}
        >
          <Image
            src="/logo.png"
            width={"60"}
            height={"60"}
            alt="T3 Transit App Charlottetown"
            priority
          />
          <Heading as="h1" size="lg" fontWeight={"900"} color={"black"}>
            TRANSIT
          </Heading>
        </Flex>
      </Link>
      {/* <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}
    </Flex>
  );
};

export default Header;
