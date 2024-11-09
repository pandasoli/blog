import { Handlers, PageProps } from '$fresh/server.ts'
import { Post, getPosts } from '@/models/posts.ts'
import { PostCard } from '@/components/PostCard.tsx'
import { Header } from '@/islands/Header.tsx'

export const handler: Handlers<Post[]> = {
	async GET(_req, ctx) {
		const query = ctx.url.searchParams.get('q')?.toLowerCase()

		let posts = await getPosts()

		if (query)
			posts = posts.filter(e =>
				e.title.toLowerCase().includes(query) ||
				e.snippet.toLowerCase().includes(query)
			)

		return ctx.render(posts)
	}
}

export default function Home(props: PageProps<Post[]>) {
	const posts = props.data

	return <>
		<Header />

		<main class='max-w-screen-md px-4 pt-16 mx-auto'>
			<div class='flex flex-wrap justify-evenly items-center'>
				<img src='/undraw_programming.svg' class='w-full sm:max-w-96' />
				<span class='text-3xl font-bold'><samp>Programming</samp></span>
			</div>

			<div class='mt-8'>
				{ posts.map(post => <PostCard post={ post } />) }

				{
					posts.length === 0 && <div class='flex items-center flex-col'>
						<img class='w-1/2 m-3' src='/undraw_empty.svg' />
						<span class='font-bold'>No Posts Found</span>
					</div>
				}
			</div>
		</main>
	</>
}
