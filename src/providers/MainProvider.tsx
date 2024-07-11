'use client'

import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
const MainProvider = ({ children }: PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
export default MainProvider
