import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'

import ImageViewer from './ImageViewer'
import Button from './Button'
import IconButton from './components/buttons/IconButton'
import CircleButton from './components/buttons/CircleButton'
import EmojiPicker from './components/emojis/EmojiPicker'
import EmojiList from './components/emojis/EmojiList'
import EmojiSticker from './components/emojis/EmojiSticker'

const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
	const [selected, setSelected] = useState(null)
	const [showOptions, setShowOptions] = useState(false)
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [selectedEmoji, setSelectedEmoji] = useState(null)

	const onReset = () => {
		setShowOptions(false)
		setSelected(null)
		setSelectedEmoji(null)
	}

	const onAddSticker = () => {
		setIsModalVisible(true)
	}

	const onSaveImageAsync = async () => {
		setIsModalVisible(false)
	}

	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
		})

		if (!result.canceled) {
			setSelected(result.assets[0].uri)
			setShowOptions(true)
		} else {
			alert('You did not select any image.')
		}
	}

	return (
		<GestureHandlerRootView style={styles.container}>
			<ImageViewer placeholder={PlaceholderImage} selected={selected} />
			{selectedEmoji && (
				<EmojiSticker imageSize={40} stickerSource={selectedEmoji} />
			)}
			{showOptions ? (
				<View style={styles.optionsContainer}>
					<View style={styles.optionsRow}>
						<IconButton icon='refresh' label='Reset' onPress={onReset} />
						<CircleButton onPress={onAddSticker} />
						<IconButton
							icon='save-alt'
							label='Save'
							onPress={onSaveImageAsync}
						/>
					</View>
				</View>
			) : (
				<View style={styles.footerContainer}>
					<Button
						variant='primary'
						label='Choose a photo'
						onPress={pickImageAsync}
					/>
					<Button
						label='Use this photo'
						onPress={() => setShowOptions(true)}
					/>
				</View>
			)}

			<EmojiPicker isVisible={isModalVisible} onClose={onSaveImageAsync}>
				<EmojiList
					onSelect={setSelectedEmoji}
					onCloseModal={() => setIsModalVisible(false)}
				/>
			</EmojiPicker>
			<StatusBar style='auto' />
		</GestureHandlerRootView>
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
	optionsContainer: {
		position: 'absolute',
		bottom: 80,
	},
	optionsRow: {
		alignItems: 'center',
		flexDirection: 'row',
	},
})
