import type { AVPlaybackStatus } from "expo-av";
import type { VideoRef } from "react-native-video";
import { useRef, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useTheme } from "react-native-paper";

export default function VideoPlayer(props: { uri: string }) {
	let theme = useTheme();

	const styles = StyleSheet.create({
		player: {
			width: "100%",
			height: "100%",
			backgroundColor: theme.colors.surface,
			objectFit: "contain",
		},

	})

	const video = useRef(null);

	return (
			<Video
				ref={video}
				style={styles.player}
				source={{ uri: props.uri }}
				useNativeControls
				resizeMode={ResizeMode.CONTAIN}
			/>
	)
}

