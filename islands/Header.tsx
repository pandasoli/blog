import { Head } from '$fresh/runtime.ts'
import { useRef, useEffect } from 'preact/hooks'
import { useSignal } from '@preact/signals'

export function Header() {
	const ref = useRef<HTMLInputElement>(null)
	const value = useSignal('')

	useEffect(() => {
		document.addEventListener('keydown', ev => {
			if (ev.ctrlKey && ev.key === 'k') {
				ev.preventDefault()
				ref.current?.focus()
			}
		})

		const query = new URL(document.URL).searchParams.get('q') ?? ''
		value.value = query

		if (query)
			ref.current?.focus()
	}, [])

	return <>
		<Head>
			<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search' />
		</Head>

		<div class='flex-col sm:flex-row flex items-center justify-between max-w-screen-md px-4 pt-16 mx-auto'>
			<img src='/panda.svg' class='block w-20' />

			<form href='/' class='relative flex items-center rounded-full bg-gray-200 focus-within:bg-gray-300'>
				<span class='material-symbols-outlined absolute left-4 pointer-events-none text-gray-400'>search</span>
				<input ref={ ref } value={ value.value } name='q' type='search' placeholder='Search' class='px-12 pr-20 py-2 sm:w-72 text-lg text-gray-800 outline-none bg-transparent placeholder:text-gray-400' />
				<span class='absolute right-4 pointer-events-none'>Ctrl+K</span>
			</form>
		</div>
	</>
}
