import { PropsWithChildren } from 'react'

const Button = ({ children }: PropsWithChildren) => {
	return (
		<button className='px-4 py-2 bg-accent text-white rounded-xl animate-bounce mt-3 font-bold shadow-inner shadow-white hover:text-primary duration-1000 transition-colors ease-out hover:animate-none '>
			{children}
		</button>
	)
}

export default Button
