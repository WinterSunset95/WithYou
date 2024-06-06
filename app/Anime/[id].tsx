import type { ZoroAnimeInfo, ZoroResult, ZoroEpisodeInfo, GogoAnimeInfo, GogoResult, GogoEpisodeInfo } from "@/constants/CustomTypes";
import { animeDetails, streamingLinks } from "@/constants/Config";
import { useState, useEffect } from "react";
import {
	View,
	Text, 
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity
} from "react-native";
import { useLocalSearchParams, useGlobalSearchParams, Link } from "expo-router";
import { useTheme } from "react-native-paper";
import { useFonts, Montserrat_300Light } from "@expo-google-fonts/montserrat";
import VideoPlayer from "@/components/VideoPlayer";

const AnimeInfo = () => {
	let theme = useTheme();
	let [fontLoaded] = useFonts({ Montserrat_300Light });
	const styles = StyleSheet.create({

		scrollview: {
			flex: 1,
			width: "100%",
			backgroundColor: theme.colors.background,

		},

		container: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			padding: 10,
			rowGap: 10,
		},

		topContainer: {
			flex: 1,
			display: "flex",
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},

		text: {
			fontFamily: "Montserrat_300Light",
			color: "#fff"
		},

		videoContainer: {
			flex: 1,
			width: "100%",
			minHeight: 200,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},

		imageContainer: {
			width: "60%",
			aspectRatio: 9/16,
			borderRadius: 10,
			overflow: "hidden",
		},

		image: {
			width: "100%",
			height: "100%",
			objectFit: "cover"
		},

		info: {
			display: "flex",
			flexDirection: "column",
			width: "100%",
			rowGap: 10,
		},

		infoTitle: {
			fontSize: 25,
		},

		highlights: {
			display: "flex",
			flexDirection: "row",
			rowGap: 5,
			columnGap: 5
		},

		infoHighlight: {
			padding: 10,
			backgroundColor: theme.colors.primaryContainer,
			borderRadius: 5,
		},

		episodesScrollViewContainer: {
			padding: 10,
			borderColor: theme.colors.secondary,
			borderWidth: 1,
			borderRadius: 5,
			flex: 1,
			width: "100%"
		},

		episodesScrollView: {
			height: "auto",
			maxHeight: 200,
		},

		episodesList: {
			display: "flex",
			flexDirection: "column",
			rowGap: 10,
		},

		episode: {
			padding: 10,
			borderRadius: 5,
			backgroundColor: theme.colors.primaryContainer,
		},

		episodePlaying: {
			padding: 10,
			borderRadius: 5,
			backgroundColor: theme.colors.tertiaryContainer,
		},

	})

	let { id } = useLocalSearchParams();

	const [animeInfo, setAnimeInfo] = useState<GogoAnimeInfo>();
	const [source, setSource] = useState<string>();
	const [currEp, setCurrEp] = useState<number>();

	async function getAnimeInfo() {
		try {
			let link: string;
			if (typeof(id) === "string") {
				link = animeDetails(id);
			} else {
				link = animeDetails(id![0]);
			}
			console.log(link)
			let res = await fetch(link);
			let json = await res.json();
			setAnimeInfo(json);
			console.log(animeInfo?.episodes)
		} catch (err) {
			alert("An unknown error occured, restart the app")
		}
	}

	async function getEpisodeDetails(episodeId: string, epNumber: number) {
		let bakSource = source;
		try {
			setSource(undefined);
			let link = streamingLinks(episodeId);
			let res = await fetch(link);
			let json: GogoEpisodeInfo = await res.json();
			json.sources.map((source) => {
				if (source.quality == "default") {
					setSource(source.url);
					setCurrEp(epNumber);
					return;
				}
			})
		} catch (err) {
			alert("An error occured while fetching episode details")
			setSource(bakSource);
			console.log(err)
		}
	}

	useEffect(() => {
		getAnimeInfo();
	}, [])

	if (!animeInfo) {
		return (
			<View style={styles.container}>
				<Text>Loading . . .</Text>
			</View>
		)
	}

	return (
		<ScrollView style={styles.scrollview} nestedScrollEnabled>
			<View style={styles.container}>

				<View style={styles.topContainer}>
					{source ?

					<View style={styles.videoContainer}>
						<VideoPlayer uri={source} />
					</View>

					:

					<View style={styles.imageContainer}>
						<Image
							style={styles.image}
							source={{ uri: animeInfo.image }}
						/>
					</View>

					}
				</View>

				<View style={styles.info}>
					<Text style={[ styles.text, styles.infoTitle ]}>{animeInfo.title}</Text>
					<View style={styles.highlights}>
						<Text style={[ styles.text, styles.infoHighlight ]} >{animeInfo.type}</Text>
						{animeInfo.subOrDub == "dub" ? 
							<Text style={[ styles.text, styles.infoHighlight ]}>Dub</Text>
							: "" }
						{animeInfo.subOrDub == "sub" ? 
							<Text style={[ styles.text, styles.infoHighlight ]}>Sub</Text>
							: "" }
					</View>
				</View>
				<Text style={[ styles.text ]} >{animeInfo.description}</Text>

				<View style={styles.episodesScrollViewContainer} >
				<ScrollView style={styles.episodesScrollView} nestedScrollEnabled>
				<View style={styles.episodesList} >
					{animeInfo.episodes?.map((episode) => {
						return (
							<TouchableOpacity onPress={() => getEpisodeDetails(episode.id, episode.number)}
								style={episode.number == currEp ? styles.episodePlaying : styles.episode}>
								<Text style={styles.text}>Episode {episode.number}</Text>
							</TouchableOpacity>
						)
					})}
				</View>
				</ScrollView>
				</View>

			</View>
		</ScrollView>
	)
}

export default AnimeInfo;
