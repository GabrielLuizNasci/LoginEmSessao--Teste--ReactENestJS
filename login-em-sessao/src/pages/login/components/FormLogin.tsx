import { Flex, FormControl, Link, Text } from "@chakra-ui/react";
import { Button, Form, Input } from "antd";
import { Icon } from "@iconify/react";

export default function FormularioLogin() {

    return (
        <>
            <Flex
                boxSize={{ base: "xs", md: "sm" }}
                flexDir="column"
                h={{ base: "auto", md: "48%" }}
                justify="center"
                align="center"
            >
                <FormControl gap="20px" w={{ base: "80%", md: "60%" }}>
                <Form >
                    <Form.Item name="email">
                    <Input type="email" />
                    </Form.Item>

                    <Form.Item name="password">
                    <Input.Password type="password" />
                    </Form.Item>

                    <Flex mt="30px" flexDir="column" justify="center" align="center">
                    <Flex
                        mb="10px"
                        gap="10px"
                        alignItems="center"
                        bg="white"
                        p="1"
                        borderRadius="10"
                    >
                        <Text>É novo?</Text>
                        <Link href="/cadastro">
                        <Button
                            style={{ backgroundColor: "#214cce", color: "black" }}
                        >
                            Cadastre-se!
                        </Button>
                        </Link>
                    </Flex>
                    </Flex>

                    <FormControl mt="10px">
                    <Flex justify='center'>
                        <Button
                        type="primary"
                        htmlType="submit"
                        color="white"
                        style={{
                            height: "30%",
                            margin: "10%",
                            backgroundColor: "#214cce",
                        }}
                        >
                        <Icon icon="material-symbols:check" width="30px" />
                        </Button>
                        <Button
                        type="primary"
                        htmlType="reset"
                        color="white"
                        style={{
                            height: "30%",
                            margin: "10%",
                            backgroundColor: "#ff0202",
                        }}
                        >
                        <Icon icon="iconoir:cancel" width="30px" />
                        </Button>
                    </Flex>
                    </FormControl>
                </Form>
                </FormControl>
            </Flex>
        </>
    );
}