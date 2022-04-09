import React from "react";
import {
  View,
  SafeAreaView,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { Appbar } from "react-native-paper";
import AppColors from "../Colors/AppColors";
import { deviceHeight, deviceWidth } from "../constance/AppConstance";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/dist/SimpleLineIcons";
import { strings } from "../language/Language";
const ForgetScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <Appbar.Header style={styles.header}>
        <View style={styles.viewTitle}>
          <TouchableOpacity
            style={{ justifyContent: "center", }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={35} color="white" />
          </TouchableOpacity>
          
            <Text style={styles.textTitle}>Forgot Password</Text>
            <View>
          </View>
        </View>
      </Appbar.Header> */}
      <View
        style={{
          width: deviceWidth,
          height: "35%",
        }}
      >
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../images/signin.png")}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 5,
              marginTop:5,
              width: "6%",
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="chevron-back"
              size={35}
              style={{ alignSelf: "center" }}
              color="white"
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <KeyboardAvoidingView behavior="padding">
        <View
          style={{
            backgroundColor: AppColors.white,
            height: "75%",
            marginTop: "-3%",
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            padding: "5%",
          }}
        >
          <Text style={{ fontSize: 20 }}>{strings.Forgetpassword}</Text>
          <Text style={{ marginTop: 15, color: "gray" }}>
            {strings.EnteryouremailtoreceiveRecoverymail}
          </Text>

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 0.5,
              marginTop: 30,
              paddingHorizontal: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="email"
              style={{ justifyContent: "center", alignSelf: "center" }}
              size={20}
            />
            <View style={{ marginHorizontal: 15, width: "85%" }}>
              <Text>{strings.Email}</Text>
              <TextInput
                style={{
                  height: 30,
                  paddingVertical: 4,
                  width: "100%",
                  fontSize: 16,
                }}
                // onChangeText={text => onChangeText(text)}
                onChangeText={(text) => {
                  setemail(text);
                }}
                placeholder={strings.userName}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => 
                {            
                   alert('Function Under Development')
                    //  callingLoginApi()


                }
              }
              style={{
                width: "100%",
                marginVertical: "6%",
                justifyContent: "center",
                borderRadius: 10,
                // borderColor: "white",
                // borderWidth: 1,
                alignSelf: "center",
                backgroundColor: "#29AB87",
                height: 55,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, alignSelf: "center" }}
              >
              {strings.SendRecoveryMail}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
  },
  lineargradient: {
    height: deviceHeight * 0.4,
    // width: "100%",
    marginTop: deviceHeight * 0.5,
    // position: 'absolute'
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
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppColors.white,
    alignSelf: "center",
  },
});

export default ForgetScreen;