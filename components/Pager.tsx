import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { PagerProps } from "@/constants/CustomTypes";

const Pager = ( props: PagerProps ) => {
	let theme = useTheme();
	const styles = StyleSheet.create({
		container: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			width: "100%",
		},
		active: {
			backgroundColor: theme.colors.primaryContainer,
		},
		inactive: {
			backgroundColor: "gray",
		},
		button: {
			padding: 5,
			color: "white",
		},
	})


	return (
		<View style={[ styles.container ]}>
			<Button style={[ styles.button, props.prev ? styles.active : styles.inactive ]} onPress={() => props.getPrev()} >Prev</Button>
			<Button style={[ styles.button, props.next ? styles.active : styles.inactive ]} onPress={() => props.getNext()} >Next</Button>
		</View>
	)
}


export default Pager;
