import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  FlatList,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import AppColors from "../Colors/AppColors";
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from "../constance/AppConstance";
import { Appbar } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import AppFonts from "../AppFont/AppFonts";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import Entypo from "react-native-vector-icons/dist/Entypo";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import { useState } from "react";

const services = ({ navigation }) => {
  const [ourServiceList, setourServiceList] = useState([
    {
      image: "../images/autoshipping.jpg",
      title: "Ground Transportation",
      detail:
        "We offer fully integrated custom logistic service for freight transportation on LTL and FTL to/from anywhere in the USA. We can integrate all of your transportation needs into a simple and cost effective solution to ensure a safe and rapid delivery for all your valuable goods.",
    },
    {
      image:
        "http://vertical.gwwshipping.com/wp-content/uploads/2019/03/Towing-694-458.jpg",
      title: "Auto Shipping",
      detail:
        "We can pick up your vehicles from any location in the continental U.S. and transport them to your overseas destinations. Each  vehicle is securely blocked, braced and adequately tied down in the  freight container so that it will arrive at the destination in the same  condition as we received it,We can pick up your vehicles from any location in the continental U.S. and transport them to your overseas destinations. Each  vehicle is securely blocked, braced and adequately tied down in the  freight container so that it will arrive at the destination in the same  condition as we received it,We can pick up your vehicles from any location in the continental U.S. and transport them to your overseas destinations. Each  vehicle is securely blocked, braced and adequately tied down in the  freight container so that it will arrive at the destination in the same  condition as we received it,We can pick up your vehicles from any location in the continental U.S. and transport them to your overseas destinations. Each  vehicle is securely blocked, braced and adequately tied down in the  freight container so that it will arrive at the destination in the same  condition as we received it,We can pick up your vehicles from any location in the continental U.S. and transport them to your overseas destinations. Each  vehicle is securely blocked, braced and adequately tied down in the  freight container so that it will arrive at the destination in the same  condition as we received it",
    },
    {
      image:
        "http://vertical.gwwshipping.com/wp-content/uploads/2019/03/custom-clearence-694-458-1.jpg",
      title: "Customs Clearance",
      detail:
        "We provide a comprehensive U.S customs clearance service, ensuring speedy delivery of your cargo to its final destination. We help you to prepare all required documents..",
    },
    {
      image:
        "http://gwwshipping.com/wp-content/uploads/2019/03/Warehousing-694-458.jpg",
      title: "Warehousing",
      detail:
        "As part of our comprehensive logistics solutions, we also offer our clients a range of warehousing services. Two warehouses in New York and Florida are in your service.",
    },
    {
      image:
        "http://gwwshipping.com/wp-content/uploads/2019/03/Loading-694-458.jpg",
      title: "Tracking and Tracing",
      detail:
        "We provide internet tracking and tracing to all out customers. Our custom made tracking solution provides complete cargo and shipping information.",
    },
    {
      image: "../images/autoshipping.jpg",
      title: "Car Sales",
      detail:
        "Here at GALAXY SHIPPING we can help you with  purchasing your brand new or used vehicle, boat,bike,ATV and so on.   Custom made cars and trucks are made to order thru our licensed used car  dealer GALAXY USED CARS LLC.",
    },
  ]);

  const renderOurServiceContent = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("OurServiceDetailScreen", { itemObj: item })
        }
      >
        <View
          elevation={1}
          style={{
            flexDirection: "row",
            width: "100%",
            borderColor: AppColors.blue,
            borderWidth: 0.7,
            height: 120,
            borderRadius: 10,
            marginBottom: 10,
            paddingLeft: 10
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{
              flex: 0.5,
              height: 90,
              width: 80,
              alignSelf: "center",
              borderTopLeftRadius: 10,
              borderRadius: 10,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          />
          <View style={{ flex: 1, padding: 5, marginLeft: 5, marginRight: 5 }}>
            <Text style={{ fontSize: 15 }}>{item.title}</Text>
            <Text
              style={{ fontSize: 14, marginTop: 5 }}
              numberOfLines={4}
              ellipsizeMode="tail"
            >
              {item.detail}
            </Text>
            <Text style={{ fontSize: 10, textAlign: "right" }}>
              Read More..
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", height: deviceHeight }}
    >
      
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
          height: deviceHeight,
          paddingHorizontal: 5,
          width: deviceWidth,
          marginTop: 30
        }}
      >
        <FlatList
          contentContainerStyle={{ paddingBottom: 80 }}
          contentInsetAdjustmentBehavior="automatic"
          data={ourServiceList}
          renderItem={renderOurServiceContent}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  addressTxtHeader: {
    fontFamily: AppFonts.JosefinSansBold,
    color: AppColors.textColor,
    fontSize: 15,
    height: 80,
    textAlign: "center",
    textAlignVertical: "center",
  },
  appHeaderElavationStyle: {
    width: deviceWidth * 0.9,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  appHeaderEmailmainViewStyle: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    alignContent: "center",
    alignItems: "center",
  },
  addressTextStyle: {
    fontFamily: AppFonts.SourceSansProRegular,
    fontSize: 15,
    color: AppColors.textColor,
    marginLeft: 8,
  },
  addressDividerStyle: {
    width: deviceWidth * 0.8,
    height: 0.5,
    backgroundColor: AppColors.toolbarColor,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  lineargradient: {
    height: deviceHeight * 0.4,
    width: deviceWidth,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: 'absolute',
    marginTop: deviceHeight* 0.6
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

export default services;
