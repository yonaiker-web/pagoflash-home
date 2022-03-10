import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  Image,
  Button,
  HStack,
  Grid,
  Flex,
  chakra,
} from "@chakra-ui/react";
import HomeHero from "../components/home/HomeHero";
import bgHeroBottom from "../assets/images/herobottom.png";

import DeviceFrame from "../components/devices/DeviceFrame";
import CustomPulse from "../components/custom/CustomPulse";
import { Slide } from "react-awesome-reveal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import tabletBG from "../assets/images/Tablet.jpg";

import slideZuliatect from "../assets/images/slider-zuliatect.png";
import slideCarbone from "../assets/images/slider-carbone.jpg";
import slideLaCasaDelArbol from "../assets/images/slider-lacasadelarbol.png";

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

interface Step {
  image: string;
  text: string;
}

interface Slide {
  image?: string;
  text: string;
  name: string;
  position: string;
}

const ChakraSwiper = chakra(Swiper);
const ChakraSwiperSlider = chakra(Swiper);

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

  const steps: Step[] = [
    { text: "Crear tu cuenta", image: "" },
    {
      text: "Escoge la solución de pago que se adapta a tu negocio (PagoClick, PagoMail, PagoShop)",
      image: "",
    },
    {
      text: "Úsalo por el canal que desees (redes sociales, chat, correo electrónico, página web, etc.)",
      image: "",
    },
  ];

  const slides: Slide[] = [
    {
      text: "Trabajar con PagoFlash ha sido muy satisfactorio, hemos realizado varias integraciones con su plataforma y lo que más nos ha gustado es su atención y apoyo en cada requerimiento, poseen un plataforma muy estable y moderna, altamente recomendados.",
      image: slideZuliatect,
      name: "José González",
      position: "CEO Zuliatec",
    },
    {
      text: "PagoFlash nos ha permitido brindar a nuestros clientes opciones de pago ajustadas a sus necesidades para nuestro principal producto: los cursos de capacitación online para el teletrabajo. Cuando hemos tenido alguna inquietud o duda nos comunicamos inmediatamente con Soporte y recibimos una respuesta o solución oportuna a nuestro requerimiento.",
      name: "Dessire Izaguirre",
      position: "Fundadora de Profesional Virtual",
    },
    {
      text: "Estamos complacidos en contar con PagoFlash, servicio de pago mediante el uso de tarjetas de crédito ideal para los personas naturales y jurídicas que quieren desarrollar sus ventas. Además cuenta con un gran equipo de atención que te ayudan en el proceso a resolver cualquier detalle técnico ¡Gracias a todo el equipo!",
      name: "José Moreno",
      position: "Distribuidora Sweet Cristal",
    },
    {
      text: "Para La casa del árbol Café, PagoFlash ha sido una oportunidad para solventar los inconvenientes de pagos que han surgido por la escasez de puntos de venta en el país, la plataforma se ha convertido en un aliado seguro y eficaz. Nuestros clientes siempre se ven interesados en conocer cómo funciona y al igual que nosotros se han sentido confiados al usarla, por esa razón siempre los recomendamos.",
      image: slideLaCasaDelArbol,
      name: "Andrea Sánchez",
      position: "Presidente La Casa del Árbol",
    },
    {
      text: "He logrado aumentar mis ventas gracias a PagoFlash, es súper rápida, eficaz y súper puntual con los pagos. Agradecidos enormemente por brindarnos esta facilidad.",
      name: "Laura Hurtado",
      position: "Atilios Burger",
    },
    {
      text: "Sin duda una solución práctica y sencilla para nosotros y nuestros clientes. De fácil implantación y que verdaderamente suma valor a nuestra experiencia en línea.",
      image: slideCarbone,
      name: "Ricardo Arispe",
      position: "Carbone Espresso Café",
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
          <Box maxW="1200px" mx="auto">
            <Text
              mb="16"
              fontSize="5xl"
              fontWeight="medium"
              color="white"
              textAlign="start"
              textShadow=""
            >
              Es tan fácil como...
            </Text>
            <Grid gridTemplateColumns="repeat(3, 1fr)">
              {steps.map((step, index) => (
                <Flex flexDirection="column" alignItems="center">
                  <Slide direction="up" delay={(index - 1) * 100} triggerOnce>
                    <Box mb="8">
                      <DeviceFrame
                        device="iPhone X"
                        color="black"
                        size={1.8}
                      ></DeviceFrame>
                    </Box>
                  </Slide>

                  <Text
                    maxW="300px"
                    mx="auto"
                    color="white"
                    fontSize="2xl"
                    fontWeight="medium"
                    textAlign="center"
                  >
                    {step.text}
                  </Text>
                </Flex>
              ))}
            </Grid>

            <Text
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

        <Box py="12">
          <ChakraSwiper
            navigation={true}
            modules={[Navigation]}
            display="flex"
            alignItems="stretch"
            justifyContent="center"
            maxWidth="1200px"
            mx="auto"
            autoplay={{
              delay: 5000,
            }}
            loop={true}
          >
            {slides.map((slide) => (
              <SwiperSlide style={{ height: "unset" }}>
                <Box
                  px="200px"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  {slide.image && <Image src={slide.image} mb="12" />}
                  <Text
                    textAlign="center"
                    fontSize="lg"
                    color="blackAlpha.800"
                    mb="4"
                  >
                    {slide.text}
                  </Text>
                  <Text fontSize="xl" fontWeight="medium">
                    {slide.name}
                  </Text>
                  <Text color="blackAlpha.700">{slide.position}</Text>
                </Box>
              </SwiperSlide>
            ))}
          </ChakraSwiper>
        </Box>

        <Center
          height="700px"
          backgroundImage={`url(${tabletBG})`}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Box textAlign="center">
            <Text mb="8" fontSize="4xl" fontWeight="medium">
              ¿Listo para empezar y no sabes cómo?
            </Text>
            <Button colorScheme="orange" size="lg" borderRadius="2px">
              Agenda una asesoría
            </Button>
          </Box>
        </Center>

        <Box bg="#1a1a1a" color="white" py="4">
          <Flex maxW="1200px" mx="auto" fontSize="sm">
            <Box>
              <Text>PagoFlash International C.A. RIF J - 40256916 - 5</Text>
              <Text>
                Este sitio está autorizado por Visa para realizar transacciones
                electrónicas.
              </Text>
            </Box>

            <HStack alignItems="flex-start" ml="auto" spacing="8">
              <Text>Acerca de PagoFlash </Text>
              <Text>Términos y condiciones</Text>
              <Text>Soporte</Text>
              <Text>Contáctanos</Text>
              <Text>Blog</Text>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
