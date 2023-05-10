import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather, FontAwesome, Foundation } from "@expo/vector-icons";
import { styles } from "./assetsStyle/styles";

function Info({ showInfo }) {
  return (
    <View
      style={[
        {
          backgroundColor: "#fff",
          width: "85%",
          height: "50%",
          zIndex: 11,
          padding: 30,
          borderRadius: 15,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => showInfo(false)}
        style={[
          styles.absolute,
          {
            top: "5%",
            right: "5%",
            zIndex: 10,
            backgroundColor: "#1C50B5",
            padding: 5,
            borderRadius: 5,
          },
        ]}
      >
        <Feather name="x" size={25} color="#fff" style={styles.tCenter} />
      </TouchableOpacity>
      <Text
        style={[
          styles.tCenter,
          { fontSize: 20, marginStart: 5, textAlign: "center" },
        ]}
      >
        Application info
      </Text>
      <View style={{ top: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          About the program:
        </Text>
        <Text style={{ fontSize: 20, marginStart: 5 }}>
          A translate program is a software application that enables users to
          translate text from one language to another. It uses natural language
          processing techniques and machine learning algorithms to analyze and
          convert the text into the desired language.
        </Text>
      </View>
    </View>
  );
}

export default Info;
