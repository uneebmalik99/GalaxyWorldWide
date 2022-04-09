import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
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
import AppFonts from "../AppFont/AppFonts";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import Entypo from "react-native-vector-icons/dist/Entypo";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import { useState } from "react";
import AppMessages from "../AppMessages/AppMesage";
import Snackbar from "react-native-snackbar";
import { useEffect } from "react";
import AppUrlCollection from "../UrlCollection/AppUrlCollection";
import { strings } from "../language/Language";

const Contactus = ({ navigation }) => {
  const [nameBorder, setnameBorder] = useState("black");
  const [mailBorder, setmailBorder] = useState("black");
  const [phoneBorder, setphoneBorder] = useState("black");
  const [msgBorder, setmsgBorder] = useState("black");
  const [fulName, setfulName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [IsConnected, setIsConnected] = useState(true);

  const sendContactUsData = () => {
    if (fulName.trim().length == 0) {
      AppConstance.showSnackbarMessage(AppMessages.FULL_NAME_NOT_BLANK);
    } else if (email.trim().length == 0) {
      AppConstance.showSnackbarMessage(AppMessages.EMAIL_NOT_BLANK);
    } else if (phone.trim().length == 0) {
      AppConstance.showSnackbarMessage(AppMessages.PHONE_NOT_BLANK);
    } else if (message.trim().length == 0) {
      AppConstance.showSnackbarMessage(AppMessages.MESSAGE_NOT_BLANK);
    } else {
      var formData = new FormData();
      formData.append("name", fulName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("message", message);

      fetch(AppUrlCollection.CONTACT_US, {
        method: "POST",
        headers: {
          "Content-Type": "",
          authkey: "pUshCX5DJwRHW7oVTmm2WYvILZlc8lGR",
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((responseJson) => {
          alert(responseJson);
          console.log("Contact Us Resposne :: ", responseJson);
        })
        .catch((error) => {
          console.warn(error);
        });
      // }
      // else {
      //     AppConstance.showSnackbarMessage(AppMessages.INTERNEt_NOT_FOUND)
      // }
      // });
    }
  };

  const handleFirstConnectivityChange = (isConnected) => {
    if (isConnected === false) {
      alert("You are offline!");
    } else {
      //   alert("You are online!");
    }
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView
      style={{ height: deviceHeight, backgroundColor: 'white'}}
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
              <Text style={styles.textTitle}>{strings.ContactUs}</Text>
            </View>
          </View>
        </Appbar.Header>
        <View
          style={{
            // height : '80%',
            width: "100%",
            transform: [{ scaleX: 2 }],
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <Image
            source={require("../images/header-Contact-us.png")}
            style={{
              width: deviceWidth,
              // borderBottomLeftRadius: 70,
              // borderBottomRightRadius: 100,
              transform: [{ scaleX: 0.5 }],
              alignItems: "center",
              justifyContent: "center",
              height: 200,
            }}
          />
        </View>
        <View style={{ flex: 1,  backgroundColor: "white", marginBottom: -33,}}>
          <View
            style={{
              alignContent: "center",
              alignItems: "center",
              marginTop: 10,
              backgroundColor: "white",
            }}
          >
            <View
              elevation={1}
              style={{
                width: deviceWidth * 0.9,
                height: 50,
                flexDirection: "row",
                // justifyContent: 'center',
                alignItems: "center",
              }}
            >
              <View
                style={{ width: "25%", height: 35, justifyContent: "flex-end" }}
              >
                <Text>{strings.Firstname}</Text>
              </View>
              <View
                style={{ width: "75%", height: 35, justifyContent: "flex-end" }}
              >
                <TextInput
                  placeholderTextColor={AppColors.textColor}
                  style={{
                    flex: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: nameBorder,
                  }}
                  onFocus={() => setnameBorder("#008000")}
                  onBlur={() => setnameBorder("black")}
                  onChangeText={(text) => setfulName(text)}
                />
              </View>
            </View>
            <View
              elevation={1}
              style={{
                width: deviceWidth * 0.9,
                height: 50,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{ width: "25%", height: 35, justifyContent: "flex-end" }}
              >
                <Text>{strings.Email}</Text>
              </View>
              <View
                style={{ width: "75%", height: 35, justifyContent: "flex-end" }}
              >
                <TextInput
                  placeholderTextColor={AppColors.textColor}
                  style={{
                    flex: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: mailBorder,
                  }}
                  onFocus={() => setmailBorder("#008000")}
                  onBlur={() => setmailBorder("black")}
                  onChangeText={(text) => setemail(text)}
                />
              </View>
            </View>

            <View
              elevation={1}
              style={{
                width: deviceWidth * 0.9,
                height: 50,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{ width: "25%", height: 35, justifyContent: "flex-end" }}
              >
                <Text>{strings.Phone}</Text>
              </View>
              <View
                style={{ width: "75%", height: 35, justifyContent: "flex-end" }}
              >
                <TextInput
                  placeholderTextColor={AppColors.textColor}
                  style={{
                    flex: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: phoneBorder,
                  }}
                  onFocus={() => setphoneBorder("#008000")}
                  onBlur={() => setphoneBorder("black")}
                  onChangeText={(text) => setphone(text)}
                />
              </View>
            </View>

            <View
              elevation={1}
              style={{
                width: deviceWidth * 0.9,
                height: 50,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{ width: "25%", height: 35, justifyContent: "flex-end" }}
              >
                <Text>{strings.Message}</Text>
              </View>
              <View
                style={{ width: "75%", height: 35, justifyContent: "flex-end" }}
              >
                <TextInput
                  placeholderTextColor={AppColors.textColor}
                  style={{
                    flex: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: msgBorder,
                  }}
                  onFocus={() => setmsgBorder("#008000")}
                  onBlur={() => setmsgBorder("black")}
                  onChangeText={(text) => setmessage(text)}
                />
              </View>
            </View>

            <TouchableOpacity
              style={{
                width: deviceWidth * 0.6,
                height: 50,
                borderColor: "#008000",
                borderWidth: 1,
                justifyContent: "center",
                borderRadius: 15,
                marginTop: 25,
              }}
              onPress={() => sendContactUsData()}
            >
              <Text
                style={{
                  color: "#008000",
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontSize: 16,
                }}
              >
                {strings.Submit}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "grey", fontSize: 18 }}>{strings.Getintouch}</Text>
            <View
              style={{
                width: 80,
                height: 1,
                backgroundColor: "#008000",
                marginTop: 10,
              }}
            />
          </View>

          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              marginTop: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="map-marker-circle"
                size={18}
                color="grey"
              />
              <Text style={{ color: "grey", fontSize: 15, marginLeft: 5 }}>
                {"UAE, Sharjah, Sharjah 83864, UAE"}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                marginBottom: 10,
                width: deviceWidth,
                paddingHorizontal: 0,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", marginTop: 2, marginBottom: 2 }}
              >
                <MaterialCommunityIcons
                  name="email-outline"
                  size={18}
                  style={{ alignSelf: "center" }}
                  color="grey"
                />
                <Text
                  style={{
                    color: "grey",
                    fontSize: Platform.OS === "ios" ? 16 : 15,
                    marginLeft: 5,
                  }}
                >
                  info@gwwshipping.com
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 20,
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons name="phone" size={16} color="grey" />
                <Text
                  style={{
                    color: "grey",
                    fontSize: Platform.OS === "ios" ? 16 : 15,
                    marginLeft: 3,
                  }}
                >
                  +065328580
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="earth" size={18} color="grey" />
              <Text
                style={{
                  color: "grey",
                  fontSize: 16,
                  marginLeft: 5,
                }}
              >
                www.gwwshipping.com
              </Text>
            </View>
          </View>
        </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  header: {
    elevation: 0,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    // position: 'absolute',
    alignSelf: "flex-start",
    height: 60,
  },
  viewTitle: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    // alignSelf: "flex-start",
    backgroundColor: AppColors.blue,
    width: deviceWidth,
    height: "100%",
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
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

export default Contactus;
