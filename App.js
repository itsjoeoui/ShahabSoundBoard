import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";
import { Button } from "react-native-elements";
import shahab from "./assets/shahab/math_jail.png";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function App() {
  const [sound, setSound] = React.useState();

  async function loadSound() {
    const boom = await Audio.Sound.createAsync(
      require("./assets/shahab/boom.mp3")
    );
    const god_bless_ya = await Audio.Sound.createAsync(
      require("./assets/shahab/god_bless_ya.mp3")
    );
    const kill_ya = await Audio.Sound.createAsync(
      require("./assets/shahab/kill_ya.mp3")
    );
    const lagging = await Audio.Sound.createAsync(
      require("./assets/shahab/lagging.mp3")
    );
    const make_you_cry = await Audio.Sound.createAsync(
      require("./assets/shahab/make_you_cry.mp3")
    );
    const not_a_big_deal = await Audio.Sound.createAsync(
      require("./assets/shahab/not_a_big_deal.mp3")
    );
    const shoot_your_teacher = await Audio.Sound.createAsync(
      require("./assets/shahab/shoot_your_teacher.mp3")
    );
    const shotgun = await Audio.Sound.createAsync(
      require("./assets/shahab/shotgun.mp3")
    );
    const who_cares = await Audio.Sound.createAsync(
      require("./assets/shahab/who_cares.mp3")
    );

    let audios = [
      boom,
      god_bless_ya,
      kill_ya,
      lagging,
      make_you_cry,
      not_a_big_deal,
      shoot_your_teacher,
      shotgun,
      who_cares,
    ];

    return audios[randomNumber(0, audios.length)];
  }

  async function playSound() {
    const { sound } = await loadSound();
    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Image source={shahab} style={styles.image} />
      <TouchableOpacity>
        <Button title="Shahab" onPress={playSound} style={styles.button} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: Dimensions.get("screen").width,
    resizeMode: "contain",
  },
  button: {
    alignSelf: "center",
    width: Dimensions.get("screen").width / 2,
  },
});
