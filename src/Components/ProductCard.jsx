import { Button, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ products }) => {
    return (
        <GridItem key={products.id}>
            <Image src={products.image} alt={products.name} w="100%" h="auto" mb={5} />
            <Link to={`/product/${products.id}`}>
                <Button p={10} w={"full"}>
                    <Text>{products.name} <br /><br />
                    <span style={{color:"#024e82"}}>${products.price}</span></Text>
                </Button>
            </Link>
        </GridItem>

    )
}

export default ProductCard