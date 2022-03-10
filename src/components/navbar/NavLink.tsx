import { Box, BoxProps } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { isSameRoute } from "../../helpers/routes";

interface Props extends BoxProps {
  to?: string;
  showActiveBorder?: boolean;
}

const NavLink: FC<Props> = ({
  children,
  to,
  showActiveBorder = true,
  ...props
}) => {
  const location = useLocation();

  const isActive = to && isSameRoute(to, location.pathname);

  const Wrapper = to ? RouterLink : Fragment;

  const activeStyles = {
    textDecoration: "none",
    borderColor: showActiveBorder ? "white" : "transparent",
  };

  const styles = isActive ? activeStyles : {};

  const wrapperProps: any = to ? { to } : {};

  return (
    <Wrapper {...wrapperProps}>
      <Box
        px={2}
        py={1}
        borderBottomWidth="3px"
        borderBottomColor="transparent"
        _hover={activeStyles}
        {...props}
        {...styles}
      >
        {children}
      </Box>
    </Wrapper>
  );
};

export default NavLink;
