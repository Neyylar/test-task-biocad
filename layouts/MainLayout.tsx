import {ReactElement} from "react";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";

export const MainLayout = ({children}: { children: ReactElement }) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};
