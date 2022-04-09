// import React, { useState, useEffect, useRef } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   ImageBackground,
//   FlatList,
//   PermissionsAndroid,
//   Share,
//   StatusBar,
//   TouchableOpacity,
//   Modal,
//   Image,
//   Dimensions,
// } from "react-native";
// import { Icon } from "react-native-elements";
// import AppColors from "../Colors/AppColors";
// import AppConstance, {
//   deviceHeight,
//   deviceWidth,
// } from "../constance/AppConstance";
// import AppFonts from "../AppFont/AppFonts";
// import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
// import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
// import Ionicons from "react-native-vector-icons/dist/Ionicons";
// import AntDesign from "react-native-vector-icons/dist/AntDesign";
// import Entypo from "react-native-vector-icons/dist/Entypo";
// import { SliderBox } from "react-native-image-slider-box";
// import RNFetchBlob from "rn-fetch-blob";
// import Snackbar from "react-native-snackbar";
// import Spinner from "react-native-loading-spinner-overlay";
// import { TextInput } from "react-native-gesture-handler";
// import Feather from "react-native-vector-icons/dist/Feather";
// import RadioButtonRN from "radio-buttons-react-native";
// import AppUrlCollection from "../UrlCollection/AppUrlCollection";
// import DatePicker from "react-native-datepicker";
// import Animated, { cond } from "react-native-reanimated";
// import RBSheet from "react-native-raw-bottom-sheet";
// import ImageCropPicker from "react-native-image-crop-picker";
// import { RadioButton } from "react-native-paper";
// import NetInfo from "@react-native-community/netinfo";

// const images = [];

// const EditVehicle = ({ route, navigation }) => {
//   const refRBSheet = useRef();

//   const { item } = route.params;
//   const [details, setdetails] = useState(item);

//   const picture = [
//     {
//       label: "PICTURES",
//     },
//   ];
//   const [modalVisible, setModalVisible] = useState(false);
//   const [Customerlist, setCustomerlist] = useState([]);
//   const [Filteredcustomer, setFilteredcustomer] = useState([]);
//   const [Search, setSearch] = useState();
//   const [customername, setcustomername] = useState(item.customer_name);
//   const [location_id, setlocation_id] = useState(item.location);
//   const [location_name, setlocation_name] = useState();
//   const [location, setlocation] = useState(item.location);
//   const [make, setmake] = useState(item.make);
//   const [model, setmodel] = useState(item.model);
//   const [color, setcolor] = useState(item.color);
//   const [weight, setweight] = useState(item.weight);
//   const [year, setyear] = useState(item.year);
//   const [hatnumber, sethatnumber] = useState(item.hat_number);
//   const [licensenumber, setlicensenumber] = useState(item.hat_number);
//   const [lotnumber, setlotnumber] = useState(item.lot_number);
//   const [containernmber, setcontainernmber] = useState();
//   const [status, setstatus] = useState();
//   const [condition, setcondition] = useState();
//   const [damaged, setdamaged] = useState();
//   const [titlenumber, settitlenumber] = useState();
//   const [pictures, setpictures] = useState();
//   const [deliverdate, setdeliverdate] = useState();
//   const [pickupdate, setpickupdate] = useState();
//   const [note, setnote] = useState();
//   const [checkoption, setcheckoption] = useState();
//   const [KEYS, setKEYS] = useState("");
//   const [CDPLAYER, setCDPLAYER] = useState("");
//   const [SPEAKER, setSPEAKER] = useState("");
//   const [WHEELCAPS, setWHEELCAPS] = useState("");
//   const [MIRROR, setMIRROR] = useState("");
//   const [OTHERS, setOTHERS] = useState("");

//   const [frontwindshiled, setfrontwindshiled] = useState();
//   const [bonnet, setbonnet] = useState();
//   const [grill, setgrill] = useState();
//   const [frontbumper, setfrontbumper] = useState();
//   const [frontheadlight, setfrontheadlight] = useState();
//   const [rearwindshield, setrearwindshield] = useState();
//   const [trunkdoor, settrunkdoor] = useState();
//   const [rearbumper, setrearbumper] = useState();
//   const [rearbumpersupport, setrearbumpersupport] = useState();
//   const [taillamp, settaillamp] = useState();
//   const [frontleftfender, setfrontleftfender] = useState();
//   const [leftfrontdoor, setleftfrontdoor] = useState();
//   const [leftreardoor, setleftreardoor] = useState();
//   const [leftrearfender, setleftrearfender] = useState();
//   const [pillar, setpillar] = useState();
//   const [roof, setroof] = useState();
//   const [rightrearfender, setrightrearfender] = useState();
//   const [rightreardoor, setrightreardoor] = useState();
//   const [rightfrontdoor, setrightfrontdoor] = useState();
//   const [frontrightfender, setfrontrightfender] = useState();

//   const Damaged = [
//     {
//       label: "Yes",
//     },
//     {
//       label: "NO",
//     },
//   ];
//   const [vehicleDetails, setvehicleDetails] = useState([""]);
//   const [locationslist, setlocationslist] = useState([
//     {
//       id: 1,
//     },
//     {
//       id: 2,
//     },
//     {
//       id: 1,
//     },
//     {
//       id: 2,
//     },
//     {
//       id: 1,
//     },
//     {
//       id: 2,
//     },
//     {
//       id: 1,
//     },
//     {
//       id: 2,
//     },
//   ]);
//   const [locmodal, setlocmodal] = useState(false);
//   const [custmodal, setcustmodal] = useState(false);
//   const [imgpos, setimgpos] = useState(0);
//   const [spinner, setspinner] = useState(false);
//   const [SliderModel, setSliderModel] = useState(false);
//   const [width, setwidth] = useState("100%");
//   const [currentimg, setcurrentimg] = useState("");
//   const [Export, setExport] = useState(false);
//   const [data, setdata] = useState([
//     {
//       date: "20-12-2020",
//       Description: "Description",
//       Lot: "473890",
//       N: "CA",
//     },

//     {
//       date: "20-12-2020",
//       Description: "Description",
//       Lot: "473890",
//       N: "CA",
//     },

//     {
//       date: "20-12-2020",
//       Description: "Description",
//       Lot: "473890",
//       N: "CA",
//     },
//   ]);
//   const [date, setDate] = useState("09-10-2020");

//   const TakePhoto = () => {
//     ImageCropPicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: false,
//     }).then((image) => {
//       console.log(image1);
//       refRBSheet.current.close();

//       console.log(images1);
//       console.log(images1.length);
//       var i;
//       for (i = 0; i < images1.length; i++) {
//         images.push(images1[i].sourceURL);
//       }
//     });
//   };
//   const searchFilterFunction = (text) => {
//     if (text) {
//       const newData = Customerlist.filter(function (item) {
//         const itemData = item.text
//           ? item.text.toUpperCase().trim()
//           : "".toUpperCase();

//         let textData = text.toUpperCase();
//         textData = textData.trim();
//         console.log(textData + "====" + itemData);
//         return itemData.indexOf(textData) > -1;
//       });
//       setFilteredcustomer(newData);
//       setSearch(text);
//     } else {
//       setFilteredcustomer(Customerlist);
//       setSearch(text);
//     }
//   };

//   const Selectphoto = () => {
//     ImageCropPicker.openPicker({
//       multiple: true,
//     }).then((images1) => {
//       refRBSheet.current.close();

//       console.log(images1);
//       console.log(images1.length);
//       var i;
//       for (i = 0; i < images1.length; i++) {
//         images.push(images1[i].sourceURL);
//       }
//     });
//   };

//   const callinglocation = () => {
//     let url = AppUrlCollection.LOCATION;
//     fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "multipart/form-data",
//         authkey: AppConstance.USER_INFO.USER_TOKEN,
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         // this.setState({ isLoading: false })
//         setspinner(false);
//         setlocationslist(responseJson.data);
//         console.log("Response data viw :: ", responseJson);
//         console.log("detail --------------" + details);
//       })
//       .catch((error) => {
//         setspinner(false);

//         console.warn(error);
//       });
//   };

//   const callingCustomer = () => {
//     let url = "https://erp.gwwshipping.com/webapi/vehicle/customer";
//     fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "multipart/form-data",
//         authkey: AppConstance.USER_INFO.USER_TOKEN,
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         // this.setState({ isLoading: false })
//         setspinner(false);
//         setCustomerlist(responseJson.data.results);
//         setFilteredcustomer(responseJson.data.results);
//         // setlocationslist(responseJson.data)
//         console.log("Response data viw :: ", responseJson);
//         console.log("detail --------------" + details);
//       })
//       .catch((error) => {
//         setspinner(false);

//         console.warn(error);
//       });
//   };

//   const callingContainerApi = () => {
//     setspinner(true);
//     var url = AppUrlCollection.VEHICLE_DETAIL + "?id=" + item.id;
//     fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "multipart/form-data",
//         authkey: AppConstance.USER_INFO.USER_TOKEN,
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         // this.setState({ isLoading: false })
//         setspinner(false);
//         console.log("Response data viw :: ", responseJson);
//         if (responseJson.status == AppConstance.API_SUCESSCODE) {
//           imageBasePath = responseJson.data.other.vehicle_image;

//           // if (responseJson.data.vehicle ) {
//           let data1 = responseJson.data.vehicle;
//           setdata(responseJson.data.vehicle);

//           sethatnumber(data1.hat_number);

//           setyear(data1.year);
//           setcolor(data1.color);
//           setmodel(data1.model);
//           setmake(data1.make);
//           setweight(data1.weight);

//           setlicensenumber(data1.license_number);
//           setlotnumber(data1.lot_number);

//           setcontainernmber(data1.containernmber);

//           let towingRequest = responseJson.data.vehicle.towingRequest;
//           // console.log('--=-=-=-=-=-=-'+responseJson.data.vehicle.towingRequest);

//           settitlenumber(towingRequest.title_number);
//           setdeliverdate(towingRequest.deliver_date);
//           setpickupdate(towingRequest.pickup_date);
//           setpictures(towingRequest.pictures);
//           setdamaged(towingRequest.damaged);
//           setcondition(towingRequest.condition);

//           setstatus(data1.status);

//           switch (data1.location) {
//             case "1":
//               setlocation_name("LA");
//               break;
//             case "2":
//               setlocation_name("GA");
//               break;

//             case "3":
//               setlocation_name("NY");
//               break;

//             case "4":
//               setlocation_name("TX");
//               break;

//             case "8":
//               setlocation_name("TORONTO");
//               break;

//             case "9":
//               setlocation_name("MONTREAL");
//               break;

//             case "10":
//               setlocation_name("HALIFAX");
//               break;

//             case "11":
//               setlocation_name("EDMONTON");
//               break;

//             case "12":
//               setlocation_name("CALGARY");
//               break;

//             case "13":
//               setlocation_name("Afghanistan");
//               break;

//             case "15":
//               setlocation_name("Turkamanistan");
//               break;

//             case "19":
//               setlocation_name("VANCOUVER");
//               break;
//             case "20":
//               setlocation_name("MANITOBA");
//               break;
//             case "21":
//               setlocation_name("WA");
//               break;

//             default:
//               // alert("NUMBER NOT FOUND");
//               setlocation_name("Please Select Location");
//           }

//           let condition = responseJson.data.vehicle.vehicleConditions;

//           for (var i = 0; i < condition.length; i++) {
//             let element = condition[i].condition.name;

//             switch (element) {
//               case "FRONT WINDSHILED":
//                 setfrontwindshiled(condition[i].value);
//                 break;

//               case "BONNET":
//                 setbonnet(condition[i].value);

//                 break;

//               case "GRILL":
//                 setgrill(condition[i].value);
//                 break;

//               case "FRONT BUMPER":
//                 setfrontbumper(condition[i].value);
//                 break;

//               case "FROTN HEAD LIGHT":
//                 setfrontheadlight(condition[i].value);
//                 break;

//               case "REAR WINDSHIELD":
//                 setrearwindshield(condition[i].value);
//                 break;

//               case "TRUNK DOOR":
//                 settrunkdoor(condition[i].value);
//                 break;

//               case "REAR BUMPER":
//                 setrearbumper(condition[i].value);
//                 break;

//               case "REAR BUMPER SUPPORT":
//                 setrearbumpersupport(condition[i].value);
//                 break;

//               case "TAIL LAMP":
//                 settaillamp(condition[i].value);
//                 break;

//               case "FRONT LEFT FENDER":
//                 setfrontleftfender(condition[i].value);
//                 break;

//               case "LEFT FRONT DOOR":
//                 setleftfrontdoor(condition[i].value);
//                 break;

//               case "LEFT REAR DOOR":
//                 setleftreardoor(condition[i].value);
//                 break;

//               case "LEFT REAR FENDER":
//                 setleftrearfender(condition[i].value);
//                 break;

//               case "PILLAR":
//                 setpillar(condition[i].value);
//                 break;

//               case "ROOF":
//                 setroof(condition[i].value);
//                 break;

//               case "RIGHT REAR FENDER":
//                 setrightrearfender(condition[i].value);
//                 break;

//               case "RIGHT REAR DOOR":
//                 setrightreardoor(condition[i].value);
//                 break;

//               case "RIGHT FRONT DOOR":
//                 setrightfrontdoor(condition[i].value);
//                 break;

//               case "FRONT RIGHT FENDER":
//                 setfrontrightfender(condition[i].value);
//                 break;

//               default:
//               // alert("NUMBER NOT FOUND");
//             }
//           }
//         } else {
//           setdata(responseJson.data.vehicle);
//         }
//       })
//       .catch((error) => {
//         console.warn(error);
//       });
//   };
// const apiCaller = () =>{
//   NetInfo.fetch().then((state) => {
//     if (state.isConnected == true) {
//       callingContainerApi();
//       callinglocation();
//       callingCustomer();
//     } else setModalVisible(true);
//   });
// }
//   useEffect(() => {
//     console.log("====" + JSON.stringify());
//     apiCaller();
//     if (item.images != undefined && item.images != undefined) {
//       for (let index = 0; index < item.images.length; index++) {
//         const element = item.images[index];
//         images.push("https://erp.gwwshipping.com/uploads/" + element.thumbnail);
//         console.log(
//           "Image vehicle :;;",
//           "https://erp.gwwshipping.com/uploads/" + element.thumbnail
//         );
//       }
//     }

//     return () => {};
//   }, []);

//   const renderlist = ({ item }) => {
//     return (
//       <TouchableOpacity
//         onPress={() => {
//           setlocation_id(item.id);
//           setlocation_name(item.name);
//           setlocmodal(false);
//         }}
//         style={{
//           marginVertical: 2,
//           justifyContent: "space-between",
//           flexDirection: "row",
//         }}
//       >
//         <Text>{item.id}</Text>
//         <Text>{item.name}</Text>
//       </TouchableOpacity>
//     );
//   };

//   const renderCustomerlist = ({ item }) => {
//     let c;
//     if (customername == item.text) {
//       c = 1;
//     }
//     return (
//       <TouchableOpacity
//         onPress={() => {
//           setcustmodal(false);
//           setcustomername(item.text);
//         }}
//         style={{
//           marginVertical: 5,
//           borderWidth: 0.5,
//           flexDirection: "row",
//           borderColor: "#1a9bef",
//           borderRadius: 10,
//           paddingVertical: 12,
//           paddingHorizontal: 10,
//         }}
//       >
//         {c == null ? (
//           <Ionicons
//             name="ios-radio-button-off-sharp"
//             color="#1a9bef"
//             style={{ alignSelf: "center" }}
//             size={20}
//           />
//         ) : (
//           <Ionicons
//             name="ios-radio-button-on"
//             color="#1a9bef"
//             style={{ alignSelf: "center" }}
//             size={20}
//           />
//         )}

//         <Text style={{ alignSelf: "center", color: "#1a9bef", marginLeft: 5 }}>
//           {item.text}
//         </Text>
//         {/* <Text>sfsdfn</Text> */}
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <SafeAreaView
//       style={{ flex: 1, backgroundColor: "white", height: deviceHeight }}
//     >
      
// <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>
//               Connect to the Internet and Retry
//             </Text>
//             <View style={styles.modalBtn}>
//             <TouchableOpacity
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => {
//                 setModalVisible(!modalVisible);
//               }}
//             >
//               <Text style={styles.textStyle}>Close</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => {
//                 setModalVisible(!modalVisible);
//                 apiCaller()
//               }}
//             >
//               <Text style={styles.textStyle}>Retry</Text>
//             </TouchableOpacity>
            
//             </View>
//           </View>
//         </View>
//       </Modal>

//       <RBSheet
//         ref={refRBSheet}
//         closeOnDragDown={true}
//         closeOnPressMask={true}
//         customStyles={{
//           wrapper: {
//             backgroundColor: "transparent",
//           },
//           container: {
//             backgroundColor: "#ECF0F1",
//             borderTopLeftRadius: 20,
//             borderTopRightRadius: 20,
//             height: 300,
//             paddingTop: 15,
//           },
//           draggableIcon: {
//             backgroundColor: "grey",
//           },
//         }}
//       >
//         <View>
//           <TouchableOpacity>
//             <View
//               style={{
//                 borderBottomWidth: 0.6,
//                 paddingVertical: 5,
//                 borderColor: "#D0D3D4",
//                 width: "80%",
//                 alignSelf: "center",
//               }}
//             >
//               <Text
//                 style={{
//                   alignSelf: "center",
//                   fontSize: 20,
//                   fontWeight: "600",
//                   paddingVertical: 5,
//                 }}
//               >
//                 Upload Photo
//               </Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => TakePhoto()}>
//             <View
//               style={{
//                 borderWidth: 0.5,
//                 borderRadius: 12,
//                 marginTop: 10,
//                 borderColor: "#1a9bef",
//                 width: "80%",
//                 alignSelf: "center",
//               }}
//             >
//               <Text
//                 style={{
//                   alignSelf: "center",
//                   padding: 10,
//                   fontWeight: "600",
//                   color: "#1a9bef",
//                 }}
//               >
//                 Take Photo
//               </Text>
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => Selectphoto()}>
//             <View
//               style={{
//                 borderWidth: 0.5,
//                 borderRadius: 12,
//                 marginTop: 10,
//                 borderColor: "#1a9bef",
//                 width: "80%",
//                 alignSelf: "center",
//               }}
//             >
//               <Text
//                 style={{
//                   alignSelf: "center",
//                   fontWeight: "600",
//                   padding: 10,
//                   color: "#1a9bef",
//                 }}
//               >
//                 Choose From Library
//               </Text>
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => refRBSheet.current.close()}>
//             <View
//               style={{
//                 borderWidth: 1,
//                 borderRadius: 12,
//                 marginTop: 10,
//                 borderColor: "red",
//                 width: "80%",
//                 alignSelf: "center",
//               }}
//             >
//               <Text style={{ alignSelf: "center", padding: 10, color: "red" }}>
//                 Cancel
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//         <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
//           <TouchableOpacity
//             onPress={() => refRBSheet.current.close()}
//             style={{
//               width: 25,
//               justifyContent: "center",
//               height: 25,
//               backgroundColor: "grey",
//               borderRadius: 50,
//               alignSelf: "flex-end",
//               marginRight: 30,
//             }}
//           >
//             <Entypo
//               name="chevron-down"
//               color="white"
//               size={18}
//               style={{ alignSelf: "center" }}
//             />
//           </TouchableOpacity>
//         </View>
//       </RBSheet>

//       <Modal
//         transparent={true}
//         animationType={"slide"}
//         visible={custmodal}
//         onRequestClose={() => {
//           console.log("close modal");
//         }}
//       >
//         <SafeAreaView
//           style={{
//             flex: 1,
//             width: deviceWidth,
//             justifyContent: "flex-start",
//             paddingVertical: 10,
//             height: deviceHeight,
//             backgroundColor: "grey",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <ImageBackground
//             source={require("../images/backgroundimage.jpg")}
//             resizeMode="stretch"
//             style={{
//               width: deviceWidth,
//               height: deviceHeight,
//               position: "absolute",
//             }}
//           ></ImageBackground>

//           <View
//             style={{
//               width: deviceWidth,
//               flexDirection: "row",
//               paddingHorizontal: 13,
//               paddingVertical: 15,
//               height: 55,
//             }}
//           >
//             <TouchableOpacity
//               style={{ justifyContent: "center", width: "15%" }}
//               onPress={() => setcustmodal(false)}
//             >
//               <Text style={{ color: "white", fontSize: 16 }}>Cancel</Text>
//             </TouchableOpacity>

//             <View style={{ width: "70%", justifyContent: "center" }}>
//               <Text
//                 style={{
//                   alignSelf: "center",
//                   color: "white",
//                   fontWeight: "bold",
//                   fontSize: 20,
//                 }}
//               >
//                 Customer
//               </Text>
//             </View>

//             <View style={{ width: "10%", justifyContent: "center" }}>
//               <TouchableOpacity
//                 style={{ alignSelf: "center", justifyContent: "center" }}
//               >
//                 {/* <AntDesign  size={20} style={{alignSelf:'center'}} color='white' name='check'/> */}
//               </TouchableOpacity>
//             </View>
//           </View>

//           <View
//             style={{
//               marginHorizontal: 10,
//               justifyContent: "center",
//               paddingHorizontal: 5,
//               borderRadius: 10,
//               backgroundColor: "white",
//               flexDirection: "row",
//             }}
//           >
//             <Feather
//               style={{ alignSelf: "center" }}
//               size={18}
//               color="grey"
//               name="search"
//             />

//             <TextInput
//               style={{
//                 backgroundColor: "white",
//                 width: "90%",
//                 height: 40,
//                 paddingHorizontal: 10,
//                 borderRadius: 20,
//               }}
//               onChangeText={(text) => searchFilterFunction(text)}
//               onSubmitEditing={(Text) => searchFilterFunction(Text)}
//               // this.callingVehicleContainerService()
//               placeholder="Search Customer"
//               placeholderTextColor="grey"
//               underlineColorAndroid="transparent"
//             ></TextInput>
//           </View>

//           <View
//             style={{
//               width: "100%",
//               marginTop: 12,
//               height: deviceHeight,
//               flexDirection: "column",
//               backgroundColor: "white",
//               borderTopRightRadius: 10,
//               borderTopLeftRadius: 10,
//             }}
//           >
//             <FlatList
//               contentContainerStyle={{
//                 paddingHorizontal: 1,
//                 paddingVertical: 5,
//               }}
//               data={Customerlist}
//               renderItem={renderCustomerlist}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           </View>
//         </SafeAreaView>
//       </Modal>

//       <Modal
//         transparent={true}
//         animationType={"none"}
//         visible={locmodal}
//         onRequestClose={() => {
//           console.log("close modal");
//         }}
//       >
//         <View
//           style={{
//             flex: 1,
//             justifyContent: "center",
//             paddingVertical: 10,
//             height: deviceHeight,
//             backgroundColor: "#0005",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <View
//             style={{
//               width: "65%",
//               flexDirection: "column",
//               backgroundColor: "white",
//               borderRadius: 15,
//             }}
//           >
//             <View
//               style={{
//                 borderBottomWidth: 0.3,
//                 paddingVertical: 7,
//                 borderColor: "#D0D3D4",
//               }}
//             >
//               <Text
//                 style={{
//                   alignSelf: "center",
//                   fontSize: 18,
//                   fontWeight: "bold",
//                   paddingVertical: 10,
//                 }}
//               >
//                 Location
//               </Text>
//             </View>

//             <FlatList
//               contentContainerStyle={{
//                 paddingHorizontal: 20,
//                 paddingVertical: 5,
//               }}
//               data={locationslist}
//               renderItem={renderlist}
//               keyExtractor={(item, index) => index.toString()}
//             />

//             <View
//               style={{
//                 flexDirection: "row",
//                 borderTopWidth: 0.5,
//                 borderColor: "grey",
//                 width: "100%",
//               }}
//             >
//               <TouchableOpacity
//                 style={{
//                   width: "50%",
//                   height: 40,
//                   alignSelf: "center",
//                   justifyContent: "center",
//                   borderRightWidth: 0.5,
//                   borderColor: "grey",
//                 }}
//                 onPress={() => {
//                   setlocmodal(false);
//                 }}
//               >
//                 <Text style={{ alignSelf: "center", fontSize: 15 }}>
//                   Cancel
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={{
//                   width: "50%",
//                   height: 40,
//                   justifyContent: "center",
//                   alignSelf: "center",
//                 }}
//                 onPress={() => {
//                   setlocmodal(false);
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontWeight: "bold",
//                     fontSize: 15,
//                     alignSelf: "center",
//                   }}
//                 >
//                   OK
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* <View
//                 style={{
//                   paddingVertical: 10,
//                   width: '100%',
//                   justifyContent: 'center',
//                   backgroundColor: 'white',
//                   height: 50,
//                   flexDirection:'row',
//                 }}>
//                 <TouchableOpacity
//                   // onPress={() => this.setState({error: false})}
//                   style={{
//                     borderRadius: 10,
//                     alignSelf: 'center',
//                     backgroundColor: 'red',
//                     paddingVertical: 4,
//                     paddingHorizontal: 4,
//                   }}>
//                   <Text
//                     style={{
//                       paddingVertical: 3,
//                       fontSize: 13,
//                       textAlign: 'center',
//                       color: 'white',
//                     }}>
//                     {' '}
//                     CLOSE{' '}
//                   </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   // onPress={() => this.setState({error: false})}
//                   style={{
//                     borderRadius: 10,
//                     marginLeft:10,
//                     alignSelf: 'center',
//                     backgroundColor: 'red',
//                     paddingVertical: 4,
//                     paddingHorizontal: 4,
//                   }}>
//                   <Text
//                     style={{
//                       paddingVertical: 3,
//                       fontSize: 13,
//                       textAlign: 'center',
//                       color: 'white',
//                     }}>
//                     {' '}
//                     CLOSE{' '}
//                   </Text>
//                 </TouchableOpacity>
             
//               </View> */}
//           </View>
//         </View>
//       </Modal>

//       <ImageBackground
//         source={require("../images/backgroundimage.jpg")}
//         resizeMode="stretch"
//         style={{
//           width: deviceWidth,
//           height: deviceHeight,
//           position: "absolute",
//         }}
//       ></ImageBackground>

//       {/* <Toolbar toggle={this.props.toggle} headerName='DASHBOARD' isFilterIconShow={false} isInnerScreen={false} /> */}
//       <View
//         style={{
//           width: deviceWidth,
//           flexDirection: "row",
//           paddingHorizontal: 13,
//           paddingVertical: 15,
//           height: 55,
//         }}
//       >
//         <TouchableOpacity
//           style={{ justifyContent: "center", width: "10%" }}
//           onPress={() => navigation.goBack()}
//         >
//           <Ionicons name="chevron-back" size={25} color="white" />
//         </TouchableOpacity>

//         <View style={{ width: "80%", justifyContent: "center" }}>
//           <Text
//             style={{
//               alignSelf: "center",
//               color: "white",
//               fontWeight: "bold",
//               fontSize: 20,
//             }}
//           >
//             Edit Vehicle
//           </Text>
//         </View>

//         <View style={{ width: "10%", justifyContent: "center" }}>
//           <TouchableOpacity
//             style={{ alignSelf: "center", justifyContent: "center" }}
//           >
//             <AntDesign
//               size={20}
//               style={{ alignSelf: "center" }}
//               color="white"
//               name="check"
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <ScrollView style={{ width: deviceWidth }}>
//         <SliderBox
//           images={images}
//           sliderBoxHeight={210}
//           dotColor="#FFEE58"
//           inactiveDotColor="#90A4AE"
//           dotStyle={{
//             width: 10,
//             height: 10,
//             marginHorizontal: -4,
//             padding: 0,
//             margin: 0,
//           }}
//           resizeMethod={"resize"}
//           resizeMode={"cover"}
//           circleLoop
//           currentImageEmitter={(index) => {
//             setimgpos(index);
//           }}
//           onCurrentImagePressed={(index) =>
//             //setcurrentimg()
//             // console.warn(`image ${index} pressed`)
//             setSliderModel(true)
//           }
//           paginationBoxStyle={{
//             alignItems: "center",
//             alignSelf: "center",
//             justifyContent: "center",
//             alignSelf: "center",
//           }}
//           ImageComponentStyle={{
//             borderTopRightRadius: 20,
//             borderTopLeftRadius: 20,
//             width: "100%",
//             marginTop: 8,
//           }}
//         />

//         <View
//           style={{
//             marginTop: -50,
//             marginBottom: 14,
//             height: 35,
//             width: 35,
//             alignSelf: "flex-end",
//             justifyContent: "center",
//             marginRight: 20,
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => refRBSheet.current.open()}
//             style={{
//               backgroundColor: "grey",
//               borderColor: "#1a9bef",
//               borderWidth: 0.8,
//               borderRadius: 50,
//               height: "100%",
//               width: "100%",
//               justifyContent: "center",
//             }}
//           >
//             <Text style={{ color: "white", alignSelf: "center" }}>+</Text>
//           </TouchableOpacity>
//         </View>
//         {/* 
// <View style={{marginTop:-65, height:35,width:35, marginBottom:30,alignSelf:'flex-end',justifyContent:'center', marginRight:20,}}>
//   <TouchableOpacity 
//           onPress={() => refRBSheet.current.open()}
//           style={{backgroundColor:'grey' , borderRadius: 50,height:'100%',width:'100%',  justifyContent:'center', }}>
//   <Text style={{color:'white', alignSelf:'center'}}>+</Text>

//   </TouchableOpacity>
// </View> */}

//         <View
//           style={{
//             width: "100%",
//             flexDirection: "row",
//             paddingVertical: 10,
//             paddingHorizontal: 10,
//             backgroundColor: "#2C3E50",
//             justifyContent: "center",
//             alignSelf: "center",
//           }}
//         >
//           <View style={{ width: "20%" }}>
//             <Text style={{ color: "white" }}>VIN #:</Text>
//           </View>

//           <View style={{ width: "50%" }}>
//             <TextInput
//               placeholderTextColor="#D0D3D4"
//               placeholder="Enter vin or scan"
//             />
//           </View>
//           <View style={{ width: "20%" }}>
//             <TouchableOpacity style={{ alignSelf: "flex-end" }}>
//               <Text style={{ color: "white" }}>H</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View
//           style={{
//             flexDirection: "column",
//             justifyContent: "center",
//             backgroundColor: "#F2F3F4",
//             shadowColor: "grey",
//             shadowOffset: { width: 3, height: 3 },
//             shadowOpacity: 0.6,
//             shadowRadius: 1,
//             elevation: 5,
//             alignSelf: "center",
//             borderRadius: 10,
//             borderWidth: 0.2,
//             marginTop: 10,
//             paddingHorizontal: 10,
//             width: "95%",
//           }}
//         >
//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               CUSTOMER{" "}
//             </Text>
//             <TouchableOpacity
//               style={{ flexDirection: "row", justifyContent: "space-between" }}
//               onPress={() => {
//                 setcustmodal(true);
//               }}
//             >
//               <Text style={{ color: "grey", paddingVertical: 2, fontSize: 14 }}>
//                 {customername}
//               </Text>
//               <AntDesign name="caretdown" color="grey" />
//             </TouchableOpacity>
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               LOCATION
//             </Text>
//             <TouchableOpacity
//               style={{ flexDirection: "row", justifyContent: "space-between" }}
//               onPress={() => {
//                 setlocmodal(true);
//               }}
//             >
//               <Text style={{ color: "grey", paddingVertical: 2, fontSize: 14 }}>
//                 {location_name}
//               </Text>
//               <AntDesign name="caretdown" color="grey" />
//             </TouchableOpacity>
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               HAT NUMBER
//             </Text>
//             <TextInput placeholder={hatnumber} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               VEHICLE TYPE
//             </Text>
//             <TextInput placeholder={hatnumber} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               YEAR{" "}
//             </Text>
//             <TextInput placeholder={year} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               COLOR{" "}
//             </Text>
//             <TextInput placeholder={color} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               MODEL{" "}
//             </Text>
//             <TextInput placeholder={model} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               MAKE
//             </Text>
//             <TextInput placeholder={make} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               WEIGHT
//             </Text>
//             <TextInput placeholder={weight} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               LICENSE NUMBER
//             </Text>
//             <TextInput placeholder={weight} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               LOT NUMBER
//             </Text>
//             <TextInput placeholder={lotnumber} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               LOAD STATUS
//             </Text>
//             <TextInput placeholder={lotnumber} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               CONTAINER NUMBER
//             </Text>
//             <TextInput
//               placeholder={containernmber}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               KEY NOTE
//             </Text>
//             <TextInput placeholder={lotnumber} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               PREPAREDBY
//             </Text>
//             <TextInput placeholder={lotnumber} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               AUCTION AT
//             </Text>
//             <TextInput placeholder={lotnumber} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               VCR
//             </Text>
//             <TextInput placeholder={lotnumber} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               NOTE2
//             </Text>
//             <TextInput placeholder={lotnumber} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               STATUS
//             </Text>

//             <View style={{ flexDirection: "row", marginVertical: 10 }}>
//               <View style={{ flexDirection: "column", marginLeft: 5 }}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     setstatus("1");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>ON HAND</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     setstatus("2");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>READY TO LOAD</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     setstatus("3");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>ON THE WAY</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     setstatus("6");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>NEW PURCHASED</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     setstatus("10");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>ARRIVED</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     setstatus("11");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>IS_REQUESTED</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     setstatus("12");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>DISPATCHED</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     setstatus("15");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>LOADED</Text>
//                 </TouchableOpacity>
//               </View>

//               <View
//                 style={{
//                   flexDirection: "column",
//                   marginLeft: 10,
//                   width: "60%",
//                 }}
//               >
//                 <TouchableOpacity
//                   onPress={() => {
//                     setstatus("1");
//                   }}
//                 >
//                   {status == "1" ? (
//                     <AntDesign name="check" color="#1a9bef" size={20} />
//                   ) : (
//                     <AntDesign name="check" color="transparent" size={20} />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 5 }}
//                   onPress={() => {
//                     setstatus("2");
//                   }}
//                 >
//                   {status == "2" ? (
//                     <AntDesign name="check" color="#1a9bef" size={20} />
//                   ) : (
//                     <AntDesign name="check" color="transparent" size={20} />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 5 }}
//                   onPress={() => {
//                     setstatus("3");
//                   }}
//                 >
//                   {status == "3" ? (
//                     <AntDesign name="check" color="#1a9bef" size={20} />
//                   ) : (
//                     <AntDesign name="check" color="transparent" size={20} />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 5 }}
//                   onPress={() => {
//                     setstatus("6");
//                   }}
//                 >
//                   {status == "6" ? (
//                     <AntDesign name="check" color="#1a9bef" size={20} />
//                   ) : (
//                     <AntDesign name="check" color="transparent" size={20} />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 8 }}
//                   onPress={() => {
//                     setstatus("10");
//                   }}
//                 >
//                   {status == "10" ? (
//                     <AntDesign name="check" color="#1a9bef" size={20} />
//                   ) : (
//                     <AntDesign name="check" color="transparent" size={20} />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 8 }}
//                   onPress={() => {
//                     setstatus("11");
//                   }}
//                 >
//                   {status == "11" ? (
//                     <AntDesign name="check" color="#1a9bef" size={20} />
//                   ) : (
//                     <AntDesign name="check" color="transparent" size={20} />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 5 }}
//                   onPress={() => {
//                     setstatus("12");
//                   }}
//                 >
//                   {status == "12" ? (
//                     <AntDesign name="check" color="#1a9bef" size={20} />
//                   ) : (
//                     <AntDesign name="check" color="transparent" size={20} />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 7 }}
//                   onPress={() => {
//                     setstatus("15");
//                   }}
//                 >
//                   {status == "15" ? (
//                     <AntDesign name="check" color="#1a9bef" size={20} />
//                   ) : (
//                     <AntDesign name="check" color="transparent" size={20} />
//                   )}
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               CONDITION
//             </Text>
//             <View style={{ flexDirection: "row", marginVertical: 10 }}>
//               <View style={{ flexDirection: "column", marginLeft: 5 }}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     setcondition("0");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>NON-OP</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     setcondition("1");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>OPERABLE</Text>
//                 </TouchableOpacity>
//               </View>

//               <View
//                 style={{
//                   flexDirection: "column",
//                   marginLeft: 10,
//                   width: "60%",
//                 }}
//               >
//                 <TouchableOpacity
//                   onPress={() => {
//                     setcondition("0");
//                   }}
//                 >
//                   {condition == "0" ? (
//                     <AntDesign name="check" color="#1a9bef" size={20} />
//                   ) : (
//                     <Text
//                       style={{ alignSelf: "center", fontWeight: "500" }}
//                     ></Text>
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 8 }}
//                   onPress={() => {
//                     setcondition("1");
//                   }}
//                 >
//                   {condition == "1" ? (
//                     <AntDesign name="check" color="#1a9bef" size={20} />
//                   ) : (
//                     <Text
//                       style={{ alignSelf: "center", fontWeight: "500" }}
//                     ></Text>
//                   )}
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               DAMAGED
//             </Text>

//             <View style={{ flexDirection: "row", marginVertical: 10 }}>
//               <View style={{ flexDirection: "column", width: "12%" }}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     setdamaged("1");
//                   }}
//                 >
//                   <Text style={{ alignSelf: "center", fontWeight: "500" }}>
//                     YES
//                   </Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     setdamaged("0");
//                   }}
//                 >
//                   <Text style={{ alignSelf: "center", fontWeight: "500" }}>
//                     NO
//                   </Text>
//                 </TouchableOpacity>
//               </View>

//               <View style={{ flexDirection: "column", width: "60%" }}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     setdamaged("1");
//                   }}
//                 >
//                   {damaged == "1" ? (
//                     <AntDesign name="check" color="#1a9bef" size={20} />
//                   ) : (
//                     <Text
//                       style={{ alignSelf: "center", fontWeight: "500" }}
//                     ></Text>
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 8 }}
//                   onPress={() => {
//                     setdamaged("0");
//                   }}
//                 >
//                   {damaged == "0" ? (
//                     <AntDesign name="check" color="#1a9bef" size={20} />
//                   ) : (
//                     <Text
//                       style={{ alignSelf: "center", fontWeight: "500" }}
//                     ></Text>
//                   )}
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <RadioButton
//               value="1"
//               status={picture == "1" ? "checked" : "unchecked"}
//               onPress={() => setpictures("1")}
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               TITLE NUMBER
//             </Text>
//             <TextInput placeholder={titlenumber} placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               DELIVER DATE
//             </Text>
//             <TextInput placeholder="COROLLA" placeholderTextColor="grey" />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               PICKUP DATE
//             </Text>
//             <DatePicker
//               style={{ width: 200, marginTop: 20 }}
//               date={date} // Initial date from state
//               mode="datetime" // The enum of date, datetime and time
//               placeholder="select date"
//               format="DD-MM-YYYY"
//               minDate="2016-05-01"
//               maxDate="2025-06-01"
//               confirmBtnText="Confirm"
//               cancelBtnText="Cancel"
//               customStyles={{
//                 dateIcon: {
//                   //display: 'none',
//                   position: "absolute",
//                   left: 0,
//                   top: 1,
//                   marginLeft: 0,
//                 },
//                 dateInput: {
//                   marginLeft: 0,
//                 },
//               }}
//               onDateChange={(date) => {
//                 setDate(date);
//               }}
//             />
//             <TextInput
//               placeholder="COROLLA"
//               multiline={true}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               CHECK OPTIONS INCLUDED ON THE ..
//             </Text>
//             <View style={{ flexDirection: "row", marginVertical: 10 }}>
//               <View
//                 style={{
//                   flexDirection: "column",
//                   marginLeft: 10,
//                   width: "10%",
//                 }}
//               >
//                 <TouchableOpacity
//                   onPress={() => {
//                     KEYS == 1 ? setKEYS("0") : setKEYS("1");
//                   }}
//                 >
//                   {KEYS == "1" ? (
//                     <Ionicons
//                       name="ios-radio-button-on"
//                       style={{ alignSelf: "center" }}
//                       color="#1a9bef"
//                       size={20}
//                     />
//                   ) : (
//                     <Ionicons
//                       name="ios-radio-button-off-sharp"
//                       style={{ alignSelf: "center" }}
//                       color="#1a9bef"
//                       size={20}
//                     />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 5 }}
//                   onPress={() => {
//                     CDPLAYER == 1 ? setCDPLAYER("0") : setCDPLAYER("1");
//                   }}
//                 >
//                   {CDPLAYER == "1" ? (
//                     <Ionicons
//                       name="ios-radio-button-on"
//                       style={{ alignSelf: "center" }}
//                       color="#1a9bef"
//                       size={20}
//                     />
//                   ) : (
//                     <Ionicons
//                       name="ios-radio-button-off-sharp"
//                       style={{ alignSelf: "center" }}
//                       color="#1a9bef"
//                       size={20}
//                     />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 5 }}
//                   onPress={() => {
//                     SPEAKER == 1 ? setSPEAKER("0") : setSPEAKER("1");
//                   }}
//                 >
//                   {SPEAKER == "1" ? (
//                     <Ionicons
//                       name="ios-radio-button-on"
//                       style={{ alignSelf: "center" }}
//                       color="#1a9bef"
//                       size={20}
//                     />
//                   ) : (
//                     <Ionicons
//                       name="ios-radio-button-off-sharp"
//                       style={{ alignSelf: "center" }}
//                       color="#1a9bef"
//                       size={20}
//                     />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 5 }}
//                   onPress={() => {
//                     WHEELCAPS == 1 ? setWHEELCAPS("0") : setWHEELCAPS("1");
//                   }}
//                 >
//                   {WHEELCAPS == "1" ? (
//                     <Ionicons
//                       name="ios-radio-button-on"
//                       style={{ alignSelf: "center" }}
//                       color="#1a9bef"
//                       size={20}
//                     />
//                   ) : (
//                     <Ionicons
//                       name="ios-radio-button-off-sharp"
//                       style={{ alignSelf: "center" }}
//                       color="#1a9bef"
//                       size={20}
//                     />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 5 }}
//                   onPress={() => {
//                     MIRROR == 1 ? setMIRROR("0") : setMIRROR("1");
//                   }}
//                 >
//                   {MIRROR == "1" ? (
//                     <Ionicons
//                       name="ios-radio-button-on"
//                       style={{ alignSelf: "center" }}
//                       color="#1a9bef"
//                       size={20}
//                     />
//                   ) : (
//                     <Ionicons
//                       name="ios-radio-button-off-sharp"
//                       style={{ alignSelf: "center" }}
//                       color="#1a9bef"
//                       size={20}
//                     />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 7, justifyContent: "center" }}
//                   onPress={() => {
//                     OTHERS == 1 ? setOTHERS("0") : setOTHERS("1");
//                   }}
//                 >
//                   {OTHERS == "1" ? (
//                     <Ionicons
//                       name="ios-radio-button-on"
//                       style={{ alignSelf: "center" }}
//                       color="#1a9bef"
//                       size={20}
//                     />
//                   ) : (
//                     <Ionicons
//                       name="ios-radio-button-off-sharp"
//                       style={{ alignSelf: "center" }}
//                       color="#1a9bef"
//                       size={20}
//                     />
//                   )}
//                 </TouchableOpacity>
//               </View>

//               <View style={{ flexDirection: "column", marginLeft: 5 }}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     KEYS == 1 ? setKEYS("0") : setKEYS("1");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>KEYS</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     CDPLAYER == 1 ? setCDPLAYER("0") : setCDPLAYER("1");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>CD PLAYER</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     SPEAKER == 1 ? setSPEAKER("0") : setSPEAKER("1");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>SPEAKER</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     WHEELCAPS == 1 ? setWHEELCAPS("0") : setWHEELCAPS("1");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>WHEEL CAPS</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     MIRROR == 1 ? setMIRROR("0") : setMIRROR("1");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>MIRROR</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{ marginTop: 10 }}
//                   onPress={() => {
//                     OTHERS == 1 ? setOTHERS("0") : setOTHERS("1");
//                   }}
//                 >
//                   <Text style={{ fontWeight: "500" }}>OTHERS</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 8,
//               borderColor: "#B3B6B7",
//               justifyContent: "center",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 alignSelf: "center",
//                 fontSize: 14,
//               }}
//             >
//               CONDITION OF VEHICLE
//             </Text>
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               FRONT WINDSHILED
//             </Text>
//             <TextInput
//               onChangeText={(text) => setfrontwindshiled(text)}
//               placeholder={frontwindshiled}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               BONNET
//             </Text>
//             <TextInput
//               onChangeText={(text) => setbonnet(text)}
//               placeholder={bonnet}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               GRILL
//             </Text>
//             <TextInput
//               onChangeText={(text) => setgrill(text)}
//               placeholder={grill}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               FRONT BUMPER
//             </Text>
//             <TextInput
//               onChangeText={(text) => setfrontbumper(text)}
//               placeholder={frontbumper}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               FRONT HEAD LIGHT
//             </Text>
//             <TextInput
//               onChangeText={(text) => setfrontheadlight(text)}
//               placeholder={frontheadlight}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               REAR WINDSHIELD
//             </Text>
//             <TextInput
//               onChangeText={(text) => setrearwindshield(text)}
//               placeholder={rearwindshield}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               TRUNK DOOR
//             </Text>
//             <TextInput
//               onChangeText={(text) => settrunkdoor(text)}
//               placeholder={trunkdoor}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               REAR BUMPER
//             </Text>
//             <TextInput
//               onChangeText={(text) => setrearbumper(text)}
//               placeholder={rearbumper}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               REAR BUMPER SUPPORT
//             </Text>
//             <TextInput
//               onChangeText={(text) => setrearbumpersupport(text)}
//               placeholder={rearbumpersupport}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               TAIL LAMP
//             </Text>
//             <TextInput
//               onChangeText={(text) => settaillamp(text)}
//               placeholder={taillamp}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               FRONT LEFT FENDER
//             </Text>
//             <TextInput
//               onChangeText={(text) => setfrontleftfender(text)}
//               placeholder={frontleftfender}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               LEFT FRONT DOOR
//             </Text>
//             <TextInput
//               onChangeText={(text) => setleftfrontdoor(text)}
//               placeholder={leftfrontdoor}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               LEFT REAR DOOR
//             </Text>
//             <TextInput
//               onChangeText={(text) => setleftreardoor(text)}
//               placeholder={leftreardoor}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               LEFT REAR FENDER
//             </Text>
//             <TextInput
//               onChangeText={(text) => setleftrearfender(text)}
//               placeholder={leftrearfender}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               PILLAR
//             </Text>
//             <TextInput
//               onChangeText={(text) => setpillar(text)}
//               placeholder={pillar}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               ROOF
//             </Text>
//             <TextInput
//               onChangeText={(text) => setroof(text)}
//               placeholder={roof}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               RIGHT REAR FENDER
//             </Text>
//             <TextInput
//               onChangeText={(text) => setrightrearfender(text)}
//               placeholder={rightrearfender}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               RIGHT REAR DOOR
//             </Text>
//             <TextInput
//               onChangeText={(text) => setrightreardoor(text)}
//               placeholder={rightreardoor}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               RIGHT FRONT DOOR
//             </Text>
//             <TextInput
//               onChangeText={(text) => setrightfrontdoor(text)}
//               placeholder={rightfrontdoor}
//               placeholderTextColor="grey"
//             />
//           </View>

//           <View
//             style={{
//               width: "100%",
//               flexDirection: "column",
//               borderBottomWidth: 0.3,
//               paddingVertical: 5,
//               borderColor: "#B3B6B7",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{
//                 color: "black",
//                 paddingVertical: 2,
//                 fontWeight: "bold",
//                 fontSize: 14,
//               }}
//             >
//               FRONT RIGHT FENDER
//             </Text>
//             <TextInput
//               onChangeText={(text) => setfrontrightfender(text)}
//               placeholder={frontrightfender}
//               placeholderTextColor="grey"
//             />
//           </View>
//         </View>
//       </ScrollView>
//       <View
//         style={{
//           height: 55,
//           backgroundColor: "#1a9bef",
//           borderRadius: 15,
//           width: deviceWidth,
//           justifyContent: "center",
//           flexDirection: "row",
//         }}
//       >
//         <View
//           style={{
//             width: "32%",
//             justifyContent: "center",
//             flexDirection: "column",
//           }}
//         >
//           <Ionicons
//             name="car-sport"
//             type="material"
//             color="#fff"
//             style={{ alignSelf: "center" }}
//             size={22}
//             onPress={() => navigation.navigate("Dashboard")}
//           />
//           <Text style={{ alignSelf: "center", color: "white", fontSize: 12 }}>
//             My Vehicle
//           </Text>
//         </View>

//         <View style={{ width: "32%", bottom: 30 }}>
//           <View></View>
//           <Icon
//             name="add"
//             type="material"
//             color="#f00"
//             containerStyle={{ alignSelf: "center" }}
//             reverse
//             size={26}
//             onPress={() => navigation.navigate("AddVehicle")}
//           />

//           <Text
//             style={{
//               alignSelf: "center",
//               color: "white",
//               bottom: 2,
//               fontSize: 12,
//             }}
//           >
//             Add Vehcile
//           </Text>
//         </View>

//         <View style={{ width: "32%", justifyContent: "center" }}>
//           <Feather
//             name="box"
//             type="material"
//             color="#fff"
//             size={22}
//             style={{ alignSelf: "center" }}
//             onPress={() => {}}
//           />
//           <Text style={{ alignSelf: "center", color: "white", fontSize: 12 }}>
//             Container
//           </Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     margin: 5,
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//   },
//   modalBtn: {
//     flexDirection: "row",
//     justifyContent: "center",
//   },
// });

// export default EditVehicle;







import React,{useState,useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  FlatList,
  PermissionsAndroid,
  Share,
  StatusBar,
  TouchableOpacity,
  Modal,
  Image,
  Dimensions,
  Alert,
  Platform
} from 'react-native';
import { Icon} from 'react-native-elements'
import AppColors from '../Colors/AppColors';
import AppConstance, { deviceHeight, deviceWidth } from '../constance/AppConstance';
import AppFonts from '../AppFont/AppFonts';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign'; 
import Entypo from  'react-native-vector-icons/dist/Entypo';
import { SliderBox } from "react-native-image-slider-box";
import RNFetchBlob from 'rn-fetch-blob';
import Snackbar from 'react-native-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import { TextInput } from 'react-native-gesture-handler';
import Feather from  'react-native-vector-icons/dist/Feather'
import AppUrlCollection from '../UrlCollection/AppUrlCollection'
import { Appbar } from 'react-native-paper';
import ActionButton from 'react-native-action-button';
import * as ImagePicker from "react-native-image-picker"
import ImageCropPicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import DatePicker from 'react-native-datepicker'
import QRCodeScanner from 'react-native-qrcode-scanner';

const dummyimages = [
  require('../images/noimage3.jpeg')      
 ];




const EditVehicle = ({route, navigation }) => {
  const refRBSheet = useRef();
  const { item , Baseimagepath } = route.params;
// alert(JSON.stringify(item))
  const [deletemodalshow ,setdeletemodalshow] =useState(false)
  const [date, setDate] = useState(new Date(1598051730000));
const [ showimagemodel ,setshowimagemodel] = useState(false)
const [details , setdetails] = useState(item)
const picture = [
  {
    label: 'PICTURES'
  }
  ]  
  const [images , setimages] = useState([
    require('../images/noimage3.jpeg') 


  ])
  const [ close , setclose] = useState(false)
  const [pickupdatemodal , setpickupdatemodal]= useState(false)
  const [add , setadd] = useState(true)
  const [imgposition, setimgposition] = useState(0)
  const [ vin , setvin] = useState(item.vin == ''? '':item.vin)
  const [Customerlist , setCustomerlist ] = useState([])
  const [Filteredcustomer , setFilteredcustomer ] = useState([])
  const[Search , setSearch]= useState()
  const [customername , setcustomername] = useState('')
  const [customeruserid , setcustomeruserid] = useState('')
  const [location_id ,setlocation_id ] = useState('')
  const [location_name, setlocation_name] = useState()
  const [location , setlocation ] = useState('');
  const [vehicletype , setvehicletype] =useState('')
  const [make , setmake ] = useState(item.make);
  const [model , setmodel ] = useState(item.model);
  const [color , setcolor ] = useState(item.color);
  const [weight , setweight ] = useState(item.weight);
  const [year , setyear ] = useState(item.year);
  const [hatnumber , sethatnumber ] = useState(item.hat_number);
  const [licensenumber , setlicensenumber ] = useState(item.license_number);
  const [note2 , setnote2] = useState(item.note)
  const [lotnumber , setlotnumber ] = useState(item.lot_number);
  const [containernmber , setcontainernmber] = useState(item.container_number)
  const [status , setstatus ] = useState(item.status);
  const [ statusname , setstatusname] = useState('')
  const [ loadstatus ,setloadstatus] = useState('')
  const [condition , setcondition ] = useState('');
  const [damaged , setdamaged ] = useState('');
  const [titlenumber , settitlenumber ] = useState('');
  const [pictures , setpictures] = useState();
  const [deliverdate , setdeliverdate ] = useState();
  const [pickupdate , setpickupdate] = useState('');
  const [ auctionat , setauctionat] = useState('')
  const [note , setnote ] = useState(item.note);
  const [keynote , setkeynote] = useState('')
  const [ CDChanger,  setCDChanger]= useState('')
  const [GPSNavigationSystem ,setGPSNavigationSystem]= useState('')
  const [SpareTireJack, setSpareTireJack] = useState('')
  const [WheelCovers, setWheelCovers] = useState('')
  const [Radio ,setRadio]= useState('')
  const [ CDPLAYER ,setCDPLAYER ] = useState('');
  const [ SPEAKER ,setSPEAKER ] = useState('');
  const [ WHEELCAPS ,setWHEELCAPS] = useState('');
  const [ MIRROR ,setMIRROR] = useState('');
  const [ OTHERS ,setOTHERS ] = useState('');
  // const [frontwindshiled , setfrontwindshiled ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[2]: '');
  // const [bonnet , setbonnet ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[3]: '');
  // const [grill , setgrill ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[4]: '');
  // const [frontbumper , setfrontbumper ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[5]: '');
  // const [frontheadlight , setfrontheadlight ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[6]: '');
  // const [rearwindshield , setrearwindshield ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[7]: '');
  // const [trunkdoor , settrunkdoor ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[8]: '');
  // const [rearbumper , setrearbumper ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[9]: '');
  // const [rearbumpersupport , setrearbumpersupport ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[10]: '');
  // const [taillamp , settaillamp ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[11]: '');
  // const [frontleftfender , setfrontleftfender ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[12]: '');
  // const [leftfrontdoor , setleftfrontdoor ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[13]: '');
  // const [leftreardoor , setleftreardoor ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[14]: '');
  // const [leftrearfender , setleftrearfender ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[15]: '');
  // const [pillar , setpillar ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[16]: '');
  // const [roof, setroof] =useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[17]: '');
  // const [rightrearfender , setrightrearfender ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[18]: '');
  // const [rightreardoor , setrightreardoor ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[20]: '');
  // const [rightfrontdoor , setrightfrontdoor ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[21]: '');
  // const [frontrightfender , setfrontrightfender ] = useState(item.vehicle_conditions.length > 0 ? item.vehicle_conditions[22]: '');
  // const [fronttyres , setfronttyres]= useState(item.vehicle_conditions[23]);
    const [newimage ,setnewimages] = useState([])
    const [imagesurls ,setimagesurls ] = useState([])
    const [ images2 , setimages2] = useState([])
  const [vehicleDetails , setvehicleDetails] = useState([''])
  const [locationslist , setlocationslist] = useState([])
  const [locmodal,setlocmodal]= useState(false)
  const [custmodal,setcustmodal]= useState(false)
  const [imgpos, setimgpos] = useState(0)
  const[spinner , setspinner ] = useState(false)
  const[SliderModel , setSliderModel] = useState(false)
  const [width, setwidth] =useState('100%')
  const [currentimg, setcurrentimg] = useState('')
  const [Export, setExport] = useState(false)
  const [data, setdata] = useState([])
const [torchMode ,settorchMode] = useState('off')
const [cameraType ,setcameraType] = useState('back')
const [barcodemodal , setbarcodemodal] = useState(false)





// for android camera

const captureImage = async (type) => {
  let options = {
    
    quality: 0.8,
    videoQuality: 'low',
    durationLimit: 30, //Video max duration in seconds
    saveToPhotos: true,
  };
  let isCameraPermitted = await requestCameraPermission();
  let isStoragePermitted = await requestExternalWritePermission();
  if (isCameraPermitted && isStoragePermitted) {
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        // alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }else{

        if(images[0] == require('../images/noimage3.jpeg')){
          images.pop();
          setclose(true)
        }
        let temp = {} ;
        temp.name = response.assets[0].fileName;
        temp.size = response.assets[0].fileSize;
        temp.type = response.assets[0].type;
        temp.url = response.assets[0].uri;

        images.push(response.assets[0])
          // alert(JSON.stringify(temp))
          newimage.push(temp)

    // var value = new FormData();
    // value.append('file',{uri:response.assets[0].uri,
    //      name:response.assets[0].fileName,
    //      type:response.assets[0].type
    //    });

    //    setspinner(true)

    //     fetch(AppUrlCollection.VEHICLE_DETAIL + item.id +'/photos-upload', {
    //       method: 'POST',
    //       headers: {
    //           'Content-Type': 'multipart/form-data',
    //           'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
    //           'Accept': 'application/json'
    //       },
    //       body: value,
                     
    //   })
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //         // alert(JSON.stringify(responseJson))
    //         // console.log(responseJson.data);
    //         console.log(responseJson);
    //         imagesurls.push(responseJson.data)
    //         // alert(JSON.stringify(responseJson))
    //         // alert(JSON.stringify(responseJson))
    //         console.log(responseJson.data+'images urll is '+imagesurls);

    //         setspinner(false)
             
    //       })
    //       .catch((error) => {
    //         alert(error)
    //         setspinner(false)
    //           console.warn(error)
    //       });
     


















      }




      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      // setFilePath(response);
    });
  }
};
// for android image pick from library
const selectFile3 = async () => {
  try {
    const results = await DocumentPicker.pickMultiple({
      type: [DocumentPicker.types.images],
      
      //There can me more options as well find above
    });

console.log('-----'+JSON.stringify(results));

if(images[0] == require('../images/noimage3.jpeg')){
  images.pop();
  setclose(true)
}
    for (const res of results) {
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      
      
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
  


      var i ;
      // for( i =0; i< images1.length; i++){

        
        images.push(res)
        // alert(JSON.stringify(temp))
        newimage.push(res)

    // var value = new FormData();
  
    //    value.append('file',res);


    //    setspinner(true)

      //   fetch(AppUrlCollection.VEHICLE_DETAIL + item.id +'/photos-upload', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'multipart/form-data',
      //         'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
      //         'Accept': 'application/json'
      //     },
      //     body: value,
                     
      // })
      //     .then((response) => response.json())
      //     .then((responseJson) => {
      //       // alert(JSON.stringify(responseJson))
      //       // console.log(responseJson.data);
      //       console.log(responseJson);
      //       imagesurls.push(responseJson.data)
      //       console.log('images urll is '+imagesurls);

      //       setspinner(false)
             
      //     })
      //     .catch((error) => {
      //       alert(error)
      //       setspinner(false)
      //         console.warn(error)
      //     });
     
      // }  
            // console.log(JSON.stringify(res));
    }



  } catch (err) {
    setspinner(false)

    //Handling any exception (If any)
    if (DocumentPicker.isCancel(err)) {
      //setopener(false)

      //If user canceled the document selection
      // alert('Canceled from multiple doc picker');
    } else {
     // setopener(false)

      //For Unknown Error
      alert('Unknown Error: ' + JSON.stringify(err));
      throw err;
    }
  }


};

const TakePhoto = async (type) => {
  let options = {
    
    quality: 0.8,
    videoQuality: 'low',
    durationLimit: 30, //Video max duration in seconds
    saveToPhotos: true,
  };
  // let isCameraPermitted = await requestCameraPermission();
  // let isStoragePermitted = await requestExternalWritePermission();
  // if (isCameraPermitted && isStoragePermitted) {
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        // alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }else{
        if(images[0] == require('../images/noimage3.jpeg')){
          images.pop();
          setclose(true)
        }


        let temp = {} ;
        temp.name = response.assets[0].fileName;
        temp.type = response.assets[0].type;
        temp.url = response.assets[0].uri;

        images.push(response.assets[0])
        newimage.push(temp)

          // alert(JSON.stringify(temp))
    // var value = new FormData();
    // value.append('file',{uri:response.assets[0].uri,
    //      name:response.assets[0].fileName,
    //      type:response.assets[0].type
    //    });

      //  setspinner(true)

      //   fetch(AppUrlCollection.VEHICLE_DETAIL + item.id +'/photos-upload', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'multipart/form-data',
      //         'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
      //         'Accept': 'application/json'
      //     },
      //     body: value,
                     
      // })
      //     .then((response) => response.json())
      //     .then((responseJson) => {
      //       // alert(JSON.stringify(responseJson))
      //       // console.log(responseJson.data);
      //       console.log(responseJson);
      //       imagesurls.push(responseJson.data)
      //       // alert(JSON.stringify(responseJson))
      //       // alert(JSON.stringify(responseJson))
      //       console.log(responseJson.data+'images urll is '+imagesurls);

      //       setspinner(false)
             
      //     })
      //     .catch((error) => {
      //       alert(error)
      //       setspinner(false)
      //         console.warn(error)
      //     });
     


















      }




      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      // setFilePath(response);
    });
  
};

const requestCameraPermission = async () => {
  
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'App needs camera permission',
      },
    );
    // If CAMERA Permission is granted
     granted === PermissionsAndroid.RESULTS.GRANTED;
    //  launchCameraAndroid()
    //  captureImage()
            // addEventListener('camera')
            return true;

  } catch (err) {
    console.warn(err);
    return false;
  }
 
};

const requestExternalWritePermission = async () => {
if (Platform.OS === 'android') {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'External Storage Write Permission',
        message: 'App needs write permission',
      },
    );
    // If WRITE_EXTERNAL_STORAGE Permission is granted
    granted === PermissionsAndroid.RESULTS.GRANTED

      return true;

  } catch (err) {
    console.warn(err);
    alert('Write permission err', err);
  }
  return false;
}
};


const searchFilterFunction = (text) => {
  if (text) {

    const newData = Customerlist.filter(
      function (item) {
        
        const itemData =  item.customer_name
          ?  item.customer_name.toUpperCase()
          :''.toUpperCase();

         
        const textData = text.toUpperCase();

        if(itemData.indexOf(textData) > -1){
          return  itemData.indexOf(textData) > -1;
        }
    });

    setCustomerlist(newData)
  //   setFilteredDataSource(newData);

  //   setSearch(text);
    console.log('text is '+text);
  } else {
    // Inserted text is blank
    setCustomerlist(Filteredcustomer)
    console.log('blank');
  //   this.setState({vehicleList: vehicleList2})
  //   setFilteredDataSource(data);
  //   setSearch(text);
  }
};

const deleteimage = () =>{
  // setspinner(true)
  if(images.length == 1  ){
    setclose(false)
    images.push(require('../images/noimage3.jpeg') )
  }
  let pos = imgposition;
  console.log('---'+pos);
  let img1 = []
  // alert(imgposition)
  // for(var i = 0 ; i< images.length ; i++){
  //   if(i != pos){
  //     img1.push(images[i])
      
  //   }else if(i == pos){
  //    alert(images[i])
  //     let data = new FormData();
  //     // data.append('images', images[i].id)
  //     //      fetch(AppUrlCollection.DELETE_VEHICLE_IMAGES , {
  //     //     method: 'POST',
  //     //     headers: {
  //     //         'Content-Type': 'application/json',
  //     //         'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
  //     //         'Accept': 'application/json'
  //     //     },
  //     //     body: value,
                     
  //     // })
  //     //     .then((response) => response.json())
  //     //     .then((responseJson) => {
  //     //   if(responseJson.data.message == 'Image deleted successfully.'){
  //     //     alert(responseJson.data.message)
  //     //   }
  //     //       alert(JSON.stringify(responseJson))

  //     //     });

  //   }
  //  }
   setimages(img1)

let img2 = []
for(var index = 0 ; index< images2.length ; index++){
  if(index != pos){
    
    if(images2[index].id ){
      img2.push(images2[index])

    }
  }
 }
 setimages2(img2)

 if(images.length === 0 ){
  setclose(false)
}

}

const chooseFile = async() => {

  ImageCropPicker.openPicker({
        multiple: true,
        compressImageQuality:0.7
      }).then(images1 => {
        if(images[0] == require('../images/noimage3.jpeg')){
          images.pop();
          setclose(true)
        }
        var i ;
        for( i =0; i< images1.length; i++){

          let temp = {} ;
          temp.name = images1[i].filename;
          temp.type = images1[i].mime;
          temp.url = images1[i].path;

          images.push(temp)

          newimage.push(temp)

      // var value = new FormData();
      // value.append('file',{uri:images1[i].path ,
      //      name:images1[i].filename,
      //      type:images1[i].mime
      //    }
         
      //    );

        //  setspinner(true)

        //   fetch(AppUrlCollection.VEHICLE_DETAIL + item.id +'/photos-upload', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
        //         'Accept': 'application/json'
        //     },
        //     body: value,
                       
        // })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //       // alert(JSON.stringify(responseJson))
        //       // console.log(responseJson.data);
        //       console.log(responseJson);
        //       imagesurls.push(responseJson.data)
        //       // alert(JSON.stringify(responseJson))
        //       console.log('images urll is '+imagesurls);

        //       setspinner(false)
               
        //     })
        //     .catch((error) => {
        //       alert(error)
        //       setspinner(false)
        //         console.warn(error)
        //     });
       
        }      

      });

};

const searchingCustomer = (text) => {
  if (text) {
    console.log('text is '+text);
console.log('-----==---'+Customerlist.length);
    const newData = Customerlist.filter(
      function (item) {

        const itemData = item.text
          ? item.text.toUpperCase()
          : ''.toUpperCase();

          console.log('--'+itemData);
      const textData = text.toUpperCase();
      // itemData.indexOf(textData) > -1  
      return itemData.indexOf(textData) > -1;

      //  if(itemData.indexOf(textData)  -1){
      //   return  itemData.indexOf(textData)  -1;
      // }             
    });
    setFilteredcustomer(newData);
    setSearch(text);
    console.log('text is '+text);
  } else {
    // Inserted text is blank
    console.log('blank');
    // Update FilteredDataSource with masterDataSource
    setFilteredcustomer(data);
    setSearch(text);
  }
};

const callinglocation =() =>{
  setspinner(true)

let url = AppUrlCollection.LOCATION
  fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'multipart/form-data',
        'authkey': AppConstance.USER_INFO.USER_TOKEN
    },
})
    .then((response) => response.json())
    .then((responseJson) => {
        // this.setState({ isLoading: false })
      setspinner(false)
      setlocationslist(responseJson.data)
        console.log('Response data viw :: ', responseJson)
        console.log('detail --------------'+details);

    })
    .catch((error) => {
      setspinner(false)

        console.warn(error)
    }); 

}

const barcodeReceived =(e)=> {
  console.log('Barcode: ' + e.data);
  console.log('Type: ' + e.type);
}

const callingCustomer =() =>{
  setspinner(true)
  let url = AppUrlCollection.BASE_URL+'customer'
  fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'multipart/form-data',
        'authkey': AppConstance.USER_INFO.USER_TOKEN
      },
})
    .then((response) => response.json())
    .then((responseJson) => {
        // this.setState({ isLoading: false })
      setspinner(false)
      alert(JSON.stringify(responseJson))
      setCustomerlist(responseJson.data)
      setFilteredcustomer(responseJson.data)
      // setlocationslist(responseJson.data)
        console.log('Response data viw :: ', responseJson)
        console.log('detail --------------'+details);

       
    })
    .catch((error) => {
      setspinner(false)

        console.warn(error)
    }); 

}

const callingContainerApi = () => {
  setspinner(true)
  var url = AppUrlCollection.VEHICLE_DETAIL + '?id='+ item.id; 
  // if (isFirstTimeCaling) {
  //   setspinner(false)
  //   setisFooterLoading(false)
  //     // this.setState({ isLoading: true, isFooterLoading: false })
  //     url = AppUrlCollection.VEHILE_LIST
  // } else {
  //   setspinner(false)
  //   setisFooterLoading(true)
  //     // this.setState({ isLoading: false, isFooterLoading: true })
  //     url = AppUrlCollection.VEHILE_LIST 
  // }
  fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
        },
  })
      .then((response) => response.json())
      .then((responseJson) => {
          // this.setState({ isLoading: false })
        setspinner(false)
          console.log('Response data viw :: ', responseJson)
          if (responseJson.status == AppConstance.API_SUCESSCODE) {
              imageBasePath = responseJson.data.other.vehicle_image
              
              // if (responseJson.data.vehicle ) {
                let data1= responseJson.data.vehicle;
                setdata(responseJson.data.vehicle)

                sethatnumber(data1.hat_number)

                setyear(data1.year)
                setcolor(data1.color)
                setmodel(data1.model)
                setmake(data1.make)
                setweight(data1.weight)

                setlicensenumber(data1.license_number)
                setlotnumber(data1.lot_number)

                setcontainernmber(data1.containernmber)

                let towingRequest = responseJson.data.vehicle.towingRequest;
                // console.log('--=-=-=-=-=-=-'+responseJson.data.vehicle.towingRequest);

                settitlenumber(towingRequest.title_number)
                setdeliverdate(towingRequest.deliver_date)
                setpickupdate(towingRequest.pickup_date)
                setpictures(towingRequest.pictures)
                setdamaged(towingRequest.damaged)
                setcondition(towingRequest.condition)

                setstatus(data1.status)


                switch(data1.location) {
 
                  case '1':
                    setlocation_name('LA')
                      break;
                      case '2':
                        setlocation_name('GA')
                          break;
                      
       
                          case '3':
                            setlocation_name('NY')
                              break;
                          
           
                              case '4':
                                setlocation_name('TX')
                                  break;
                              
               
                                  case '8':
                                    setlocation_name('TORONTO')
                                      break;
                                  
                   
                                      case '9':
                                        setlocation_name('MONTREAL')
                                          break;
                                      
                       
                                          case '10':
                                            setlocation_name('HALIFAX')
                                              break;
                                          
                           
                                              case '11':
                                                setlocation_name('EDMONTON')
                                                  break;
                                              
                                                  case '12':
                                                    setlocation_name('CALGARY')
                                                      break;
                                                  
                                   
                                                      case '13':
                                                        setlocation_name('Afghanistan')
                                                          break;
                                                      
                                       
                                                          case '15':
                                                            setlocation_name('Turkamanistan')
                                                              break;
                                                          
                                           
                                                              case '19':
                                                                setlocation_name('VANCOUVER')
                                                                  break;
                                                                  case '20':
                                                                    setlocation_name('MANITOBA')
                                                                      break;
                                                                      case '21':
                                                                        setlocation_name('WA')
                                                                          break;
                                                              
  

                  default:
                    // alert("NUMBER NOT FOUND");
                    setlocation_name('Please Select Location')
                
                  }


                let condition = responseJson.data.vehicle.vehicleConditions



                for ( var i=0 ; i<condition.length ; i++ ){
                  let element = condition[i].condition.name
                

                switch(element) {
 
                  case 'FRONT WINDSHILED':
                    setfrontwindshiled(condition[i].value)
                      break;
                  
                  case 'BONNET':
                    setbonnet(condition[i].value)
                  
                    break;
             
                  case 'GRILL':
                    setgrill(condition[i].value)
                    break;
             
                  case 'FRONT BUMPER':
                    setfrontbumper(condition[i].value)
                    break;
             
                    case 'FROTN HEAD LIGHT':
                    setfrontheadlight(condition[i].value)
                    break;
                  
                  case 'REAR WINDSHIELD':
                    setrearwindshield(condition[i].value)
                    break

                    case 'TRUNK DOOR':
                    settrunkdoor(condition[i].value)
                    break;
                  
                  case 'REAR BUMPER':
                    setrearbumper(condition[i].value)
                    break

                    case 'REAR BUMPER SUPPORT':
                    setrearbumpersupport(condition[i].value)
                    break;
                  
                  case 'TAIL LAMP':
                    settaillamp(condition[i].value)
                    break

                    case 'FRONT LEFT FENDER':
                    setfrontleftfender(condition[i].value)
                    break;
                  
                  case 'LEFT FRONT DOOR':
                    setleftfrontdoor(condition[i].value)
                    break


                    case 'LEFT REAR DOOR':
                    setleftreardoor(condition[i].value)
                    break;
                  
                  case 'LEFT REAR FENDER':
                    setleftrearfender(condition[i].value)
                    break;







                    case 'PILLAR':
                      setpillar(condition[i].value)
                      break;
                    
                    case 'ROOF':
                      setroof(condition[i].value)
                      break
  
                      case 'RIGHT REAR FENDER':
                      setrightrearfender(condition[i].value)
                      break;
                    
                    case 'RIGHT REAR DOOR':
                      setrightreardoor(condition[i].value)
                      break
  
  
                      case 'RIGHT FRONT DOOR':
                      setrightfrontdoor(condition[i].value)
                      break;
                    
                    case 'FRONT RIGHT FENDER':
                      setfrontrightfender(condition[i].value)
                      break;


                  default:
                    // alert("NUMBER NOT FOUND");
                
                  }
             
                }

                
                
                  // if (isFirstTimeCaling) {
                  //   setvehicleList(responseJson.data.vehicleList)
                  //   setnoMoreDataFound(false)
                  //   setisFooterLoading(false)
                  //   setspinner(false)
                  //     // this.setState({ vehicleList: responseJson.data.vehicleList, noMoreDataFound: false, isFooterLoading: false })
                  // } else {
                    
                  //   setvehicleList(old =>[...old, ...responseJson.data.vehicleList])
                  //   setdata(old => [...old, ...data]);

                  //   setnoMoreDataFound(false)
                  //   setisFooterLoading(false)
                  //     // this.setState({ vehicleList: this.state.vehicleList.concat(responseJson.data.vehicleList), noMoreDataFound: false, isFooterLoading: false })
                  // }
              } else {
                setdata(responseJson.data.vehicle)

                  // if (isFirstTimeCaling) {
                  //   setvehicleList([])
                  //   setnoMoreDataFound(true);
                  //   setisFooterLoading(false)
                  //     // this.setState({ vehicleList: [], noMoreDataFound: true, isFooterLoading: false })
                  // } else {
                  //   setisFooterLoading(false)
                  // setnoMoreDataFound(true)
                  //     // this.setState({ isFooterLoading: false, noMoreDataFound: true })
                  // }

              }
          // } else {
          //     AppConstance.showSnackbarMessage(responseJson.message)
          // }
      })
      .catch((error) => {
          console.warn(error)
      });
}

useEffect(() => {




// if(item.vehicle_features != null || item.vehicle_features != undefined || item.vehicle_features != ''){
//   for(var i=0; i<item.vehicle_features.length; i++){
//     let element = item.vehicle_features[i];
//     console.log('-----------'+element);

//     switch(element) {
//       case 3:
//         setCDChanger(3)
//           break;
 
//       case 4:
//         setGPSNavigationSystem(4)
//         break;
 
//       case 5:
//           setSpareTireJack(5)
//         break;

//         case 6:
//           setWheelCovers(6)
//         break;

//         case 7:
//           setRadio(7)
//         break;

//         case 8:
//           setCDPLAYER(8)
//         break; 
//          case 10:
//            setMIRROR(10)
//         break;
//         case 11:
//             setSPEAKER(11)
//           break;
//         case 12:
//           setOTHERS(12)
//         break;
       
 
//       default:
    
//       }
//   }
// }

// callingContainerApi()
callinglocation()
callingCustomer()



// alert(item.vehicle_features)

if (item.images.length > 0) {
  images.pop();
setclose(true)
  setimages2(item.images)

  // setimg(responseJson.data.vehicle.images)
  for (let index = 0; index < item.images.length; index++) {
      const element = item.images[index].thumbnail;
      images.push(Baseimagepath+ element)
      console.log(element);
  }


}else{
  setclose(false)


}

  return () => {
    
  }
}, [])


  const renderlist = ({item}) =>{

  return(
    <TouchableOpacity 
    onPress={()=>{setlocation_id(item.status); setlocation_name(item.name); setlocmodal(false) }}
    style={{marginVertical:5,justifyContent:'space-around', flexDirection:'row'}}>
      <Text>{item.id}</Text>
<Text>{item.name}</Text>

    </TouchableOpacity>
  
  
  )
  
    }

  const renderCustomerlist = ({item}) =>{

    let c ;
    if(customername == item.customer_name){
      c = 1
    }
    return(
      
<TouchableOpacity 
onPress={()=> { setcustmodal(false); setcustomername(item.customer_name), setcustomeruserid(item.user_id) }}
style={{marginVertical:5,borderWidth:0.5,flexDirection:'row', borderColor:'grey', borderRadius:10,paddingVertical:12,paddingHorizontal:10,}}>

{c == null ? 
  <Ionicons name='ios-radio-button-off-sharp'  color='grey' style={{alignSelf:'center'}}  size={20} />:
  <Ionicons name='ios-radio-button-on'  color={AppColors.Signincolor} style={{alignSelf:'center'}}  size={20} />
}


  <Text style={{alignSelf:'center',color:AppColors.Signincolor, marginLeft:5,}}>{item.customer_name}</Text>
{/* <Text>sfsdfn</Text> */}
</TouchableOpacity>    
    
    )
    
    }  

  const callingupdateApi = ()=>{

  let f = [];
  if(CDChanger == 3){
    f.push(CDChanger)
  }
  if(GPSNavigationSystem == 4){
    f.push(GPSNavigationSystem)
  }
  if(SpareTireJack == 5){
    f.push(SpareTireJack)
  }
  if(WheelCovers == 6){
    f.push(WheelCovers)
  }
  if(Radio == 7){
    f.push(Radio)
  }
  if(CDPLAYER == 8){
    f.push(CDPLAYER)
  }
  if(MIRROR == 10){
    f.push(MIRROR)
  }
  if(SPEAKER == 11){
    f.push(SPEAKER)
  }
  if(OTHERS == 12){
    f.push(OTHERS)
  }
        


  let h = [] ;
  
  // for(var i =0; i < vehicleconditions.length ; i++){
    h[0]  = null
    h[1]  = null
    h[2]  = frontwindshiled
    h[3]  = bonnet
    h[4]  = grill
    h[5]  = frontbumper
    h[6]  = frontheadlight
    h[7]  = rearwindshield
    h[8]  = trunkdoor
    h[9]  = rearbumper
    h[10] = rearbumpersupport
    h[11] = taillamp
    h[12] = frontleftfender
    h[13] = leftfrontdoor
    h[14] = leftreardoor
    h[15] = leftrearfender
    h[16] = pillar
    h[17] = roof
    h[18] = rightrearfender
    h[20] = rightreardoor
    h[21] = rightfrontdoor
    h[22] = frontrightfender
    h[23] = fronttyres
  // }

  //add images
  


      let array ={};

      // array.hat_number= hatnumber;
      // array.vehicle_type= vehicletype;
      // array.year= year;
      // array.color= color;
      // array.model= model;
      // array.make = make;
      // array.vin= vin;
      // array.weight = weight;
      // array.lot_number = lotnumber;
      // array.towed_amount= item.towed_amount;
      // array.status_name= statusname;
      // array.status= status;
    
      // array.customer_user_id= customeruserid;
      // array.container_number = containernmber;
      // array.key_note = keynote;
      // array.load_status = loadstatus;
      // array.auction_at = auctionat;
      // array.towed_from = item.towed_from;
      // array.note = note;
      // array.location=  location;
      // array.location_id = location_id
      // array.customer_name = item.customer_name;
      // array.title_number= titlenumber;
      // array.towing_request_date=item.towing_request_date;
      // array.deliver_date= deliverdate;
      // array.pickup_date= pickupdate;
      // array.condition = condition
      // array.damaged = damaged;
      // array.towed = item.towed;
      // array.license_number= licensenumber;
      // array.photos = images2

      // array.auction_photos = item.auction_photos;
      // array.pickup_photos = item.pickup_photos;
      // array.arrived_photos = item.arrived_photos;
      // array.vehicle_features = f;
      // array.vehicle_conditions = h;
      // array.vehicle_documents= item.vehicle_documents;
      // array.invoice_photos = item.invoice_photos;




array.hat_number = hatnumber,
array.vehicle_type= vehicletype,
array.year = year,
array.color=  color,
array.model= model,
array.make= make,
array.vin= vin,
array.weight= weight,
array.lot_number = lotnumber,
array.towed_amount = item.towed_amount,
array.status_name= statusname,
array.status=  status,
array.location_id = location_id,
array.customer_user_id=  customeruserid,
array.towing_request_id = item.towing_request_id,
array.container_number= containernmber,
array.key_note =keynote,
array.vcr= item.vcr,
array.value=  item.value,
  array.auction_at = auctionat,
  array.towed_from=  item.towed_from,
  array.note = note,
  array.loading_type = loadstatus,
  array.location = location,
  array.customer_name=  customername,
  array.title_number=  titlenumber,
  array.title_received_date= item.title_received_date,
  array.towing_request_date = item.towing_request_date,
  array.deliver_date = deliverdate,
  array.pickup_date=  pickupdate,
  array.condition = condition,
  array.damaged = damaged,
  array.license_number = licensenumber,
  array.photos= images2,
  array.vehicle_features = f,
  array.vehicle_conditions = h,
  array.vehicle_documents = item.vehicle_documents,
  array.invoice_photos= item.invoice_photos,
  array.auction_photos = item.auction_photos,
  array.pickup_photos = item.pickup_photos,
  array.arrived_photos = item.arrived_photos
  // array.fileUrls { "photos": ["https://asl-shipping-line.s3.us-west-2.amazonaws.com/uploads/vehicles/images/32626/rsuEFeqEjPECLr8g0nxcEq5jc1o4D8Euj7l2PCSN.jpg"]}, 


  if(imagesurls.length > 0){
    let photos = imagesurls
    let img = {photos}
    array.fileUrls=img
  }

  // alert(JSON.stringify(array))



//   "hat_number": null,
//   "vehicle_type": "SUV",
//   "year": "2021",
//   "color": "WHITE",
//   "model": "honda",
//   "make": "civic",
//   "vin": "15june2022",
//   "weight": null,
//   "lot_number": "15062021",
//    "towed_amount": 200,
//   "status_name": "ON HAND",
//  "towing_request_date": "2021-06-13",
//   "towed_from": "ca",
//   "photos":[],
//   "fileUrls" : { "photos": ["https://asl-shipping-line.s3.us-west-2.amazonaws.com/uploads/vehicles/images/32626/rsuEFeqEjPECLr8g0nxcEq5jc1o4D8Euj7l2PCSN.jpg"]},    

//   "status": 1, 
//   "location_id": 1,
//   "customer_user_id": 7000760,
//   "container_number": null,
//   "key_note": "",
//   "auction_at": null,
//   "note": null,
//   "location": "LA",
//   "customer_name": "TEST15JUNE",        

//   "title_number": null,
//   "deliver_date": null,
//   "pickup_date": null,
//   "condition": null,
//   "damaged": null,
//   "license_number": null,
//   "ar_number": null,
//   "vehicle_features": [],
//   "vehicle_conditions": [],
//     "auction_photos":[],
//   "pickup_photos":[],
//   "arrived_photos":[],
//   "invoice_photos":[],
// "vehicle_documents": []


















   
    
      //removeing images
      // if(images2 != null){
    
      // array.photos = images2
      // }
     
      //   "lot_number": lotnumber,
      //   "towed_amount": item.towed_amount,
      //   "status_name": statusname,
      //   "status": status,
      //   "location_id": location_id,
      //   "customer_user_id": customeruserid,
      //   "towing_request_id": item.towing_request_id,
      //   "container_number": containernmber,
      //   "key_note": keynote,
      //   "vcr": item.vcr,
      //   "value": item.value,
      //   "auction_at": auctionat,
      //   "towed_from": item.towed_from,
      //   "note": note,
      //   "loading_type": item.loading_type,
      //   "location": location,
      //   "customer_name": customername,
      //   "title_number": titlenumber,
      //   "title_received_date": null,
      //   "towing_request_date": item.towing_request_date,
      //   "deliver_date": deliverdate,
      //   "pickup_date": pickupdate,
      //   "condition": condition,
      //   "damaged": damaged,
      //   "license_number": licensenumber,
      //    "photos": images2,
      //   "auction_photos": item.auction_photos,
      //   "pickup_photos":item.pickup_photos,
      //   "arrived_photos": item.arrived_photos,    
      //   "vehicle_features": f,
      //   "vehicle_conditions": h,
      //   "vehicle_documents": item.vehicle_documents,
      //   "invoice_photos": item.invoice_photos,

     
      // alert(imagesurls)
      
      
        fetch(AppUrlCollection.VEHICLE_DETAIL + item.id, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
          },
          
          body: JSON.stringify(array)

      // //     body: JSON.stringify({
      // //       // "total_photos": null,
      // //   "hat_number": hatnumber,
      // //   "vehicle_type": vehicletype,
      // //   "year": year,
      // //   "color": color,
      // //   "model": model,
      // //   "make": make,
      // //   "vin": vin,
      // //   "weight": weight,
      // //   "lot_number": lotnumber,
      // //   "towed_amount": item.towed_amount,
      // //   "status_name": statusname,
      // //   "status": status,
      // //   "location_id": location_id,
      // //   "customer_user_id": customeruserid,
      // //   "towing_request_id": item.towing_request_id,
      // //   "container_number": containernmber,
      // //   "key_note": keynote,
      // //   "vcr": item.vcr,
      // //   "value": item.value,
      // //   "auction_at": auctionat,
      // //   "towed_from": item.towed_from,
      // //   "note": note,
      // //   "loading_type": item.loading_type,
      // //   "location": location,
      // //   "customer_name": customername,
      // //   "title_number": titlenumber,
      // //   "title_received_date": null,
      // //   "towing_request_date": item.towing_request_date,
      // //   "deliver_date": deliverdate,
      // //   "pickup_date": pickupdate,
      // //   "condition": condition,
      // //   "damaged": damaged,
      // //   "license_number": licensenumber,
      // //    "photos": images2,
      // //   "auction_photos": item.auction_photos,
      // //   "pickup_photos":item.pickup_photos,
      // //   "arrived_photos": item.arrived_photos,    
      // //   "vehicle_features": f,
      // //   "vehicle_conditions": h,
      // //   "vehicle_documents": item.vehicle_documents,
      // //   "invoice_photos": item.invoice_photos,
      // //   "fileUrls" : { "photos": ["https://asl-shipping-line.s3.us-west-2.amazonaws.com/uploads/vehicles/images/32626/rsuEFeqEjPECLr8g0nxcEq5jc1o4D8Euj7l2PCSN.jpg"]}, 

      // //     })
         
      })
          .then((response) =>  response.json())
          .then((responseJson) => {
            setspinner(false)
            if(responseJson.message == 'The given data was invalid.'){
              alert(JSON.stringify(responseJson.errors))
            }else{
              AppConstance.showSnackbarMessage(responseJson.message)

            }
            ImageCropPicker.clean().then(() => {
              console.log('removed all tmp images from tmp directory');
            }).catch(e => {
              alert(e);
            });
            
              console.log('export detail ', responseJson)
             
          })
          .catch((error) => {
            alert(error)
            setspinner(false)
              console.warn(error)
          });
      
      
    }


return (
   
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', height: deviceHeight, }}>

<Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={{ color: '#FFF'}}
        />
    
    <ImageBackground
        source={require("../images/backgroundimage.jpg")}
        resizeMode="stretch"
        style={{
          width: deviceWidth,
          height: deviceHeight,
          position: "absolute",
        }}
      ></ImageBackground>


       <Appbar
                            style={{
                        flexDirection:'row',
                        width:deviceWidth,
                        backgroundColor:AppColors.transplant,
                        justifyContent:'space-between',
                            padding:10,
                            elevation:0,

                        }}
                        >  


                <TouchableOpacity
                style={{justifyContent:'center', }}
                onPress={()=> navigation.goBack()}

                >
                <Ionicons  name='chevron-back' size={25} color='white'/>



                </TouchableOpacity>


                <View style={{width:'80%',justifyContent:'center', }}>
                <Text style={{alignSelf:'center',color:'white',fontWeight:'bold', fontSize:20}}>Edit Vehicle</Text>
                </View>

                
                
                <View style={{width:'10%',justifyContent:'center' }}>
              <TouchableOpacity style={{alignSelf:'center', justifyContent:'center'}}
              onPress={()=>{
                callingupdateApi()
              }}
              >
              <AntDesign  size={20} style={{alignSelf:'center'}} color='white' name='check'/>
              </TouchableOpacity>
              </View>

      </Appbar>

        <Modal
          transparent={true}
          animationType={'slide'}
          visible={custmodal}
          onRequestClose={() => {
            console.log('close modal');
          }}>
          <SafeAreaView
            style={{
              flex: 1,
              width:deviceWidth,
              justifyContent:'flex-start',
              paddingVertical: 10,
              height:deviceHeight,
              backgroundColor:AppColors.Signincolor,
              flexDirection: 'column',
              alignItems: 'center',
            }}>

{/* <ImageBackground source={require('../images/backgroundimage.jpg')} resizeMode='stretch' style={{ width: deviceWidth, height:deviceHeight, position: 'absolute' }} >
</ImageBackground> */}

                 <View
style={{width:deviceWidth,flexDirection:'row', paddingHorizontal:13,paddingVertical:15, height:55}}>

<TouchableOpacity
style={{justifyContent:'center',width:'15%', }}
onPress={()=> setcustmodal(false) }

>
<Text style={{color:'white', fontSize:16}}>Cancel</Text>


</TouchableOpacity>

<View style={{width:'70%',justifyContent:'center', }}>
<Text style={{alignSelf:'center',color:'white',fontWeight:'bold', fontSize:20}}>Customer</Text>
</View>

<View style={{width:'10%',justifyContent:'center' }}>
<TouchableOpacity style={{alignSelf:'center', justifyContent:'center'}}>
{/* <AntDesign  size={20} style={{alignSelf:'center'}} color='white' name='check'/> */}
</TouchableOpacity>
</View>
</View>



<View style={{marginHorizontal:10,justifyContent:'center',paddingHorizontal:5, borderRadius:10,backgroundColor:'white', flexDirection:'row'}}>
<Feather style={{alignSelf:'center',}} size={18} color='grey'  name='search'/>

  <TextInput style={{backgroundColor:'white',width:'90%',height:40,paddingHorizontal:10, borderRadius:20}}
  onChangeText={text => searchFilterFunction(text)}
  onSubmitEditing={(Text) => searchFilterFunction(Text)}
  // this.callingVehicleContainerService()
  placeholder="Search Customer"
  placeholderTextColor='grey'
  
    underlineColorAndroid="transparent"
  ></TextInput>
  

</View>

            <View
              style={{
                width: '100%',
                marginTop:12,
                height:deviceHeight,
                flexDirection: 'column',
                backgroundColor:'white',
                borderTopRightRadius:10,
                borderTopLeftRadius:10,
              }}>
    
    <FlatList
         contentContainerStyle={{ paddingHorizontal:1, paddingVertical:5,}}
         
      data={Customerlist}
     renderItem={renderCustomerlist}
     keyExtractor={(item,index) => index.toString()}
    

          />


          <View style={{height:180}}>


            </View>
    {/* <RadioButtonRN
  data={datacustomer}
  color="#2c9dd1"
  textStyle={{color:'grey'}}
  box={true}
  boxDeactiveBgColor='white'
  textColor='grey'
  selectedBtn={(e) => console.log(e)}
/> */}
        {/* <FlatList
         contentContainerStyle={{ paddingHorizontal:20, paddingVertical:5,}}
         
      data={locationslist}
     renderItem={rendercustomerlist}
     keyExtractor={(item,index) => index.toString()}
    

          /> */}

           

            
           
            </View>
         
          </SafeAreaView>
        </Modal>

        <Modal
          transparent={true}
          animationType={'none'}
          visible={locmodal}
          onRequestClose={() => {
            console.log('close modal');
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingVertical: 10,
              height:deviceHeight,
              backgroundColor:'#0005',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '65%',
                flexDirection: 'column',
                backgroundColor:'white',
                borderRadius:15,
              }}>
    
           <View style={{borderBottomWidth:0.3,paddingVertical:7, borderColor:'#D0D3D4'}}>
             <Text style={{alignSelf:'center',fontSize:18, fontWeight:'bold', paddingVertical:10,}}>Location</Text>
           </View>

        <FlatList
         contentContainerStyle={{ paddingHorizontal:20, paddingVertical:15,}}
         
      data={locationslist}
     renderItem={renderlist}
     keyExtractor={(item,index) => index.toString()}
    

          />

              <View style={{flexDirection:'row',borderTopWidth:0.5,borderColor:'grey',  width:'100%'}}>
                <TouchableOpacity style={{width:'50%',height:40,alignSelf:'center',justifyContent:'center', borderRightWidth:0.5,borderColor:'grey'}}
                onPress={()=>{setlocmodal(false)}}
                >
                  <Text style={{alignSelf:'center', fontSize:15}}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={{width:'50%', height:40, justifyContent:'center', alignSelf:'center'}}
                                onPress={()=>{setlocmodal(false)}}

                >
                  <Text style={{fontWeight:'bold',fontSize:15, alignSelf:'center'}}>OK</Text>
                </TouchableOpacity>
              </View>

              {/* <View
                style={{
                  paddingVertical: 10,
                  width: '100%',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  height: 50,
                  flexDirection:'row',
                }}>
                <TouchableOpacity
                  // onPress={() => this.setState({error: false})}
                  style={{
                    borderRadius: 10,
                    alignSelf: 'center',
                    backgroundColor: 'red',
                    paddingVertical: 4,
                    paddingHorizontal: 4,
                  }}>
                  <Text
                    style={{
                      paddingVertical: 3,
                      fontSize: 13,
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    {' '}
                    CLOSE{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => this.setState({error: false})}
                  style={{
                    borderRadius: 10,
                    marginLeft:10,
                    alignSelf: 'center',
                    backgroundColor: 'red',
                    paddingVertical: 4,
                    paddingHorizontal: 4,
                  }}>
                  <Text
                    style={{
                      paddingVertical: 3,
                      fontSize: 13,
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    {' '}
                    CLOSE{' '}
                  </Text>
                </TouchableOpacity>
             
              </View> */}
           
            </View>
         
          </View>
        </Modal>


        <Modal
          transparent={true}
          animationType={'none'}
          visible={barcodemodal}
          onRequestClose={() => {
            console.log('close modal');
          }}>

<View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingVertical: 40,
              height:deviceHeight,
              backgroundColor:'white',
              flexDirection: 'column',
              alignItems: 'center',
              width:deviceWidth
            }}>
            
            <View style={{width:'100%', paddingHorizontal:30, marginTop:20}}>

            <TouchableOpacity
            onPress={()=> {setbarcodemodal(false)}}
            style={{alignSelf:'flex-end'}}>
            <MaterialCommunityIcons color='red'  name='close-circle-outline' size={30}/>
            </TouchableOpacity>
            </View>

    <QRCodeScanner
        onRead={(e)=> {setvin(e.data); setbarcodemodal(false)}}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
          SCAN VEHICLE VIN NUMBER
          </Text>
        }
        bottomContent={
          <TouchableOpacity
        onPress={()=>  setbarcodemodal(false)} 
          style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
        }
        />
        
            
            </View>
        


       </Modal>

        <Modal
        visible={showimagemodel}
        animationType='fade'
        >
            <View style={{ justifyContent:'center',backgroundColor:'black', height:deviceHeight}}>
                <View style={{backgroundColor:'black'}}>
                <SliderBox 
          images={images}
          sliderBoxHeight={deviceHeight*0.5}
          
          dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  dotStyle={{
    width: 10,
    height: 10,
    marginHorizontal: -4,
    padding: 0,
    margin: 0
  }}
          resizeMethod={'resize'}  
          resizeMode={'cover'}
  circleLoop
  currentImageEmitter={index => {
   }}

         
  paginationBoxStyle={{
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    alignSelf: "center",
  }}
  ImageComponentStyle={{ width: '100%', marginTop: 0}}

        />
        
            <TouchableOpacity 
            onPress={()=> { setshowimagemodel(false)}}
            style={{alignSelf:'center', marginTop:10}}
            >
                <MaterialCommunityIcons color='red'  name='close-circle-outline' size={40}/>
            </TouchableOpacity>
                    </View>
            </View>
        </Modal>
      
        <Modal
        visible={deletemodalshow}
        animationType='fade'
        transparent={true}
        >
            <View style={{flex:1, justifyContent:'flex-end',backgroundColor:'#0005', height:deviceHeight}}>
                <View style={{bottom:30}}>
           
                <TouchableOpacity 
            onPress={()=> { setdeletemodalshow(false), deleteimage()}}
            style={{alignSelf:'center',width:'85%', backgroundColor:'#E5E7E9',paddingVertical:20, width:'90%',borderRadius:15, marginTop:10}}
            >
              <Text style={{alignSelf:'center',fontSize:18, fontWeight:'400', color:'red'}}>Delete Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=> { setdeletemodalshow(false)}}
            style={{alignSelf:'center',backgroundColor:'white',paddingVertical:20, width:'90%',borderRadius:15, marginTop:10}}
            >
              <Text style={{alignSelf:'center', fontSize:18, fontWeight:'400', }}>Cancel</Text>
            </TouchableOpacity>
                    </View>
            </View>
        </Modal>
     

    <ScrollView style={{width:deviceWidth }}>

    <View>
 

 <SliderBox 
          images={images}
          sliderBoxHeight={260}
          dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  dotStyle={{
    width: 10,
    height: 10,
    marginHorizontal: -4,
    padding: 0,
    margin: 0
  }}
          resizeMethod={'resize'}  
          resizeMode={'cover'}
  circleLoop
  currentImageEmitter={index => { 
    if(index == 0){
      setadd(true)
    }else{
      setadd(false)
    }
    setimgposition(index); 
   }}

          onCurrentImagePressed={index =>
          //setcurrentimg()
            // console.warn(`image ${index} pressed`)
            setshowimagemodel(true)
          }
  paginationBoxStyle={{
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    alignSelf: "center",
  }}
  ImageComponentStyle={{ width: '100%', marginTop: 0}}

        />
        


        {close == true ?

<View style={{marginTop:15,position:'absolute',alignSelf:'flex-end', paddingHorizontal:40, }}>
<TouchableOpacity
onPress={()=> {   setdeletemodalshow(true)}}
style={{alignSelf:'center',borderRadius:5, borderWidth:1, borderColor:AppColors.toolbarColor }}>

<Ionicons name="close" color={AppColors.toolbarColor}  size={25}  />
</TouchableOpacity>
  </View>

  :null}
  {/* <TouchableOpacity 
          onPress={() => refRBSheet.current.open()}
          style={{backgroundColor:'grey' , borderRadius: 50,height:'100%',width:'100%',  justifyContent:'center', }}>
  <Text style={{color:'white', alignSelf:'center'}}>+</Text>

  </TouchableOpacity> */}



{add == true ?
 <ActionButton position='left' style={{marginLeft:deviceWidth-105,height:'95%', width:'90%',}} size={40} buttonColor="rgba(231,76,60,1)">
 <ActionButton.Item buttonColor='#9b59b6'   size={30}
  onPress={() => {if(Platform.OS == 'ios'){ chooseFile('photo')}else{ selectFile3() }}}
  >
   <Ionicons name="ios-images-outline" size={20} style={styles.actionButtonIcon} />
 </ActionButton.Item>
 <ActionButton.Item buttonColor='#3498db' size={30}
 
 onPress={() => {if(Platform.OS == 'ios'){ TakePhoto('photo')}else{ captureImage() }}}>
 <Ionicons name="ios-camera-outline" size={20} style={styles.actionButtonIcon} />
 </ActionButton.Item>

</ActionButton>
: null }



 




</View>

  


    <View style={{width:'100%',flexDirection:'row',marginTop:2, paddingVertical:Platform.OS == 'ios' ? 10:  0, paddingHorizontal:10, backgroundColor:'#2C3E50', justifyContent:'center', alignSelf:'center'}}>
              <View style={{width:'20%', alignSelf:'center'}}>
              <Text style={{color:'white', alignSelf:'center'}}>VIN #:</Text>
              </View>

              <View style={{width:'50%'}}>
                <TextInput 
                style={{color:'white'}}
                placeholderTextColor='#D0D3D4'
                placeholder={vin == '' ? 'Enter VIN or scan':vin}
                onChangeText={(text)=> {setvin(text)}}
                />
              </View>
              <View style={{alignSelf:'center', width:'20%'}}>
                <TouchableOpacity 
                onPress={()=> {setbarcodemodal(true)}}
                style={{alignSelf:'flex-end'}}
                >
                  <MaterialIcons name='qr-code-scanner' color='white' size={18} />
                  </TouchableOpacity>
              </View>

            </View>

        
    <View style={{flexDirection:'column',justifyContent:'center',backgroundColor:'#F2F3F4',   shadowColor: 'grey',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 1,
        elevation: 5,alignSelf:'center',borderRadius:1,borderWidth:0.2,marginBottom:15, marginTop:10,paddingHorizontal:10, width:'95%',}} >





    <View style={{width:'100%',flexDirection:'column', borderBottomWidth:0.3,paddingVertical:5,borderColor:'#B3B6B7', justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>CUSTOMER </Text>
    <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between'}}
    onPress={()=>{
      setcustmodal(true)
    }}
    >
    <Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{customername}</Text>
    <AntDesign  name='caretdown' color='grey'/>
    </TouchableOpacity></View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5, borderColor:'#B3B6B7', justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2, fontWeight:'bold',fontSize:14,}}>LOCATION</Text>
    <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between'}}
    onPress={()=>{
      setlocmodal(true)
    }}
    >
    <Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{location}</Text>
    <AntDesign  name='caretdown' color='grey'/>
    </TouchableOpacity>
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>HAT NUMBER</Text>
    <TextInput  
    placeholder={hatnumber}
    placeholderTextColor='grey'
    onChangeText={(text)=> {sethatnumber(text)}} 
    />
    </View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>VEHICLE TYPE</Text>
    <TextInput  
    placeholder={vehicletype}
    placeholderTextColor='grey'
    onChangeText = {(Text)=> {setvehicletype(Text)}}
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>YEAR </Text>
    <TextInput  
    placeholder={year}
    placeholderTextColor='grey'
    onChangeText = {(Text)=> {setyear(Text)}}


    />
    </View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>COLOR </Text>
    <TextInput  
    placeholder={color}
    placeholderTextColor='grey'
    onChangeText = {(Text)=> {setcolor(Text)}}

    />
    </View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5, borderColor:'#B3B6B7', justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>MODEL </Text>
    <TextInput  
    placeholder={model}
    placeholderTextColor='grey'
    onChangeText = {(Text)=> {setmodel(Text)}}

    />
    </View>



    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>MAKE</Text>
    <TextInput  
    placeholder={make}
    placeholderTextColor='grey'
    onChangeText = {(Text)=> {setmake(Text)}}

    />
    </View>





    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>WEIGHT</Text>
    <TextInput  
    placeholder={weight}
    placeholderTextColor='grey'
    onChangeText = {(Text)=> {setweight(Text)}}

    />
    </View>



    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LICENSE NUMBER</Text>
    <TextInput  
    placeholder={licensenumber}
    placeholderTextColor='grey'
    onChangeText = {(Text)=> {setlicensenumber(Text)}}

    />
    </View>






    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LOT NUMBER</Text>
    <TextInput  
    placeholder={lotnumber}
    placeholderTextColor='grey'
    onChangeText = {(Text)=> {setlotnumber(Text)}}

    />
    </View>



    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LOAD STATUS</Text>
    <TextInput  
    placeholder={loadstatus}
    placeholderTextColor='grey'
    onChangeText={(text)=> {setloadstatus(text)}}
    />
    </View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>CONTAINER NUMBER</Text>
    <TextInput  
    placeholder={containernmber}
    placeholderTextColor='grey'
    onChangeText={(text)=> {setcontainernmber(text)}}

    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>KEY NOTE</Text>
    <TextInput  
    placeholder={keynote}
    placeholderTextColor='grey'
    onChangeText={(text)=> {setkeynote(text)}}

    />
    </View>

    {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>PREPAREDBY</Text>
    <TextInput  
    placeholder={lotnumber}
    placeholderTextColor='grey'
    onChangeText={(text)=> {setlotnumber(text)}}

    />
    </View> */}



    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>AUCTION AT</Text>
    <TextInput  
    placeholder={auctionat}
    placeholderTextColor='grey'
    onChangeText={(text)=> {setauctionat(text)}}

    />
    </View>

    {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>VCR</Text>
    <TextInput  
    placeholder={vcr != null ? vcr : '' }
    placeholderTextColor='grey'
        onChangeText={(text)=> {setvcr(text)}}

    />
    </View> */}

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>NOTE</Text>
    <TextInput  
    placeholder={note}
    placeholderTextColor='grey'
    onChangeText={(text)=> {setnote(text)}}
    />
    </View>



    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>STATUS</Text>
    {/* <RadioButtonRN
      data={datacustomer}
      color="#2c9dd1"
      box={false}
      boxDeactiveBgColor='white'
      textColor='grey'
      selectedBtn={(e) => console.log(e)}
    /> */}


    <View style={{flexDirection:'row', marginVertical:10,}}>

    <View style={{flexDirection:'column', marginLeft:5,   }}>
      <TouchableOpacity
      
      onPress={()=>{setstatus('1') , setstatusname('On Hand')}}
      >

    <Text style={{fontWeight:'500'}}>ON HAND</Text>
    </TouchableOpacity >

    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{setstatus('2'), setstatusname('Manifest')}}
    >

    <Text style={{fontWeight:'500'}}>MANIFEST</Text>
    </TouchableOpacity>


    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{setstatus('3') , setstatusname('Car on the way')}}
    >

    <Text style={{fontWeight:'500'}}>ON THE WAY</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{setstatus('4') , setstatusname('Shipped')}}
    >

    <Text style={{fontWeight:'500'}}>SHIPPED</Text>
    </TouchableOpacity>


    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{setstatus('6') , setstatusname('Arrived')}}
    >

    <Text style={{fontWeight:'500'}}>ARRIVED</Text>
    </TouchableOpacity>

    {/* <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{setstatus('7')}}
    >

    <Text style={{fontWeight:'500'}}>Handed Over</Text>
    </TouchableOpacity> */}

    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{setstatus('5'), setstatusname('Picked Up')}}
    >

    <Text style={{fontWeight:'500'}}>PICKED UP</Text>
    </TouchableOpacity>

   

    </View>

    {/* <QRCodeScanner
        onRead={()=> {}}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
        /> */}
    <View style={{flexDirection:'column',  marginLeft:10, width:'60%' }}>
      
      <TouchableOpacity 
      onPress={()=>{setstatus(1)}}
      >
    {status == 1 ? 
    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <AntDesign name='check' color='transparent' size={20}
    />}
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:5,}}

      onPress={()=>{setstatus(2)}}
    >
    {status == 2 ? 

    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <AntDesign name='check' color='transparent' size={20}
    />}
    </TouchableOpacity>



    <TouchableOpacity
    style={{marginTop:5,}}

      onPress={()=>{setstatus(3) }}
    >
    {status == 3 ? 

    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <AntDesign name='check' color='transparent' size={20}
    /> 

    }
    </TouchableOpacity>


    <TouchableOpacity
    style={{marginTop:5,}}

      onPress={()=>{setstatus(4) }}
    >
    {status == 4 ? 

    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <AntDesign name='check' color='transparent' size={20}
    />}
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:8,}}

      onPress={()=>{setstatus(6) }}
    >
    {status == 6 ? 

    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <AntDesign name='check' color='transparent' size={20}
    />}
    </TouchableOpacity>

    {/* <TouchableOpacity
    style={{marginTop:8}}

      onPress={()=>{setstatus(7)}}
    >
    {status == 7 ? 

    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <AntDesign name='check' color='transparent' size={20}
    />}
    </TouchableOpacity> */}


    <TouchableOpacity
    style={{marginTop:5,}}

      onPress={()=>{setstatus(5)}}
    >
    {status == 5 ? 

    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <AntDesign name='check' color='transparent' size={20}
    />}
    </TouchableOpacity>

    {/* <TouchableOpacity
    style={{marginTop:7,}}

      onPress={()=>{setstatus('15')}}
    >
  
    </TouchableOpacity>  */}
    {/*
    <TouchableOpacity
    style={{marginTop:10,backgroundColor:'yellow'}}

      onPress={()=>{setstatus('10')}}
    >
    {status == '10' ? 

    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <AntDesign name='check' color='transparent' size={20}
    />}
    </TouchableOpacity>



    <TouchableOpacity
    style={{marginTop:10,backgroundColor:'grey'}}

      onPress={()=>{setstatus('11')}}
    >
    {status == '11' ? 

    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <AntDesign name='check' color='transparent' size={20}
    />}
    </TouchableOpacity>


    <TouchableOpacity
    style={{marginTop:10,}}

      onPress={()=>{setstatus('12')}}
    >
    {status == '12' ? 

    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <AntDesign name='check' color='transparent' size={20}
    />}
    </TouchableOpacity>


    <TouchableOpacity
    style={{marginTop:10,}}

      onPress={()=>{setstatus('15')}}
    >
    {status == '15' ? 

    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <AntDesign name='check' color='transparent' size={20}
    />}
    </TouchableOpacity> */}


    </View>


    </View>

    </View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>CONDITION</Text>
    <View style={{flexDirection:'row', marginVertical:10,}}>

    <View style={{flexDirection:'column', marginLeft:5,   }}>
      <TouchableOpacity
      
      onPress={()=>{setcondition('0')}}
      >

    <Text style={{fontWeight:'500'}}>NON-OP</Text>
    </TouchableOpacity >

    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{setcondition('1')}}
    >

    <Text style={{fontWeight:'500'}}>OPERABLE</Text>
    </TouchableOpacity>

    </View>


    <View style={{flexDirection:'column', marginLeft:10, width:'60%' }}>
      
      <TouchableOpacity 
      onPress={()=>{setcondition('0')}}
      >
    {condition == '0' ? 
    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <Text style={{alignSelf:'center' ,fontWeight:'500'}}></Text>
    }
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:8,}}

      onPress={()=>{setcondition('1')}}
    >
    {condition == '1' ? 

    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <Text style={{alignSelf:'center' ,fontWeight:'500'}}></Text>
    }
    </TouchableOpacity>

    </View>


    </View>

    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>DAMAGED</Text>

    <View style={{flexDirection:'row', marginVertical:10,}}>

    <View style={{flexDirection:'column',   width:'12%' }}>
      <TouchableOpacity
      
      onPress={()=>{setdamaged('1')}}
      >

    <Text style={{alignSelf:'center' ,fontWeight:'500'}}>YES</Text>
    </TouchableOpacity >

    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{setdamaged('0')}}
    >

    <Text style={{alignSelf:'center' ,fontWeight:'500'}}>NO</Text>
    </TouchableOpacity>

    </View>


    <View style={{flexDirection:'column',  width:'60%' }}>
      
      <TouchableOpacity 
      onPress={()=>{setdamaged('1')}}
      >
    {damaged == '1' ? 
    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <Text style={{alignSelf:'center' ,fontWeight:'500'}}></Text>
    }
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:8,}}

      onPress={()=>{setdamaged('0')}}
    >
    {damaged == '0' ? 

    <AntDesign name='check' color='#1a9bef' size={20} /> :
    <Text style={{alignSelf:'center' ,fontWeight:'500'}}></Text>
    }
    </TouchableOpacity>

    </View>


    </View>


    {/* <RadioButton.Group onValueChange={newValue => setdamaged(newValue)} value={damaged}>

          <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
          <Text style={{alignSelf:'center' ,fontWeight:'500'}}>Yes</Text>

          <RadioButton value='1' color='#1a9bef'/>

          </View>
          <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
          <Text style={{alignSelf:'center',marginRight:5, fontWeight:'500'}}>No</Text>

          <RadioButton value='0'  color="#1a9bef" />

          </View>
        </RadioButton.Group> */}

    {/* <RadioButtonRN
      data={Damaged}
      color="#2c9dd1"
      box={false}
      boxDeactiveBgColor='white'
      textColor='grey'
      selectedBtn={(e) => console.log(e)}
    /> */}
    </View>


    {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <RadioButtonRN
      data={datacustomer}
      color="#2c9dd1"
      box={false}
      boxDeactiveBgColor='white'
      textColor='grey'
      selectedBtn={(e) => console.log(e)}
    />
    </View> */}

    {/* <View style={{width:'100%',backgroundColor:'red', flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <RadioButton
            value='1'
            status={ picture == '1' ? 'checked' : 'unchecked' }
            onPress={() => setpictures('1')}
          />
    </View> */}

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>TITLE NUMBER</Text>
    <TextInput  
    placeholder={titlenumber}
    placeholderTextColor='grey'
    onChangeText={(text)=> {settitlenumber(text)}}

    />
    </View>


  

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>DELIVER DATE</Text>
    

            <View 
            
            style={{width:'95%',flexDirection:'row',  justifyContent:'space-between'}}>
            <Text style={{alignSelf:'center'}}  >{deliverdate}</Text>

    <DatePicker
        style={{width: 20}}
        date={deliverdate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        hideText={false}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 2,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderWidth:0,
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { setdeliverdate(date)}}
      />


              </View>
  

    </View>



    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>PICKUP DATE</Text>
    {/* <DatePicker
              style={{width: 200,
        marginTop: 20,}}
              date={date} // Initial date from state
              mode="datetime" // The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="2016-05-01"
              maxDate="2025-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  //display: 'none',
                  position: 'absolute',
                  left: 0,
                  top: 1,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 0,
                },
              }}
              onDateChange={(date) => {
                setDate(date);
              }}
            /> */}

            <View 
            
            style={{width:'95%',flexDirection:'row',  justifyContent:'space-between'}}>
            <Text style={{alignSelf:'center'}}  >{pickupdate}</Text>

    <DatePicker
        style={{width: 20}}
        date={pickupdate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        hideText={false}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 2,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderWidth:0,
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { setpickupdate(date)}}
      />


              </View>
  
    {/* {pickupdatemodal && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          
          onChange={(date)=> { setpickupdate(date)}}
        />
        
    )} */}

    </View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>CHECK OPTIONS INCLUDED ON THE ..</Text>
    <View style={{flexDirection:'row', marginVertical:10,}}>

    <View style={{flexDirection:'column',  marginLeft:10, width:'10%' }}>
      
      <TouchableOpacity 
      onPress={()=>{ CDChanger == 3 ? setCDChanger('') :setCDChanger(3)}}
      >
    {CDChanger == 3 ? 
    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{ GPSNavigationSystem == 4 ? setGPSNavigationSystem(''):setGPSNavigationSystem(4)}}
    >
    {GPSNavigationSystem == 4 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>



    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{SpareTireJack == 5 ? setSpareTireJack(''):setSpareTireJack(5)}}
    >
    {SpareTireJack == 5 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    /> 

    }
    </TouchableOpacity>


    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{ WheelCovers == 6 ? setWheelCovers('') : setWheelCovers(6)}}
    >
    {WheelCovers == 6 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{Radio == 7 ? setRadio(''):setRadio(7) }}
    >
    {Radio == 7 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>




    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{CDPLAYER == 8 ? setCDPLAYER(''):setCDPLAYER(8) }}
    >
    {CDPLAYER == 8 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{MIRROR == 10 ? setMIRROR(''):setMIRROR(10) }}
    >
    {MIRROR == 10 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{SPEAKER == 11 ? setSPEAKER(''):setSPEAKER(11) }}
    >
    {SPEAKER == 11 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>





    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{OTHERS == 12 ? setOTHERS(''):setOTHERS(12)}}
    >
    {OTHERS == 12 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity> 

    </View>

    <View style={{flexDirection:'column', marginLeft:5,   }}>
      
    <TouchableOpacity
   
      onPress={()=>{ CDChanger == 3 ? setCDChanger(''):setCDChanger(3)}}
    >

    <Text style={{fontWeight:'500'}}>CD Changer</Text>
    </TouchableOpacity>


   
    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{GPSNavigationSystem == 4 ? setGPSNavigationSystem(''):setGPSNavigationSystem(4)}}
    >

    <Text style={{fontWeight:'500'}}>GPS Navigation System</Text>
    </TouchableOpacity>







    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{SpareTireJack == 5 ? setSpareTireJack(''):setSpareTireJack(5)}}
    >

    <Text style={{fontWeight:'500'}}>Spare Tire/Jack</Text>
    </TouchableOpacity>

    


    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{WheelCovers == 6 ? setWheelCovers(''):setWheelCovers(6)}}
    >

    <Text style={{fontWeight:'500'}}>Wheel Covers</Text>
    </TouchableOpacity>


    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{Radio ==7 ?  setRadio(''):setRadio(7)}}
    >

    <Text style={{fontWeight:'500'}}>Radio</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{CDPLAYER == 8 ? setCDPLAYER(''):setCDPLAYER(8)}}
    >

    <Text style={{fontWeight:'500'}}>CD Player</Text>
    </TouchableOpacity>


    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{MIRROR == 10 ? setMIRROR(''):setMIRROR(10) }}
    >

    <Text style={{fontWeight:'500'}}>MIRROR</Text>
    </TouchableOpacity>




    

    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{SPEAKER == 11 ? setSPEAKER(''):setSPEAKER(11)}}
    >

    <Text style={{fontWeight:'500'}}>Speaker</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:10,}}
      onPress={()=>{OTHERS == 12 ? setOTHERS(''):setOTHERS(12)}}
    >

    <Text style={{fontWeight:'500'}}>OTHERS</Text>
    </TouchableOpacity>




    </View>




    </View>

    </View>




{/* 
    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:8,borderColor:'#B3B6B7',  justifyContent:'center'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold',alignSelf:'center', fontSize:14,}}>CONDITION OF VEHICLE</Text>

    </View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>FRONT WINDSHILED</Text>
    <TextInput  
      onChangeText={text =>{setfrontwindshiled(text) }}
    // onSubmitEditing={(text)=> {setfrontwindshiled(text) }}
    placeholder={frontwindshiled}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>BONNET</Text>
    <TextInput  
      onChangeText={text =>  setbonnet(text)}

    placeholder={bonnet}
    placeholderTextColor='grey'
    />
    </View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>GRILL</Text>
    <TextInput  
      onChangeText={text =>  setgrill(text)}

    placeholder={grill}
    placeholderTextColor='grey'
    />
    </View>



    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>FRONT BUMPER</Text>
    <TextInput  
      onChangeText={text => setfrontbumper(text) }

    placeholder={frontbumper}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>FRONT HEAD LIGHT</Text>
    <TextInput  
      onChangeText={text =>  setfrontheadlight(text)}

    placeholder={frontheadlight}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>REAR WINDSHIELD</Text>
    <TextInput  
      onChangeText={text =>  setrearwindshield(text)}

    placeholder={rearwindshield}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>TRUNK DOOR</Text>
    <TextInput  
      onChangeText={text =>settrunkdoor(text) }

    placeholder={trunkdoor}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>REAR BUMPER</Text>
    <TextInput  
      onChangeText={text => setrearbumper(text)}

    placeholder={rearbumper}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>REAR BUMPER SUPPORT</Text>
    <TextInput  
      onChangeText={text => setrearbumpersupport(text) }

    placeholder={rearbumpersupport}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>TAIL LAMP</Text>
    <TextInput  
      onChangeText={text =>  settaillamp(text)}

    placeholder={taillamp}
    placeholderTextColor='grey'
    />
    </View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>FRONT LEFT FENDER</Text>
    <TextInput  
      onChangeText={text =>  setfrontleftfender(text)}

    placeholder={frontleftfender}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LEFT FRONT DOOR</Text>
    <TextInput  
      onChangeText={text =>setleftfrontdoor(text) }

    placeholder={leftfrontdoor}
    placeholderTextColor='grey'
    />
    </View>




    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LEFT REAR DOOR</Text>
    <TextInput  
      onChangeText={text => setleftreardoor(text) }

    placeholder={leftreardoor}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LEFT REAR FENDER</Text>
    <TextInput  
      onChangeText={text => setleftrearfender(text)}

    placeholder={leftrearfender}
    placeholderTextColor='grey'
    />
    </View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>PILLAR</Text>
    <TextInput  
      onChangeText={text => setpillar(text)}

    placeholder={pillar}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>ROOF</Text>
    <TextInput  
      onChangeText={text => setroof(text) }

    placeholder={roof}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>RIGHT REAR FENDER</Text>
    <TextInput  
      onChangeText={text => setrightrearfender(text)}

    placeholder={rightrearfender}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>RIGHT REAR DOOR</Text>
    <TextInput  
      onChangeText={text => setrightreardoor(text)}

    placeholder={rightreardoor}
    placeholderTextColor='grey'
    />
    </View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>RIGHT FRONT DOOR</Text>
    <TextInput  
      onChangeText={text =>setrightfrontdoor(text) }

    placeholder={rightfrontdoor}
    placeholderTextColor='grey'
    />
    </View>

    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>FRONT RIGHT FENDER</Text>
    <TextInput  
      onChangeText={text => setfrontrightfender(text)}

    placeholder={frontrightfender}
    placeholderTextColor='grey'
    />
    </View>


    <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>FRONT TYRES</Text>
    <TextInput  
      onChangeText={text => setfronttyres(text)}
    placeholder={fronttyres}
    placeholderTextColor='grey'
    />
    </View> */}





    </View>

    </ScrollView>

    <View
        style={{
          height: 55,
          backgroundColor: "#1a9bef",
          borderRadius: 15,
          width: deviceWidth,
          bottom:0,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "32%",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Ionicons
            name="car-sport"
            type="material"
            color="#fff"
            style={{ alignSelf: "center" }}
            size={22}
            onPress={() => navigation.navigate("Dashboard")}
          />
          <Text style={{ alignSelf: "center", color: "white", fontSize: 12 }}>
            My Vehicle
          </Text>
        </View>

        <View style={{ width: "32%", bottom: 30 }}>
          <View></View>
          <Icon
            name="add"
            type="material"
            color="#f00"
            containerStyle={{ alignSelf: "center" }}
            reverse
            size={26}
            onPress={() => navigation.navigate("AddVehicle")}
          />

          <Text
            style={{
              alignSelf: "center",
              color: "white",
              bottom: 2,
              fontSize: 12,
            }}
          >
            Add Vehcile
          </Text>
        </View>

        <View style={{ width: "32%", justifyContent: "center" }}>
          <Feather
            name="box"
            type="material"
            color="#fff"
            size={22}
            style={{ alignSelf: "center" }}
            onPress={() => {}}
          />
          <Text style={{ alignSelf: "center", color: "white", fontSize: 12 }}>
            Container
          </Text>
        </View>
      </View>
    </SafeAreaView>


  );
};


export default EditVehicle;


const styles = StyleSheet.create({
  actionButtonIcon: {
    alignSelf:'center',
    color:'white'
  },

  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'red'
  },
  buttonTouchable: {
    paddingVertical:10,
    paddingHorizontal:22,
    textAlign:'center',
    marginTop:Platform.OS == 'ios' ? 5:80,
    borderWidth:1,
    borderRadius:8,
    borderColor:'red'
  },
  centerText: {
    
    fontSize: 18,
    marginTop:0,
    color: '#777'
  },
  })
