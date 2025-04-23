import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome: Carlos Alexandre de Oliveira Reinato {'\n'}
            Turma: 3ºinformática
      </Text>
      <Text>
        Resposta: Pois o view é o componente central para a visualização do código. Tudo localiza-se nele.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    color: 'white',
  }
});
