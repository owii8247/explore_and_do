import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Peace = () => {

    return (
        <Flex flexWrap="wrap" justifyContent="center" p={10}>
            <Box width={{ base: "100%", sm: "45%", md: "55%" }} margin={2} textColor={"white"} background={"black"} pt={40} pb={40}>
                <Heading mb={5} fontWeight={"semibold"} fontSize={"3xl"}>PEACE OF MIND</Heading>
                <Text>A one stop platform for all your fashion needs,</Text>
                <Text mb={"25px"}>hassle-free. Buy with a peace of mind.</Text>
                <Button color={"#024e82"} >Buy Now</Button>
            </Box>
            <Box width={{ base: "100%", sm: "45%", md: "35%" }} margin={2} textColor={"white"} background={"black"} pt={40} pb={40}>
                <Heading mb={5} fontWeight={"semibold"} fontSize={"3xl"}>BUY 2 GET 1 FREE</Heading>
                <Text>End of season sale. Buy any 2 items of your choice</Text>
                <Text mb={"25px"}>and get 1 free.</Text>
                <Button color={"#024e82"}>Buy Now</Button>
            </Box>
        </Flex>
    )
}

export default Peace