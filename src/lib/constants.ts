import {
	pomodoro,
	pomodoroCover,
	pomodoroBottom,
	pomodoroTop,
	portfolioCover,
	list,
	homepage,
	aboutme,
	mpwtop,
} from '..';
import type { Project } from './interfaces';

export const projects: Project[] = [
	{
		color: '#1e213f',
		title: 'pomodoro',
		summary:
			'A responsive web application that was built as a pair project as a way to practice scrum principles in a team setting.',
		background:
			'This project was a front-end challenge from Frontend Mentor in which I worked with a partner on. Our challenge was to build a responsive pomodoro timer web application and implement the provided requirements. We took this project as an opportunity to implement principles of scrum in our planning and development process, as well as practice working in a group setting.',
		specs: {
			type: 'Pair project / Front end development',
			tools: 'Next.js / Tailwind / Typescript',
		},
		href: 'projects/pomodoro',
		link: 'https://github.com/Evomatic/pomodoro-app',
		images: {
			list: {
				mobileImgSpecs: { src: pomodoro },
				tabletImgSpecs: { src: pomodoro },
				desktopImgSpecs: { src: pomodoro, height: 'auto', width: 500 },
				alt: 'pomodoro project list image.',
			},
			cover: {
				mobileImgSpecs: { src: pomodoroCover },
				tabletImgSpecs: { src: pomodoroCover },
				desktopImgSpecs: { src: pomodoroCover, height: 'auto' },
				alt: 'pomodoro project cover image.',
			},
			preview: {
				top: {
					mobileImgSpecs: { src: pomodoroTop },
					tabletImgSpecs: { src: pomodoroTop },
					desktopImgSpecs: { src: pomodoroTop },
					alt: 'pomodoro menu open.',
				},
				bottom: {
					mobileImgSpecs: { src: pomodoroBottom },
					tabletImgSpecs: { src: pomodoroBottom },
					desktopImgSpecs: { src: pomodoroBottom },
					alt: 'pomodoro alternative theme.',
				},
			},
		},
	},
	{
		color: '',
		title: 'Portfolio',
		summary:
			'A frontendmentor challenge in which I had to build a responsive website. By following the requirements and using the provided figma design, I built the website accordingly',
		href: 'projects/Portfolio',
		link: 'https://github.com/Evomatic/portfolio/tree/frontendmentor',
		background:
			'I had always wanted to build my own portfolio website but could never decide on how I wanted the design to look. Luckily this frontendmentor challenge provided me with a minimalist design that I was keen to use for my own portfolio. I decided to use Astro as my web framework because I knew I wanted to build my portfolio with as little Javascript as possible, and Astro is great for static driven content.',
		specs: {
			type: 'Interaction Design / Front End Development',
			tools: 'Astro / HTMX / CSS / Typescript',
		},
		images: {
			list: {
				mobileImgSpecs: { src: aboutme },
				tabletImgSpecs: { src: aboutme },
				desktopImgSpecs: { src: aboutme, height: 'auto', width: 500 },
				alt: 'portfolio list image.',
			},
			cover: {
				mobileImgSpecs: { src: mpwtop, height: 'auto' },
				tabletImgSpecs: { src: mpwtop, width: '100%', height: 'auto' },
				desktopImgSpecs: { src: mpwtop, width: 'auto', height: 250 },
				alt: 'portfolio project cover image.',
			},
			preview: {
				top: {
					mobileImgSpecs: { src: list },
					tabletImgSpecs: { src: list },
					desktopImgSpecs: { src: list },
					alt: 'portfolio project top preview image.',
				},
				bottom: {
					mobileImgSpecs: { src: homepage },
					tabletImgSpecs: { src: homepage },
					desktopImgSpecs: { src: homepage },
					alt: 'portfolio project top preview image.',
				},
			},
		},
	},
	// {
	// 	title: 'fylo',
	// 	summary:
	// 		'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
	// 	href: 'projects/fylo',
	// 	background:
	// 		'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
	// 	specs: {
	// 		type: 'Interaction Design / Front End Development',
	// 		tools: 'HTML / CSS',
	// 	},
	// 	images: {
	// 		list: {
	// 			mobileImgSpecs: { src: fyloListMobile },
	// 			tabletImgSpecs: { src: fyloListTablet },
	// 			desktopImgSpecs: { src: fyloListDesktop },
	// 			alt: 'The landing page of the fylo project.',
	// 		},
	// 		cover: {
	// 			mobileImgSpecs: { src: fyloCoverMobile },
	// 			tabletImgSpecs: { src: fyloCoverTablet },
	// 			desktopImgSpecs: { src: fyloCoverDesktop },
	// 			alt: 'portfolio project cover image.',
	// 		},
	// 		preview: {
	// 			top: {
	// 				mobileImgSpecs: { src: fyloPreviewMobileT },
	// 				tabletImgSpecs: { src: fyloPreviewTabletT },
	// 				desktopImgSpecs: { src: fyloPreviewDesktopT },
	// 				alt: 'portfolio project top preview image.',
	// 			},
	// 			bottom: {
	// 				mobileImgSpecs: { src: fyloPreviewMobileB },
	// 				tabletImgSpecs: { src: fyloPreviewTabletB },
	// 				desktopImgSpecs: { src: fyloPreviewDesktopB },
	// 				alt: 'portfolio project top preview image.',
	// 			},
	// 		},
	// 	},
	// },
];
