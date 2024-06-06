import type { CSearch, GogoResult } from "@/constants/CustomTypes"
import AnimeCard from "./AnimeCard"
import { Text } from "react-native-paper"
import { ScrollView, View, StyleSheet, FlatList } from "react-native"

const AnimeList = (list: CSearch<GogoResult>) => {
	const styles = StyleSheet.create({
		container: {
			display: "flex",
			flex: 1,
			flexWrap: "wrap",
			flexDirection: "row",
			columnGap: 10,
			rowGap: 10,
			justifyContent: "center",
			alignItems: "center",
		}
	})

	return (
		<ScrollView>
			<View style={styles.container}>
				{list.results?.map((anime) => {
					return <AnimeCard {...anime} key={anime.id} />
				})}
			</View>
		</ScrollView>
	)
}

export default AnimeList
