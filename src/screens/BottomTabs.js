import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { deviceHeight, deviceWidth } from "../constance/AppConstance";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import Feather from "react-native-vector-icons/dist/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";

const BottomTabs = ({ navigation }) => {
  return (
    <View
      style={{
        height: 55,
        backgroundColor: "#1a9bef",
        borderRadius: 15,
        width: deviceWidth,
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: "32%",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Ionicons
          name="car-sport"
          type="material"
          color="#fff"
          style={{ alignSelf: "center" }}
          size={22}
          onPress={() => {}}
        />
        <Text style={{ alignSelf: "center", color: "white", fontSize: 12 }}>
          My Vehicle
        </Text>
      </View>

      <View style={{ width: "32%", bottom: 30 }}>
        <View></View>
        <Icon
          name="add"
          type="material"
          color="#f00"
          containerStyle={{ alignSelf: "center" }}
          reverse
          size={26}
          onPress={() => navigation.navigate("AddVehicle")}
        />

        <Text
          style={{
            alignSelf: "center",
            color: "white",
            bottom: 2,
            fontSize: 12,
          }}
        >
          Add Vehcile
        </Text>
      </View>

      <View style={{ width: "32%", justifyContent: "center" }}>
        <Feather
          name="box"
          type="material"
          color="#fff"
          size={22}
          style={{ alignSelf: "center" }}
          onPress={() => {}}
        />
        <Text style={{ alignSelf: "center", color: "white", fontSize: 12 }}>
          Container
        </Text>
      </View>
    </View>
  );
};
export default BottomTabs;
