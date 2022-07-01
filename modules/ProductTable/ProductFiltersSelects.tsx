import {Container, Flex, Grid} from "@chakra-ui/react";
import {Dropdown} from "../../components/Dropdown/Dropdown";
import {InfoLabel} from "../../components/InfoLabel/InfoLabel";
import {DefaultDropDownItem} from "../../shared";
import {Product, ProductType} from "../../shared/Product";
import {useState} from "react";

const MOCK_SELECT_ITEMS: DefaultDropDownItem[] = [
    {label: 'option1', value: 'option1'},
    {label: 'option2', value: 'option2'},
    {label: 'option3', value: 'option3'},
    {label: 'option4', value: 'option4'},
];
const COLORS = ["red", "cyan", "blue", "violet"];
type ProductFilterProps = {
    types: ProductType[],
    setFilters: (id?: number) => void,
    filters?: number,
};
const otherId = 4;
export const ProductFiltersSelects = ({types, setFilters, filters} : ProductFilterProps) => {

    const COLORS = ["red", "cyan", "blue", "violet"];
    return (
        <Container maxW={'6xl'}>
            <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"}} gap={5}>
                <Dropdown items={MOCK_SELECT_ITEMS} placeholder="Тип продукта"/>
                <Dropdown items={MOCK_SELECT_ITEMS} placeholder="Тип молекулы"/>
                <Dropdown items={MOCK_SELECT_ITEMS} placeholder="Платформа"/>
                <Dropdown items={MOCK_SELECT_ITEMS} placeholder="Терапевтическая область"/>
            </Grid>
            <Flex mt="50px" gap={5} justifyContent="flex-start" flex={1} direction={{base: "column", lg: "row"}}>
                {types.map((item, key) => (
                    <InfoLabel key={key} item={item} style={COLORS[item.id-1]} noIcon={item.id === otherId} setFilter={(id) => {setFilters(id)
                        console.log(id)}}/>
                ))}
            </Flex>
            {filters && <InfoLabel style="darkBlue" setFilter={() => setFilters()} />}
        </Container>
    );
};
