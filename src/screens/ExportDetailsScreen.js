import React, { Component } from "react";
import {
  View,
  Modal,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  BackHandler,
} from "react-native";
// import Elavation from '../styles/Elavation';
import AppColors from "../Colors/AppColors";
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from "../constance/AppConstance";
import AppFonts from "../AppFont/AppFonts";
// import Toolbar from './Toolbar';
import AppUrlCollection from "../UrlCollection/AppUrlCollection";
// import { heightPercentageToDP } from '../styles/ResponsiveScreen';
import RNFetchBlob from "rn-fetch-blob";
import { Appbar } from "react-native-paper";
import {
  Content,
  List,
  Header,
  Body,
  Title,
  ListItem,
  Container,
  Left,
  Right,
  Icon,
  Badge,
} from "native-base";
import AsyncStorage from "@react-native-community/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slideshow from "react-native-image-slider-show-razzium";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NetInfo from "@react-native-community/netinfo";
import LinearGradient from "react-native-linear-gradient";
import { strings } from "../language/Language";

const { config, fs } = RNFetchBlob;

let exportObj = null;
let baseImagePath = null;
let vehicleList = null;
var isCallingWithoutLogin = null;

var exportImageBasePath = "";
var vehicleImageBAsePath = "";
class ExportDetailsScreen extends Component {
  constructor(props) {
    super(props);
    exportObj = props.route.params.ExportObj;
    // console.log("absdfjsl", props.route.params.ExportObj);
    // vehicleList = this.props.navigation.state.params.vehicleList;
    // isCallingWithoutLogin = this.props.navigation.state.params.isCallingWithoutLogin;
    this.state = {
      exportDetailObj: "",
      vehicleList: [],
      locationList: [],
      imageList: [],
      drawerview: false,
      showimagemodel: false,
      isModalVisible: false,
      isLoading: true,
    };
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);

    this.callingExportDetailAPI();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }


checkPermission = async (pictures) => {
    
    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission

    if (Platform.OS === 'ios') {
      for(var i=0; i<pictures.length; i++){
        this.handleDownload(pictures[i]);
      }
      this.showSnackbarMessage()
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
          this.downloadAndroidImage();
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

  downloadAndroidImage = () => {
    // Main function to download the image
    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = REMOTE_IMAGE_PATH;    
    // Getting the extention of the file
    let ext = this.getExtention(image_URL);
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

 

 handleDownload = async (img) => {
 

    
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

showSnackbarMessage = () => {
  setTimeout(() => {
    Snackbar.show({
      backgroundColor: '#008B8B',
      title: 'Downloaded Successfully',
      duration: Snackbar.LENGTH_SHORT,
    });
  }, 200);
};
   getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ?
             /[^.]+$/.exec(filename) : undefined;
  };


  handleBackPress = () => {
    this.props.navigation.goBack();
    return true;
  };

  callingExportDetailAPI = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        console.log(exportObj.id);
        fetch(AppUrlCollection.EXPORT_DETAIL + "exportId=" + exportObj.id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authkey: AppConstance.USER_INFO.USER_TOKEN,
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.status == AppConstance.API_SUCESSCODE) {
              this.setState({ exportDetailObj: responseJson.data.export });
              this.setState({ vehicleList: responseJson.data.export.vehicle });
              // alert(JSON.stringify(responseJson.data.export.vehicle))
              // console.log("export detail ", responseJson.data.export.vehicle[0].year);
            } else {
              console.log("failure");
            }
          })
          .catch((error) => {
            console.warn(error);
          })
          .finally(() => this.setState({ isLoading: false }));
      } else this.setState({ isModalVisible: true });
    });
  };

  // render my vehicle content
  renderMyVehileList = ({ item, index }) => {
    // alert(item.make)
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          borderRadius: 10,
          paddingHorizontal: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          width: "100%",
          height: 65,
          backgroundColor: "#F4F6F7",
          borderColor: "#808080",
          borderRadius: 10,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: AppColors.textColor, fontSize: 14, flex: 1 }}>
          {item.year != null && item.year != "" ? item.year : "-"}
        </Text>
        <Text style={{ color: AppColors.textColor, fontSize: 14, flex: 1 }}>
          {item.make != null && item.make != "" ? item.make : "-"}
        </Text>
        <Text style={{ color: AppColors.textColor, fontSize: 14, flex: 1 }}>
          {item.model != null && item.model != "" ? item.model : "-"}
        </Text>
        <Text style={{ color: AppColors.textColor, fontSize: 14, flex: 1 }}>
          {item.lot_number != null && item.lot_number != ""
            ? item.lot_number
            : "-"}
        </Text>
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            backgroundColor: AppColors.blue,
            borderRadius: 15,
            paddingVertical: 5,
          }}
          onPress={() =>
            this.props.navigation.navigate("CarDetails", {
              vehicleObj: item,
            })
          }
        >
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            View
          </Text>
          {/* <MaterialCommunityIcons name='eye' color={AppColors.textColor} size={18} /> */}
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setState({ isModalVisible: false });
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
                    this.setState({ isModalVisible: false });
                  }}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    this.setState({ isModalVisible: false });
                    this.callingSearchAPI();
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
              style={{ justifyContent: "center" }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={35} color="white" />
            </TouchableOpacity>
            <View style={styles.textView}>
              <Text style={styles.textTitle}>{strings.ExpotDetails}</Text>
            </View>
          </View>
        </Appbar.Header>
        {this.state.isLoading ? (
          <Text> Loading... </Text>
        ) : (
          <ScrollView style={{ width: deviceWidth, backgroundColor: 'white' }}>
            {this.state.imageList.length > 0 ? (
              <View style={{ width: "100%" }}>
                <Slideshow
                  height={deviceHeight * 0.25}
                  onPress={() => {
                    this.setState({ showimagemodel: true });
                  }}
                  dataSource={this.state.imageList}
                />
                <View style={{position:'absolute', alignSelf:'flex-end', marginTop:20, paddingHorizontal:40}}>
              <TouchableOpacity onPress={()=> {this.checkPermission(this.state.imageList)}}>

                <Image style={{width:35, height:35,}} source={require('../images/download.png')}/>
              </TouchableOpacity>
              </View>
              </View>
            ) : (
              <View style={{ width: "90%", height: deviceHeight * 0.25, alignSelf: 'center' }}>
                <Image
                  source={require("../images/logofinal3.jpg")}
                  style={{ height: "100%", width: "100%", alignSelf: "center" }}
                  resizeMode="stretch"
                  resizeMethod="resize"
                />
              </View>
            )}
            {/* <View
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
                <Text>{this.state.vehicleList.year}</Text>
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
                <Text>{this.state.vehicleList.make}</Text>
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
                <Text>{this.state.vehicleList.model}</Text>
              </LinearGradient>
            </View> */}
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
                <Text>{strings.ContianerID}</Text>
                <Text>{this.state.exportDetailObj.container_number}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 15,
                  marginTop: 5,
                }}
              >
                <Text>{strings.Portofloading}</Text>
                <Text>
                  {this.state.exportDetailObj.port_of_loading != undefined &&
                  this.state.exportDetailObj.port_of_loading != ""
                    ? this.state.exportDetailObj.port_of_loading
                    : "-"}{" "}
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
                <Text>{strings.Exportdate}</Text>
                <Text>
                  {this.state.exportDetailObj.export_date != undefined &&
                  this.state.exportDetailObj.export_date != ""
                    ? this.state.exportDetailObj.export_date
                    : "-"}{" "}
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
                <Text>{strings.Portofdischarge}</Text>
                <Text>
                  {this.state.exportDetailObj.port_of_discharge != undefined &&
                  this.state.exportDetailObj.port_of_discharge != ""
                    ? this.state.exportDetailObj.port_of_discharge
                    : "-"}{" "}
                </Text>
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
                <Text>{strings.ETA}</Text>
                <Text>
                  {this.state.exportDetailObj.eta != undefined &&
                  this.state.exportDetailObj.eta != ""
                    ? this.state.exportDetailObj.eta
                    : "-"}
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
                <Text>{strings.Arriveddate}</Text>
                <Text>
                  {this.state.exportDetailObj.arrival_date != undefined &&
                  this.state.exportDetailObj.arrival_date != ""
                    ? this.state.exportDetailObj.arrival_date
                    : "-"}
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
                  {this.state.exportDetailObj.notes_status != undefined &&
                  this.state.exportDetailObj.notes_status != "" ? (
                    <Ionicons
                      name="information-circle"
                      size={20}
                      color={AppColors.green}
                    />
                  ) : (
                    "--"
                  )}
                </Text>
              </View>
            </View>
            <LinearGradient
              colors={["#BBCCE3", "#4e7fc2"]}
              style={{
                height: 40,
                width: "90%",
                marginTop: 15,
                borderRadius: 20,
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <Text>{strings.Vehicle}</Text>
            </LinearGradient>
            {/* <View
              style={{
                // paddingHorizontal: 15,
                marginTop: 15,
                flexDirection: "row",
                // height: 30,
                width: "90%",
                justifyContent: "space-evenly",
                // alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  color: AppColors.textColor,
                  fontSize: 14,
                  flex: 1,
                  alignItems: "center",
                }}
              >
                YEAR
              </Text>
              <Text
                style={{
                  color: AppColors.textColor,
                  fontSize: 14,
                  flex: 1,
                  alignSelf: "center",
                }}
              >
                MAKE
              </Text>
              <Text
                style={{
                  color: AppColors.textColor,
                  fontSize: 14,
                  flex: 1,
                  alignSelf: "center",
                }}
              >
                MODEL
              </Text>
              <Text
                style={{
                  color: AppColors.textColor,
                  fontSize: 14,
                  flex: 1,
                  alignSelf: "center",
                }}
              >
                LOT NO
              </Text>
            </View> */}
            <FlatList
              style={{ flex: 1,backgroundColor:'white', paddingHorizontal: 15, paddingVertical: 10 }}
              data={this.state.vehicleList}
              renderItem={this.renderMyVehileList}
              keyExtractor={(item, index) => index}
              extraData={this.state}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    width: deviceWidth,
                    
                    height: 10,
                  }}
                />
              )}
            />
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
  },

  screen: {
    flex: 1,
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor:'white',
  },
  detailMainViewStyle: {
    flexDirection: "row",
    flex: 1,
    width: deviceWidth * 0.85,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  detailHeadingTxtStyle: {
    fontSize: 14,
    color: AppColors.textColor,
    flex: 0.95,
  },
  detailValueTxtStyle: {
    fontSize: 14,
    color: AppColors.textColor,
    flex: 1,
  },
  dividerStyleView: {
    width: deviceWidth * 0.85,
    height: 1,
    backgroundColor: "#A9A9A9",
    marginTop: 13,
    marginBottom: 8,
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
export default ExportDetailsScreen;
