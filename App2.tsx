import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo(a) ao meu primeiro app!{'\n'}
        Respostas:{'\n'}
        1-View é o componente básico do React destinado à organização e à exibição dos componentes{'\n'}
        2-Estão definidos dentro da constante styles{'\n'}
        3-Flex 1 é uma sintaxe de código que faz o texto ocupar toda a tela{'\n'}
        4-A função App()



      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});