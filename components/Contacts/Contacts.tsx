import {Grid, Image, Link} from "@chakra-ui/react";

export const Contacts = () => {
    return (
        <Grid gridTemplateColumns="repeat(3, 50px)" gap={3} m={3} mt={0}>
            <Link>
                <Image src="/icons/fb-link.png"/>
            </Link>
            <Link>
                <Image src="/icons/in-link.png"/>
            </Link>
            <Link>
                <Image src="/icons/inst-link.png"/>
            </Link>
            <Link>
                <Image src="/icons/tw-link.png"/>
            </Link>
            <Link>
                <Image src="/icons/vk-link.png"/>
            </Link>
            <Link>
                <Image src="/icons/yt-link.png"/>
            </Link>
        </Grid>
    )
};
