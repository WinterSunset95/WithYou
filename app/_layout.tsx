import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";

export default function RootLayout() {
	let [fontsLoaded, fontError] = useFonts({
		Montserrat_500Medium,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	};

	return (
		<Stack>
			<Stack.Screen name="index" />
			<Stack.Screen name="anime" />
		</Stack>
	);
}

const styles = StyleSheet.create({
	font: {
		fontFamily: 'Montserrat_500Medium',
	},
})
