import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import ImageViewer from './ImageViewer'

export default function App() {
	return (
		<View style={styles.container}>
			<ImageViewer />
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
})
