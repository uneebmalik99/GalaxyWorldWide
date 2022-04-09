import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Modal,
  StatusBar
} from "react-native";
import AppColors from "../Colors/AppColors";
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from "../constance/AppConstance";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import AppUrlCollection from "../UrlCollection/AppUrlCollection";
import Spinner from "react-native-loading-spinner-overlay";
import NetInfo from "@react-native-community/netinfo";
import { Appbar } from "react-native-paper";
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import { strings } from "../language/Language";

const Accounts = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activetab, setactivetab] = useState(0);
  const [isFooterLoading, setisFooterLoading] = useState(false);
  const [noMoreDataFound, setnoMoreDataFound] = useState(true);
  const [isStopCallingAPI, setisStopCallingAPI] = useState(false);
  const [page, setpage] = useState(1);
  const [spinner, setspinner] = useState(false);

  const [data, setdata] = useState([
    {
      date: "20-01-2020",
      Name: "MUSK62389JBB",
      price: "$22,00.00",
      vehicle: {
        model: "",
        year: "",
        make: "",
      },
    },
    {
      date: "20-12-2019",
      Name: "KHU62389JBB",
      price: "$26,00.00",
      vehicle: {
        model: "",
        year: "",
        make: "",
      },
    },
    {
      date: "20-12-2020",
      Name: "M97K62389JBB",
      price: "$22,80.00",
      vehicle: {
        model: "",
        year: "",
        make: "",
      },
    },
    {
      date: "20-12-2020",
      Name: "MUSK62389JBB",
      price: "$22,00.00",
    },

    {
      date: "20-12-2020",
      Name: "MUSK62389JBB",
      price: "$22,00.00",
    },
  ]);

  const renderFooter = () => {
    if (isFooterLoading == true) {
      return (
        <View style={{ paddingVertical: 15 }}>
          <ActivityIndicator color={AppColors.toolbarColor} size="large" />
        </View>
      );
    } else {
      return null;
    }
  };

  const loadMoreData = () => {
    setTimeout(() => {
      if (isStopCallingAPI === true) {
        setisFooterLoading(false);
        // alert("stop calling");
      } else {
        if (noMoreDataFound === true) {
          // alert("nomoredata");
          setisFooterLoading(false);
        } else {
          NetInfo.fetch().then((state) => {
            if (state.isConnected == true) {
              setpage((prevState) => prevState + 1);
              callingInvoiceApi(false, activetab);
            } else {
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
                          callingInvoiceApi(false, activetab);
                        }}
                      >
                        <Text style={styles.textStyle}>Retry</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>;
            }
          });
        }
      }
    }, 100);
  };
  const renderlist = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          alignSelf: "center",
          marginTop: 10,
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
        }}
        onPress={() =>  {
          // alert('Under Development')
          // navigation.navigate('AccountDetailsScreen',{'item': item})
         }}
      >
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <Text style={{ paddingVertical: 5, fontSize: 15 }}>
            {item.vehicle ? item.vehicle.year : ""}{" "}
            {item.vehicle ? item.vehicle.make : ""}{" "}
            {item.vehicle ? item.vehicle.model : ""}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              paddingVertical: 2,
              fontSize: 12,
            }}
          >
            {strings.Status}:{" "}
            {item.status == "3" ? "Paid" : item.status == "1" ? "Unpaid" : ""}
          </Text>
        </View>
        <View style={{ height: "100%", justifyContent: "center" }}>
          <View
            style={{
              paddingHorizontal: 10,
              backgroundColor: AppColors.blue,
              borderRadius: 15,
              paddingVertical: 5,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {item.final_total}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const callingInvoiceApi = (isFirstTimeCaling, activetab) => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        var url = "";
        if (isFirstTimeCaling) {
          setdata("");
          setspinner(false);
          setisFooterLoading(false);
          // this.setState({ isLoading: true, isFooterLoading: false })
          url = AppUrlCollection.INVOICE + "&status=" + activetab;
        } else {
          setspinner(false);
          setisFooterLoading(true);
          // this.setState({ isLoading: false, isFooterLoading: true })
          url =
            AppUrlCollection.INVOICE + "page=" + page + "&status=" + activetab;
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
            if (responseJson.status == AppConstance.API_SUCESSCODE) {
              // imageBasePath = responseJson.data.other.export_image
              if (responseJson.data.length > 0) {
                // console.log("response" + responseJson.data);
                if (isFirstTimeCaling) {
                  setdata(responseJson.data);
                  // setvehicleList(responseJson.data)
                  setisFooterLoading(false);
                  // this.setState({ vehicleList: responseJson.data.vehicleList, noMoreDataFound: false, isFooterLoading: false })
                } else {
                  // alert(page)

                  setdata((old) => [...old, ...responseJson.data]);
                  setnoMoreDataFound(false);
                  setisFooterLoading(false);
                  // this.setState({ vehicleList: this.state.vehicleList.concat(responseJson.data.vehicleList), noMoreDataFound: false, isFooterLoading: false })
                }
              } else {
                if (isFirstTimeCaling) {
                  setvehicleList([]);
                  setnoMoreDataFound(true);
                  setisFooterLoading(false);
                  setisStopCallingAPI(true);
                  // this.setState({ vehicleList: [], noMoreDataFound: true, isFooterLoading: false })
                } else {
                  alert("fininsh");
                  setnoMoreDataFound(true);
                  setisFooterLoading(false);
                  setisStopCallingAPI(true);

                  // this.setState({ isFooterLoading: false, noMoreDataFound: true })
                }
              }
            } else {
              setnoMoreDataFound(true);
              setisFooterLoading(false);
              setisStopCallingAPI(true);
              AppConstance.showSnackbarMessage(responseJson.message);
            }
          })
          .catch((error) => {
            console.warn(error);
          });
      } else setModalVisible(true);
    });
  };
  const modalCall = () => {
    if (activetab == "0") {
      callingInvoiceApi(true, 0);
    } else if (activetab == "1") {
      callingInvoiceApi(true, 1);
    } else if (activetab == "2") {
      callingInvoiceApi(true, 1);
    } else if (activetab == "3") {
      callingInvoiceApi(true, 1);
    } else {
      callingInvoiceApi(true, activetab);
    }
  };


  const Shipping = () => {
    return(
      <View>
         <View
        style={{
          height: deviceHeight * 0.15,
          width: deviceWidth,
          flexDirection: "row",
          backgroundColor: "#F7F9F9",
          justifyContent: "space-around",
         paddingVertical: 10,
          paddingHorizontal: 10,
          
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setactivetab("0"), callingInvoiceApi(true, 0);
            setpage(1);
          }}
          style={{
            backgroundColor: activetab == "0" ? AppColors.blue : "#e8eef6",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 10,
            width: "20%",
            borderWidth: 0.4,
            borderColor: AppColors.blue,
          }}
        >
          <View>
            {activetab == "0" ? (
              <Image
                source={require("../images/dollarwhite.png")}
                style={styles.imageIconStyle}
                resizeMode="stretch"
              />
            ) : (
              <Image
                source={require("../images/dollargrey.png")}
                style={styles.imageIconStyle}
                resizeMode="stretch"
              />
            )}
            <Text
              style={{
                alignSelf: "center",
                marginTop: 10,
                color: "white",
                fontWeight: activetab == "0" ? "bold" : "normal",
                color: activetab == "0" ? "white" : "black",
                fontSize: 12,
              }}
            >
              {strings.All}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setactivetab("1"), callingInvoiceApi(true, 1);
            setpage(1);
          }}
          style={{
            backgroundColor: activetab == "1" ? AppColors.blue : "#e8eef6",
            justifyContent: "center",
            borderRadius: 10,
            width: "20%",
            borderWidth: 0.4,
            borderColor: AppColors.blue,
          }}
        >
          {activetab == "1" ? (
            <Image
              source={require("../images/dollarwhite.png")}
              style={styles.imageIconStyle}
              resizeMode="stretch"
            />
          ) : (
            <Image
              source={require("../images/dollargrey.png")}
              style={styles.imageIconStyle}
              resizeMode="stretch"
            />
          )}
          <Text
            style={{
              alignSelf: "center",
              color: activetab == "1" ? "white" : "black",
              fontWeight: activetab == "1" ? "bold" : "normal",
              marginTop: 10,
              fontSize: 12,
            }}
          >
          {strings.Unpaid}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setactivetab("3"), callingInvoiceApi(true, 3);
            setpage(1);
          }}
          style={{
            backgroundColor: activetab == "3" ? AppColors.blue : "#e8eef6",
            justifyContent: "center",
            borderRadius: 10,
            width: "20%",
            borderWidth: 0.4,
            borderColor: AppColors.blue,
          }}
        >
          {activetab == "3" ? (
            <Image
              source={require("../images/dollarwhite.png")}
              style={styles.imageIconStyle}
              resizeMode="stretch"
            />
          ) : (
            <Image
              source={require("../images/dollargrey.png")}
              style={styles.imageIconStyle}
              resizeMode="stretch"
            />
          )}
          <Text
            style={{
              alignSelf: "center",
              marginTop: 10,
              color: activetab == "3" ? "white" : "black",
              fontWeight: activetab == "3" ? "bold" : "normal",
              fontSize: 12,
            }}
          >
            {strings.Paid}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setactivetab("4");
          }}
          style={{
            backgroundColor: activetab == "4" ? AppColors.blue : "#e8eef6",
            justifyContent: "center",
            borderRadius: 10,
            width: "20%",
            borderWidth: 0.4,
            borderColor: AppColors.blue,
          }}
        >
          {activetab == "4" ? (
            <Image
              source={require("../images/dollarwhite.png")}
              style={styles.imageIconStyle}
              resizeMode="stretch"
            />
          ) : (
            <Image
              source={require("../images/dollargrey.png")}
              style={styles.imageIconStyle}
              resizeMode="stretch"
            />
          )}
          <Text
            style={{
              alignSelf: "center",
              marginTop: 10,
              color: activetab == "4" ? "white" : "black",
              fontWeight: activetab == "4" ? "bold" : "normal",
              fontSize: 10,
            }}
          >
            {strings.PaymentHistroy}
          </Text>
        </TouchableOpacity>
      </View>
  
        
        <FlatList
        data={data}
        contentContainerStyle={{
          marginHorizontal: 10,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "white",
          paddingBottom: 190,
          paddingHorizontal: 20,
          width: deviceWidth,
          // height: deviceHeight,
        }}
        renderItem={renderlist}
        extraData={data}
        keyExtractor={(item, index) => index}
        onEndReached={loadMoreData}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.01}
      />


      
      </View>
    )
  }

  const Vehicle = () => {
    return(
      <View>
         <View
        style={{
          height: deviceHeight * 0.15,
          width: deviceWidth,
          flexDirection: "row",
          backgroundColor: "#F7F9F9",
          justifyContent: "space-around",
         paddingVertical: 10,
          paddingHorizontal: 10,
          
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setactivetab("0"), callingInvoiceApi(true, 0);
            setpage(1);
          }}
          style={{
            backgroundColor: activetab == "0" ? AppColors.blue : "#e8eef6",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 10,
            width: "20%",
            borderWidth: 0.4,
            borderColor: AppColors.blue,
          }}
        >
          <View>
            {activetab == "0" ? (
              <Image
                source={require("../images/dollarwhite.png")}
                style={styles.imageIconStyle}
                resizeMode="stretch"
              />
            ) : (
              <Image
                source={require("../images/dollargrey.png")}
                style={styles.imageIconStyle}
                resizeMode="stretch"
              />
            )}
            <Text
              style={{
                alignSelf: "center",
                marginTop: 10,
                color: "white",
                fontWeight: activetab == "0" ? "bold" : "normal",
                color: activetab == "0" ? "white" : "black",
                fontSize: 12,
              }}
            >
             {strings.All}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setactivetab("1"), callingInvoiceApi(true, 1);
            setpage(1);
          }}
          style={{
            backgroundColor: activetab == "1" ? AppColors.blue : "#e8eef6",
            justifyContent: "center",
            borderRadius: 10,
            width: "20%",
            borderWidth: 0.4,
            borderColor: AppColors.blue,
          }}
        >
          {activetab == "1" ? (
            <Image
              source={require("../images/dollarwhite.png")}
              style={styles.imageIconStyle}
              resizeMode="stretch"
            />
          ) : (
            <Image
              source={require("../images/dollargrey.png")}
              style={styles.imageIconStyle}
              resizeMode="stretch"
            />
          )}
          <Text
            style={{
              alignSelf: "center",
              color: activetab == "1" ? "white" : "black",
              fontWeight: activetab == "1" ? "bold" : "normal",
              marginTop: 10,
              fontSize: 12,
            }}
          >
          {strings.Unpaid}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setactivetab("3"), callingInvoiceApi(true, 3);
            setpage(1);
          }}
          style={{
            backgroundColor: activetab == "3" ? AppColors.blue : "#e8eef6",
            justifyContent: "center",
            borderRadius: 10,
            width: "20%",
            borderWidth: 0.4,
            borderColor: AppColors.blue,
          }}
        >
          {activetab == "3" ? (
            <Image
              source={require("../images/dollarwhite.png")}
              style={styles.imageIconStyle}
              resizeMode="stretch"
            />
          ) : (
            <Image
              source={require("../images/dollargrey.png")}
              style={styles.imageIconStyle}
              resizeMode="stretch"
            />
          )}
          <Text
            style={{
              alignSelf: "center",
              marginTop: 10,
              color: activetab == "3" ? "white" : "black",
              fontWeight: activetab == "3" ? "bold" : "normal",
              fontSize: 12,
            }}
          >
          {strings.Paid}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setactivetab("4");
          }}
          style={{
            backgroundColor: activetab == "4" ? AppColors.blue : "#e8eef6",
            justifyContent: "center",
            borderRadius: 10,
            width: "20%",
            borderWidth: 0.4,
            borderColor: AppColors.blue,
          }}
        >
          {activetab == "4" ? (
            <Image
              source={require("../images/dollarwhite.png")}
              style={styles.imageIconStyle}
              resizeMode="stretch"
            />
          ) : (
            <Image
              source={require("../images/dollargrey.png")}
              style={styles.imageIconStyle}
              resizeMode="stretch"
            />
          )}
          <Text
            style={{
              alignSelf: "center",
              marginTop: 10,
              color: activetab == "4" ? "white" : "black",
              fontWeight: activetab == "4" ? "bold" : "normal",
              fontSize: 10,
            }}
          >
         {strings.PaymentHistroy}
          </Text>
        </TouchableOpacity>
      </View>
  
        <FlatList
        data={data}
        contentContainerStyle={{
          marginHorizontal: 10,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "white",
          paddingBottom: 190,
          paddingHorizontal: 20,
          width: deviceWidth,
          // height: deviceHeight,
        }}
        renderItem={renderlist}
        extraData={data}
        keyExtractor={(item, index) => index}
        onEndReached={loadMoreData}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.01}
      />
      <View style={{height:100}}>
        <Text></Text>
      </View>
      </View>
    )
  }


  useEffect(() => {
    // setspinner(true)
    // callingdashboardApi()
    // setspinner(false)
    callingInvoiceApi(true, 0);
    return () => {};
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, width: deviceWidth, height: deviceHeight, backgroundColor: 'white'}}>
            <StatusBar barStyle='dark-content' backgroundColor={AppColors.blue} />
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
                  modalCall();
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

      <View style={{backgroundColor: "white"}}> 
      <Appbar.Header style={styles.header}>
        <View style={styles.viewTitle}>
          <View style={{ height: 55, justifyContent: "center" }}>
            <TouchableOpacity
              style={{ justifyContent: "center" }}
              onPress={() => navigation.openDrawer()}
            >
              <Ionicons name="ios-menu-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.textTitle}>{strings.Accounts}</Text>
          <View></View>
        </View>
      </Appbar.Header>
      </View>
     


      <ScrollableTabView

renderTabBar={() => (
  <ScrollableTabBar
    style={styles.scrollStyle}
    tabStyle={styles.tabStyle}
  />
)}
tabBarTextStyle={styles.tabBarTextStyle}
tabBarInactiveTextColor={'black'}
tabBarActiveTextColor={AppColors.blue}
tabBarUnderlineStyle={styles.underlineStyle}
initialPage={0}
>

<Shipping key={'1'} tabLabel={strings.Shipping} style={{flex:1,backgroundColor:'red'}}/>
<Vehicle key={'2'} tabLabel={strings.Vehicle} style={{flex:1,backgroundColor:'blue'}}/>
</ScrollableTabView>

     

    </SafeAreaView>


  );
};

export default Accounts;

const styles = StyleSheet.create({
  dividerViewStyle: {
    width: deviceWidth,
    height: 0.5,
    backgroundColor: AppColors.te,
  },

  imageIconStyle: {
    width: 30,
    height: 35,
    alignSelf: "center",
    color: "white",
  },
  headingTxtStyle: {
    color: AppColors.Signincolor,
    fontSize: 15,
    paddingTop: 11,
  },
  searchElavationStyle: {
    height: 50,
    flex: 0.8,
    borderRadius: 10,
    marginTop: 8,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center",
  },
  searchElvationViewStyle: {
    flexDirection: "row",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingRight: 5,
  },
  searchTxtInputStyle: {
    flex: 1,
    color: AppColors.toolbarColor,
    fontSize: 18,
  },
  detailMainViewStyle: {
    flexDirection: "row",
    flex: 1,
    width: deviceWidth * 0.85,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
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
    color: AppColors.white,
    alignSelf: 'center'
  },

  tabStyle: {},
  scrollStyle: {
    backgroundColor: 'white',

    // justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  underlineStyle: {
    height: 3,
    backgroundColor: AppColors.blue,
    borderRadius: 5,
    width: '35%',
  },
});
