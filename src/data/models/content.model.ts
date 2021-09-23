import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IContent {
	frontmatter: {
		additional: { info: { note: string } };
		id: number;
		image: IGatsbyImageData;
		link: string;
		repo: string;
		section: string;
		tag: string;
		title: string;
	};
	html: string;
}

export interface IContentData {
	[x: string]: {
		data: IContent[];
	};
}
