import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import { routes } from "../../routes/routes";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useRef, useState } from "react";

interface INavLink {
  to: string;
  text: string;
}

const links: INavLink[] = [
  { to: routes.home, text: "Inicio" },
  { to: "/p", text: "Productos" },
  { to: "/p", text: "Soporte" },
  { to: "/p", text: "Blog" },
  { to: "/p", text: "Contacto" },
  { to: "/p", text: "Iniciar Sesión" },
];

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);

  const [bg, setBg] = useState("transparent");
  //const { user, signOut } = useAuth();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(currPos.y, window.screen.height);

      if (currPos.y >= window.screen.height) {
        setBg("black");
      } else {
        setBg("transparent");
      }
    },
    undefined,
    { useWindow: true }
  );

  return (
    <Box
      bg={bg}
      px={4}
      position="fixed"
      left="0"
      zIndex="50"
      color="white"
      width="full"
      ref={ref}
      transition="background 1s"
    >
      <Flex
        alignItems={"center"}
        justifyContent={"flex-end"}
        maxW="1200px"
        mx="auto"
        py="4"
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        {/* <HStack spacing={8} alignItems={"center"}>
          <Box>Logo</Box>
        </HStack> */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          whiteSpace="nowrap"
          alignItems={"center"}
          fontWeight="medium"
          fontSize="lg"
        >
          {links.map(({ to, text }, i) => (
            <NavLink to={to} key={i}>
              {text}
            </NavLink>
          ))}

          <Button
            display={{ base: "none", md: "inline-flex" }}
            color={"white"}
            bg={"orange.500"}
            rounded="2px"
            _hover={{
              bg: "orange.300",
            }}
          >
            Registrate
          </Button>
        </Stack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {links.map(({ to, text }, i) => (
              <NavLink to={to} key={i}>
                {text}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
