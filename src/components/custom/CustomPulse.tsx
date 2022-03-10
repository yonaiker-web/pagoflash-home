import { Box, BoxProps, Center } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

interface Props extends BoxProps {
  bg?: string;
  sizing?: number;
  spread?: number;
  color?: string;
}

const CustomPulse: FC<PropsWithChildren<Props>> = ({
  bg = "orange.500",
  color = "white",
  sizing = 25,
  spread = 2,
  children,
  ...props
}) => {
  return (
    <Box
      position="relative"
      height={`${sizing}px`}
      width={`${sizing}px`}
      borderRadius="100%"
      {...props}
    >
      <Center
        position="absolute"
        zIndex="1"
        height="100%"
        width="100%"
        bg={bg}
        color={color}
        borderRadius="100%"
      >
        {children}
      </Center>
      <Box
        height={`calc(100% * ${spread})`}
        width={`calc(100% * ${spread})`}
        top={`calc(50% * ${spread - 1} * -1)`}
        left={`calc(50% * ${spread - 1} * -1)`}
        position="absolute"
        bg={bg}
        animation="pulse 2s linear infinite"
        borderRadius="100%"
      ></Box>
    </Box>
  );
};

export default CustomPulse;
