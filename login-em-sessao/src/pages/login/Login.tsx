//Página de Login
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import FormularioLogin from "./components/FormLogin";



export default function Login(){
    return (
        <Grid
            h="100vh"
            w={{ base: "100%", md: "100vw" }}
            flexDir="row"
            templateRows="repeat(3, 1fr)"
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={4}
            bg={{ base: "#4169E1", md: "white" }}
        >
            <GridItem rowSpan={3} colSpan={2} display={{ base: "none", md: "block" }}>
                <Flex w="100%" h="100%" bg="#0f3b89" align="center">
                    <Image
                        bg="#0f3b89"
                        h={{ md: "100%", lg: "100%" }}
                        w="100%"
                        src="img/Login/FotoFalkis.webp"
                    />
                </Flex>
            </GridItem>

            <GridItem
                display="flex"
                flexDir="column"
                rowSpan={3}
                colSpan={1}
                justifyContent="center"
                alignContent="center"
                alignItems="center"
            >
                <Flex
                justifyContent="center"
                alignItems="center"
                w={{ base: "100%", md: "15vw" }}
                bg={{ base: "none", md: "white" }}
                borderRadius="15"
                flexDir="column"
                mb={{ lg: "0", md: "24px" }}
                >
                    <Image
                        p="2"
                        w={{ base: "45%", sm: "32%", md: "65%" }}
                        mb={{ base: "5%", md: "10%" }}
                        src="/img/Falcao.png"
                        display={{ base: "block", md: "none" }}
                    />
                    <Image
                        p="2"
                        w={{ base: "45%", md: "100%", lg: "65%" }}
                        mb={{ base: "5%", md: "10%" }}
                        src="/img/Falcao.png"
                        display={{ base: "none", md: "block" }}
                    />
                    <Box
                        w={{ base: "240px", md: "200px", lg: "100%" }}
                        border={{ base: "2px solid #000000", md: "2px solid #c0c0c0" }}
                        mb={{ base: "20px", md: "0" }}
                    />
                </Flex>
                <FormularioLogin />
            </GridItem>
        </Grid>
    );
}