import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default function App() {
  console.log("App executed");
  return (
    <View style={styles.container}>

      <ActivityIndicator style={styles.container} size="large" color="pink"/>
      <StatusBar style="auto" />

      <View style={styles.footer}>
        <Image style ={styles.logo}
        fadeDuration={500}
        source={require("./assets/ufreeFrog.png")}/>
      </View>
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
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
