import {Box, Divider, Table, Tbody, Td, Th, Thead, Tr, HStack, SelectProps, BoxProps} from "@chakra-ui/react";
import {Product} from "../../shared/Product";
import {useBreakpoint} from "../../hooks/useBreakpoint";

type ProductRowProps = BoxProps & {
    item: Product;
    stages: number,
};

type ProductTableProps = {
    products: Product[],
};

const COLORS = ["red", "cyan", "blue", "violet"];
const MOCK_TABLE_HEADERS_SECOND: (string | undefined)[] = ["", "Наименование", "Механизм действия терапевтического агента", , "Показание", "Разработка", "КИ Фаза I", "КИ Фаза II", "КИ Фаза III", "Регистрация"];

const DividerEnd = () => {
    return (
        <HStack position="relative">
            <Divider h="1px" color="darkBlue" bgColor="darkBlue" w="45px"/>
            <Box w="5px" h="5px" borderRadius={2} bgColor="darkBlue" position="absolute" left="35px"></Box>
        </HStack>

    )
}
const ProductRow = ({item, stages, ...props}: ProductRowProps) => {
    const color = COLORS[item.type - 1];
    return (
        <Tr {...props}>
            <Td mr={7} textAlign="center" borderRight="1px solid" borderColor="greyLines"><Divider height="20px" w="4px"
                                                                                                   color={color}
                                                                                                   bgColor={color}
                                                                                                   m={3}/></Td>
            <Td mr={7} textAlign="center" borderRight="1px solid" borderColor="greyLines">{item.name}</Td>
            <Td mr={7} textAlign="center" borderRight="1px solid" borderColor="greyLines">{item.action}</Td>
            <Td mr={12} textAlign="center" borderRight="1px solid" borderColor="greyLines">{item.indication}</Td>
            {[...Array(stages)].map((stage, i) =>
                <Td key={stage} minW="90px" borderRight="1px solid" borderColor="greyLines">
                    {item.devStage > i + 1 && <Divider h="1px" color="darkBlue" bgColor="darkBlue" w="100%" pr={1}/>}
                    {item.devStage === i + 1 && <DividerEnd/>}
                </Td>
            )}
        </Tr>
    );
};

export const ProductTable = ({products}: ProductTableProps) => {
    const {isMobile} = useBreakpoint();
    const stages = 5;
    return (
        <Table
            border="1px solid"
            borderColor="greyLines"
            variant="styled"
            size={isMobile ? 'sm' : 'md'}
            bg="white"
            color="darkBlue"
            textAlign="center"
            textStyle={{base: "h6", md: "h5"}}
            sx={{
                '& th, & td': {
                    py: 3,
                    px: 0
                },
            }}
        >
            <Thead>
                <Tr>
                    <Th borderRight="1px solid" borderColor="greyLines" textAlign="center" colSpan={4}>Информация о
                        продукте</Th>
                    <Th textAlign="center" colSpan={5}>Этапы разработки</Th>
                </Tr>
                <Tr backgroundColor="darkBlue" color="white" opacity={1}>
                    {MOCK_TABLE_HEADERS_SECOND.map((item, key) =>
                        (<Th key={key} textAlign="center">{item}</Th>)
                    )}
                </Tr>
            </Thead>

            <Tbody textAlign="center">
                {products.map((item, key) => (
                    <ProductRow key={key} item={item} stages={stages}
                                backgroundColor={key % 2 == 0 ? "lightGrey" : "white"}/>
                ))}
            </Tbody>
        </Table>
    );
};
