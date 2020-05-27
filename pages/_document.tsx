import Document, {Html, Head, Main, NextScript} from "next/document";
import {ServerStyleSheet} from "styled-components";

export default class extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        const sheet = new ServerStyleSheet();
        const page = ctx.renderPage((App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />)
        );
        const styleTags = sheet.getStyleElement();

        return {
            ...initialProps,
            ...page,
            styleTags,
        };
    }

    render() {
        const {styleTags} = this.props as any;

        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="service-name" />
                    <meta name="keywords" content="service-name" />
                    {styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
