import type { CSearch, ZoroResult, GogoResult } from "@/constants/CustomTypes";
import { topAnime, searchAnime } from "@/constants/Config";
import { Text, View, TextInput } from "react-native";
import { useState, useEffect } from "react";
import AnimeList from "@/components/AnimeList";
import Pager from "@/components/Pager";
import LoadingScreen from "@/components/LoadingScreen";
import { useTheme } from "react-native-paper";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

export default function Anime() {
	const theme = useTheme();
	const [fontsLoaded] = useFonts({ Montserrat_400Regular });

	const [animeResults, setAnimeResults] = useState<CSearch<GogoResult>>();
	const [previousPage, setPreviousPage] = useState<CSearch<GogoResult>>();
	const [nextPage, setNextPage] = useState<CSearch<GogoResult>>();
	const [hasNextPage, setHasNextPage] = useState(false);
	const [hasPrevPage, setHasPrevPage] = useState(false);

	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);

	async function fetchTopAnime() {
		try {
			let res = await fetch(topAnime);
			let data = await res.json();
			setAnimeResults(data);
		} catch (err) {
			console.log(err);
		}
	}

	async function queryAnime() {
		try {
			setAnimeResults(undefined);
			let link = searchAnime(search, page);
			let res = await fetch(link);
			let data = await res.json();
			setAnimeResults(data);
		} catch (err) {
			console.log(err);
		}
	}

	async function getNextPage() {
		// If animeResults is undefined, or if there is no next page (from response), exit the function
		if (!animeResults) return;
		console.log("We have animeResults")
		if (!animeResults.hasNextPage) return;
		console.log("We have a next page")

		// If there is already a nextPage state
		if (nextPage) {
			console.log("There is already a nextPage state")
			setPreviousPage(animeResults);
			setAnimeResults(nextPage);
			setNextPage(undefined);
			return;
		};

		// If there is no nextPage state
		setPreviousPage(animeResults);
		try {
			setAnimeResults(undefined);
			let link = searchAnime(search, animeResults.currentPage! + 1)
			let res = await fetch(link);
			let data = await res.json();
			setAnimeResults(data);
		}
		catch (err) {
			setAnimeResults(previousPage)
			setPreviousPage(undefined)
			alert("An error occured")
			console.log(err)
		}
	}

	async function getPreviousPage() {
		// If animeResults is undefined, or if there is no previous page (from response), exit the function
		if (!animeResults) return;
		console.log("We have animeResults");
		if (!animeResults.currentPage) return;
		if (animeResults.currentPage === 1) return;
		console.log("We have a previous page");

		// If there is already a previousPage state
		if (previousPage) {
			console.log("There seems to be a previousPage state")
			setNextPage(animeResults);
			setAnimeResults(previousPage);
			setPreviousPage(undefined);
			return;
		};

		// If there is no previousPage state
		console.log("There seems to be no previousPage state")
		setNextPage(animeResults);
		try {
			setAnimeResults(undefined);
			let link = searchAnime(search, animeResults.currentPage - 1)
			let res = await fetch(link);
			let data = await res.json();
			setAnimeResults(data);
		}
		catch (err) {
			setAnimeResults(nextPage)
			setNextPage(undefined)
			alert("An error occured")
			console.log(err)
		}
	}

	useEffect(() => {
		fetchTopAnime();
	}, [])

	useEffect(() => {
		if (!animeResults) return;
		animeResults.hasNextPage ? setHasNextPage(true) : setHasNextPage(false);
		animeResults.currentPage == 1 ? setHasPrevPage(false) : setHasPrevPage(true);
		console.log("status: ", hasNextPage, hasPrevPage);
		console.log("status2: ", animeResults.hasNextPage, animeResults.currentPage)
	}, [animeResults])

	return (
		<View style={{ flex: 1, rowGap: 10, padding: 10, backgroundColor: theme.colors.background, display: "flex" }}>
			<TextInput
				style={{
					width: "100%",
					padding: 10,
					borderWidth: 1,
					borderColor: theme.colors.primary,
					borderRadius: 5,
					color: "#fff"
				}}
				placeholder="Search for anime"
				placeholderTextColor={"#808080"}
				value={search}
				onChangeText={text => setSearch(text)}
				onSubmitEditing={() => queryAnime()}
			/>
			{animeResults ? <AnimeList {...animeResults} /> : <LoadingScreen /> }
			<Pager next={hasNextPage} prev={hasPrevPage} getNext={getNextPage} getPrev={getPreviousPage} />
		</View>
	)
}
