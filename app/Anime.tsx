import type { CSearch, ZoroResult } from "@/constants/CustomTypes";
import { topAnime } from "@/constants/Config";
import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import AnimeList from "@/components/AnimeList";
import { useTheme } from "react-native-paper";

export default function Anime() {

	const theme = useTheme();
	const [topAnimeList, setTopAnimeList] = useState<CSearch<ZoroResult>>();

	async function fetchTopAnime() {
		try {
			let res = await fetch(topAnime);
			let data = await res.json();
			setTopAnimeList(data);
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		fetchTopAnime();
	}, [])

	return (
		<View style={{ padding: 10, backgroundColor: theme.colors.background }}>
				<AnimeList {...topAnimeList} />
		</View>
	)
}
