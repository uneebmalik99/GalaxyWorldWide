import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  BackHandler,
  ActivityIndicator,
  Modal,
} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { Appbar } from "react-native-paper";
import Foundation from "react-native-vector-icons/Foundation";

import AppColors from "../Colors/AppColors";
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from "../constance/AppConstance";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Tab, Tabs, ScrollableTab, TabHeading } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import AppUrlCollection from "../UrlCollection/AppUrlCollection";
// import DialogLoader from '../screens/DialogLoder';
import AppMessages from "../AppMessages/AppMesage";
import { SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";
import { strings } from "../language/Language";

let filterItemObj = null;
var baseImagePath = "";
var locationId = 0;
var statusId = 0;
let locationList = [];

class VehcileScreen extends Component {
  constructor(props) {
    super(props);
    this.onEndReachedCalledDuringMomentum = true;

    this.state = {
      isLoading: false,
      isDisplayView: 0,
      tabIndex: 0,
      selectFilterName: "",
      spinner :false,
      modalCallIndex: 0,
      isModalVisible: false,
      isModalShown: false,
      locationList: [],
      vehicleList: [],
      searchTxt: "",
      isStopCallingAPI: false,
      isFilterOrSerachEnable: false,
      page: 1,
      isFooterLoading: false,
      noMoreDataFound: false,
      categoryList: [
        "New Purchased",
        "On Hand",
        "Ready to Ship",
        "On the way",
        "Arrived",
        "",
      ],
      refreshing: false,
      statusId: "0",
      locationId: 0,
      isCallingFirsttime: true,
    };
  }
  apiCaller = () => {
    
    // console.log("api caller")
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        this.setState({ isLoading: true });
        this.ccallingLocationApi();
        if (filterItemObj != null) {
          let gettingStatusId = AppConstance.gettingStatusIfFromName(
            filterItemObj.name.toUpperCase()
          );
          console.log("My sdadhas ", gettingStatusId);
          if (
            gettingStatusId != undefined &&
            gettingStatusId != "undefined" &&
            gettingStatusId != ""
          ) {
            this.setState({ statusId: gettingStatusId });
            statusId = gettingStatusId;
          } else {
            this.setState({ statusId: 0 });
            statusId = 0;
          }

          this.callingAPIWithLocation();
          this.setState({ selectFilterName: filterItemObj.name });
        } else {
          this.setState({ isCallingFirsttime: true });
          this.callingVehicleApi();
        }
      } else {
        this.setState({ modalCallIndex: 1, isModalVisible: true });
      }
    });
  };

  componentDidMount() {
    console.log("Filter item obj :: ", filterItemObj);
    NetInfo.addEventListener(() => {
      "connectionChange", this._handleConnectivityChange;
    });
    this.apiCaller();
  }

  //Check internet connection

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }
  _handleConnectivityChange = (state) => {
    if (state.isConnected == true) {
      this.setState({ isInternetNotFound: false });
    } else {
      this.setState({ isInternetNotFound: true });
    }
  };

  //calling location api
  ccallingLocationApi = () => {
    // console.log("ccallinglocation")
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        this.setState({ locationList: [] });

        fetch(AppUrlCollection.LOCATION, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authkey: AppConstance.USER_INFO.USER_TOKEN,
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            var allData = {
              id: 0,
              name: "ALL",
            };
            this.state.locationList.push(allData);
            if (responseJson.status == AppConstance.API_SUCESSCODE) {
              this.setState({
                locationList: this.state.locationList.concat(responseJson.data),
                locationId: responseJson.data[0].id,
              });
              locationList.push(this.state.locationList);
            } else {
            }
          })
          .catch((error) => {
            console.warn(error);
          });
      } else {
        this.setState({ modalCallIndex: 2, isModalVisible: true });
      }
    });
  };

  //calling Vehicle list
  callingVehicleApi = async () => {
    this.setState({spinner:true})
    // console.log("callingvehicle")
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        if (this.isCallingFirsttime) {
          this.setState({ isLoading: true, isFooterLoading: false });
        } else {
          this.setState({ isLoading: false, isFooterLoading: true });
        }
        // console.log(
        //   "MAIN API :;",
        //   AppUrlCollection.VEHILE_LIST +
        //     "page=" +
        //     this.state.page +
        //     "&location=" +
        //     locationId +
        //     "&search_str=" +
        //     this.state.searchTxt +
        //     "&status=" +
        //     statusId
        // );
        fetch(
          AppUrlCollection.VEHILE_LIST +
            "page=" +
            this.state.page +
            "&location=" +
            locationId +
            "&search_str=" +
            this.state.searchTxt +
            "&status=" +
            this.state.statusId,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authkey: AppConstance.USER_INFO.USER_TOKEN,
            },
          }
        )
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({spinner:false})

            if (responseJson.status == AppConstance.API_SUCESSCODE) {
              baseImagePath = responseJson.data.other.vehicle_image;
              let data = responseJson.data.vehicleList;
              this.setState({ isLoading: false, isFooterLoading: false });
              if (data.length > 0) {
                // this.setState({ vehicleList: [...this.state.vehicleList, ...data], noMoreDataFound: false })
                this.setState({
                  vehicleList: this.state.vehicleList.concat(data),
                  noMoreDataFound: false,
                });
              } else {
                this.setState({
                  noMoreDataFound: true,
                  isFooterLoading: false,
                  isStopCallingAPI: true,
                });
              }
              this.setState({ noMoreDataFound: false });
            } else {
              this.setState({ isLoading: false, isFooterLoading: false });
              this.setState({ isStopCallingAPI: true, noMoreDataFound: true });
              // AppConstance.showSnackbarMessage(responseJson.message)
            }
          })
          .catch((error) => {
            this.setState({spinner:false})

            console.warn(error);
          });
      } else {
        this.setState({spinner:false})

        this.setState({ modalCallIndex: 3, isModalVisible: true });
      }
    });
  };

  switchToImageGrid = (item) => {
    if (item.images.length > 0) {
      this.props.navigation.navigate("VehicleImageListScreen", {
        itemObj: item,
        baseImagePath: baseImagePath,
      });
    } else {
      AppConstance.showSnackbarMessage("Image Not Found");
    }
  };

  handleBackPress = () => {
    this.props.navigation("DashboardScreen");
  };

  //render Vehicle
  renderVehicle = ({ item }) => {
    // console.warn("item", item);
    let locationName = this.state.locationList.find(
      (location) => location.id == item.location
    );

    return (
      <TouchableOpacity 
      onPress={() =>
                this.props.navigation.navigate("CarDetails", {
                  vehicleObj: item,
                  locationList: this.state.locationList,
                  baseImagePath: baseImagePath,
                })}
      style={{height:deviceHeight*0.3,elevation:5, borderRadius:20, width:'100%',backgroundColor:'#ffffff', marginTop:10,padding:10,}}>
  
  
      <View style={{flexDirection:'row', height:'75%',width:'100%'}} >
  
        <View style={{ width:'15%'}}>
          </View>
  
  
          <View style={{ width:'70%'}}>
          {item.images.length > 0 ? (
                <Image
                  style={{
                    width: undefined,
                    height: undefined,
                    flex: 1,
                    borderRadius: 10,
                  }}
                  source={{ uri: baseImagePath + item.images[0].thumbnail }}
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
              <Foundation name='info' color='#81bd82' style={{alignSelf:'center', marginTop:10,}} size={30}/>
          </View>
  
  
        </View>
  
  
  
        <View style={{flexDirection:'row', height:'25%', width:'100%'}}>
  
            <View style={{width:'45%',justifyContent:'space-evenly', backgroundColor:'white'}}>
              <Text style={{color:'#027bc0',alignSelf:'center', fontWeight:'900',fontSize:12 }}>
              {item.year != undefined &&
              item.year != null &&
              item.year != "" &&
              locationName != undefined &&
              locationName.name != undefined &&
              locationName.name != null
                ? item.year
                : "-"}{" "}
              {item.make != undefined && item.make != null && item.make != ""
                ? item.make.toUpperCase()
                : "-"}{" "}
              {item.model != undefined && item.model != null && item.model != ""
                ? item.model.toUpperCase()
                : "-"}
              </Text>
              <View style={{backgroundColor:'#017dbd',height:'50%',width:'95%',alignSelf:'center', justifyContent:'center',paddingHorizontal:5, borderRadius:5,}}>
                <Text style={{color:'white',alignSelf:'center',fontWeight:'500', fontSize:10}}>{strings.Purchase_date}: {item.purchase_date}</Text>
                </View>
              </View>
  
              <View style={{width:'25%',justifyContent:'space-evenly', }}>
  
              <Text style={{color:'black',alignSelf:'center', fontWeight:'800',fontSize:10 }}>{strings.Lot_no}: {item.lot_number}</Text>
  
  
                <View style={{flexDirection:'row',alignSelf:'center', padding:3,borderRadius:5, justifyContent:'space-around', backgroundColor:'#86bd84',width:'70%'}}>
                <Text style={{fontWeight:'600', color:'white'}}>{strings.Keys}:</Text>
                
               {item.keys != undefined &&
              item.keys != null &&
              item.keys != "" &&
              item.keys == "1" ? (
                <Ionicons  name='ios-checkmark-circle-sharp' color='white' size={15} style={{alignSelf:'center'}}/>
              ) : (
                <Ionicons name='close-circle-sharp' color='#F55050' size={15} />
              )}
             
                </View>
  
  
              </View>
  
              <View style={{width:'15%',justifyContent:'space-evenly',  }}>
  
              <Text style={{color:'black',alignSelf:'center', fontWeight:'800',fontSize:10 }}>{strings.Vin_no}:</Text>
              <Text style={{color:'black',alignSelf:'center', fontSize:10}}>{item.vin}</Text>
              
              </View>
  
              <View style={{width:'15%',justifyContent:'space-evenly',  }}>
  
              <Text style={{color:'black',alignSelf:'center', fontWeight:'800',fontSize:10 }}>{strings.Auction}</Text>
                <Text style={{color:'black',alignSelf:'center', fontSize:10}}>{item.auction_name}</Text>
               
              </View>
  
        </View>
  
      </TouchableOpacity>
    );
  };

  onTabChange = (event) => {
    let locationvalue = this.state.locationList[event.i];
    locationId = locationvalue.id;
    this.setState({
      tabIndex: event.i,
      locationId: locationvalue.id,
      searchTxt: "",
      page: 1,
      isStopCallingAPI: false,
    });
    console.log("ALlTab Selct Vale:: ", event.i, locationvalue.id);
    setTimeout(() => {
      this.callingAPIWithLocation();
    }, 100);
  };

  //callingApi
  callingAPIWithLocation = async () => {
    // console.log("apiwithlocation")
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        var url = null;
        var baseUrlMain = AppUrlCollection.VEHILE_LIST;
        this.setState({ isLoading: true, isFooterLoading: false });

        url =
          baseUrlMain +
          "&location=" +
          locationId +
          "&search_str=" +
          this.state.searchTxt +
          "&status=" +
          statusId +
          "&page=1";
        console.log(
          "STATUS API :;",
          baseUrlMain +
            "&location=" +
            locationId +
            "&search_str=" +
            this.state.searchTxt +
            "&status=" +
            statusId +
            "&page=1"
        );

        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authkey: AppConstance.USER_INFO.USER_TOKEN,
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              page: 1,
              vehicleList: [],
              isFooterLoading: false,
            });
            console.log("Load more data :: ", url);
            if (responseJson.status == AppConstance.API_SUCESSCODE) {
              baseImagePath = responseJson.data.other.vehicle_image;
              let vehicleList = responseJson.data.vehicleList;
              if (vehicleList.length > 0) {
                this.setState({ vehicleList: vehicleList });

                this.setState({ noMoreDataFound: false });
              } else {
                this.setState({ noMoreDataFound: true });
              }
            }
          })
          .catch((error) => {
            console.warn(error);
          });
      } else {
        this.setState({ modalCallIndex: 4, isModalVisible: true });
      }
    });
  };

  //set filter name
  setFiltername = (text) => {
    page = 0;
    let gettingStatusId = AppConstance.gettingStatusIfFromName(
      text.toUpperCase()
    );
    this.setState({ statusId: gettingStatusId, searchTxt: "", page: 1 });
    statusId = gettingStatusId;
    this.callingAPIWithLocation();
    this.setState({
      selectFilterName: text,
      isFilterOrSerachEnable: true,
    });
  };

  //Rener Category Content
  renderCategoryContent = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          width: deviceWidth,
          height: 50,
          alignItems: "center",
          alignContent: "center",
          flexDirection: "row",
          paddingLeft: 10,
        }}
        onPress={() => this.setFiltername(item)}
      >
        {this.state.selectFilterName == item ? (
          <MaterialCommunityIcons
            name="check"
            color={AppColors.textColor}
            size={18}
          />
        ) : (
          <View style={{ width: 18 }} />
        )}

        <Text
          style={{ color: AppColors.textColor, fontSize: 15, paddingLeft: 10 }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  //Render Footer
  renderFooter = () => {
    if (this.state.isStopCallingAPI) {
      return null;
    } else {
      return (
        <View >
          <ActivityIndicator color={AppColors.toolbarColor} size="large" />
        </View>
      );
    }
  };

  //calling  free search
  callingSearchAPI = () => {
    this.setState({ isFilterOrSerachEnable: true });
    this.callingAPIWithLocation();
  };

  //LoadMore data
  loadMoreData = () => {
    setTimeout(() => {
      if (this.state.isStopCallingAPI) {
      } else {
        if (this.state.noMoreDataFound) {
        } else {
          this.setState({ page: this.state.page + 1 }, () => {
            this.setState({ isCallingFirsttime: false });
            this.callingVehicleApi();
          });
        }
      }
    }, 100);
  };

  renderMyTablayout = () => {
    let locationTabGenrate = [];
    for (let index = 0; index < this.state.locationList.length; index++) {
      const element = this.state.locationList[index];
      locationTabGenrate.push(
        <Tab
          heading={
            <TabHeading
              activeTabStyle={{ backgroundColor: AppColors.white }}
              activeTextStyle={{ color: "#0c508a" }}
              tabStyle={{ width: 250 }}
              textStyle={{ flex: 1 }}
              style={{
                backgroundColor:
                  this.state.tabIndex == 0 ? AppColors.blue : AppColors.blue,
              }}
            >
              <Text
                style={{
                  color:
                    this.state.tabIndex == 0
                      ? AppColors.white
                      : AppColors.white,
                  width: 48,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {element.name}
              </Text>
            </TabHeading>
          }
          activeTabStyle={{ backgroundColor: AppColors.toolbarColor }}
          tabStyle={{ backgroundColor: AppColors.toolbarColor }}
          textStyle={{ color: AppColors.white }}
          activeTextStyle={{ color: AppColors.toolbarColor }}
        >
          <View
            style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}
          >
            <View
              style={{
                marginHorizontal: 10,
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
                alignSelf: "center",
              }}
            >
              <TextInput
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 40,
                  paddingHorizontal: 10,
                  borderRadius: 20,
                }}
                onChangeText={(text) => this.setState({ searchTxt: text })}
                onSubmitEditing={() => this.callingSearchAPI()}
                // this.callingVehicleContainerService()
                placeholder="Search"
                placeholderTextColor="grey"
                underlineColorAndroid="transparent"
              ></TextInput>
            </View>
            {this.state.vehicleList.length > 0 ? (
              <View style={{ flex: 1 }}>
                <FlatList
                  style={{ paddingTop: 5 }}
                  data={this.state.vehicleList}
                  renderItem={this.renderVehicle}
                  keyExtractor={(item, index) => index}
                  extraData={this.state}
                  ListFooterComponent={this.renderFooter}
                  onEndReached={this.loadMoreData}
                  onEndReachedThreshold={0.5}
                />
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 15 }}>Vehicle Not Found.</Text>
              </View>
            )}
          </View>
        </Tab>
      );
    }

    return (
      <Tabs
        ref={(ref) => {
          this.tabView = ref;
        }}
        tabBarUnderlineStyle={{ height: 4, backgroundColor: "grey" }}
        tabContainerStyle={{ height: 50, elevation: 0 }}
        style={{ backgroundColor: AppColors.white, elevation: 0 }}
        tabBarTextStyle={{ color: AppColors.white, fontSize: 25 }}
        tabBarActiveTextColor="grey"
        tabBarInactiveTextColor={AppColors.black}
        tabBarBackgroundColor="black"
        onChangeTab={(event) => this.onTabChange(event)}
        renderTabBar={() => <ScrollableTab />}
      >
        {locationTabGenrate}
      </Tabs>
    );
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#ededed",
          height: deviceHeight,
        }}
      >
           <Spinner
        visible={this.state.spinner}
        textContent={"Loading..."}
        color	={AppColors.blue}
        animation	='fade'
        size='large'
        overlayColor='rgba(0, 0, 0, 0.25)'
         textStyle={{ color: AppColors.green }}
      />
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
                    {
                      this.state.modalCallIndex == 1
                        ? this.apiCaller()
                        : this.state.modalCallIndex == 2
                        ? this.ccallingLocationApi
                        : this.state.modalCallIndex == 3
                        ? this.callingVehicleApi
                        : this.state.modalCallIndex == 4
                        ? this.callingAPIWithLocation
                        : "";
                    }
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
            <View style={{ height: 55, justifyContent: "center" }}>
              <TouchableOpacity
                style={{ justifyContent: "center" }}
                onPress={() => this.props.navigation.openDrawer()}
              >
                <Ionicons name="ios-menu-outline" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.textTitle}>
              {this.state.statusId == "0"
                ? strings.AllVehicles
                : this.state.statusId == "1"
                ? strings.Onhand
                : this.state.statusId == "2"
                ? strings.ReadytoLoad
                : this.state.statusId == "10"
                ? strings.Arrived
                : this.state.statusId == "6"
                ? strings.Newpurchase
                : this.state.statusId == "3"
                ? strings.Carontheway
                : strings.All}
            </Text>
            <View></View>
          </View>
        </Appbar.Header>

  
  <View style={{paddingHorizontal:15,flex:1, }}>


        {this.state.vehicleList.length > 0 ? (
              <View style={{ flex: 1 }}>
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
            // onChangeText={(text) => this.searchFilterFunction(text)}
            // onSubmitEditing={(Text) => searchingApi(Text)}
            // this.callingVehicleContainerService()
            placeholder={strings.SearchVehicleby}
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
          ></TextInput>
       
        </View>
                <FlatList
                contentContainerStyle={{paddingBottom:75}}
                  data={this.state.vehicleList}
                  renderItem={this.renderVehicle}
                  keyExtractor={(item, index) => index}
                  extraData={this.state}
                  ListFooterComponent={this.renderFooter}
                  onEndReached={this.loadMoreData}
                  onEndReachedThreshold={0.5}
                />
           
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 15 }}>Vehicle Not Found.</Text>
              </View>
            )}   


            </View>
         </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  vehicleHaxNoTxtStyle: {
    width: 30,
    color: AppColors.textColor,
    fontSize: 16,
  },
  vehicleCustNameTxtStyle: {
    flex: 1,
    color: AppColors.textColor,
    fontSize: 16,
  },
  vehicleInnerTxtHeadinStyle: {
    fontSize: 14,
    color: AppColors.textColor,
    flex: 1.5,
  },
  vehicleInnerTxtValueStyle: {
    color: AppColors.textColor,
    fontSize: 15,
    flex: 2,
  },
  vehicleInnerMainViewStyle: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  vehicleStatusTxtStyle: {
    color: AppColors.textColor,
    fontSize: 14,
    marginRight: 10,
  },
  vehicleInnreActionOpacityStyle: {
    borderRadius: 10,
    borderColor: AppColors.toolbarColor,
    borderWidth: 1,
  },
  vehicleInnreActionTxtStyle: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 1,
    paddingBottom: 1,
    color: AppColors.textColor,
    fontSize: 12,
  },
  modalViewStyle: {
    backgroundColor: AppColors.white,
    borderRadius: 4,
    flex: 0,
    //  height:deviceHeight*0.4,
    borderColor: AppColors.white,
    marginBottom: "-12%",
  },
  dialogMenuTxtStyle: {
    width: deviceWidth,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
  },
  dialogMenuTxtViewStyle: {
    color: AppColors.textColor,
    fontSize: 15,
    paddingLeft: 10,
  },
  dividerViewStyle: {
    width: deviceWidth,
    height: 0.5,
    backgroundColor: AppColors.textColor,
  },
  searchBarMainView: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginRight: 5,
  },
  searchElavationStyle: {
    flex: 1,
    height: 40,
    borderRadius: 15,
    borderColor: "black",
    marginTop: 8,
    justifyContent: "center",
    marginLeft: 5,
    borderWidth: 0.2,
    backgroundColor: "white",
    alignSelf: "center",
  },
  searchElvationViewStyle: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingRight: 5,
  },
  searchTxtInputStyle: {
    flex: 1,
    color: "black",
    fontSize: 18,
  },
  filterIconViewStyle: {
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 1,
  },
  filterIconStyle: {
    width: 25,
    height: 25,
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
    marginBottom: 15,
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
    alignSelf: "center",
    // flex: 1
  },
});
export default VehcileScreen;
