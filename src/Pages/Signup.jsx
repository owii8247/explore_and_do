import { Box, Button, Flex, FormControl, FormLabel, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLock, AiOutlineMail, AiOutlineMobile } from "react-icons/ai"
import { BiCurrentLocation } from "react-icons/bi"

import signup from "../assets/signup.PNG"

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("");
    const navigate = useNavigate()
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        const user = {
            email,
            password,
            mobile,
            address
          };
          localStorage.setItem('user', JSON.stringify(user));
          setEmail('');
          setPassword('')
          setMobile("")
          setAddress("")
          alert("Sign Up Successfull")
          navigate("/")
    };

   
  return (

    <>
            <Flex flexWrap="wrap" justifyContent="center">
                <Box p={20} bg={"white"} width={{ base: "100%", sm: "45%", md: "40%" }}>
                    <form onSubmit={handleSubmit}>
                    <FormControl >
                    <Text fontSize='xl' fontWeight={"bold"}>Create your account</Text>
                       
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
                        <br />
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
                                <br /><br />
                        <Button type='submit' w={"full"} textColor={"white"} background= {"#024e82"} _hover={{textColor:"white" ,background: "#024e82"}}>Signup Now</Button>
                        <br /><br />
                        <Flex alignItems="center">
                            <Box flex="1" borderBottom="1px solid" borderColor="gray.400" mr="4" />
                            <Text fontWeight="medium" textTransform="uppercase" textColor={"gray"}>
                                OR
                            </Text>
                            <Box flex="1" borderBottom="1px solid" borderColor="gray.400" ml="4" />

                        </Flex>
                        <br />
                        <Link to="/">
                        <Button type="button" w={"full"} textColor={"#024e82"}>
                            Login now
                        </Button></Link>
                    </FormControl>
                    </form>
                </Box>
                <Box  p={10} width={{ base: "100%", sm: "45%", md: "55%" }}>
                <Image p={10} src={signup} />
                    
                </Box>

            </Flex>
        </>
  )
}

export default Signup