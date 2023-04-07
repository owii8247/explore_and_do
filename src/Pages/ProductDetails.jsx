import { Badge, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Flex, Heading, Image, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState("")
  const params = useParams()
  const navigate = useNavigate()
  const [rating, setRating] = useState(0)

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  }

  useEffect(() => {
    fetch(`https://express-json.onrender.com/arrivals/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setSingleProduct(res)
      })
  }, [params])
  //console.log("single", singleProduct)

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({ ...singleProduct, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate("/cart")
  };


  return (
    <>
      <Navbar />
      <Flex flexWrap="wrap" justifyContent="center" p={10}>
        <Box width={{ base: "100%", sm: "45%", md: "30%" }} margin={2} p={25}>
          <Box position="relative">
            <Image src={singleProduct.image} />
            <Badge
              position="absolute"
              top="2"
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
              <BreadcrumbLink href='/home' color={"gray"}>HOME</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='/home' color={"gray"}>SHOP</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='/home' color={"gray"}>{singleProduct.type}</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='/home'>SHOP</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mt={2} mb={2}>{singleProduct.name}</Heading>

          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              style={{
                cursor: 'pointer',
                color:
                  num <= rating
                    ? num === rating
                      ? 'orange'
                      : 'orange'
                    : num > rating
                      ? 'black'
                      : 'black',
              }}
              onClick={() => handleStarClick(num)}
            >
              ✰
              
            </span> 
          ))}

          <Flex alignItems="baseline" mt={5} fontSize={'2xl'} fontWeight={"semibold"}>
            <Text textDecoration="line-through" color="gray.500" mr="2">
              ${singleProduct.strike}
            </Text>
            <Text fontWeight="bold">${singleProduct.price}</Text>
          </Flex>
          <Text mt={5} fontWeight={"semibold"} color={"gray"}>{singleProduct.details}</Text>
          <Select placeholder='Select Size' w={"40%"} mt={10} textColor={"gray"} fontWeight={"bold"}>
          
            <option value='Small' >Small (S)</option>
            <Divider />
            <option value='Medium'>Medium  (M)</option>
            <Divider />
            <option value='Large'>Large (L)</option>
            <Divider />
            <option value='extralarge'>Extra Large (XL)</option>

          </Select>
          <Button p={5} fontWeight={"md"} textColor={"white"} variant='outline' mt={8}
            backgroundColor={"#024e82"} _hover={{ backgroundColor: "#024e82" }}
            onClick={handleAddToCart}
          >ADD TO CART</Button>
          <Text mt={5} fontWeight="medium">Category : <span style={{color:"gray"}}>{singleProduct.category}</span></Text>
          <Text fontWeight="medium">Tags : <span style={{color:"gray"}}>{singleProduct.tags}</span></Text>

        </Box>

      </Flex>
      <Box p={10}>
        <Tabs isManual variant='enclosed'>
          <TabList >
            <Tab fontWeight={"bold"} color={"gray"}>Description</Tab>
            <Tab fontWeight={"bold"} >Reviews</Tab>
          </TabList>
          <TabPanels textAlign={"start"}>
            <TabPanel fontWeight={"medium"} color={"gray"}>
              <p>{singleProduct.description}</p>
            </TabPanel>
            <TabPanel fontWeight={"medium"} color={"gray"}>
              <p>{singleProduct.reviews}</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}

export default ProductDetails