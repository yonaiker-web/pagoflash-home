import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { FC, useRef, useState } from "react";

import background from "../../assets/images/hero.jpg";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const HomeHero: FC = () => {
  const backgroundImage = `url(${background})`;

  const ref = useRef<HTMLElement>();
  const [translateY, setTranslateY] = useState(0);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (ref.current && ref.current.offsetHeight >= Math.abs(currPos.y)) {
        setTranslateY(Math.abs(currPos.y) * 0.75);
      } else {
        setTranslateY(0);
      }
    },
    undefined,
    { element: ref as any }
  );

  const onArrowClick = () => {
    const element = document.querySelector("#hero-bottom");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <Flex
      w="full"
      h="100vh"
      backgroundImage={backgroundImage}
      backgroundSize="cover"
      backgroundPosition="center center"
      position="relative"
      ref={ref as any}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.800, transparent)"}
      >
        <Stack
          maxW={"2xl"}
          align={"flex-start"}
          spacing={6}
          transform={`translateY(${translateY}px)`}
        >
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Creamos soluciones de pago absurdamente sencillas que harán crecer
            tu negocio
          </Text>
          <Stack direction={"row"}>
            <Button
              bg="white"
              rounded="sm"
              color="black"
              size="lg"
              _hover={{ bg: "orange.500" }}
            >
              Agenda una asesoría
            </Button>
          </Stack>
        </Stack>
      </VStack>

      <Box cursor="pointer" onClick={onArrowClick}>
        <ChevronDownIcon
          position="absolute"
          bottom="8"
          mx="auto"
          left="0"
          right="0"
          color="white"
          fontSize="6xl"
          animation="fade-move-down 2s linear infinite"
        />
      </Box>
    </Flex>
  );
};

export default HomeHero;
