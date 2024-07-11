import Home from '@/components/screens/home/Home'
import MainProvider from '@/providers/MainProvider'
export default function Page() {
	return (
		<MainProvider>
			<Home />
		</MainProvider>
	)
}
