import {Container, Flex, Grid} from "@chakra-ui/react";
import {Dropdown} from "../../components/Dropdown/Dropdown";
import {InfoLabel} from "../../components/InfoLabel/InfoLabel";
import {DefaultDropDownItem} from "../../shared";
import {Product, ProductType} from "../../shared/Product";

const MOCK_SELECT_ITEMS: DefaultDropDownItem[] = [
    {label: 'option1', value: 'option1'},
    {label: 'option2', value: 'option2'},
    {label: 'option3', value: 'option3'},
    {label: 'option4', value: 'option4'},
];

export const ProductFiltersSelects = () => {
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
                <InfoLabel style="red" text="Орфанные заболевания"/>
                <InfoLabel style="cyan" text="Аутоиммунные заболевания"/>
                <InfoLabel style="blue" text="Онкология"/>
                <InfoLabel style="violet" text="Другое" noIcon={true}/>
            </Flex>
        </Container>
    );
};
