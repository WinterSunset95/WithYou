import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container} >
      <Text>Welcome to expo</Text>
	  <Text>This is the index page</Text>
	  <Link style={styles.link} href="/anime">Watch Anime</Link>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 20
	},
	link: {
		padding: 20,
		backgroundColor: "blue",
		color: "white",
		borderRadius: 5
	}
})

