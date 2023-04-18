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
import { Link, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate()

    const handleSignOut = () => {
        //localStorage.removeItem('user');
        alert("User Loged Out Successfully")
        navigate("/signup")
      }

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
                <Link to="/home">
                <Heading size="xl" ml="4" fontWeight={"md"} >
                    ECloths
                </Heading>
                </Link>
                <HStack spacing={8} alignItems={"center"} >
                    <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }} fontSize={"xs"} cursor={"pointer"}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>


                    
                    <Button variant="outline"> <Text fontSize={"xs"}>ORDER HISTORY</Text></Button>
                    <Button> <FiUser /></Button>
                    <Link to="/cart">
                    <Button><BsBagDash /> <Text fontSize={"xs"}>10</Text></Button></Link>
                    <Button colorScheme="brand" variant="ghost" onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Button> <HamburgerIcon /></Button>
                    <Button colorScheme="brand" variant="outline" onClick={handleSignOut}>
                        <Text fontSize={"xs"}>SIGN OUT</Text>
                    </Button>
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
                        <Link to="/cart">
                        <Button><BsBagDash /> <Text fontSize={"xs"}>10</Text></Button></Link>
                        <Button colorScheme="brand" variant="ghost" onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>
                        <Button colorScheme="brand" variant="outline" onClick={handleSignOut}>
                            <Text fontSize={"xs"}>SIGN OUT</Text>
                        </Button>
                    </Stack>

                </Box>
            </Collapse>
        </Box>
    );
}

