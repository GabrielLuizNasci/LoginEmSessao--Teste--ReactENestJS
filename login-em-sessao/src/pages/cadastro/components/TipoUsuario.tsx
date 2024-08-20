import { Button, Flex, Heading } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TipoUsuario(){

    return(
        <>
            <Flex
                direction="column"
                align="center"
            >
                <Heading as="h2" size="lg" mb={6}>
                Quem é você?
                </Heading> 
                <Flex 
                    rowGap="10%"
                    direction="row" 
                    align="center" 
                    justify="center" 
                    h="100vh"
                >
                    <Button
                        flexDirection="column"
                        onClick={() => handleTipoUsuarioClick('usuario')}
                    >
                        <Icon icon="bxs:user" width="5em" height="5em"  style={{color: "black"}} />
                        Usuário Externo
                    </Button>
                    <Button
                        flexDirection="column" 
                        onClick={() => handleTipoUsuarioClick('estagiario')}
                    >
                        <Icon icon="mdi:user-badge-outline" width="1.5em" height="1.5em"  style={{color: "black"}} />
                        Estagiário FV
                    </Button>
                    <Button
                        flexDirection="column"
                        onClick={() => handleTipoUsuarioClick('mentor')}
                    >
                        <Icon icon="hugeicons:mentoring" width="1.5em" height="1.5em" style={{color: "black"}} />
                        Mentor FV
                    </Button>
                    <Button 
                        flexDirection="column"
                        onClick={() => handleTipoUsuarioClick('administrativo')}
                    >
                        <Icon icon="eos-icons:admin-outlined" width="1.5em" height="1.5em" style={{color: "black"}} />
                        Administrador FV
                    </Button>
                </Flex>
            </Flex> 
        </>
    );
}