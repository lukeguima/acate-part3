import {
  View,
  Text,
  Image
} from 'react-native';

import styles from './style';

import { StatusBar } from 'expo-status-bar';

import { IProps } from '../../type'

export default function Card({ card }: IProps) {
  return (
    <View
      style={styles.card}
    >

      <StatusBar
        backgroundColor="#E8E8E8"
        animated={true}
      />

      <Image
        source={{ uri: card.image }}
        style={styles.image}
      />
      <View
        style={styles.imageDescriptionContainer}
      >
        <Text
          style={styles.text}
        >
          {`${card.name}, ${card.gender}`}
        </Text>
      </View>

    </View>
  )
}