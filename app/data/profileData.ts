import type { WorkerProfile } from '~/types/profile'

export const PROFILE_DATA: WorkerProfile = {
	personal: {
		fullName: 'Toýlyýew Şöhrat',
		role: 'Full-Stack developer',
		avatar: '/developer.webp',
		heroBg: '/first.webp',
		skillsBg: '/second.webp',
		aboutMe: `I am a full-stack developer specializing in building scalable, high-performance web applications across the entire development lifecycle. I work seamlessly across both frontend and backend systems, ensuring strong alignment between user experience, system architecture, and performance.\n\nI place a strong emphasis on writing clean, maintainable, and well-structured code, supported by thoughtful software design principles. My approach focuses on building reliable and efficient solutions that scale effectively over time while maintaining long-term stability.\n\nWith a problem-solving mindset, I enjoy tackling complex technical challenges and transforming them into practical, efficient implementations. I am committed to continuous learning and improvement, and I value engineering decisions that balance performance, usability, and maintainability.\n\nI am also open to freelance opportunities where a dependable, detail-oriented, and full-stack technical approach is required.`
	},
	history: [
		{
			slideName: 'Work Experience',
			slideData: [
				{
					firstTitle: 'Frontend developer',
					secondTitle: 'SadaZehin H.J.',
					timeLine: 'April 2025 — Present',
					description:
						'As a Frontend Developer, I worked in a team environment developing modern web applications and admin dashboards. I was responsible for building reusable UI components, integrating APIs, and improving overall user experience with clean and responsive design.'
				}
			]
		},
		{
			slideName: 'Education',
			slideData: [
				{
					firstTitle: 'Turkmen State University named after Magtymguly',
					secondTitle: 'Physics Department',
					timeLine: '2021 — 2026',
					description:
						'I come from a Physics background, which provided me with strong mathematical foundations and problem-solving skills. During university, I was introduced to programming through C and C++, and learned the basics of scientific computing in my second year. This combination of physics and programming shaped my analytical mindset and supports my work as a developer.'
				}
			]
		}
	],
	skills: [
		{
			category: 'Languages',
			items: [
				{ name: 'JavaScript', icon: 'js' },
				{ name: 'TypeScript', icon: 'ts' }
			]
		},
		{
			category: 'Frontend',
			items: [
				{ name: 'Vue.js', icon: 'vuejs' },
				{ name: 'Nuxt.js', icon: 'nuxtjs' }
			]
		},
		{
			category: 'Backend',
			items: [
				{ name: 'Node.js', icon: 'nodejs' },
				{ name: 'Fastify', icon: 'fastify' }
			]
		},
		{
			category: 'Database',
			items: [{ name: 'PostgreSQL', icon: 'psql' }]
		},
		{
			category: 'Tools & Design',
			items: [
				{ name: 'Git', icon: 'git' },
				{ name: 'Linux', icon: 'linux' },
				{ name: 'Figma', icon: 'figma' },
				{ name: 'Photoshop', icon: 'adobephotoshop' },
				{ name: 'Postman', icon: 'postman' }
			]
		},
		{
			category: 'State Management',
			items: [{ name: 'Pinia', icon: 'pinia' }]
		},
		{
			category: 'Styling',
			items: [
				{ name: 'Tailwind CSS', icon: 'tailwindcss' },
				{ name: 'Sass', icon: 'sass' },
				{ name: 'CSS3', icon: 'css' },
				{ name: 'HTML5', icon: 'html' }
			]
		}
	],
	projects: [
		{
			name: 'Auto Parts',
			mediaFiles: [
				'/projects/auto-parts/awtozapcast.webp',
				'/projects/auto-parts/awtozapcast2.webp',
				'/projects/auto-parts/awtozapcast3.webp',
				'/projects/auto-parts/awtozapcast4.webp',
				'/projects/auto-parts/awtozapcast5.webp',
				'/projects/auto-parts/awtozapcast6.webp',
				'/projects/auto-parts/awtozapcast7.webp',
				'/projects/auto-parts/awtozapcast8.webp',
				'/projects/auto-parts/awtozapcast9.webp',
				'/projects/auto-parts/awtozapcast10.webp',
				'/projects/auto-parts/awtozapcast11.webp',
				'/projects/auto-parts/awtozapcast12.webp',
				'/projects/auto-parts/awtozapcast13.webp',
				'/projects/auto-parts/awtozapcast14.webp',
				'/projects/auto-parts/awtozapcast15.webp',
				'/projects/auto-parts/awtozapcast16.webp'
			],
			description:
				'Developed a frontend test project during my internship, including both the website and admin dashboard using Nuxt.js. Focused on building responsive export interfaces, reusable components, and structured application architecture.',
			url: 'https://auto-parts-xi.vercel.app/'
		},
		{
			name: 'SadaZehin',
			mediaFiles: [
				'/projects/sadazehin/sadazehin.webp',
				'/projects/sadazehin/sadazehin2.webp',
				'/projects/sadazehin/sadazehin3.webp',
				'/projects/sadazehin/sadazehin4.webp',
				'/projects/sadazehin/sadazehin5.webp',
				'/projects/sadazehin/sadazehin6.webp',
				'/projects/sadazehin/sadazehin7.webp',
				'/projects/sadazehin/sadazehin8.webp',
				'/projects/sadazehin/sadazehin9.webp',
				'/projects/sadazehin/sadazehin10.webp',
				'/projects/sadazehin/sadazehin11.webp'
			],
			description:
				'Developed both the corporate website and admin dashboard for SadaZehin H.J using Nuxt.js. Collaborated closely with the backend developer to integrate APIs, implement dynamic functionality, and ensure a seamless user experience.'
		},
		{
			name: 'Milli Info',
			mediaFiles: [
				'/projects/milli-info/milli-info-guymenje1.webp',
				'/projects/milli-info/milli-info-guymenje2.webp',
				'/projects/milli-info/milli-info-guymenje3.webp',
				'/projects/milli-info/milli-info-guymenje4.webp',
				'/projects/milli-info/milli-info-guymenje5.webp',
				'/projects/milli-info/milli-info-guymenje6.webp'
			],
			description:
				'Contributed to the development of the new "Güýmenje" page template using Nuxt.js, focusing on responsive UI implementation, component structure, and overall frontend user experience.',
			url: 'https://milli-info.com/mixnews'
		},
		{
			name: 'AwtoTM',
			mediaFiles: [
				'/projects/awtotm/awtotm.webp',
				'/projects/awtotm/awtotm2.webp',
				'/projects/awtotm/awtotm3.webp',
				'/projects/awtotm/awtotm4.webp',
				'/projects/awtotm/awtotm5.webp',
				'/projects/awtotm/awtotm6.webp',
				'/projects/awtotm/awtotm7.webp',
				'/projects/awtotm/awtotm8.webp',
				'/projects/awtotm/awtotm9.webp',
				'/projects/awtotm/awtotm10.webp',
				'/projects/awtotm/awtotm11.webp',
				'/projects/awtotm/awtotm12.webp'
			],
			description:
				'Collaborated on the development of AwtoTM, a car buying and selling platform. Worked on the frontend website template with Nuxt.js and contributed to the admin dashboard development using Vue.js.',
			url: 'https://awto-tm.com/'
		}
	],
	contacts: [
		{
			platform: 'Phone',
			value: '+993 62 545984'
		},
		{
			platform: 'Email',
			value: 'toyliyevshohrat@gmail.com',
			url: 'mailto:toyliyevshohrat@gmail.com'
		},
		{
			platform: 'Address',
			value: 'Ashgabat, Turkmenistan'
		},
		{
			platform: 'GitHub',
			value: 'github.com/Shohrat-Toylyyew',
			url: 'https://github.com/Shohrat-Toylyyew',
			icon: 'github'
		},
		{
			platform: 'GitLab',
			value: 'Sohrat_Toylyyew',
			url: 'https://gitlab.com/Sohrat',
			icon: 'gitlab'
		},
		{
			platform: 'Telegram',
			value: 'SMARTS',
			url: 'https://t.me/smarts1617',
			icon: 'telegram'
		},
		{
			platform: 'Instagram',
			value: 'sohrat_toyliyev',
			url: 'https://www.instagram.com/sohrat_toyliyev',
			icon: 'instagram'
		},
		{
			platform: 'Facebook',
			value: 'Şöhrat Toýlyýew',
			url: 'https://www.facebook.com/share/193EePLwA2/',
			icon: 'facebook'
		}
	],
	languages: [
		{ name: 'Turkmen', percentage: 100 },
		{ name: 'English', percentage: 80 },
		{ name: 'Russian', percentage: 80 }
	]
}
