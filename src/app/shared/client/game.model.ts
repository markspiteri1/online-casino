export interface Game {
	id: number;
	slug: string;
	title: string;
	tag: "hot" | "trending" | null;
	providerName: string;
	thumb: {
		url: string;
	};
}
