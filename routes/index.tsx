import { Handlers, PageProps } from '$fresh/server.ts'
import { Post, getPosts } from '@/models/posts.ts'
import { PostCard } from '@/components/PostCard.tsx'
import { Header } from '@/islands/Header.tsx'

export const handler: Handlers<Post[]> = {
	async GET(_req, ctx) {
		const query = ctx.url.searchParams.get('q')

		let posts = await getPosts()

		if (query)
			posts = posts.filter(e =>
				e.title.includes(query) ||
				e.snippet.includes(query)
			)

		return ctx.render(posts)
	}
}

export default function Home(props: PageProps<Post[]>) {
	const posts = props.data

	return <>
		<Header />

		<main class='max-w-screen-md px-4 pt-16 mx-auto'>
			<h1 class='text-5xl font-bold'>Blog</h1>
			<div class='mt-8'>
				{ posts.map(post => <PostCard post={ post } />) }
			</div>
		</main>
	</>
}
