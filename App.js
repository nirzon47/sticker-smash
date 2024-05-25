import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import ImageViewer from './ImageViewer'
import Button from './Button'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'

const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
	const [selected, setSelected] = useState(null)

	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
		})

		if (!result.canceled) {
			setSelected(result.assets[0].uri)
		} else {
			alert('You did not select any image.')
		}
	}

	return (
		<View style={styles.container}>
			<ImageViewer placeholder={PlaceholderImage} selected={selected} />
			<View style={styles.footerContainer}>
				<Button
					label='Choose a photo'
					variant='primary'
					onPress={pickImageAsync}
				/>
				<Button label='Use this photo' />
			</View>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		alignItems: 'center',
	},
	footerContainer: {
		flex: 1 / 3,
		alignItems: 'center',
	},
})
