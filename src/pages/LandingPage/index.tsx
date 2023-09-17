import React from "react";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Box textAlign="center" p={8}>
      {/* Header */}
      <Heading as="h1" size="2xl" mb={4}>
        CashFlow Tracker
      </Heading>

      {/* Description */}
      <Text fontSize="lg" mb={8}>
        Manage your finances with ease using CashFlow Tracker. Our free, secure,
        and user-friendly app empowers you to track income, expenses, and
        budgets effortlessly.
        <Text pt={2}>Start your journey to financial freedom today!</Text>
      </Text>

      {/* Get Started Button */}
      <Center>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </Center>
    </Box>
  );
};

export default LandingPage;
