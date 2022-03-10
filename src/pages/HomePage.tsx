import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import HomeHero from "../components/home/HomeHero";
import bgHeroBottom from "../assets/images/herobottom.png";

import DeviceFrame from "../components/devices/DeviceFrame";
import CustomPulse from "../components/custom/CustomPulse";
import { Slide } from "react-awesome-reveal";

const pagoClick = require("../assets/images/img-pagoclick.png");
const pagoMail = require("../assets/images/img-pagomail.png");
const pagoShop = require("../assets/images/img-pagoshop.png");

interface HowToUseLink {
  text: string;
  link?: string;
}

interface HowToUseItem {
  title: string;
  links: HowToUseLink[];
  image: string;
  description: string;
}

const HomePage = () => {
  const heroBottomUrl = `url(${bgHeroBottom})`;

  const howToUseItems: HowToUseItem[] = [
    {
      image: pagoClick,
      title: "PagoClick",
      links: [
        { text: "¿Como enviar una remesa?", link: "www.google.com" },
        { text: "¿Como solicitar una remesa?", link: "www.google.com" },
        { text: "¿Como agregar un método de pago?s", link: "www.google.com" },
      ],
      description:
        "Recibe pagos en redes sociales, WhatsApp, bazares y más. ¡Sencillo!",
    },
    {
      image: pagoMail,
      title: "PagoMail",
      links: [{ text: "Línea de atención al usuario" }],
      description: "Envía solicitudes de cobro por correo electrónico.",
    },
    {
      image: pagoShop,
      title: "PagoShop",
      links: [
        { text: "¿Como enviar una remesa?", link: "www.google.com" },
        { text: "¿Como solicitar una remesa?", link: "www.google.com" },
        { text: "¿Como agregar un método de pago?s", link: "www.google.com" },
      ],
      description: "Botón de pago para tu página web.",
    },
  ];

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

          <Box
            textAlign="center"
            my="16"
            py="16"
            bg="brand.500"
            color="black.500"
          >
            <Slide duration={1000} direction="up" triggerOnce>
              <Stack
                direction={{ base: "column", lg: "row" }}
                justifyContent="center"
                spacing={{ base: "12", lg: "48" }}
                alignItems={{ base: "center", lg: "flex-start" }}
              >
                {howToUseItems.map(
                  ({ links, image, title, description }, i) => (
                    <Box key={i}>
                      <Center fontSize="6xl" mb="8">
                        <Image src={image}></Image>
                      </Center>
                      <Center flexDirection="column">
                        <Text fontSize="5xl" fontWeight="regular" pb={"5"}>
                          {title}
                        </Text>
                        <Text fontSize="2xl" fontWeight="regular">
                          {description}
                        </Text>
                      </Center>
                    </Box>
                  )
                )}
              </Stack>
              <Box alignItems={"center"}>
                <Button
                  marginTop={"5"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"xl"}
                  fontWeight={100}
                  color={"white"}
                  bg={"orange.500"}
                  //href={"#"}
                  _hover={{
                    bg: "orange.300",
                  }}
                >
                  Conócelos
                </Button>
              </Box>
            </Slide>
          </Box>
        </Box>

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
            textAlign="start"
            textShadow=""
          >
            Es tan fácil como...
          </Text>
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

          <Text
            maxW="1050px"
            mx="auto"
            fontSize="4xl"
            color="white"
            textAlign="center"
            textShadow=""
            paddingTop={10}
          >
            Empieza a recibir pagos de forma segura y absurdamente sencilla…
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
