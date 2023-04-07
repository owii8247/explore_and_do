import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Flex, HStack, Heading, IconButton, Image, Input, Table, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { CloseIcon } from '@chakra-ui/icons'

const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(cartData);
  }, [])

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  // const handleQuantityChange = (index, quantity) => {
  //   const newCart = [...cart];
  //   newCart[index].quantity = quantity;
  //   localStorage.setItem('cart', JSON.stringify(newCart));
  //   setCart(newCart);
  // };

  const handleQuantityChange = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const handleQuantityIncrement = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const handleQuantityDecrement = (index) => {
    const newCart = [...cart];
    newCart[index].quantity -= 1;
    if (newCart[index].quantity < 1) {
      newCart[index].quantity = 1;
    }
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };


  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
      <Navbar />
      <Box p={20}>
        <Breadcrumb fontWeight='medium' fontSize='sm'>
          <BreadcrumbItem>
            <BreadcrumbLink href='/home'>HOME</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/cart'>SHOPING CART</BreadcrumbLink>
          </BreadcrumbItem>

        </Breadcrumb>

        <Table variant="striped">
          <Thead>
            <Tr style={{fontWeight:"bold", color:"black"}}>
              <Th></Th>
              <Th></Th>
              <Th style={{fontWeight:"bolder", fontSize:"16px",  color:"black"}}>Product</Th>
              <Th style={{fontWeight:"bolder", fontSize:"16px", color:"black"}}>Price</Th>
              <Th style={{fontWeight:"bolder", fontSize:"16px", color:"black"}}>Quantity</Th>
              <Th style={{fontWeight:"bolder", fontSize:"16px", color:"black"}}>Total</Th>

            </Tr>
          </Thead>
          <Tbody>
            {cart.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <IconButton
                    icon={<CloseIcon />}
                    onClick={() => handleRemoveFromCart(index)}
                    variant="ghost"
                    colorScheme="red"
                  />
                </Td>
                <Td>
                  <Image src={item.image} alt={item.name} width="50px" height="50px" />
                </Td>
                <Td style={{fontWeight:"bold", color:"gray"}}>{item.name}</Td>
                <Td style={{fontWeight:"normal", color:"gray"}}>${item.price}</Td>
                <Td>
                  <HStack>
                    <IconButton
                      icon={<FaMinus />}
                      onClick={() => handleQuantityDecrement(index)}
                      variant="outline"
                      colorScheme="blue"
                      size="sm"
                    />

                    <Input
                      type="number"
                      min="1"
                      max="3"
                      w={"15%"}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value))
                      }
                    />
                    <IconButton
                      icon={<FaPlus />}
                      onClick={() => handleQuantityIncrement(index)}
                      variant="outline"
                      colorScheme="blue"
                      size="sm"
                    />
                  </HStack>
                </Td>
                <Td style={{fontWeight:"normal", color:"#024e82"}}>${(item.price * item.quantity).toFixed(2)}</Td>

              </Tr>
            ))}
          </Tbody>
        </Table>

        <Box textAlign={"start"} w={"45%"} p={8} lineHeight={"50px"} mt={10}>
          <Heading mb={5}>Cart Totals</Heading>
          <Flex justifyContent={"space-between"} fontWeight={"semibold"}>
            <Text textColor={"gray"} >Subtotal</Text>
            <Text>${totalPrice.toFixed(2)}</Text>
          </Flex>
          <Divider />
          <Flex justifyContent={"space-between"} textColor={"gray"} fontWeight={"semibold"}>
            <Text>Shipping</Text>
            <Text>FREE!!!</Text>
          </Flex>
          <Divider />
          <Flex justifyContent={"space-between"} fontWeight={"semibold"}>
            <Text>Total</Text>
            <Text>${totalPrice.toFixed(2)}</Text>
          </Flex>

          <Button p={8} fontWeight={"md"} textColor={"white"} variant='outline' mt={8}
            backgroundColor={"orange"} _hover={{ backgroundColor: "orange" }}
            onClick={onOpen}
          >PROCEED TO CHECKOUT</Button>

          <AlertDialog
            isOpen={isOpen}
            onClose={onClose}
          >
            <AlertDialogOverlay >
              <AlertDialogContent bg="#cc875d" >


                <AlertDialogBody>
                  <AlertDialogHeader mt={20} mb={20} fontSize={"xl"} fontWeight={"bold"} textColor={"white"}>ORDER PLACED SUCCESSFULLY🙌</AlertDialogHeader>
                </AlertDialogBody>


              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>

        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Cart