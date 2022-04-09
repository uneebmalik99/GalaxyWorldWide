import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  TextInput,
  Modal,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Appbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
import AppColors from "../Colors/AppColors";
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from "../constance/AppConstance";
import AppFonts from "../AppFont/AppFonts";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import Entypo from "react-native-vector-icons/dist/Entypo";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import { useState } from "react";
import AppUrlCollection from "../UrlCollection/AppUrlCollection";
import NetInfo from "@react-native-community/netinfo";
import { useEffect } from "react";
import LinearGradient from "react-native-linear-gradient";
const yard = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [saveYadData, setsaveYadData] = useState("");

  const callingYardAPI = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        let url = AppUrlCollection.GET_YARD;
        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // 'authkey': AppConstance.USER_INFO.USER_TOKEN
          },
        })
          .then((response) => response.text())
          .then((responseJson) => {
            console.log("Invocie ::", responseJson);
            // if (responseJson != undefined && responseJson != null && responseJson != '') {
            //     let value = responseJson.replace(/<\/?[^>]+(>|$\n)/g, '')
            //     let newVal = JSON.parse(value)
            //     this.setState({ isLoading: false })
            //     this.setState({ saveYadData: newVal })
            //     console.log('Invocie dadasdasdd::', JSON.parse(value))
            // } else {

            // }

            // if (responseJson.length > 0) {
            //     this.setState({ saveYadData: responseJson })
            // } else {
            //     this.setState({ saveYadData: [] })
            //     AppConstance.showSnackbarMessage('Data not found')
            // }
          })
          .catch((error) => {
            console.warn(error);
          });
      } else setModalVisible(true);
    });
  };

  useEffect(() => {
    callingYardAPI();

    return () => {};
  }, []);

  return (
    <SafeAreaView
      style={{
flex: 1,
        height: deviceHeight,
        justifyContent: "space-between",
        backgroundColor: 'white'
      }}
    >
      <View style={{backgroundColor: "white"}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Connect to the Internet and Retry
            </Text>
            <View style={styles.modalBtn}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  callingYardAPI();
                }}
              >
                <Text style={styles.textStyle}>Retry</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Appbar.Header style={styles.header}>
        <View style={styles.viewTitle}>
          <TouchableOpacity
            style={{ justifyContent: "center", width: "6%" }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={35} color="white" />
          </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>Yard</Text>
          </View>
        </View>
      </Appbar.Header>

      <LinearGradient
        start={{ x: 0, y: 1.7 }}
        end={{ x: 0, y: 0 }}
        colors={["#29AB87", "#fff"]}
        style={styles.lineargradient}
      ></LinearGradient>
      </View>
      {/* {this.renderMainContent()} */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  lineargradient: {
    height: deviceHeight * 0.4,
    width: deviceWidth,
    justifyContent: "flex-end",
    alignItems: "flex-end",

  },
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBtn: {
    flexDirection: "row",
    justifyContent: "center",
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

export default yard;
