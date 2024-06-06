import { PaperProvider } from "react-native-paper";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { useTheme } from "react-native-paper";

export default function RootLayout() {
	let [fontsLoaded, fontError] = useFonts({
		Montserrat_500Medium,
	});

	let theme = useTheme();

	if (!fontsLoaded && !fontError) {
		return null;
	};

	return (
		<PaperProvider>
			<Stack>
				<Stack.Screen name="index" options={{
					title: "Home",
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
					headerTintColor: "#fff",
					headerTitleStyle: styles.font,
				}}/>
				<Stack.Screen name="Anime" options={{
					title: "Anime",
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
					headerTintColor: "#fff",
					headerTitleStyle: styles.font,
				}} />
				<Stack.Screen name="Movie" options={{
					title: "Movie",
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
					headerTintColor: "#fff",
					headerTitleStyle: styles.font,
				}}/>
				<Stack.Screen name="TV" options={{
					title: "TV",
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
					headerTintColor: "#fff",
					headerTitleStyle: styles.font,
				}}/>
				<Stack.Screen name="Anime/[id]" options={{
					title: "Watch",
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
					headerTintColor: "#fff",
					headerTitleStyle: styles.font,
				}} />
			</Stack>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	font: {
		fontFamily: 'Montserrat_500Medium',
	},
})
