import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Cadastro() {
    return(
        <>
            <Flex
                className="cadastroContainer"
                paddingX="4%"
                bg="#0f3b89"
                bgImage="url('/img/Falcao.png')"
                bgRepeat="no-repeat"
                bgSize="contain"
                w="100%"
                minHeight="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Flex
                    bg="#ffffff"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5%"
                >
                    <Heading>Cadastro</Heading>
                    <Text>Estamos passando por pequenos testes, por favor aguarde</Text>
                </Flex>
            </Flex>
            
        </>
    )
}