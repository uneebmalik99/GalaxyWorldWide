import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
  Image,
  ScrollView,
  BackHandler,
  SafeAreaView,
  FlatList,
  WebView,
  ImageBackground,
} from "react-native";
import { Appbar } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import AppColors from "../Colors/AppColors";
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from "../constance/AppConstance";
import AppFonts from "../AppFont/AppFonts";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

let itemObj = null;

const OurServiceDetailScreen = ({ route, navigation }) => {
  const { itemObj } = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Appbar.Header style={styles.header}>
        <View style={styles.viewTitle}>
          <TouchableOpacity
            style={{ justifyContent: "center", width: "6%" }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={35} color="white" />
          </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>Our Services</Text>
          </View>
        </View>
      </Appbar.Header>
      <LinearGradient
        start={{ x: 0, y: 1.7 }}
        end={{ x: 0, y: 0 }}
        colors={["#29AB87", "#fff"]}
        style={styles.lineargradient}
      ></LinearGradient>

      <View
        style={{
          width: deviceWidth*0.9,
        //   height: 250,
          marginTop: 20,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: 'center',
        // borderWidth: 1

        }}
      >
        <ImageBackground
          source={{ uri: itemObj.image }}
          style={{
            width: "100%",
            height: 200,
            // flex: 1,
            alignSelf: "center",
            justifyContent: "center",
            // borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden'
          }}
          resizeMode="stretch"
          
        >
          {/* <View
            style={{
              width: "100%",
              height: 250,
              justifyContent: "center",
              backgroundColor: AppColors.black,
              opacity: 0.5,
              position: "absolute",
            }}
          >
            <Text
              style={{
                width: deviceWidth,
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                alignSelf: "center",
                textAlignVertical: "center",
                fontSize: 20,
              }}
            >
              {itemObj.title.toUpperCase()}
            </Text>
          </View> */}
        </ImageBackground>
      </View>

        <View
          style={{
            borderRadius: 10,
            borderColor: AppColors.blue,
            borderWidth: 1,
            marginTop: 10,
            marginHorizontal: 20
          }}
        >
          <ScrollView>
            <Text
              style={{
                fontSize: 15,
                paddingLeft: 10,
                paddingRight: 10,
                textAlign: "justify",
                paddingTop: 5,
                paddingBottom: 5,
              }}
              adjustsFontSizeToFit={true}
            >
              {itemObj.detail}
            </Text>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lineargradient: {
    height: deviceHeight * 0.4,
    width: deviceWidth,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    marginTop: deviceHeight * 0.6,
    // marginBottom: 0
  },
  header: {
    elevation: 0,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",

    alignSelf: "flex-start",
  },
  viewTitle: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    // alignSelf: "flex-start",
    backgroundColor: AppColors.blue,
    width: deviceWidth,
    height: "100%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "row",
  },
  textView: {
    width: "90%",
    // borderWidth: 1,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppColors.white,
    alignSelf: "center",
  },
});
export default OurServiceDetailScreen;
