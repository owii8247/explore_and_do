import { Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const TopSellers = () => {
    const [seller, setSeller] = useState([])

  const getTopSellers = () => {
    fetch(`https://express-json.onrender.com/topseller`)
      .then(res => res.json())
      .then(data => setSeller(data))
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getTopSellers()
  }, [])

  //console.log("seller", seller)
  return (
    <>
    <Heading m={5} fontWeight={"semibold"}>Top Sellers</Heading>
    <Text fontSize={"lg"} fontWeight={"semibold"}>Browse our top-selling products</Text>
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap="4" p={10}>
        {seller?.map((item) => {
          return (
            <>
              <GridItem key={item.id}>
                <Image src={item.image} alt={item.name} w="100%" h="auto" mb={5}/>
                <Button w={"full"} p={10} >
                <Text>{item.name} <br/><br/>
                <span style={{color:"#024e82"}}>${item.price}</span>
                </Text>
                </Button>
              </GridItem>
            </>
          )
        })}
      </Grid>
      <Button p={8} mb={20} fontWeight={"md"} textColor={"white"}  variant='outline' backgroundColor={"#024e82"} _hover={{backgroundColor:"#024e82"}}>SHOP NOW</Button>
    </>
  )
}

export default TopSellers