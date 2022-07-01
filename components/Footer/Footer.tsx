import {Button, Center, Flex, Grid, HStack, Box, Text, Link, VStack, Divider, Container} from "@chakra-ui/react";
import {useBreakpoint} from "../../hooks/useBreakpoint";
import {Contacts} from "../Contacts/Contacts";

export const Footer = () => {
    const {isDesktop} = useBreakpoint();
    return (
        <Box w="full" borderTopWidth={1} borderTopColor="greyLines" mt="120px">
            <Container maxW="6xl">
                <VStack w="full" position="relative">
                    <Grid w="full"
                          templateColumns={{base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"}} gap={2}
                          pt={12} pb={9}>
                        <Contacts/>
                        <VStack alignItems="left">
                            <Link> Курс на выздоровление </Link>
                            <Link> Студентам </Link>
                            <Link> Безопасность препаратов </Link>
                        </VStack>
                        <VStack alignItems="left">
                            <Link> Коммерческая политика </Link>
                            <Link> Политика в отношении обработки ПДн </Link>
                            <Link> Пользовательское соглашение </Link>
                        </VStack>
                        <VStack alignItems="left">
                            <Link> Использование файлов Cookie</Link>
                            <Link> Антикоррупционная политика </Link>
                            <Link> Политика по качеству </Link>
                        </VStack>
                    </Grid>
                    <Divider w="full" bgColor="greyLines" color="greyLines" height="1px"/>
                    <Box w="full" py={9}>
                        <Text textStyle="h6">
                            Copyright © 2001-2021
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};
