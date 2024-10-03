import React from "react";
import { Box, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="10vh"
      backgroundColor="#DBE2EF"
      padding="3px 3px 3px 3px"
      borderWidth="3px"
    >
      <Text fontFamily="Anton" fontSize="4xl" color="#112D4E">
        findYourPet
      </Text>
    </Box>
  );
};

export default NavBar;
