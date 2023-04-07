import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Button,
    Heading,
    Text,
    Collapse,
    useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { BsBagDash } from "react-icons/bs"
import { FiUser } from "react-icons/fi"

const Links = ["HOME", "ABOUT", "CONTACT US"];

const NavLink = ({ children, ...rest }) => (
    <Text
        px={2}
        py={1}
        rounded={"md"}
        fontWeight="bold"
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("", "gray.700"),
        }}
        {...rest}
    >
        {children}
    </Text>
);

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen: isMobileNavOpen, onToggle } = useDisclosure();

    return (
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <IconButton
                    size={"md"}
                    icon={isMobileNavOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={"Open Menu"}
                    display={{ md: !isMobileNavOpen ? "none" : "inherit" }}
                    onClick={onToggle}
                    colorScheme="brand"
                    variant="ghost"
                />
                
                <Heading size="xl" ml="4" fontWeight={"md"} >
                ECloths
            </Heading>
                <HStack spacing={8} alignItems={"center"} >
                    <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }} fontSize={"xs"}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>

                    <Button colorScheme="brand" variant="ghost" onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>

                    <Button variant="outline"> <Text fontSize={"xs"}>ORDER HISTORY</Text></Button>
                    <Button> <FiUser /></Button>
                    <Button><BsBagDash /> <Text fontSize={"xs"}>10</Text></Button>
                    <Button> <HamburgerIcon /></Button>
                    <Link to="/"><Button colorScheme="brand" variant="outline">
                        <Text fontSize={"xs"}>SIGN OUT</Text>
                    </Button></Link>
                </HStack>
            </Flex>

            <Collapse in={isMobileNavOpen} animateOpacity>
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                        <Button variant="outline"> <Text fontSize={"xs"}>ORDER HISTORY</Text></Button>
                        <Button> <FiUser /></Button>
                        <Button><BsBagDash /> <Text fontSize={"xs"}>10</Text></Button>
                        <Link to="/"><Button colorScheme="brand" variant="outline">
                            <Text fontSize={"xs"}>SIGN OUT</Text>
                        </Button></Link>
                    </Stack>

                </Box>
            </Collapse>
        </Box>
    );
}

