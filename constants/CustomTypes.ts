// Props
export interface HomeCardProps {
	name: string;
	link: string;
	intro: string;
}

export interface PagerProps {
	next: Boolean;
	prev: Boolean;
	getNext: () => Promise<void>;
	getPrev: () => Promise<void>;
}

export interface AnimeEpisodeProps {
	id: string;
	number: number;
	title: string;
	isFiller: boolean;
}

// Types
export interface CSearch<T> {
	currentPage?: number;
	hasNextPage?: boolean;
	totalPages?: number;
	results?: T[];
}

export interface GogoResult {
	id: string;
	title: string;
	url: string;
	image: string;
	releaseDate: string;
	subOrDub: string;
}

export interface GogoAnimeInfo {
	id: string;
	title: string;
	genres: string[];
	totalEpisodes: number;
	image: string;
	releaseDate: string;
	description: string;
	subOrDub: string;
	type: string;
	status: string;
	otherName: string;
	episodes: [
		{
			id: string;
			number: number;
			url: string;
		}
	];
}

export interface GogoEpisodeInfo {
	headers: {
		Referer: string;
	};
	sources: [
		{
			url: string;
			isM3U8: boolean;
			quality: string;
		}
	]
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

export interface ZoroAnimeInfo<T> {
	id: string;
	title: string;
	image: string;
	description?: string;
	type?: string;
	url?: string;
	recommendations?: T[];
	relatedAnime?: T[];
	subOrDub?: string;
	hasSub?: boolean;
	hasDub?: boolean;
	totalEpisodes?: number;
	episodes: [
		{
			id: string;
			number: number;
			title: string;
			isFiller: boolean;
			url: string;
		}
	];
}

export interface ZoroEpisodeInfo {
	sources: [
		{
			url: string,
			type: string,
			isM3U8: boolean
		}
	],
	subtitles: [
		{
			url: string,
			language: string
		}
	]
}
