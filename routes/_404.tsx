import { Head } from '$fresh/runtime.ts'

export default function Error404() {
	return <>
		<Head>
			<title>404 - Page not found</title>
		</Head>

		<div class='flex items-center justify-center flex-col h-[100vh] w-[100vw]'>
			<img src='/undraw_404.svg' class='w-full sm:max-w-96' />

			<p class='my-4'>
				The page you were looking for doesn't exist.
			</p>
			<a href='/' class='underline'>Go back home</a>
		</div>
	</>
}
