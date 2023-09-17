import * as React from "react";
import { ChakraProvider, Box, VStack, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { customTheme } from "./custom-theme";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import LandingPage from "./pages/LandingPage";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <I18nextProvider i18n={i18n}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <LandingPage />
          </VStack>
        </Grid>
      </Box>
    </I18nextProvider>
  </ChakraProvider>
);
