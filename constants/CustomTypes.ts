// Props
export interface HomeCardProps {
	name: string;
	link: string;
	intro: string;
}

// Types
export interface CSearch<T> {
	currentPage?: number;
	nextPage?: number;
	totalPages?: number;
	results?: T[];
}

export interface ZoroResult {
	id: string;
	title: string;
	url?: string;
	image?: string;
	duration?: string;
	japaneseTitle?: string;
	type?: string;
	nsfw?: boolean;
	sub?: number;
	dub?: number;
	episodes?: number;
}
