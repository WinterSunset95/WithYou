import type { CSearch, ZoroResult } from "@/constants/CustomTypes";
import { topAnime } from "@/constants/Config";
import { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { useFonts, Montserrat_300Light } from "@expo-google-fonts/montserrat";

import { Text, View, StyleSheet, ScrollView } from "react-native";

import { HomeCard } from "@/components/HomeCard";

export default function Index() {
	// Declare variables
	const theme = useTheme();
	useFonts({Montserrat_300Light})
	const styles = StyleSheet.create({
		container: {
			display: "flex",
			flex: 1,
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			rowGap: 10,
			padding: 10,
			fontFamily: "Montserrat_300Light",
			backgroundColor: theme.colors.background
		}
	})


	return (
		<View style={[ styles.container ]}>
			<HomeCard name="Anime" link="/Anime" intro="More anime than you will ever find" />
			<HomeCard name="Movie" link="/Movie" intro="One of the largest collection of movies from TMDB" />
			<HomeCard name="TV" link="/TV" intro="When anime is not enough to satisfy your entertainment needs" />
		</View>
	);
}

