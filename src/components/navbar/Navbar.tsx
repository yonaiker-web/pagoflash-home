import { AddIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  HStack,
  Menu,
  MenuButton,
  Button,
  AvatarGroup,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import { Custom } from "../custom";
import { AiOutlineUser } from "react-icons/ai";

interface INavLink {
  to: string;
  text: string;
}

const links: INavLink[] = [
  { to: routes.home, text: "Inicio" },
  { to: routes.home, text: "Productos" },
  { to: routes.home, text: "Soporte" },
  { to: routes.home, text: "Blog" },
  { to: routes.home, text: "Contacto" },
  { to: routes.home, text: "iniciar Sesión" },
];

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //const { user, signOut } = useAuth();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
          </HStack>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            whiteSpace="nowrap"
            alignItems={"center"}
            fontWeight="100"
            fontSize={"xl"}
          >
            {/* <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              //href={"#"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Sign Up
            </Button> */}

            {links.map(({ to, text }, i) => (
              <NavLink to={to} key={i}>
                {text}
              </NavLink>
            ))}

            <Button
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
              Registro
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

      <Box p={4}>Main Content Here</Box>
    </>
  );
};
