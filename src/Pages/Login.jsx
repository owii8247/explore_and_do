import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLock, AiOutlineMail, AiOutlineMobile } from "react-icons/ai"
import { BiCurrentLocation } from "react-icons/bi"
import login from "../assets/login.PNG"
import signup from "../assets/signup.PNG"


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("");
    const [isLoginMode, setIsLoginMode] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    const handleSwitchMode = () => {
        setIsLoginMode(!isLoginMode);
    };

    return (
        <>
            <Flex>
                <Box w={"40%"} p={20} bg={"white"}>
                    <FormControl onSubmit={handleSubmit}>
                        {isLoginMode ? (<><Text fontSize='xl' fontWeight={"bold"}>Login into your account</Text></>) : (<><Text fontSize='xl' fontWeight={"bold"}>Create your account</Text></>)}
                        <br /><br />
                        <FormLabel>Email Address</FormLabel>
                        <InputGroup>
                            <Input
                                type="email"
                                id="email"
                                placeholder="alex@email.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required

                            />
                            <InputRightElement style={{ background: "#024e82" }}
                                pointerEvents="none"
                                children={<AiOutlineMail color="white" />}
                            />
                        </InputGroup>
                        <br />
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input
                                type="password"
                                id="password"
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                            <InputRightElement style={{ background: "#024e82" }}
                                pointerEvents="none"
                                children={<AiOutlineLock color="white" />}
                            />
                        </InputGroup>
                        {isLoginMode ? (<><FormHelperText textAlign={"end"} textDecoration={"underline"} textColor={"#024e82"} cursor={"pointer"}>Forgot Password?</FormHelperText></>) : <></>}

                        <br />
                        {isLoginMode ? null : (
                            <>

                                <FormLabel>Mobile Number</FormLabel>
                                <InputGroup>
                                    <Input
                                        type="number"
                                        id="number"
                                        placeholder="123-456-7890"
                                        value={mobile}
                                        onChange={(event) => setMobile(event.target.value)}
                                        required
                                    />
                                    <InputRightElement style={{ background: "#024e82" }}
                                        pointerEvents="none"
                                        children={<AiOutlineMobile color="white" />}
                                    />
                                </InputGroup>
                                <br />
                                <FormLabel>Shipping Address</FormLabel>
                                <InputGroup>
                                    <Input
                                        type="text"
                                        id="address"
                                        placeholder="Enter your Address"
                                        value={address}
                                        onChange={(event) => setAddress(event.target.value)}
                                        required
                                    />
                                    <InputRightElement style={{ background: "#024e82" }}
                                        pointerEvents="none"
                                        children={<BiCurrentLocation color="white" />}
                                    />
                                </InputGroup>
                                <br />
                            </>
                        )}
                        <Button type="submit" w={"full"} background={"#024e82"} _hover={{ background: "#024e82" }} onClick={handleSwitchMode}>{isLoginMode ? <><Link to="/home"><Button w={"full"} background={"#024e82"} textColor={"white"} _hover={{ background: "#024e82" }}>Login Now</Button></Link></> : <Text textColor={"white"}>Signup Now</Text>}</Button>
                        <br /><br />

                        <Button type="button" w={"full"} textColor={"#024e82"} onClick={handleSwitchMode}>
                            {isLoginMode ? <Text >Signup Now</Text> : 'Login Now'}
                        </Button>
                    </FormControl>
                </Box>
                <Box w={"60%"} p={10}>
                    {isLoginMode ? <>
                        <Text fontSize='3xl' fontWeight={"bold"} mb={10} >Welcome Back!</Text>
                        <Image src={login} /></> : <><Image p={10} src={signup} /></>}
                </Box>

            </Flex>
        </>
    );
}

export default Login;
