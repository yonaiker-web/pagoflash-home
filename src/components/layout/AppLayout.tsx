import { Flex } from "@chakra-ui/react";

import { ChildrenJSX } from "../../interfaces/childrenJsx";
import { Navbar } from "../navbar";

const AppLayout = ({ children }: ChildrenJSX) => {
  return (
    <Flex flexDirection="column" height="100vh">
      <Navbar />

      <Flex flex="1" direction="column">
        {children}
      </Flex>
    </Flex>
  );
};

export default AppLayout;
