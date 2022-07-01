import {Divider, Flex, Select, SelectProps, Stack} from "@chakra-ui/react";
import {DefaultDropDownItem} from "../../shared";
import {ChevronDownIcon} from "@chakra-ui/icons";

type DropdownProps = SelectProps & {
    placeholder: string;
    items: DefaultDropDownItem[],
    onChange?: (item: DefaultDropDownItem) => void,
};

export const Dropdown = ({items, onChange, placeholder, ...props}: DropdownProps) => {
    return (
        <Stack w="full" position="relative">
            <Select variant='unstyled' placeholder={placeholder} w="full" {...props} icon={<ChevronDownIcon mr={-7}/>}>
                {items.map(({label, value}) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </Select>
            <Flex w="full">
                <Divider position="absolute" bgColor="greyLines" color="greyLines" height="1px" bottom={0} w="100%"/>
                <Divider position="absolute" bgColor="blue" color="blue" height="1px" width="10px" bottom={0}
                         right={0}/>
            </Flex>
        </Stack>
    );
};
