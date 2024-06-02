export interface ImageSpec {
	src: string | ImageMetadata;
	height?: number | string;
	width?: number | string;
}

type Image = {
	mobileImgSpecs: ImageSpec;
	tabletImgSpecs: ImageSpec;
	desktopImgSpecs: ImageSpec;
	alt: string;
};

type Images = {
	list: Image;
	cover: Image;
	preview: { top: Image; bottom: Image };
};

export interface Project {
	images: Images;
	title: string;
	summary: string;
	href: string;
	background: string;
	specs: { type: string; tools: string };
}
