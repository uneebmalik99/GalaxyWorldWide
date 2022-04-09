import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Linking,
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
import Ionicons from "react-native-vector-icons/Ionicons";
import AppFonts from "../AppFont/AppFonts";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Fontisto from "react-native-vector-icons/dist/Fontisto";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import Feather from "react-native-vector-icons/dist/Feather";
import FontAwesome5 from "react-native-vector-icons/dist/FontAwesome5";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";

const Welcome = ({ navigation }) => {
  // const [isUser]

  const checking = async () => {
    AsyncStorage.getItem("ISUSERLOGIN")
      .then((value) => {
        if (value != null) {
          setisLoginUser(value);

          AsyncStorage.getItem(AppConstance.USER_INFO_OBJ)
            .then((value2) => {
              // alert(JSON.stringify(value2));
              // AppConstance.USER_TOKEN_KEY = value2.
              if (value2 != null) {
                AsyncStorage.getItem("ROLE").then((value3) => {
                  AppConstance.ROLE == value3;
                });
                let data = JSON.parse(value2);

                // alert(JSON.stringify(data))
                AppConstance.USER_TOKEN_KEY = data.auth_key;
                AppConstance.USER_INFO.USER_ID = data.id;
                AppConstance.USER_INFO.USER_NAME = data.username;
                AppConstance.USER_INFO.USER_TOKEN = data.auth_key;
                AppConstance.USER_INFO.USER_EMAIL = data.email;
                AppConstance.USER_INFO.USER_STATUS = data.status;
                AppConstance.USER_INFO.USER_DELETED = data.is_deleted;
                AppConstance.USER_INFO.USER_ADDRESS1 = data.address_line_1;
                AppConstance.USER_INFO.USER_ADDRESS2 = data.address_line_2;
                AppConstance.USER_INFO.USER_CITY = data.city;
                AppConstance.USER_INFO.USER_STATE = data.state;
                AppConstance.USER_INFO.USER_ZIP_CODE = data.zip_code;
                AppConstance.USER_INFO.USER_MOBILE = data.phone;
                AppConstance.USER_INFO.USER_FAX = data.fax;
                AppConstance.USER_INFO.USER_CUSTOMER_NAME = data.customer_name;
                AppConstance.USER_INFO.USER_IS_BLOCK = data.is_blocked;
              } else {
                setisLoginUser("0");

                ///8888
                //    this.props.navigation.navigate('LoginScreen')

                //  this.switchToLoginScreen();
              }
            })
            .catch((error) => console.log(error));
        } else {
          ///999999
          //  this.props.navigation.navigate('AppDrawer1')
          setisLoginUser("0");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    checking();
    // setisLoginUser(AppConstance.IS_USER_LOGIN);

    const willFocusSubscription = navigation.addListener("focus", () => {
      setisLoginUser(AppConstance.IS_USER_LOGIN);
      // alert(AppConstance.IS_USER_LOGIN + isLoginUser)
    });

    return willFocusSubscription;
  }, []);
  const [isLoginUser, setisLoginUser] = useState("0");

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar barStyle='dark-content' />
      <ImageBackground
        source={require("../images/welcome6.jpeg")}
        style={{
          width: deviceWidth,
          height: deviceHeight,
        }}
      >
        <Appbar.Header style={styles.header}>
          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>Welcome</Text>
          </View>
        </Appbar.Header>

        <View style={{ flex: 1 }}>
          <View
            style={{
              position: "absolute",
              bottom: 90,
              width: deviceWidth,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: AppColors.blue,
                  }}
                  onPress={() => {
                    navigation.navigate("services"),
                      (AppConstance.APP_TOGGLE_FUN = false);
                  }}
                >
                  <AntDesign
                    name="customerservice"
                    size={25}
                    color={AppColors.white}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    marginTop: 7,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Services
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: AppColors.blue,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => navigation.navigate("ContainerTracking")}
                >
                  <FontAwesome name="ship" size={25} color={AppColors.white} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "bold",
                    marginTop: 7,
                    color: "white",
                  }}
                >
                  Container Tracking
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: AppColors.blue,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => navigation.navigate("Tracking")}
                >
                  <MaterialCommunityIcons
                    name="car-connected"
                    size={25}
                    color={AppColors.white}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "bold",
                    marginTop: 7,
                    color: "white",
                  }}
                >
                  Car Tracking
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 40 }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: AppColors.blue,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => 
                    {
                      alert('Under Development')
                    // navigation.navigate("yard")
                    }
                  }
                >
                  <MaterialCommunityIcons
                    name="map-marker-radius"
                    size={25}
                    color={AppColors.white}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "bold",
                    marginTop: 7,
                    color: "white",
                  }}
                >
                  Yard
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: AppColors.blue,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => navigation.navigate("Contactus")}
                >
                  <MaterialIcons
                    name="contact-mail"
                    size={25}
                    color={AppColors.white}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "bold",
                    marginTop: 7,
                    color: "white",
                  }}
                >
                  Contact Us
                </Text>
              </View>

              {isLoginUser == "1" ? (
                <View
                  style={{
                    flex: 1,
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      // borderWidth: 1,
                      backgroundColor: AppColors.blue,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      navigation.navigate("AppDrawer");
                    }}
                  >
                    <FontAwesome
                      name="user-circle-o"
                      size={25}
                      color={AppColors.white}
                    />

                    {/* </LinearGradient> */}
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "bold",
                      marginTop: 7,
                      color: "white",
                    }}
                  >
                    Home
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    flex: 1,
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      backgroundColor: AppColors.blue,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => navigation.navigate("Signin")}
                  >
                    {/* <LinearGradient colors={[   '#D1F2EB',   '#48C9B0', AppColors.toolbarColor]} style={{ flex: 1,
                                justifyContent: 'center',
                                width:'100%',
                                height:'100%',
                                alignItems:'center',
                                borderRadius: 25}}> */}
                    <FontAwesome
                      name="user-circle-o"
                      size={25}
                      color={AppColors.white}
                    />

                    {/* </LinearGradient> */}
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "bold",
                      marginTop: 7,
                      color: "white",
                    }}
                  >
                    login
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
      {/* </View> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    elevation: 0,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",

    alignSelf: "flex-start",
  },
  viewTitle: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    backgroundColor: AppColors.blue,
    width: deviceWidth,
    height: "100%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppColors.white,
  },
});

export default Welcome;
