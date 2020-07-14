import React from "react";
import styled from "styled-components";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Head from "next/head";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100vw;
`;
export default function Layout({ children, title }) {
    return (
        <Container>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content="My page title" key="title" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Search />
            {children}
            <Footer />
        </Container>
    );
}
