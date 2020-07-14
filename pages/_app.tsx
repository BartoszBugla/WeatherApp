import App from "next/app";
import React from "react";
import "../styles.css";

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    //Anything returned here can be access by the client
    return { pageProps };
};
export default MyApp;
