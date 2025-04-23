import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  var contador = 0;
  
  const incrementar = () => {
    contador ++;
  };

  return (
    <View style={styles.container}>
      <Text>Número: {contador}</Text>
      <Button onPress={incrementar}>+</Button>
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
