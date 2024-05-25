import { Image, StyleSheet, View } from 'react-native'

const ImageViewer = ({ placeholder, selected }) => {
	const imageSource = selected ? { uri: selected } : placeholder

	return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
})

export default ImageViewer
