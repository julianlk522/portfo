import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					></link>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='anonymous'
					></link>
					<link
						href='https://fonts.googleapis.com/css2?family=Lobster&display=swap'
						rel='stylesheet'
					></link>
					<link
						href='https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;600;700&display=swap'
						rel='stylesheet'
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
