import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, TouchableOpacity, View, Image } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {

  
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
       require('./assets/sounds/KillYou.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    
    <View style={styles.container}>
      <Text>Shahab time:</Text>
      <Image source={require("./assets/MathJail.png")}/>
      <Button title="Shahab" onPress={playSound}/>
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
});
