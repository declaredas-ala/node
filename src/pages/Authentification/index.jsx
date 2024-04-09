import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Flex, Box, Image } from "@chakra-ui/react";

export default function AuthentificationPage() {
  return (
    <>
      <Helmet>
        <title>Ala's Application4</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex bg="white.A700" w="100%">
        <Flex
          w={{ md: "88%", base: "100%" }}
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          flexDirection={{ md: "row", base: "column" }}
          p={{ md: "", base: "20px" }}
        >
          <Image src="images/img_business_person.png" h="1080px" w={{ md: "57%", base: "100%" }} />
          <Flex w={{ md: "30%", base: "100%" }} flexDirection="column" alignItems="center">
            <Image src="images/img_group_1000000883.svg" h="147px" w="31%" />
            <Image src="images/img_group.svg" h="32px" mt="18px" w="54%" />
            <Text size="md" mt="39px" fontSize="28px">
              Connectez vous!
            </Text>
            <Flex
              mt="67px"
              gap={{ base: "26px", sm: "53px" }}
              alignSelf="stretch"
              flexDirection="column"
              alignItems="center"
            >
              <Flex alignSelf="stretch" flexDirection="column" alignItems="start">
                <Text>Adresse e-mail:</Text>
                <Box h="1px" mt="54px" bg="cyan.900_7f" alignSelf="stretch" />
                <Text mt="36px">Mot de passe:</Text>
                <Box h="1px" mt="52px" bg="cyan.900_7f" alignSelf="stretch" />
              </Flex>
              <Button minW="190px" px={{ base: "20px", sm: "" }}>
                Se connecter
              </Button>
              <Flex alignSelf="stretch" justifyContent="space-between" alignItems="center" gap="20px">
                <Text size="xs" textDecoration="underline">
                  Vous n’avez pas un compte?
                </Text>
                <Button variant="fill" colorScheme="indigo_300" minW="206px" px={{ base: "20px", sm: "" }}>
                  Créer un compte
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
