import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function UserDetailsScreen({ route }) {
  const { action } = route.params;

  const handleAction = () => {
    if (action === 'view') {
      alert('Viewing user profile');
    } else if (action === 'add') {
      alert('Adding new user');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{action === 'view' ? 'User Details' : 'Add New User'}</Text>
      <Button title="Perform Action" onPress={handleAction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
