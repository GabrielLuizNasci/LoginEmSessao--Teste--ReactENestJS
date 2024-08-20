import { Flex } from "@chakra-ui/react";
import TipoUsuario from "./components/TipoUsuario";

export default function Cadastro() {
    const [tipoUsuario, setTipoUsuario] = useState('');
    const navigate = useNavigate();

    const handleTipoUsuarioSelect = (tipo: string) => {
        setTipoUsuario(tipo);
        navigate(`/cadastro/${tipo}`);
    };

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
                    <TipoUsuario />
                </Flex>
            </Flex>
            
        </>
    )
}