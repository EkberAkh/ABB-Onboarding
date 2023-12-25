"use client";

import {
  VStack,
  Image,
  Button,
  Box,
  FormControl,
  Text,
  FormLabel,
  Input,
  Checkbox,
  HStack,
  CloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import SignForm from "./(signComponents)/signForm";
import SignFooter from "./(signComponents)/signFooter";
import { Fira_Code } from "next/font/google";

export default function Home() {
  return (
    <VStack padding="24px" width="100%" justifyContent="space-between">
       <CloseButton
        alignSelf="flex-end"
        position="fixed"
        background="#EDF2F7"
        _hover={{ backgroundColor: "gray.200" }}
      />
      <VStack
        margin="60px"
        minWidth="465px"
        gap="14px"
        padding="12px"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Box>
          <Image src="./images/abb-business.png" />
        </Box>

        <VStack alignItems="flex-start" gap="8px">
          <Text fontSize="30px" color="gray.800" fontWeight="600">
            Asan Imza
          </Text>
          <Text color="gray.600" fontSize="14px">
            Qeydiyyatdan keçmək üçün Asan İmza ilə daxil olun.
          </Text>
        </VStack>
        <SignForm />
      </VStack>
      <Box position="fixed" bottom="0" width="100%">
      <SignFooter />
      </Box>
    </VStack>
  );
}
