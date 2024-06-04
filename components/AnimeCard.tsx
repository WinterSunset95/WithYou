import type { ZoroResult } from "@/constants/CustomTypes";
import { useTheme } from "react-native-paper";
import { useFonts, Montserrat_300Light } from "@expo-google-fonts/montserrat";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";


const AnimeCard = (anime: ZoroResult) => {

	let theme = useTheme();
	let [fontsLoaded] = useFonts({ Montserrat_300Light });

	return (
		<View style={[styles.container, { backgroundColor: theme.colors.backdrop }]}>
			<View style={styles.image} >
				<Image
					source={{ uri: anime.image }}
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</View>
			<Text style={styles.title}>{anime.title.length >= 30 ? anime.title.slice(0, 30) + " ..." : anime.title }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		width: "30%",
		aspectRatio: 9/16,
		borderRadius: 5,
		overflow: "hidden",
		flexDirection: "column",
		position: "relative",
	},

	link: {
		position: "absolute",
		width: "100%",
		height: "100%",
		zIndex: 10,
	},

	image: {
		width: "100%",
		height: "100%",
		overflow: "hidden"
	},

	title: {
		color: "#fff",
		fontFamily: "Montserrat_300Light",
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		padding: 5,
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		textAlign: "center",
	}
})

export default AnimeCard
