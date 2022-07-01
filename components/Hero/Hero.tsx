import {Box, Container, Divider, Heading, Image, Stack, VStack, HStack, Text} from "@chakra-ui/react";
import {useBreakpoint} from "../../hooks/useBreakpoint";

export const Hero = () => {
    const {isMobile} = useBreakpoint();
    return (
        <Box bg="white" position="relative" overflow="hidden">
            <Stack
                as={Container}
                maxW={'6xl'}
                h='100vh'
                minH={500}
                spacing={{base: 0, lg: 24}}
                direction={{base: 'column', lg: 'row'}}
                alignItems={'center'}
            >
                <Stack spacing={12} mb={{base: 0, lg: "200px"}} mt={{base: "300px", lg: 0}} flex={1} zIndex={1}>
                    <Heading
                        noOfLines={2}
                        as={'h2'}
                        color="darkBlue"
                        fontSize={{base: '3xl', sm: '4xl', md: '6xl', lg: '6xl'}}
                        maxW={'2xl'}>
                        Препараты в разработке
                    </Heading>
                    <Divider h="10px" w="70px" color="blue" bgColor="blue" borderBottomLeftRadius={25}
                             borderTopRightRadius={25}/>
                </Stack>
                <HStack flex={1} justifyContent="center" pt={{base: 0, lg: '0px'}} zIndex={1}>
                    <Divider h="1px" w="80px" color="blue" bgColor="blue" position="relative" top={0}/>
                    <VStack>
                        <Text noOfLines={2} textStyle="h3" color="darkBlue" fontWeight={600} alignSelf="flex-start"
                              pt={5}>
                            Обратите внимание:
                        </Text>
                        <Text noOfLines={3} textStyle="h3" color="darkBlue" mb={12} alignSelf="flex-start">
                            данные обновляются ежеквартально.
                        </Text>
                    </VStack>
                </HStack>
            </Stack>
            <Box display={{base: 'none', md: 'flex'}}>
                <Image src="/images/hero/1.png" alt="hero_1" maxH="470px" position="absolute" left={-20}
                       top="calc(50% - 235px)"/>
                <Image src="/images/hero/2.png" alt="hero_2" maxH="580px" position="absolute" left={-20}
                       top="calc(50% - 235px)"/>
                <Image src="/images/hero/3.png" alt="hero_3" maxH="570px" position="absolute" right={-20} bottom={0}/>
                <Image src="/images/hero/4.png" alt="hero_4" maxH="495px" position="absolute" right={-20} bottom={0}/>
            </Box>
            <Box opacity={{base: 0.5, md: 1}}>
                <Image src="/images/hero/dots.png" alt="dots_img" maxH="255px" position="absolute" left="45%"
                       top="30%"/>
                <Image src="/images/hero/img_1.png" alt="img_1" maxH="280px" position="absolute" left="47%" top="20%"/>
                <Image src="/images/hero/img_2.png" alt="img_2" maxH="200px" position="absolute" left="28%" top="50%"/>
            </Box>
        </Box>
    );
};
