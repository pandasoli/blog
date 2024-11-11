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
			<div class='grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:gap-4 justify-items-center'>
				<img src='/formal-self.jpg' class='rounded-full h-80 sm:h-96' />

				<div>
					<h1 class='text-2xl font-bold'>I am <span class='text-green-500'>Eli</span> Soli</h1>
					<br />

					<p>
						I am a passionate self-taught <span class='text-green-500'>developer</span> <img src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e7-1f1f7.svg' class='inline w-5' />,
						currently studying compilers and low-level <img src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1fab4.svg' class='inline w-5' />.
					</p>
					<br />

					<p>
						I am also very passionate about linguistics and learning foreign languages
						and talking to people from other cultures,
						I am currently fluent in <span class='text-green-500'>3 languages</span> and I'm studying <span class='text-green-500'>2 others</span>.
					</p>
					<br />

					<p>
						You can see where my focus is on in my <a href='https://github.com/pandasoli' class='text-green-500 underline'>pined repos</a>.
					</p>
					<br />
					<br />


					<div class='flex flex-col items-center'>
						<span class='font-bold'>Say Hello</span><br />
						<a href='https://discord.com/users/765345840856170526'><img src='https://img.shields.io/badge/discord-Panda_Soli%235433-5865f2?style=for-the-badge&logo=discord&labelColor=2F2E41' /></a>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />

			<div class='sm:grid sm:grid-cols-2 sm:gap-4'>
				<img src='/undraw_programming.svg' />

				<div>
					<h3 class='text-3xl font-bold text-center'><samp>Programming</samp></h3>
					<br />

					<p>
						My journey with <span class='text-green-500'>programming</span> began in my youth when I first experimented with hacking emails.
						This curiosity led me to discover <strong>BatchScript</strong>, which became my first love in programming.
						From there, I expanded my skills to include web development and various other areas of interest.
					</p>
					<br />

					<p>
						Currently, I am focused on understanding how computers operate at a low level.
						I am also an enthusiast of vintage computers and software.
					</p>
				</div>
			</div>
			<br />

			<div class='mt-8'>
				{ posts.map(post => <PostCard post={ post } />) }

				{
					posts.length === 0 && <div class='flex items-center flex-col'>
						<img class='w-1/2 m-3' src='/undraw_empty.svg' />
						<span class='font-bold'>No Posts Found</span>
					</div>
				}
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />

			<div class='sm:grid sm:grid-cols-2 sm:gap-4'>
				<img src='/undraw_around_the_world.svg' />

				<div>
					<h3 class='text-3xl font-bold text-center'><samp>Langüistics</samp></h3>
					<br />

					<p>
						My passion for <span class='text-green-500'>linguistics</span> began when I enrolled in my first English course in person.
						At the age of thirteen, I found it exhilarating to express myself in a language that no one around me could comprehend.
						It was a delightful experience, and I had a great deal of fun.
						I am captivated by the ways in which people communicate and understand one another despite the barriers of different languages and cultures.
					</p>
					<br />

					<p>
						I am already fluent in 3 languages:
						<span class='text-green-500'> Português</span> <img src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e7-1f1f7.svg' class='inline w-5' />, 
						<span class='text-green-500'> Español</span> <img src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e9-1f1f4.svg' class='inline w-5' />, and
						<span class='text-green-500'> English</span> <img src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1fa-1f1f8.svg' class='inline w-5' />,

						and I'm currently learning 2 others:
						<span class='text-green-500'> Malayu</span> <img src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f2-1f1fe.svg' class='inline w-5' />,
						<span class='text-green-500'> Latinus</span> <img src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1fb-1f1e6.svg' class='inline w-5' />.
					</p>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
		</main>
	</>
}
