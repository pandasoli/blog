import { extract } from '$std/front_matter/any.ts'

export interface Post {
	slug: string
	title: string
	publishedAt: Date
	snippet: string
	content: string
}

export async function getPosts(): Promise<Post[]> {
	const files = Deno.readDir('./posts')
	const promises: Promise<Post>[] = []

	for await (const file of files) {
		const slug = file.name.replace(/\.md$/, '')
		promises.push(getPost(slug))
	}

	const posts = await Promise.all(promises)
	posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
	return posts
}

export async function getPost(slug: string): Promise<Post> {
	const text = await Deno.readTextFile(`./posts/${slug}.md`)
	const { attrs, body } = extract(text)

	return {
		slug,
		title: attrs.title as string,
		publishedAt: new Date(attrs.published_at as string),
		content: body,
		snippet: attrs.snippet as string
	}
}
