import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import { ThemeContext } from '../App';

const data = [
  { key: 'Appointments' },
  { key: 'Trips' },
  { key: 'Passwords' },
  { key: 'Pitches' },
  { key: 'Updates' },
];

const cardData = [
  { name: 'brynn', image: require('../assets/image20-vmake.png') },
  { name: 'thot leader', image: require('../assets/image20-vmake.png') },
  { name: 'jsa', image: require('../assets/image20-vmake.png') },
  { name: 'talhaconcepts', image: require('../assets/image20-vmake.png') },
];

export default function ListsScreen() {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, theme === 'dark' && styles.darkText]}>Limited supply! It's like digital gold!</Text>
        <Text style={[styles.headerText, theme === 'dark' && styles.darkText]}>5 months ago</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={[styles.item, theme === 'dark' && styles.darkText]}>{item.key}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
      <View style={styles.buttonContainer}>
        <Button title="Button1" onPress={() => Alert.alert('Button1 pressed')} />
        <Button title="Button2" onPress={() => Alert.alert('Button2 pressed')} />
      </View>
      <View style={styles.card}>
        <Text style={[styles.cardTitle, theme === 'dark' && styles.darkText]}>CARD WITH DIVIDER</Text>
        {cardData.map((item) => (
          <View key={item.name} style={styles.cardItem}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={[styles.cardText, theme === 'dark' && styles.darkText]}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    marginBottom: 16,
  },
  headerText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  cardTitle: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cardImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  cardText: {
    fontSize: 16,
  },
});
