import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaShippingFast, FaFingerprint } from "react-icons/fa"
import { GiCarWheel } from "react-icons/gi"
import { IoRefresh } from "react-icons/io5"

const Options = () => {
    return (
        <Flex flexWrap="wrap" justifyContent="center" p={10}>

            <Box width={{ base: "100%", sm: "45%", md: "23%" }} margin={2} >
                <Flex alignItems="center">
                    <Box width="15%" marginRight={2} mb={"12"}><FaShippingFast  style={{ fontSize: "2em", color:"#024e82" }}/></Box>
                    <Box width="80%" textAlign="start">
                        <Text fontSize="sm" fontWeight="bold" marginBottom={2}>FREE SHIPPING</Text>
                        <Text color="gray.600">Enjoy free shipping on all orders above $100</Text>
                    </Box>
                </Flex>
            </Box>

            <Box width={{ base: "100%", sm: "45%", md: "23%" }} margin={2}>
                <Flex alignItems="center">
                    <Box width="15%" marginRight={2} mb={"12"}><GiCarWheel style={{ fontSize: "2em", color:"#024e82" }}/></Box>
                    <Box width="80%" textAlign="start">
                        <Text fontSize="sm" fontWeight="bold" marginBottom={2}>SUPPORT 24/7</Text>
                        <Text color="gray.600">Our support team is there to help for queries.</Text>
                    </Box>
                </Flex>
            </Box>

            <Box width={{ base: "100%", sm: "45%", md: "23%" }} margin={2} >
                <Flex alignItems="center">
                    <Box width="15%" marginRight={2} mb={"12"}><IoRefresh style={{ fontSize: "2em", color:"#024e82" }}/></Box>
                    <Box width="80%" textAlign="start">
                        <Text fontSize="sm" fontWeight="bold" marginBottom={2}>30 DAYS RETURN</Text>
                        <Text color="gray.600">Simply return it within 30 days for an exchange.</Text>
                    </Box>
                </Flex>
            </Box>

            <Box width={{ base: "100%", sm: "45%", md: "23%" }} margin={2} >
                <Flex alignItems="center">
                    <Box width="15%" marginRight={2} mb={"12"}><FaFingerprint style={{ fontSize: "2em", color:"#024e82" }}/></Box>
                    <Box width="80%" textAlign="start">
                        <Text fontSize="sm" fontWeight="bold" marginBottom={2}>100% PAYMENT SECURE</Text>
                        <Text color="gray.600">Our payments are secured with 256 bit encryption</Text>
                    </Box>
                </Flex>
            </Box>

        </Flex>


    )
}

export default Options




