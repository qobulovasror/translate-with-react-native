import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";

export default function ViewItem(props) {
  const { selItem, setSelItem } = props;
  return (
    <View
      style={{
        backgroundColor: "#fff",
        width: "85%",
        zIndex: 11,
        padding: 30,
        borderRadius: 15,
      }}
    >
      <TouchableOpacity
        onPress={() => setSelItem()}
        style={{
          position: "absolute",
          marginTop: 10,
          right: 10,
          zIndex: 10,
          backgroundColor: "#1C50B5",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Feather name="x" size={25} color="#fff" />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginTop: -10,
          marginBottom: 5,
        }}
      >
        {selItem.translations[0].english}
      </Text>
      <View
        style={{
          justifyContent: "space-around",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tarjimasi:</Text>
        <Text style={{ fontSize: 20 }}>{selItem.pronunciation}</Text>
      </View>
    </View>
  );
}
