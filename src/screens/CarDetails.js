import React, { useState, useEffect } from "react";
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
  Alert,
  StatusBar,
  TouchableOpacity,
  Modal,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import AppColors from "../Colors/AppColors";
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from "../constance/AppConstance";
import CameraRoll from '@react-native-community/cameraroll';
import AppMessages from "../AppMessages/AppMesage";
import AppFonts from "../AppFont/AppFonts";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/dist/SimpleLineIcons";
import Entypo from "react-native-vector-icons/dist/Entypo";
import { SliderBox } from "react-native-image-slider-box";
import RNFetchBlob from "rn-fetch-blob";
import Snackbar from "react-native-snackbar";
import Spinner from "react-native-loading-spinner-overlay";
import AppUrlCollection from "../UrlCollection/AppUrlCollection";
import NetInfo from "@react-native-community/netinfo";
import { Appbar } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { exp } from "react-native-reanimated";
import { strings } from "../language/Language";
// import CameraRoll from '@react-native-community/cameraroll';



const REMOTE_IMAGE_PATH =
'https://raw.githubusercontent.com/AboutReact/sampleresource/master/gift.png'

const images1 = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
];
let imageBaseUrl;
const CarDetails = ({ route, navigation }) => {
  // console.log(" vehicle obj is" , JSON.stringify(route.params.vehicleObj.status) )
  const [vehicleDetails, setvehicleDetails] = useState();
  const [isFooterLoading, setisFooterLoading] = useState(false);
  const [isStopCallingAPI, setisStopCallingAPI] = useState(false);
  const [data, setData] = useState([]);
  const [exportdata , setexportdata] = useState({
    "id": null,
    "vehicle_id": null,
    "export_id": null,
    "customer_user_id": null,
    "custom_duty": null,
    "clearance": null,
    "towing": null,
    "shipping": null,
    "storage": null,
    "local": null,
    "others": null,
    "additional": null,
    "vat": null,
    "remarks": null,
    "title": null,
    "discount": null,
    "vehicle_export_is_deleted": null,
    "notes_status": null,
    "exchange_rate": null,
  })
  const [showimagemodel, setshowimagemodel] = useState(false);
  const [isLoading, setLoading] = useState(true);

  // const { type  , datapre , baseImagePath } = route.params;

  const [imgpos, setimgpos] = useState(0);
  const [images, setimages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // callingVehicleDetailApi = async (isCallingFirsttime) => {
  const callingVehicleDetailApi = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        var url = "";
        // this.setState({ isLoading: true, isFooterLoading: false })
        console.log("route.params.vehicleObj.id", route.params.vehicleObj.id);
        url =
          AppUrlCollection.VEHICLE_DETAIL + "?id=" + route.params.vehicleObj.id;

        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authkey: AppConstance.USER_INFO.USER_TOKEN,
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.status == AppConstance.API_SUCESSCODE) {
              setData(responseJson.data.vehicle);
              let data = responseJson.data.vehicle;
              let expdata = responseJson.data.vehicle.vehicleExports
              setexportdata(expdata);
              // alert(expdata)

              imageBaseUrl = responseJson.data.other.vehicle_image;
              if (data.images != undefined && data.images != null) {
                // setimg(responseJson.data.vehicle.images)
                for (let index = 0; index < data.images.length; index++) {
                  console.log("data.images", data.images[index].thumbnail);
                  const element = data.images[index].thumbnail;
                  images.push(imageBaseUrl + element);
                  console.log(element);
                }
              }
              // console.log("responseJson.data.vehicle", responseJson.data.vehicle)
            } else {
              setisFooterLoading(false);
              setisStopCallingAPI(true);
              console.log(responseJson.message);
            }
          })
          .catch((error) => {
            console.warn(error);
          })
          .finally(() => setLoading(false));
      } else setModalVisible(true);
    });
  };

  const checkPermission = async (pictures) => {
    
    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission

    if (Platform.OS === 'ios') {
      for(var i=0; i<pictures.length; i++){
        handleDownload(pictures[i]);
      }
      showSnackbarMessage()
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'App needs access to your storage to download Photos',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          downloadAndroidImage();
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };

  const downloadAndroidImage = () => {
    // Main function to download the image
    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = REMOTE_IMAGE_PATH;    
    // Getting the extention of the file
    let ext = getExtention(image_URL);
    ext = '.' + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' + 
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      })
      .catch((error) => {
        alert(error)
        console.warn(error);
      })      
  };

 

  const handleDownload = async (img) => {
 

    
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
    })
      .fetch('GET', img)
      .then(res => {
        
        CameraRoll.saveToCameraRoll(res.data, 'photo')
          .then(() => {


        //  console.log(img[i])
            // showSnackbarMessage()
            
            // Alert.alert(
            //   'Save remote Image',
            //   'Image Saved Successfully',
            //   [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            //   {cancelable: false},
            // );
          })
          .catch(err => {
            Alert.alert(
              'Save remote Image',
              'Failed to save Image: ' + err.message,
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
          })
          .finally((res) =>  console.log('res'));
      })
      // .catch(error => {
      //   // this.setState({saving: false});
      //   Alert.alert(
      //     'Save remote Image',
      //     'Failed to save Image: ' + error.message,
      //     [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      //     {cancelable: false},
      //   );
      // });
    
};

const showSnackbarMessage = () => {
  setTimeout(() => {
    Snackbar.show({
      backgroundColor: '#008B8B',
      title: 'Downloaded Successfully',
      duration: Snackbar.LENGTH_SHORT,
    });
  }, 200);
};
  const getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ?
             /[^.]+$/.exec(filename) : undefined;
  };

  useEffect(() => {
    callingVehicleDetailApi();
  }, []);
  // console.log("data.images", data.images)
  // console.log("data.images",data.images.thumbnail)
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor:'white', height: deviceHeight }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
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
                  callingVehicleDetailApi();
                }}
              >
                <Text style={styles.textStyle}>Retry</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={showimagemodel} animationType="fade">
        <View
          style={{
            justifyContent: "center",
            backgroundColor: "black",
            height: deviceHeight,
          }}
        >
          <View style={{ backgroundColor: "black" }}>
            <SliderBox
              images={images}
              sliderBoxHeight={deviceHeight * 0.5}
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              dotStyle={{
                width: 10,
                height: 10,
                marginHorizontal: -4,
                padding: 0,
                margin: 0,
              }}
              resizeMethod={"resize"}
              resizeMode={"cover"}
              circleLoop
              currentImageEmitter={(index) => {}}
              paginationBoxStyle={{
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}
              ImageComponentStyle={{ width: "100%", marginTop: 0 }}
            />

            <TouchableOpacity
              onPress={() => {
                setshowimagemodel(false);
              }}
              style={{ alignSelf: "center", marginTop: 10 }}
            >
              <MaterialCommunityIcons
                color="red"
                name="close-circle-outline"
                size={40}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Appbar.Header style={styles.header}>
        <View style={styles.viewTitle}>
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={35} color="white" />
          </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>{strings.Vehicledetails}</Text>
          </View>
        </View>
      </Appbar.Header>

      {isLoading ? (
        <Text> Loading... </Text>
      ) : (
        <ScrollView style={{ width: deviceWidth, backgroundColor: "white" }}>
          <SliderBox
            images={images}
            sliderBoxHeight={210}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 15,
              marginHorizontal: -6,
              padding: 0,
              margin: 0,
            }}
            resizeMethod={"resize"}
            resizeMode={"cover"}
            circleLoop
            currentImageEmitter={(index) => {}}
            onCurrentImagePressed={(index) =>
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
            ImageComponentStyle={{
              borderRadius: 15,
              width: "90%",
              marginTop: 10,
              // marginHorizontal: 15,
            }}
          >

            </SliderBox>

            <View style={{position:'absolute', alignSelf:'flex-end', marginTop:20, paddingHorizontal:40}}>
              <TouchableOpacity onPress={()=> {checkPermission(images)}}>

                <Image style={{width:35, height:35,}} source={require('../images/download.png')}/>
              </TouchableOpacity>
              </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <LinearGradient
              colors={["#BBCCE3", "#4e7fc2"]}
              style={{
                height: 40,
                width: "30%",
                marginTop: 15,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{color:'white', fontWeight:'bold'}}>{data.year}</Text>
            </LinearGradient>
            <LinearGradient
              colors={["#BBCCE3", "#4e7fc2"]}
              style={{
                height: 40,
                width: "30%",
                marginTop: 15,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{color:'white', fontWeight:'bold'}}>{data.make}</Text>
            </LinearGradient>
            <LinearGradient
              colors={["#BBCCE3", "#4e7fc2"]}
              style={{
                height: 40,
                width: "30%",
                marginTop: 15,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
             <Text style={{color:'white', fontWeight:'bold'}}>{data.model}</Text>
            </LinearGradient>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "gray",
              paddingTop: 15,
              paddingBottom: 5,
              marginHorizontal: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.Lot_no}</Text>
              <Text>{data.lot_number} </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.Vin_no}</Text>
              <Text>{data.vin} </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.color}</Text>
              <Text>{data.color} </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "gray",
              paddingTop: 5,
              paddingBottom: 5,
              marginHorizontal: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.Title}</Text>
              <Text>
                {data.vehicleExports != null &&
                data.vehicleExports.title != "" &&
                data.vehicleExports.title != undefined
                  ? data.vehicleExports.title
                  : "--"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.Note}</Text>
              <Text>
                {data.towingRequest.note != null &&
                data.towingRequest.note != "" &&
                data.towingRequest.note != undefined ? (
                  <Ionicons
                    name="information-circle"
                    size={25}
                    color={AppColors.green}
                  />
                ) : (
                  "--"
                )}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.Keys}</Text>
              <Text>
                {data.keys != null &&
                data.keys != "" &&
                data.keys != undefined ? (
                  <MaterialCommunityIcons
                    name="check-box-outline"
                    color="green"
                    size={20}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="close-box-outline"
                    color="red"
                    size={20}

                  />
                )}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.BookingNumber}</Text>
              {/* <Text>
                {data.vehicleExports.export.loading_date != null &&
                data.vehicleExports.export.loading_date != "" &&
                data.vehicleExports.export.loading_date != undefined
                  ? data.vehicleExports.export.loading_date
                  : "--"}
              </Text> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.BookingNumber}</Text>
              {/* <Text>
                {data.vehicleExports.export.booking_number != null &&
                data.vehicleExports.export.booking_number != "" &&
                data.vehicleExports.export.booking_number != undefined
                  ? data.vehicleExports.export.booking_number
                  : "--"}
              </Text> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.Container_no}</Text>
              <Text>{data.container_number}</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "gray",
              paddingTop: 5,
              paddingBottom: 5,
              marginHorizontal: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.ETD}</Text>
              {/* <Text>
                {data.vehicleExports.export.export_date != null &&
                data.vehicleExports.export.export_date != "" &&
                data.vehicleExports.export.export_date != undefined
                  ? data.vehicleExports.export.export_date
                  : "--"}
              </Text> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.Shipping_date}</Text>
              {/* <Text>
                {data.towingRequest.deliver_date != null &&
                data.towingRequest.deliver_date != "" &&
                data.towingRequest.deliver_date != undefined
                  ? data.towingRequest.deliver_date
                  : "--"}
              </Text> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.ETA}</Text>
              {/* <Text>
                {data.vehicleExports.export.eta != null &&
                data.vehicleExports.export.eta != "" &&
                data.vehicleExports.export.eta != undefined
                  ? data.vehicleExports.export.eta
                  : "--"}
              </Text> */}
            </View>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "gray",
              paddingTop: 5,
              paddingBottom: 5,
              marginHorizontal: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.InvoiceNumber}</Text>
              {/* <Text>
                {data.invoice != null &&
                data.invoice.invoice_number != null &&
                data.invoice.invoice_number != "" &&
                data.invoice.invoice_number != undefined
                  ? data.invoice.invoice_number
                  : "--"}
              </Text> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.Shipping}</Text>
              {/* <Text>
                {data.invoice != null &&
                data.vehicleExports.shipping != null &&
                data.vehicleExports.shipping != "" &&
                data.vehicleExports.shipping != undefined
                  ? data.vehicleExports.export.shipping
                  : "--"}
              </Text> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.PaidAmount}</Text>
              {/* <Text>
                {data.invoice != null &&
                data.invoice.paid_amount != null &&
                data.invoice.paid_amount != "" &&
                data.invoice.paid_amount != undefined
                  ? data.invoice.paid_amount
                  : "--"}
              </Text> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 5,
              }}
            >
              <Text>{strings.BalanceAmount}</Text>
              {/* <Text>
                {data.invoice != null &&
                data.invoice.balance_due != null &&
                data.invoice.balance_due != "" &&
                data.invoice.balance_due != undefined
                  ? data.invoice.balance_due
                  : "--"}
              </Text> */}
            </View>
          </View>
          <View style={{height:100}}>

          </View>
        </ScrollView>
      )}
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
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    height: deviceHeight * 0.07,
    alignSelf: "flex-start",
  },
  viewTitle: {
    alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 15,
    // alignSelf: "flex-start",
    backgroundColor: AppColors.blue,
    width: deviceWidth,
    height: "100%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "row",
  },
  textView: {
    flex: 1,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    // width: "70%",
    color: AppColors.white,
    alignSelf: "center",
  },
});

export default CarDetails;
