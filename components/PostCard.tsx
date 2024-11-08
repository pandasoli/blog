import { Post } from '@/models/posts.ts'

export function PostCard(props: { post: Post }) {
	const { post } = props

	return (
		<a class='sm:col-span-2' href={ `/${post.slug}` }>
			<div class='py-8 border-t border-gray-200'>
				<h3 class='text-3xl text-gray-900 font-bold'>
					{ post.title }
				</h3>
				<time class='text-gray-500'>
					{
						new Date(post.publishedAt).toLocaleDateString('en-us', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})
					}
				</time>
				<div class='mt-4 text-gray-900'>
					{ post.snippet }
				</div>
			</div>
		</a>
	)
}
