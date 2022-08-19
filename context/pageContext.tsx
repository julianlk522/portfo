import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const PageContext = createContext({ currentPage: '' })

export const ContextProvider = ({ children }) => {
	const [currentPage, setCurrentPage] = useState<string>('/')
	const router = useRouter()
	const path = router.pathname

	useEffect(() => {
		setCurrentPage(path)
	}, [path])

	return (
		<PageContext.Provider value={{ currentPage }}>
			{children}
		</PageContext.Provider>
	)
}
