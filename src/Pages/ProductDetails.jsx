import { Badge, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Heading, Image, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState("")
  const params = useParams()

  useEffect(() => {
    fetch(`https://express-json.onrender.com/arrivals/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setSingleProduct(res)
      })
  }, [params])
  //console.log("single", singleProduct)
  return (
    <>
    <Navbar /> 
      <Flex flexWrap="wrap" justifyContent="center" p={10}>
        <Box width={{ base: "100%", sm: "45%", md: "30%" }} margin={2}  p={25}>
          <Box position="relative">
          <Image src={singleProduct.image} />
          <Badge
          position="absolute"
          top="0"
          left="5"
          variant="solid"
          size="sm"
          colorScheme="orange"
          borderRadius="full"
          px="2"
          py="1"
        >
          -20%
        </Badge>
        </Box>
        </Box>
        <Box width={{ base: "100%", sm: "45%", md: "40%" }} margin={2} 
         textAlign={"start"} p={25}>
          <Breadcrumb fontWeight='medium' fontSize='sm'>
            <BreadcrumbItem>
              <BreadcrumbLink href='/home'>HOME</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='/home'>SHOP</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='/home'>{singleProduct.type}</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='/home'>SHOP</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mt={2}>{singleProduct.name}</Heading>
          <Flex alignItems="baseline" mt={5} fontSize={'2xl'} fontWeight={"semibold"}>
            <Text textDecoration="line-through" color="gray.500" mr="2">
              ${singleProduct.strike}
            </Text>
            <Text fontWeight="bold">${singleProduct.price}</Text>
          </Flex>
          <Text mt={5} fontWeight={"semibold"} color={"gray"}>{singleProduct.details}</Text>
          <Select placeholder='Select Size' w={"40%"} mt={10}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Button p={3} fontWeight={"md"} textColor={"white"} variant='outline' mt={8}
            backgroundColor={"#024e82"} _hover={{ backgroundColor: "#024e82" }}>ADD TO CART</Button>
          <Text mt={5}>Category : <span>{singleProduct.category}</span></Text>
          <Text>Tags : <span>{singleProduct.tags}</span></Text>

        </Box>

      </Flex>
      <Box p={10}>
        <Tabs isManual variant='enclosed'>
          <TabList >
            <Tab fontWeight={"bold"}>Description</Tab>
            <Tab fontWeight={"bold"}>Reviews</Tab>
          </TabList>
          <TabPanels textAlign={"start"}>
            <TabPanel >
              <p>{singleProduct.description}</p>
            </TabPanel>
            <TabPanel>
              <p>{singleProduct.reviews}</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}

export default ProductDetails