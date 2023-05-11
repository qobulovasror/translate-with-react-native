import {
  TextInput,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import data from "../assetsStyle/data.json";
import { useState } from "react";
import ViewItem from "./ViewItem";

export default function Dictionary() {
  const [dataRes, setDateRes] = useState([]);
  const [text, setText] = useState("");
  const [selItem, setSelItem] = useState("");

  const keys = Object.keys(data);

  const searchHandler = () => {
    const arr = [];
    if (text.length == 0) return;
    for (let i of keys) {
      if (data[i].translations[0].english.indexOf(text) !== -1) {
        arr.push(data[i]);
      }
    }
    setDateRes(arr);
  };
  const changeHandler = (e) => {
    setDateRes();
    setText(e.nativeEvent.text);
  };
  return (
    <View style={{ width: "100%", height: "100%", position: "relative" }}>
      {selItem && (
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#1E1E1E70",
            zIndex: 5,
            top: "0%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00000062",
          }}
        >
          <ViewItem selItem={selItem} setSelItem={setSelItem} />
        </View>
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TextInput
          onChange={(e) => changeHandler(e)}
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
            margin: 10,
            borderRadius: 10,
            backgroundColor: "#00f",
            padding: 10,
          }}
        >
          <Text style={{ color: "#fff" }}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataRes}
        renderItem={({ item }) => (
          <View
            key={item.pronunciation}
            style={{
              borderBottomColor: "#000",
              borderBottomWidth: 1,
              padding: 10,
              margin: 10,
            }}
          >
            <TouchableOpacity onPress={() => setSelItem(item)}>
              <Text style={{ padding: 10, fontSize: 18, height: 44 }}>
                {item.translations[0].english}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
