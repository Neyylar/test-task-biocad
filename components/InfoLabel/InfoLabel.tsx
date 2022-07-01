import {Box, Text, Image, HStack, StackProps} from "@chakra-ui/react";

type InfoLabelProps = StackProps & {
    style: string;
    text: string;
    noIcon?: boolean;
};

export const InfoLabel = (props: InfoLabelProps) => {
    return (
        <HStack position="relative" minW="150px" flexShrink={0}>
            <Box w="10px" h="10px" backgroundColor={props.style} borderRadius={5} mr={1} flexShrink={0}/>
            <Text p={2}>
                {props.text}
            </Text>
            {!props.noIcon && (
                <Box position="relative">
                    <Box w="20px" h="20px" backgroundColor={props.style} borderRadius={10} zIndex={-1}>
                        <Image w="8px" position="absolute" src='/icons/ArrowRight.svg' top={1} right="30%"></Image>
                    </Box>
                </Box>
            )}

        </HStack>
    );
};
