import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
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
						href='https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap'
						rel='stylesheet'
					></link>
					<link
						href='https://fonts.googleapis.com/css2?family=Lobster&display=swap'
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
