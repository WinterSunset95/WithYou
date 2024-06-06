import type { HomeCardProps } from "@/constants/CustomTypes"

import { useTheme } from "react-native-paper"
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

import { Image } from "expo-image"
import { Link } from "expo-router"
import { View, Text, StyleSheet } from "react-native"
import { Button } from "react-native-paper"

export const HomeCard = (props: HomeCardProps) => {
	let theme = useTheme()
	let [fontsLoaded] = useFonts({ Montserrat_400Regular })

	return (
		<View style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			rowGap: 10,
			width: "60%",
			borderRadius: 5,
			padding: 15,
			position: "relative",
			backgroundColor: theme.colors.primaryContainer,
		}}>
			<Text style={[styles.font, {color: "#fff", fontSize: 25 }]}>{props.name}</Text>
			<Text style={[ styles.font, {color: "#fff", fontSize: 15 }]} >{props.intro}</Text>
			<Link style={styles.link} href={props.link}></Link>
		</View>
	)
}

const styles = StyleSheet.create({
	link: {
		position: "absolute",
		width: "100%",
		height: "100%",
		zIndex: 10,
	
	},
	font: {
		width: "100%",
		fontFamily: "Montserrat_400Regular",
		textAlign: "center",
		display: "flex",
	},
})
