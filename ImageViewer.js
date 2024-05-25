import { Image, StyleSheet, View } from 'react-native'

const ImageViewer = ({ placeholder, selected }) => {
	const imageSource = selected ? { uri: selected } : placeholder

	return (
		<View style={styles.imageContainer}>
			<Image source={imageSource} style={styles.image} />
		</View>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		paddingTop: 58,
	},
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
})

export default ImageViewer
