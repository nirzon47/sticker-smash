import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import ImageViewer from './ImageViewer'
import Button from './Button'

export default function App() {
	return (
		<View style={styles.container}>
			<ImageViewer />
			<View style={styles.footerContainer}>
				<Button label='Choose a photo' variant='primary' />
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
