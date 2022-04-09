import React from "react";
import { View, SafeAreaView, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Appbar } from "react-native-paper";
import AppColors from "../Colors/AppColors";
import { deviceHeight, deviceWidth } from "../constance/AppConstance";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { strings } from "../language/Language";

const Announcement = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Appbar.Header style={styles.header}>
        <View style={styles.viewTitle}>
          <TouchableOpacity
            style={{ justifyContent: "center", }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={35} color="white" />
          </TouchableOpacity>
          
            <Text style={styles.textTitle}>{strings.Announcement}</Text>
            <View>
          </View>
        </View>
      </Appbar.Header>
      <LinearGradient
        start={{ x: 0, y: 1.7 }}
        end={{ x: 0, y: 0 }}
        colors={["#29AB87", "#fff"]}
        style={styles.lineargradient}
      ></LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: "#fff",
        borderWidth: 1
    },
    lineargradient: {
              // width: "100%",
        marginTop: deviceHeight * 0.5,
        // position: 'absolute'

    
      },
    header: {
        elevation: 0,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        height: deviceHeight * 0.07,

    
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
      textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: AppColors.white,
        alignSelf: "center",
      },
})

export default Announcement;