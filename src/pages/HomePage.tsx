import { Box, Center, Heading, Text } from "@chakra-ui/react";
import HomeHero from "../components/home/HomeHero";
import bgHeroBottom from "../assets/images/herobottom.png";

import DeviceFrame from "../components/devices/DeviceFrame";
import CustomPulse from "../components/custom/CustomPulse";

import { Slide } from "react-awesome-reveal";

const HomePage = () => {
  const heroBottomUrl = `url(${bgHeroBottom})`;

  return (
    <Box>
      <HomeHero />
      <Box id="hero-bottom" position="relative" zIndex="1">
        {/* <Parallax bgImage={bgBottomHero} bgImageAlt="the cat" strength={600}> */}
        <Box
          py="32"
          backgroundImage={heroBottomUrl}
          backgroundSize="cover"
          backgroundAttachment="fixed"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
        >
          <Text
            maxW="1050px"
            mx="auto"
            fontSize="4xl"
            color="white"
            textAlign="center"
            textShadow=""
          >
            Nuestros productos están hechos para que las pymes puedan recibir
            pagos a cualquier hora y en cualquier lugar, a través de redes
            sociales, WhatsApp, correo electrónico, página web y más
          </Text>
        </Box>
        {/* </Parallax> */}
      </Box>
      <Box height="500px" py="16" mb="13rem">
        <Box maxW="1200px" mx="auto">
          <Heading size="3xl" fontWeight="regular">
            Nuestros{" "}
            <Text as="span" color="orange.500">
              productos
            </Text>
          </Heading>

          <Center mt="32">
            <Box display="inline-block" position="relative">
              <Slide triggerOnce>
                <Box zIndex="1">
                  <CustomPulse
                    top="-3"
                    right="-2"
                    zIndex="40"
                    position="absolute"
                    sizing={30}
                  >
                    3
                  </CustomPulse>

                  <DeviceFrame
                    device="MacBook Pro"
                    color="black"
                    size={2}
                  ></DeviceFrame>
                </Box>
              </Slide>

              <Slide triggerOnce>
                <Box position="absolute" bottom="0" right="-80px" zIndex="20">
                  <CustomPulse
                    top="-3"
                    right="-2"
                    zIndex="40"
                    position="absolute"
                    sizing={30}
                  >
                    2
                  </CustomPulse>
                  <DeviceFrame device="iPad Mini" color="black" size={4} />
                </Box>
              </Slide>

              <Slide triggerOnce>
                <Box position="absolute" bottom="0" right="-120px" zIndex="30">
                  <CustomPulse
                    top="-3"
                    right="-2"
                    zIndex="40"
                    position="absolute"
                    sizing={30}
                  >
                    1
                  </CustomPulse>

                  <DeviceFrame device="iPhone X" color="gold" size={5.5}>
                    <Text>Hola!!!</Text>
                  </DeviceFrame>
                </Box>
              </Slide>
            </Box>
          </Center>
        </Box>

        <Box height="1000px"></Box>
      </Box>
    </Box>
  );
};

export default HomePage;
