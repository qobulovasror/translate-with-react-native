import {
  ScrollView,
  TextInput,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
// import data from "../assetsStyle/data.json";
import { useState } from "react";

export default function Dictionary() {
  const [dataRes, setDateRes] = useState([{ key: "das" }]);
  const [text, setText] = useState("");
  const searchHandler = () => {
    if (text.length < 2) return;
  };
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TextInput
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "70%",
            margin: 10,
            padding: 10,
            borderWidth: 1,
            borderRadius: 20,
            fontSize: 20,
          }}
          value={text}
        />
        <TouchableOpacity
          onPress={searchHandler}
          style={{
            // width: 30,
            // height: 30,
            margin: 10,
            borderRadius: 10,
            backgroundColor: "#00f",
            padding: 10,
          }}
        >
          <Text style={{ color: "#fff" }}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          paddingEnd: 20,
          paddingStart: 20,
          marginBottom: 80,
        }}
      >
        <FlatList
          data={dataRes}
          renderItem={({ item }) => (
            <View
              key={item.key}
              style={{
                borderBottomColor: "#000",
                borderBottomWidth: 1,
                padding: 5,
              }}
            >
              <TouchableOpacity>
                <Text style={{ padding: 10, fontSize: 18, height: 44 }}>
                  {item.key}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}
