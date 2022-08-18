import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
	return (
		<div id='container' className='bg-mainBg h-[100vh] w-[100vw]'>
			<Navbar />
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
