import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from "react-native";
import AppColors from "../Colors/AppColors";
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from "../constance/AppConstance";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import Feather from "react-native-vector-icons/dist/Feather";
import { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import AppUrlCollection from "../UrlCollection/AppUrlCollection";
import NetInfo from '@react-native-community/netinfo'
import LinearGradient from "react-native-linear-gradient";

 
let imageBasePath;
const Tracking = ({ navigation }) => {
  const [vehicleList, setvehicleList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [spinner, setspinner] = useState(false);
  const [search, setsearch] = useState("");
  const [res, setres] = useState("0");
  const onChangeText = (Text) => {
    setsearch(Text);
  };

  const searchingApi = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
      setspinner(true);

    var url = "";
    url =
      AppUrlCollection.VEHICLE_CONTAINER + "search_str=" + search + "&page=1";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'authkey': AppConstance.USER_INFO.USER_TOKEN
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.warn("response");
        if (responseJson.status == AppConstance.API_SUCESSCODE) {
          console.warn(
            "response of trackinh seach is :::::::::::" +
              responseJson.data.export
          );
          let data = responseJson.data.vehicleList;
          imageBasePath = responseJson.data.other.vehicle_image;
          setvehicleList(responseJson.data.vehicleList);
          setspinner(false);

          console.warn(data.length);
          setres(data.length);

        } else {
          setspinner(false);

        }
      })
      .catch((error) => {
        setspinner(false);

        alert(error);
        console.warn(error);
      });
      }else setModalVisible(true);
    })


  };

  const renderVehicle = ({ item, index }) => {
    return (


      <LinearGradient
      colors={["#9dbae3", "#BBCCE3", "white", "#BBCCE3", "#9dbae3"]}
        style={{
          height: 120,
          width: "100%",
          marginTop: 15,
          borderBottomLeftRadius: 15,
          borderTopRightRadius: 15,

        }}
      >
        <View
          style={{
            backgroundColor: AppColors.blue,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 5
          }}
        >
          <Text style={{ color: "white", fontSize: 13 }}>{item.year} {item.make} {item.model}</Text>
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 80,
            flexDirection: "row",
          }}
          onPress={()=>navigation.navigate("CarTrackingDetails",{vehicleObj: item})}
        >
          <View
            style={{
              width: "30%",
              // justifyContent: "center",
              height: 70,
              alignSelf: "center",
              marginLeft: 10,
              marginVertical: 15,
            }}
            // onPress = {()=>this.callingVehicleDetailSCreen(item)}
          >
            {item.images.length > 0 ? (
            <Image
              style={{ width: undefined, height: undefined, flex: 1 }}
              source={{ uri: imageBasePath + item.images[0].thumbnail }}
            />
            ) : (
              <Image
                style={{
                  width: undefined,
                  height: undefined,
                  flex: 1,
                  resizeMode: "stretch",
                  borderRadius: 15,
                }}
                source={require("../images/logofinal3.jpg")}
              />
            )}
          </View>
          <View style={{ width: "5%" }}></View>
          <View
            style={{ width: "64%", height: "100%", justifyContent: "center" }}
          >
            <Text style={{ color: "black" }}> Lot No: {item.lot_number}
            </Text>
            <Text style={{ color: "black" }}> Vin No: {item.vin}
            </Text>
            <Text style={{ color: "black" }}> Auction: {item.auction_name}
            </Text>
            <Text style={{ color: "black" }}> purchase date: {item.purchase_date}
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>




    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      {/* <StatusBar barStyle="light-content" backgroundColor="white" /> */}
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
                  searchingApi(search);
                }}
              >
                <Text style={styles.textStyle}>Retry</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={{backgroundColor: 'white'}}>
      <View style={styles.header}>
        <View style={styles.viewTitle}>
          <TouchableOpacity
            style={{ justifyContent: "center", width: "6%" }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={35} color="white" />
          </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>Car Tracking</Text>
          </View>
        </View>
        <View style={{borderBottomLeftRadius: 25, borderBottomRightRadius: 25, paddingBottom: 20}}>

<Text
  style={{
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  }}
>
  {" "}
  Search
</Text>

<View
  style={{
    marginHorizontal: 20,
    justifyContent: "center",
    borderRadius: 20,

    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
  }}
>
  <TextInput
    style={{
      backgroundColor: "white",
      width: "90%",
      height: 40,
      paddingHorizontal: 10,
      borderRadius: 20,
    }}
    onChangeText={(text) => onChangeText(text)}
    onSubmitEditing={(Text) => searchingApi(Text)}
    // this.callingVehicleContainerService()
    placeholder="Search vehicle by LOT number"
    placeholderTextColor="grey"
    underlineColorAndroid="transparent"
  ></TextInput>

  <Feather
    style={{ alignSelf: "center" }}
    size={18}
    color="grey"
    name="search"
  />
</View>
</View>
      </View>
      </View>
      <Spinner
        visible={spinner}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
      />
      <View style={{ width: deviceWidth, paddingHorizontal: 20, height: deviceHeight,  backgroundColor:'white', paddingTop: 5 }}>
        {vehicleList.length > 0 ? (
          <FlatList
            style={{ marginBottom: 110 }}
            data={vehicleList}
            renderItem={renderVehicle}
            keyExtractor={(item, index) => index}
          />
        ) : (
          <View
            style={{
              flex: 1,
              height: deviceHeight,
              justifyContent: "center",
              alignContent: "center",
              backgroundColor: 'white',
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: AppColors.textColor,
                fontSize: 15,
              }}
            >
              Container data not found
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    paddingVertical:5,
    backgroundColor: AppColors.blue,
    alignItems: "center",
    justifyContent: "center",
    // position: 'absolute',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    // flexDirection: 'column',
    alignSelf: "flex-start",
  },
  viewTitle: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    // alignSelf: "flex-start",
    backgroundColor: AppColors.blue,
    width: deviceWidth,
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
export default Tracking;
