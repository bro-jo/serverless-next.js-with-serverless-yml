import App from "next/app";
import Head from "next/head";
import "../static/css/common.css";

export class CustomApp extends App {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Head>
                    <meta
                        name="viewport"
                        content="user-scalable=no,initial-scale=1,maximum-scale=1"
                    />
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default CustomApp;
