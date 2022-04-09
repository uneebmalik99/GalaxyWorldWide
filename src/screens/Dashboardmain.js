import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StatusBar,
} from "react-native";
import AppColors from "../Colors/AppColors";
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from "../constance/AppConstance";
import FontAwesome5 from "react-native-vector-icons/dist/FontAwesome5";
import AppUrlCollection from "../UrlCollection/AppUrlCollection";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import NetInfo from "@react-native-community/netinfo";
import { Appbar } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import { strings } from "../language/Language";

const Dashboardmain = ({ route, navigation }) => {
  const [Dashboarddata, setDashboarddata] = useState();
  const [role, setrole] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const callingdashboardApi = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        var url = "";

        url = AppUrlCollection.BASE_URL + "vehicle/get-vehicle-counter";

        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "multipart/form-data",
            authkey: AppConstance.USER_INFO.USER_TOKEN,
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //this.setState({ isLoading: false })
            if (responseJson.status == AppConstance.API_SUCESSCODE) {
              setDashboarddata(responseJson.data);
            } else {
              alert(responseJson.message);
              // AppConstance.showSnackbarMessage(responseJson.message)
            }
          })
          .catch((error) => {
            alert(error);
            console.warn(error);
          });
      } else setModalVisible(true);
    });
  };

  useEffect(() => {
    AsyncStorage.getItem("ROLE").then((value) => {
      setrole(value);
    });
    callingdashboardApi();
    return () => {};
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        height: deviceHeight,
      }}
    >
            <StatusBar barStyle='dark-content' />

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
                  callingdashboardApi();
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
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
              style={{ justifyContent: "center" }}
              onPress={() => navigation.openDrawer()}
            >
              <Ionicons name="ios-menu-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.textTitle}>{strings.Home}</Text>
          {role == "0" ? (
            <View
              style={{ backgroundColor: AppColors.blue, flexDirection: "row" }}
            >
              <Ionicons
                name="notifications"
                size={22}
                style={{ alignSelf: "center" }}
                color="white"
                // style={{paddingright: 5}}
                onPress={() => {
                  navigation.navigate("Announcement");
                }}
              />
              <FontAwesome5
                name="edit"
                size={20}
                color="white"
                style={{ alignSelf: "center", paddingLeft: 15 }}
                onPress={() => {
                  // alert("Please Ignore Issues in this module its under development 60% completed.  Thank you")
                  navigation.navigate("EditVehicleContainer");
                }}
              />
            </View>
          ) : (
            <Ionicons
              name="notifications"
              size={18}
              color="white"
              onPress={() => {
                navigation.navigate("Announcement");
              }}
              // onPress={() => {
              //   navigation.navigate("EditVehicleContainer");
              // }}
            />
          )}
        </View>
      </Appbar.Header>


      <ScrollView style={{backgroundColor: 'white', paddingBottom:50,}}>
        <View style={styles.main_item}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LocationSelector", { type: "0" });
            }}
            style={styles.item}
          >
            <Image
              source={require("../images/DashboardIcon/Allvehicles.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 5,
                color: AppColors.green,
              }}
            >
            {strings.AllVehicles}
                        </Text>
            <Text style={styles.item_count}>
              {Dashboarddata == null ? "-" : Dashboarddata.all}
            </Text>
            <Image
              source={require("../images/Picturegreen.png")}
              style={{
                width: 40,
                marginTop: -10,
                height: 40,
                position: "relative",
                alignSelf: "flex-end",
                transform: [{ rotateY: "180deg" }],
                borderRadius: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LocationSelector", { type: "6" });
            }}
            style={[styles.item, { borderColor: AppColors.blue }]}
          >
            <Image
              source={require("../images/DashboardIcon/NewPurchase.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 5,
                color: AppColors.blue,
              }}
            >
              {strings.Newpurchase}
            </Text>
            <Text style={[styles.item_count, { color: AppColors.blue }]}>
              {Dashboarddata == null ? "-" : Dashboarddata.new_purchase}
            </Text>
            <Image
              source={require("../images/Pictureblue.png")}
              style={{
                width: 40,
                marginTop: -10,
                height: 40,
                position: "relative",
                alignSelf: "flex-end",
                transform: [{ rotateY: "180deg" }],
                borderRadius: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.main_item}>
          <TouchableOpacity
            onPress={() => {
              alert('no data')
              // navigation.navigate("VehicleList", { type: "1" });
            }}
            style={styles.item}
          >
            <Image
              source={require("../images/DashboardIcon/Relisted.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 5,
                color: AppColors.green,
              }}
            >
             {strings.Relisted}
            </Text>
            <Text style={styles.item_count}>
              {/* {Dashboarddata == null ? "-" : Dashboarddata.on_hand} */}
            </Text>
            <Image
              source={require("../images/Picturegreen.png")}
              style={{
                width: 40,
                marginTop: -10,
                height: 40,
                position: "relative",
                alignSelf: "flex-end",
                transform: [{ rotateY: "180deg" }],
                borderRadius: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
           
              navigation.navigate("LocationSelector", { type: "1" });
            }}
            style={[styles.item, { borderColor: AppColors.blue }]}
          >
           <Image
              source={require("../images/DashboardIcon/OnHand.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 5,
                color: AppColors.blue,
              }}
            >
             {strings.Onhand}
            </Text>
            <Text style={styles.item_count}>
              {Dashboarddata == null ? "-" : Dashboarddata.on_hand}
            </Text>
            <Image
              source={require("../images/Pictureblue.png")}
              style={{
                width: 40,
                marginTop: -10,
                height: 40,
                position: "relative",
                alignSelf: "flex-end",
                transform: [{ rotateY: "180deg" }],
                borderRadius: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>


        <View style={styles.main_item}>
          <TouchableOpacity
            onPress={() => {
              alert('no data')
            }}
            style={styles.item}
          >
            <Image
              source={require("../images/DashboardIcon/LoadPlan.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 5,
                color: AppColors.green,
              }}
            >
             {strings.LoadPlan}
            </Text>
            <Text style={styles.item_count}>
              {/* {Dashboarddata == null ? "-" : Dashboarddata.on_hand} */}
            </Text>
            <Image
              source={require("../images/Picturegreen.png")}
              style={{
                width: 40,
                marginTop: -10,
                height: 40,
                position: "relative",
                alignSelf: "flex-end",
                transform: [{ rotateY: "180deg" }],
                borderRadius: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('no data')
              // navigation.navigate("LocationSelector", { type: "3" });
            }}
            style={[styles.item, { borderColor: AppColors.blue }]}
          >
            <Image
              source={require("../images/DashboardIcon/ReadytoLoad.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 5,
                color: AppColors.blue,
              }}
            >
          {strings.ReadytoLoad}
            </Text>
            <Text style={[styles.item_count, { color: AppColors.blue }]}>
              {/* {Dashboarddata == null ? "-" : Dashboarddata.car_on_way} */}
            </Text>
            <Image
              source={require("../images/Pictureblue.png")}
              style={{
                width: 40,
                marginTop: -10,
                height: 40,
                position: "relative",
                alignSelf: "flex-end",
                transform: [{ rotateY: "180deg" }],
                borderRadius: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.main_item}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LocationSelector", { type: "3" });
            }}
            style={styles.item}
          >
            <Image
              source={require("../images/DashboardIcon/Ontheway.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 5,
                color: AppColors.green,
              }}
            >
              {strings.Carontheway}
            </Text>
            <Text style={[styles.item_count, { color: AppColors.blue }]}>
              {Dashboarddata == null ? "-" : Dashboarddata.car_on_way}
            </Text>
            <Image
              source={require("../images/Picturegreen.png")}
              style={{
                width: 40,
                marginTop: -10,
                height: 40,
                position: "relative",
                alignSelf: "flex-end",
                transform: [{ rotateY: "180deg" }],
                borderRadius: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('no data')

              // navigation.navigate("LocationSelector", { type: "10" });
            }}
            style={[styles.item, { borderColor: AppColors.blue }]}
          >
            <Image
              source={require("../images/DashboardIcon/CararrivedonPort.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 5,
                color: AppColors.blue,
              }}
            >
              {strings.Arrivedtoport}
            </Text>
            <Text style={[styles.item_count, { color: AppColors.blue }]}>
              {/* {Dashboarddata == null ? "-" : Dashboarddata.arrived} */}
            </Text>
            <Image
              source={require("../images/Pictureblue.png")}
              style={{
                width: 40,
                marginTop: -10,
                height: 40,
                position: "relative",
                alignSelf: "flex-end",
                transform: [{ rotateY: "180deg" }],
                borderRadius: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>


        <View style={styles.main_item}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LocationSelector", { type: "3" });
            }}
            style={styles.item}
          >
            <Image
              source={require("../images/DashboardIcon/Arrived.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 5,
                color: AppColors.green,
              }}
            >
            {strings.Arrived}
            </Text>
            <Text style={[styles.item_count, { color: AppColors.blue }]}>
              {Dashboarddata == null ? "-" : Dashboarddata.arrived}
              </Text>
            <Image
              source={require("../images/Picturegreen.png")}
              style={{
                width: 40,
                marginTop: -10,
                height: 40,
                position: "relative",
                alignSelf: "flex-end",
                transform: [{ rotateY: "180deg" }],
                borderRadius: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('no data')

              // navigation.navigate("LocationSelector", { type: "10" });
            }}
            style={[styles.item, { borderColor: AppColors.blue }]}
          >
            <Image
              source={require("../images/DashboardIcon/handedover.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 5,
                color: AppColors.blue,
              }}
            >
              {strings.Handedover}
            </Text>
            <Text style={[styles.item_count, { color: AppColors.blue }]}>
              {/* {Dashboarddata == null ? "-" : Dashboarddata.arrived} */}
            </Text>
            <Image
              source={require("../images/Pictureblue.png")}
              style={{
                width: 40,
                marginTop: -10,
                height: 40,
                position: "relative",
                alignSelf: "flex-end",
                transform: [{ rotateY: "180deg" }],
                borderRadius: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.main_item}>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("ContainerCarlist");
              navigation.navigate("LocationSelectorcontainer", { type: "3" });

            }}
            style={styles.item}
          >
            <Image
              source={require("../images/DashboardIcon/Containers.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 5,
                color: AppColors.green,
              }}
            >
             {strings.Contianer}
            </Text>

            <Image
              source={require("../images/Picturegreen.png")}
              style={{
                width: 40,
                marginTop: -5,
                height: 40,
                position: "relative",
                alignSelf: "flex-end",
                transform: [{ rotateY: "180deg" }],
                borderRadius: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Accounts");
            }}
            style={[styles.item, { borderColor: AppColors.blue }]}
          >
            <Image
              source={require("../images/DashboardIcon/Accounting.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 5,
                color: AppColors.blue,
              }}
            >
              {strings.Accounts}
            </Text>

            <Image
              source={require("../images/Pictureblue.png")}
              style={{
                width: 40,
                marginTop: -5,
                height: 40,
                position: "relative",
                alignSelf: "flex-end",
                transform: [{ rotateY: "180deg" }],
                borderRadius: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
     
     <View style={{height:85}}>

     </View>
     
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboardmain;

const styles = StyleSheet.create({
  main_item: {
    flexDirection: "row",
    width: "90%",
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "space-around",
  },
  // item: {
  //   borderWidth: 1,
  //   borderColor: AppColors.green,
  //   width: "75%",
  //   height: 150,
  //   paddingVertical: 5,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 10,
  //   marginTop: 20,
  //   marginLeft: 15,
  //   // paddingTop: 20,
  // },
  item: {
    backgroundColor: "white",
    borderWidth: 0.8,
    borderColor: AppColors.Signincolor,
    width: "40%",
    paddingTop: 15,
    borderRadius: 10,
  },
  itemRight: {
    borderWidth: 1,
    borderColor: AppColors.blue,
    width: "75%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    marginRight: 15,
    // paddingTop: 20,
  },
  item_text: {
    color: AppColors.green,
    paddingVertical: 5,
    alignSelf: "center",
  },
  item_count: {
    color: AppColors.green,
    alignSelf: "center",
  },
  itemRight_text: {
    color: AppColors.blue,
    paddingVertical: 5,
    alignSelf: "center",
  },
  itemRight_count: {
    color: AppColors.blue,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
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
    backgroundColor: AppColors.blue,
    paddingHorizontal:20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:16,
    fontWeight:'600'
  },
  modalBtn: {
    
    justifyContent: "center",
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
    paddingHorizontal: 30,
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
  },
});
