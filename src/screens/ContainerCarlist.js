import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import AppColors from "../Colors/AppColors";
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from "../constance/AppConstance";
import { Appbar } from "react-native-paper";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import Feather from "react-native-vector-icons/dist/Feather";
import AppUrlCollection from "../UrlCollection/AppUrlCollection";
import Spinner from "react-native-loading-spinner-overlay";
import NetInfo from "@react-native-community/netinfo";
import LinearGradient from "react-native-linear-gradient";
import { strings } from "../language/Language";
import Foundation from "react-native-vector-icons/Foundation";

var imageBasePath = "";

const ContainerCarlist = ({ navigation }) => {
  const [spinner, setspinner] = useState(false);
  const [isFooterLoading, setisFooterLoading] = useState(false);
  const [noMoreDataFound, setnoMoreDataFound] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  // const [loc , setloc] = useState('')
  const [search, setSearch] = useState("");
  const [vehicleList, setvehicleList] = useState([
    // {
    //   // id: 1,
    // },
  ]);

  const renderVehicle = ({ item }) => {



    return(
      <TouchableOpacity 
      onPress={() => {
                navigation.navigate("ExportDetailsScreen", { ExportObj: item });
              }}
    style={{height:deviceHeight*0.3,elevation:5, borderRadius:20, width:'100%',backgroundColor:'#ffffff', marginTop:10,padding:10,}}>


    <View style={{flexDirection:'row', height:'75%',width:'100%'}} >

      <View style={{ width:'15%'}}>
        </View>


        <View style={{ width:'70%'}}>
        {item.exportImages.length > 0 ? (
                        <Image
                style={{
                  width: undefined,
                  height: undefined,
                  flex: 1,
                  borderRadius: 10,
                }}
             source={{ uri: imageBasePath + item.exportImages[0].thumbnail }}
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
                source={require("../images/noimage3.jpeg")}
              />
            )}
        </View>



          <View style={{ width:'15%'}}>
            {/* <Foundation name='info' color='#81bd82' style={{alignSelf:'center', marginTop:10,}} size={30}/> */}
        </View>


      </View>



      <View style={{flexDirection:'row', height:'25%', width:'100%'}}>

          <View style={{width:'45%',justifyContent:'space-evenly', backgroundColor:'white'}}>
            <Text style={{color:'#027bc0',alignSelf:'center', fontWeight:'400',fontSize:10.5 }}>{strings.Container_no} : {item.container_number}
            </Text>
            <View style={{backgroundColor:'#017dbd',height:'50%',width:'95%',alignSelf:'center', justifyContent:'center',paddingHorizontal:5, borderRadius:5,}}>
              <Text style={{color:'white',alignSelf:'center',fontWeight:'500', fontSize:10}}>ETA :{item.eta} </Text>
              </View>
            </View>

            <View style={{width:'25%',justifyContent:'space-evenly', }}>

            <Text style={{color:'black',alignSelf:'center', fontWeight:'600',fontSize:10 }}>{strings.Portof}
     </Text>


     <Text style={{color:'black',alignSelf:'center', fontWeight:'600',fontSize:10 }}>
              {item.port != undefined &&
              item.port_of_loading != null &&
              item.port_of_loading != ""
                ? item.port.port_name
                : "-"}
     </Text>

            </View>

            <View style={{width:'15%',justifyContent:'space-evenly',  }}>

            <Text style={{color:'black',alignSelf:'center', fontWeight:'600',fontSize:10 }}>{strings.Arriveddate} : {item.arrival_date}</Text>
            <Text style={{color:'black',alignSelf:'center', fontSize:10}}></Text>
            
            </View>

            <View style={{width:'15%',justifyContent:'space-evenly',  }}>

            <Text style={{color:'black',alignSelf:'center', fontWeight:'600',fontSize:10 }}>{strings.Exportdate}: {item.export_date}</Text>
              <Text style={{color:'black',alignSelf:'center', fontSize:10}}></Text>
             
            </View>

      </View>

    </TouchableOpacity>

    );
    // return (
    //   <LinearGradient
    //     colors={["#9dbae3", "#BBCCE3", "white", "#BBCCE3", "#9dbae3"]}
    //     style={{
    //       height: 120,
    //       width: "100%",
    //       marginTop: 15,
    //       borderBottomLeftRadius: 15,
    //       borderTopRightRadius: 15,
    //     }}
    //   >
    //     <View
    //       style={{
    //         backgroundColor: AppColors.blue,
    //         alignSelf: "center",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         borderBottomLeftRadius: 10,
    //         borderBottomRightRadius: 10,
    //         paddingHorizontal: 10,
    //         paddingVertical: 5
    //       }}
    //     >
    //       <Text style={{ color: "white", fontSize: 13 }}>ETA : {item.eta}</Text>
    //     </View>
    //     <TouchableOpacity
    //       style={{
    //         width: "100%",
    //         height: 80,
    //         flexDirection: "row",
    //       }}
    //       onPress={() => {
    //         navigation.navigate("ExportDetailsScreen", { ExportObj: item });
    //       }}
    //     >
    //       <View
    //         style={{
    //           width: "30%",
    //           // justifyContent: "center",
    //           height: 70,
    //           alignSelf: "center",
    //           marginLeft: 10,
    //           marginVertical: 15,
    //         }}
    //         // onPress = {()=>this.callingVehicleDetailSCreen(item)}
    //       >
    //         {item.exportImages.length > 0 ? (
    //           <Image
    //             style={{ width: undefined, height: undefined, flex: 1 }}
    //             source={{ uri: imageBasePath + item.exportImages[0].thumbnail }}
    //           />
    //         ) : (
    //           <Image
    //             style={{
    //               width: undefined,
    //               height: undefined,
    //               flex: 1,
    //               resizeMode: "stretch",
    //               borderRadius: 15,
    //             }}
    //             source={require("../images/noimage3.jpeg")}
    //           />
    //         )}
    //       </View>
    //       <View style={{ width: "5%" }}></View>
    //       <View
    //         style={{ width: "64%", height: "100%", justifyContent: "center" }}
    //       >
    //         <Text style={{ color: "black" }}>
    //           {strings.Container_no} : {item.container_number}
    //         </Text>
    //         <Text style={{ color: "black" }}>
    //           {strings.Portof}:{" "}
    //           {item.port != undefined &&
    //           item.port_of_loading != null &&
    //           item.port_of_loading != ""
    //             ? item.port.port_name
    //             : "-"}
    //         </Text>
    //         <Text style={{ color: "black" }}>
    //          {strings.Arriveddate} : {item.arrival_date}
    //         </Text>
    //         <Text style={{ color: "black" }}>
    //           {strings.Exportdate}: {item.export_date}
    //         </Text>
    //       </View>
    //     </TouchableOpacity>
    //   </LinearGradient>
    // );
  };

  searchFilterFunction = (text) => {
    if (text) {
      const newData = vehicleList.filter(function (item) {
        const itemData = item.container_number
          ? item.container_number.toUpperCase()
          : "".toUpperCase();

        const itemData2 = item.lot_number
          ? item.lot_number.toUpperCase()
          : "".toUpperCase();

        const textData = text.toUpperCase();

        if (itemData.indexOf(textData) > -1) {
          return itemData.indexOf(textData) > -1;
        } else {
          return itemData2.indexOf(textData) > -1;
        }
      });

      setvehicleList(newData);

      console.log("text is " + text);
    } else {
      console.log("blank");
    }
  };

  const callingContainerApi = (isFirstTimeCaling) => {
    setspinner(true)
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        var url = "";
        if (isFirstTimeCaling == true) {
          setisFooterLoading(false);
          // this.setState({ isLoading: true, isFooterLoading: false })
          url = AppUrlCollection.EXPORT_LIST;
        } else {
          setisFooterLoading(true);
          // this.setState({ isLoading: false, isFooterLoading: true })
          url = AppUrlCollection.EXPORT_LIST;
        }
        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "multipart/form-data",
            authkey: AppConstance.USER_INFO.USER_TOKEN,
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            // this.setState({ isLoading: false })
            setspinner(false);
            // console.log("Response data viw :: ", responseJson);
            if (responseJson.status == 200) {
              // imageBasePath = responseJson.data.other.vehicle_image;
              if (responseJson.data.export.length > 0) {
                setvehicleList(responseJson.data.export);

              } else {
                setvehicleList([]);
              }
            } else {
              AppConstance.showSnackbarMessage(responseJson.message);
            }
          })
          .catch((error) => {
            setspinner(false);

            console.warn(error);
          });
      } else setModalVisible(true);
    });
  };

  useEffect(() => {
    callingContainerApi(true);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: "#ededed",
      }}
    >
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
                  callingContainerApi(true);
                }}
              >
                <Text style={styles.textStyle}>Retry</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Spinner
        visible={spinner}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
      />
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
          <Text style={styles.textTitle}>{strings.Contianer}</Text>
          <View></View>
        </View>
        
      </Appbar.Header>

      <View style={{ width: deviceWidth, height: deviceHeight }}>
        <View
          style={{
            marginHorizontal: 25,
            justifyContent: "center",
            borderRadius: 20,
            backgroundColor: "white",
            marginTop: 10,
            flexDirection: "row",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
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
            onChangeText={(text) => searchFilterFunction(text)}
            // onSubmitEditing={(Text) => searchingApi(Text)}
            // this.callingVehicleContainerService()
            placeholder={strings.Searchcontainerbybookingnoorcontainerno}
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
          ></TextInput>
        </View>
        <View
          style={{ width: deviceWidth, paddingHorizontal: 20, marginTop: 5 }}
        >



          <FlatList
              contentContainerStyle={{paddingBottom:190}}
            data={vehicleList}
            renderItem={renderVehicle}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View style={{ height: 60 }}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lineargradient: {
    height: 10,
    width: "100%",
    // justifyContent: "flex-end",
    // alignItems: "flex-end",
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
    alignSelf: 'center',
    color: AppColors.white,
  },
});

export default ContainerCarlist;
