import {
    Box, Button,
    Container,
    Flex,
    Heading,
    IconButton,
    Image,
    Link as ChakraLink,
    Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import Link from 'next/link';
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";

const NAV_ITEMS = [
    {label: 'О компании', href: ''},
    {label: 'Продукты', href: ''},
    {label: 'Наука', href: ''},
    {label: 'Производство', href: ''},
    {label: 'Карьера', href: ''},
    {label: 'Устойчивое развитие', href: ''},
    {label: 'Новости', href: ''},
    {label: 'Контакты', href: ''},
    {label: 'Партнерство', href: ''},
];

const MobileNav = ({isOpen}: { isOpen: boolean }) => {
    if (!isOpen) return null;

    return (
        <Stack
            p={4}
            display={{xl: 'none'}}
            zIndex={9999}
            pos="fixed"
            top="60px"
            w={'full'}
            bg={'white'}
            minH={'calc(100vh - 60px)'}
            css={{
                backdropFilter: 'saturate(180%) blur(5px)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}>
            {NAV_ITEMS.map(({label, href}, index) => (
                <Stack key={index} spacing={4}>
                    <Flex
                        py={2}
                        as={Link}
                        href={href ?? '#'}
                        justify={'space-between'}
                        align={'center'}
                        _hover={{
                            textDecoration: 'none',
                        }}>
                        <Text
                            fontWeight={400}
                            textStyle="h5"
                            color="darkBlue">
                            {label}
                        </Text>
                    </Flex>
                </Stack>
            ))}
        </Stack>
    );
};

export const Header = () => {
    const {isOpen: isMobileNavOpen, onToggle} = useDisclosure();
    return (
        <Box>
            <Flex
                as={'header'}
                pos="fixed"
                top="0"
                w={'full'}
                minH={'60px'}
                boxShadow={'sm'}
                zIndex="999"
                justify={'center'}
                css={{
                    backdropFilter: 'saturate(180%) blur(5px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}>
                <Container as={Flex} maxW={'6xl'} align={'center'}>
                    <Flex
                        flex={{base: '0', xl: 'auto'}}
                        ml={{base: -2}}
                        mr={{base: 6, xl: 0}}
                        display={{base: 'flex', xl: 'none'}}>
                        <IconButton
                            onClick={onToggle}
                            icon={isMobileNavOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>}
                            variant={'ghost'}
                            size={'sm'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>

                    <Flex
                        flex={{base: 1, lg: 'auto'}}
                        justify={{base: 'start', lg: 'start'}}>
                        <Link href={'/'} passHref>
                            <Stack
                                as={'a'}
                                direction={'row'}
                                alignItems={'center'}
                                spacing={{base: 2, sm: 4}}>
                                <Heading
                                    flexShrink={0}
                                    as={'h1'}
                                    fontSize={'xl'}
                                    display="block">
                                    <Image src="/images/logo.png"></Image>
                                </Heading>
                            </Stack>
                        </Link>
                    </Flex>

                    <Stack
                        direction={'row'}
                        align={'center'}
                        spacing={{base: 6, lg: 8}}
                        flex={{base: 1, lg: 'auto'}}
                        justify={'center'}
                    >
                        <Stack direction={'row'} spacing={4} display={{base: 'none', xl: 'flex'}}>
                            {NAV_ITEMS.map((navItem) => (
                                <Box key={navItem.label}>
                                    <ChakraLink
                                        p={2}
                                        noOfLines={2}
                                        href={navItem.href ?? '#'}
                                        fontSize={'sm'}
                                        fontWeight={500}
                                        color={'darkBlue'}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: 'blue',
                                        }}>
                                        {navItem.label}
                                    </ChakraLink>
                                </Box>
                            ))}
                        </Stack>
                    </Stack>
                    <Stack flex={{base: 1, lg: 'auto'}} justify={'flex-end'}>
                        <Button fontWeight="800" backgroundColor="darkBlue" color="white" width="40px"
                                height="20px">ENG</Button>
                    </Stack>
                </Container>
            </Flex>
            <MobileNav isOpen={isMobileNavOpen}/>
        </Box>
    );
};
