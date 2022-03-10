import { Box, Center, Heading, Text } from "@chakra-ui/react";
import HomeHero from "../components/home/HomeHero";
import bgHeroBottom from "../assets/images/herobottom.png";

import DeviceFrame from "../components/devices/DeviceFrame";
import CustomPulse from "../components/custom/CustomPulse";

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
      <Box height="500px" py="16">
        <Box maxW="1200px" mx="auto">
          <Heading size="3xl" fontWeight="regular">
            Nuestros{" "}
            <Text as="span" color="orange.500">
              productos
            </Text>
          </Heading>

          <Center position="relative">
            <Box>
              <DeviceFrame
                device="MacBook Pro"
                color="black"
                width={200}
                height={150}
              ></DeviceFrame>
            </Box>

            <Box position="absolute" bottom="-15px" right="0" mb="-15rem">
              <DeviceFrame device="iPad Mini" color="black" zoom={0.25} />
            </Box>

            <Box position="absolute" bottom="-8px" right="0" mb="-15rem">
              <DeviceFrame device="iPhone X" color="gold" zoom={0.2}>
                <Text>Hola!!!</Text>
              </DeviceFrame>
            </Box>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
