import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Person from './components/Person/Person';
import Counter from './components/Counter/Counter';

export default function App() {
  return (
    <View style={styles.container}>
     <Person name='Ronald' />

     <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
