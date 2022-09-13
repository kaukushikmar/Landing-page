import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <>

                <Html lang='en'>
                    <Head>
                        <title>Real-time fincrime prevention API | Flagright</title>
                        <meta
                            name="description"
                            content="Flagright helps startups prevent, detect, and manage suspicious & malicious activity in real-time. It's an API-first solution with a no-code back office."
                        />

                    </Head>

                    <body>
                        <Main />
                        <NextScript />

                    </body>
                </Html>

            </>
        )
    }
}