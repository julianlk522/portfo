import {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from 'react'
import { useRouter } from 'next/router'

interface AppContext {
	currentPage: string
	setCurrentPage?: Dispatch<SetStateAction<string>>
}

export const PageContext = createContext<AppContext>({ currentPage: '' })

export const ContextProvider = ({ children }) => {
	const [currentPage, setCurrentPage] = useState<string>('/')
	const router = useRouter()
	const path = router.pathname

	useEffect(() => {
		setCurrentPage(path)
	}, [path])

	return (
		<PageContext.Provider value={{ currentPage, setCurrentPage }}>
			{children}
		</PageContext.Provider>
	)
}
