import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Head from "next/head";
import axios from "axios";

export const Index = () => {
    const [hello, setHello] = useState();
    useEffect(() => {
        axios.get("/api/hello").then(({data}) => setHello(data));
    }, []);

    return (
        <>
            <Head>
                <title>service-name</title>
            </Head>
            <Root>
                <p>hello</p>
                <p>from server: {hello}</p>
            </Root>
        </>
    );
};

const Root = styled.div`
    padding: 80px;
`;

export default Index;
