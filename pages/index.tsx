import type {NextPage} from 'next'
import {Box, Container} from "@chakra-ui/react";
import {Hero} from "../components/Hero/Hero";
import {useEffect, useState} from 'react';
import {ProductTable} from "../modules/ProductTable/ProductTable";
import {getProducts, getTypes} from '../api/products';
import {Product, ProductType} from "../shared/Product";
import {ProductFiltersSelects} from "../modules/ProductTable/ProductFiltersSelects";

const Home: NextPage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            const response = await getProducts();
            setProducts(response?.products || []);
        })();
    }, []);

    return (
        <>
            <Hero/>
            <ProductFiltersSelects/>
            <Container maxW={'6xl'}>
                <Box w="full" pt={{base: 6, md: 4}} overflowX="auto">
                    <ProductTable products={products}/>
                </Box>
            </Container>
        </>
    );
};

export default Home
