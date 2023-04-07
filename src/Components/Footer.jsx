import React from 'react'
import { Flex, Box, Text, List, ListItem, Input, InputGroup, InputRightElement, Divider } from "@chakra-ui/react";
import {AiOutlineRight} from "react-icons/ai"
import {RiVisaFill} from "react-icons/ri"
import {FaCcMastercard,FaCcPaypal,FaCcVisa} from "react-icons/fa"
const Footer = () => {
    return (
        <Flex
            as="footer"
            py="8"
            justifyContent="space-around"
            alignItems="flex-start"
            flexWrap="wrap"
            textColor={"gray"}
        >
            <Box maxW="lg" mr="8">
                <Text fontSize="sm" fontWeight="bold" mb="6">
                    COMPANY INFO
                </Text>
                <List spacing="1" textAlign={"start"} fontWeight="semibold">
                    <ListItem>About Us</ListItem>
                    <ListItem>Latest Posts</ListItem>
                    <ListItem>Contact Us</ListItem>
                    <ListItem>Shops</ListItem>
                </List>
            </Box>
            <Box maxW="lg" mr="8">
                <Text fontSize="sm" fontWeight="bold" mb="6">
                HELP LINKS
                </Text>
                <List spacing="1" textAlign={"start"} fontWeight="semibold">
                    <ListItem>Tracking </ListItem>
                    <ListItem>Order Status</ListItem>
                    <ListItem>Delivery</ListItem>
                    <ListItem>Shipping Info</ListItem>
                    <ListItem>FAQ</ListItem>
                </List>
            </Box>
            <Box maxW="lg" mr="8">
                <Text fontSize="sm" fontWeight="bold" mb="6">
                    USEFUL LINKS
                </Text>
                <List spacing="1" textAlign={"start"} fontWeight="semibold">
                    <ListItem>Special Offers</ListItem>
                    <ListItem>Gift Cards</ListItem>
                    <ListItem>Advertising</ListItem>
                    <ListItem>Terms of Use</ListItem>

                </List>
            </Box>
            <Box maxW="lg">
                <Text fontSize="sm" fontWeight="bold" mb="6">
                    GET IN THE KNOW
                </Text>
                <InputGroup >
                    <Input
                        placeholder="Enter email" 
                        borderBottom={"1px solid black"}
                        variant='flushed'
                        />
                    <InputRightElement
                        pointerEvents="none"
                        children={<AiOutlineRight color="gray" />}
                    />
                </InputGroup>
            </Box>
            <Divider style={{marginTop:"5em"}}/>
            <Flex justifyContent={"space-around"} alignItems="flex-start"
            flexWrap="wrap" py="4" gap={800}>
                <Box textColor={"gray"} textAlign={"start"}>
                    <Text>© 2022 Explore Clothing</Text>
                    <Text>Privacy Policy Term & Conditions</Text>
                </Box>
                <Box>
                    <Flex gap={5} py="4">
                        <RiVisaFill style={{ fontSize: "2em"}}/>
                        <FaCcMastercard style={{ fontSize: "2em"}}/>
                        <FaCcPaypal style={{ fontSize: "2em"}}/>
                        <FaCcVisa style={{ fontSize: "2em"}}/>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Footer





