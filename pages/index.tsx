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
    const [filterProducts, setFilterProducts] = useState<Product[]>(products);
    const [types, setTypes] = useState<ProductType[]>([]);
    const [filters, setFilters] = useState<number>();

    useEffect(() => {
        (async () => {
            const productsResponse = await getProducts();
            const typesResponse = await getTypes();
            setProducts(productsResponse?.products || []);
            setTypes(typesResponse?.types || []);
        })();
    }, []);

    useEffect(() => {
        const filteredProducts = filters ? products.filter((value => value.type === filters)): products;
        setFilterProducts(filteredProducts);
    }, [filters, products]);

    return (
        <>
            <Hero/>
            <ProductFiltersSelects types={types} setFilters={(id) => setFilters(id)} filters={filters}/>
            <Container maxW={'6xl'}>
                <Box w="full" pt={{base: 6, md: 4}} overflowX="auto">
                    <ProductTable products={filterProducts}/>
                </Box>
            </Container>
        </>
    );
};

export default Home
