import {Box, Text, Image, HStack, StackProps, Link} from "@chakra-ui/react";
import {ProductType} from "../../shared/Product";

type InfoLabelProps = StackProps & {
    style: string;
    item?: ProductType;
    noIcon?: boolean;
    setFilter: (id?: number) => void;
};

export const InfoLabel = ({item, noIcon, setFilter, style}: InfoLabelProps) => {
    return (
        <Link onClick={() => setFilter(item?.id)}>
            <HStack position="relative" minW="150px" flexShrink={0}>

                <Box w="10px" h="10px" backgroundColor={style} borderRadius={5} mr={1} flexShrink={0}/>
                <Text p={2}>
                    {item?.name || "Все"}
                </Text>
                {!noIcon && (
                    <Box position="relative">
                        <Box w="20px" h="20px" backgroundColor={style} borderRadius={10} zIndex={-1}>
                            <Image w="8px" position="absolute" src='/icons/ArrowRight.svg' top={1} right="30%"></Image>
                        </Box>
                    </Box>
                )}
            </HStack>
        </Link>
    );
};
