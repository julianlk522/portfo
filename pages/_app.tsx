import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
	return (
		<div id='container' className='w-full h-full'>
			<Component {...pageProps} />
			<Navbar />
		</div>
	)
}

export default MyApp
