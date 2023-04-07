import { Grid, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const NewArrivals = () => {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    fetch(`https://express-json.onrender.com/arrivals`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  //console.log("products", products)
  return (
    <>
      <Heading m={5} fontWeight={"semibold"}>Discover NEW Arrivals</Heading>
      <Text fontSize={"lg"} fontWeight={"semibold"}>Recently added Shirts!</Text>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap="4" p={10}>
        {products?.map((item) => {
          return (
            <>
              <ProductCard products={item} />
            </>
          )
        })}
      </Grid>


    </>
  )
}

export default NewArrivals