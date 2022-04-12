import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  console.log("App executed");
  return (
    <View style={styles.container}>
      <Image style ={styles.logo}
      fadeDuration={500}
      source={require("./assets/ufreeFrog.png")}/>
      <StatusBar style="auto" />
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
  logo: {
    width: 275,
    height: 275,
    resizeMode: 'contain',
  },
});
