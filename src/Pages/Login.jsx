import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai"

import login from "../assets/login.PNG"



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));
        if (user.email === email && user.password === password) {
            alert("Loged In Successfully")
            navigate("/home")
        } else {
            alert('Invalid email or password.');
        }
    };

    

    return (
        <>
            <Flex flexWrap="wrap" justifyContent="center">
                <Box p={20} bg={"white"} width={{ base: "100%", sm: "45%", md: "40%" }}>
                    <form onSubmit={handleSubmit}>
                        <FormControl >
                            <Text fontSize='xl' fontWeight={"bold"}>Login into your account</Text>

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
                            <FormHelperText textAlign={"end"} textDecoration={"underline"} textColor={"#024e82"} cursor={"pointer"}>Forgot Password?</FormHelperText>

                            <br />
                            <Button type='submit' w={"full"} textColor={"white"} background= {"#024e82"} _hover={{textColor:"white" ,background: "#024e82"}}>Login Now</Button>


                            <br /><br />
                            <Flex alignItems="center">
                                <Box flex="1" borderBottom="1px solid" borderColor="gray.400" mr="4" />
                                <Text fontWeight="medium" textTransform="uppercase" textColor={"gray"}>
                                    OR
                                </Text>
                                <Box flex="1" borderBottom="1px solid" borderColor="gray.400" ml="4" />

                            </Flex>
                            <br />
                            <Link to="/signup">
                                <Button type="button" w={"full"} textColor={"#024e82"} >
                                    Signup Now
                                </Button></Link>
                        </FormControl>
                    </form>
                </Box>
                <Box p={10} width={{ base: "100%", sm: "45%", md: "55%" }}>
                    <Text fontSize='3xl' fontWeight={"bold"} mb={10} >Welcome Back!</Text>
                    <Image src={login} />

                </Box>

            </Flex>
        </>
    );
}

export default Login;
