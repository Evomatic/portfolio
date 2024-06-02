import {
	bookmarkCoverDesktop,
	bookmarkCoverMobile,
	bookmarkCoverTablet,
	bookmarkListDesktop,
	bookmarkListMobile,
	bookmarkListTablet,
	bookmarkPreviewDesktopB,
	bookmarkPreviewDesktopT,
	bookmarkPreviewMobileB,
	bookmarkPreviewMobileT,
	bookmarkPreviewTabletB,
	bookmarkPreviewTabletT,
	fyloCoverDesktop,
	fyloCoverMobile,
	fyloCoverTablet,
	fyloListDesktop,
	fyloListMobile,
	fyloListTablet,
	fyloPreviewDesktopB,
	fyloPreviewDesktopT,
	fyloPreviewMobileB,
	fyloPreviewMobileT,
	fyloPreviewTabletB,
	fyloPreviewTabletT,
	insureCoverDesktop,
	insureCoverMobile,
	insureCoverTablet,
	insureListDesktop,
	insureListMobile,
	insureListTablet,
	insurePreviewDesktopB,
	insurePreviewDesktopT,
	insurePreviewMobileB,
	insurePreviewMobileT,
	insurePreviewTabletB,
	insurePreviewTabletT,
	manageCoverDesktop,
	manageCoverMobile,
	manageCoverTablet,
	manageListDesktop,
	manageListMobile,
	manageListTablet,
	managePreviewDesktopB,
	managePreviewDesktopT,
	managePreviewMobileB,
	managePreviewMobileT,
	managePreviewTabletB,
	managePreviewTabletT,
} from '..';
import type { Project } from './interfaces';

export const projects: Project[] = [
	{
		title: 'manage',
		summary:
			'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
		background:
			'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
		specs: {
			type: 'Interaction Design / Front End Development',
			tools: 'HTML / CSS / JS',
		},
		href: 'projects/manage',
		images: {
			list: {
				mobileImgSpecs: { src: manageListMobile },
				tabletImgSpecs: { src: manageListTablet },
				desktopImgSpecs: { src: manageListDesktop },
				alt: 'manage project list image.',
			},
			cover: {
				mobileImgSpecs: { src: manageCoverMobile },
				tabletImgSpecs: { src: manageCoverTablet },
				desktopImgSpecs: { src: manageCoverDesktop },
				alt: 'manage project cover image.',
			},
			preview: {
				top: {
					mobileImgSpecs: { src: managePreviewMobileT },
					tabletImgSpecs: { src: managePreviewTabletT },
					desktopImgSpecs: { src: managePreviewDesktopT },
					alt: 'manage project preview image top.',
				},
				bottom: {
					mobileImgSpecs: { src: managePreviewMobileB },
					tabletImgSpecs: { src: managePreviewTabletB },
					desktopImgSpecs: { src: managePreviewDesktopB },
					alt: 'manage project preview image bottom.',
				},
			},
		},
	},
	{
		title: 'bookmark',
		summary:
			'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
		href: 'projects/bookmark',
		background:
			'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
		specs: {
			type: 'Interaction Design / Front End Development',
			tools: 'HTML / CSS / JS',
		},
		images: {
			list: {
				mobileImgSpecs: { src: bookmarkListMobile },
				tabletImgSpecs: { src: bookmarkListTablet },
				desktopImgSpecs: { src: bookmarkListDesktop },
				alt: 'bookmark project list image.',
			},
			cover: {
				mobileImgSpecs: { src: bookmarkCoverMobile },
				tabletImgSpecs: { src: bookmarkCoverTablet },
				desktopImgSpecs: { src: bookmarkCoverDesktop },
				alt: 'bookmark project cover image.',
			},
			preview: {
				top: {
					mobileImgSpecs: { src: bookmarkPreviewMobileT },
					tabletImgSpecs: { src: bookmarkPreviewTabletT },
					desktopImgSpecs: { src: bookmarkPreviewDesktopT },
					alt: 'bookmark project top preview image.',
				},
				bottom: {
					mobileImgSpecs: { src: bookmarkPreviewMobileB },
					tabletImgSpecs: { src: bookmarkPreviewTabletB },
					desktopImgSpecs: { src: bookmarkPreviewDesktopB },
					alt: 'bookmark project top preview image.',
				},
			},
		},
	},
	{
		title: 'insure',
		summary:
			'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
		href: 'projects/insure',
		background:
			'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
		specs: {
			type: 'Interaction Design / Front End Development',
			tools: 'HTML / CSS / JS',
		},
		images: {
			list: {
				mobileImgSpecs: { src: insureListMobile },
				tabletImgSpecs: { src: insureListTablet },
				desktopImgSpecs: { src: insureListDesktop },
				alt: 'insure project list image.',
			},
			cover: {
				mobileImgSpecs: { src: insureCoverMobile },
				tabletImgSpecs: { src: insureCoverTablet },
				desktopImgSpecs: { src: insureCoverDesktop },
				alt: 'insure project cover image.',
			},
			preview: {
				top: {
					mobileImgSpecs: { src: insurePreviewMobileT },
					tabletImgSpecs: { src: insurePreviewTabletT },
					desktopImgSpecs: { src: insurePreviewDesktopT },
					alt: 'insure project top preview image.',
				},
				bottom: {
					mobileImgSpecs: { src: insurePreviewMobileB },
					tabletImgSpecs: { src: insurePreviewTabletB },
					desktopImgSpecs: { src: insurePreviewDesktopB },
					alt: 'insure project top preview image.',
				},
			},
		},
	},
	{
		title: 'fylo',
		summary:
			'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
		href: 'projects/fylo',
		background:
			'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
		specs: {
			type: 'Interaction Design / Front End Development',
			tools: 'HTML / CSS',
		},
		images: {
			list: {
				mobileImgSpecs: { src: fyloListMobile },
				tabletImgSpecs: { src: fyloListTablet },
				desktopImgSpecs: { src: fyloListDesktop },
				alt: 'The landing page of the fylo project.',
			},
			cover: {
				mobileImgSpecs: { src: fyloCoverMobile },
				tabletImgSpecs: { src: fyloCoverTablet },
				desktopImgSpecs: { src: fyloCoverDesktop },
				alt: 'insure project cover image.',
			},
			preview: {
				top: {
					mobileImgSpecs: { src: fyloPreviewMobileT },
					tabletImgSpecs: { src: fyloPreviewTabletT },
					desktopImgSpecs: { src: fyloPreviewDesktopT },
					alt: 'insure project top preview image.',
				},
				bottom: {
					mobileImgSpecs: { src: fyloPreviewMobileB },
					tabletImgSpecs: { src: fyloPreviewTabletB },
					desktopImgSpecs: { src: fyloPreviewDesktopB },
					alt: 'insure project top preview image.',
				},
			},
		},
	},
];
