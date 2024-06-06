import { View, Text, StyleSheet } from "react-native";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

const LoadingScreen = () => {

	let [fontsLoaded] = useFonts({ Montserrat_700Bold })

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Loading . . . </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "#fff",
		fontFamily: "Montserrat_700Bold",
		fontSize: 25,
	}
})

export default LoadingScreen
