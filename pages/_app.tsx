import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ContextProvider } from '../context/pageContext'

function MyApp({ Component, pageProps }) {
	return (
		<ContextProvider>
			<div
				id='container'
				className='bg-mainBg bg-cover h-[100vh] w-[100vw]'
			>
				<Navbar />
				<Component {...pageProps} />
			</div>
		</ContextProvider>
	)
}

export default MyApp
