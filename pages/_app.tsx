import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from "@chakra-ui/provider";
import {theme} from "../theme";
import {Fonts} from '../components/Fonts/Fonts'
import {MainLayout} from "../layouts/MainLayout";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ChakraProvider>
    );
}

export default MyApp;
