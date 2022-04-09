import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Modal,
  Text,
  ImageBackground,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AppColors from '../Colors/AppColors';
import AppConstance, { deviceHeight, deviceWidth } from '../constance/AppConstance';
import AppFonts from '../AppFont/AppFonts';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons'; 
import Feather from  'react-native-vector-icons/dist/Feather'
import { Appbar } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/dist/FontAwesome5";
import AppUrlCollection from "../UrlCollection/AppUrlCollection";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import { strings } from '../language/Language';


const LocationSelectorcontainer = ({route, navigation }) => {

  const { type } = route.params;


  const [ locationselect , setlocationselect] = useState(true)

  const [ spinner , setspinner] = useState(true)
  const [ citylocationusa , setcitylocationusa] = useState(false)
  const [ citylocationcanada , setcitylocationcanada] = useState(false)

  const [ canadalist , setcanadalist] = useState([])
  const [ usaList , setusaList] = useState([])




  useEffect(() => {
   
    callinglocationApi();
    return () => {};
  }, []);


  const callinglocationApi = () =>{
    

   
          fetch(AppUrlCollection.LOCATION, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authkey: AppConstance.USER_INFO.USER_TOKEN,
            },
          })
            .then((response) => response.json())
            .then((responseJson) => {
              
              if (responseJson.status == AppConstance.API_SUCESSCODE) {

                // alert(JSON.stringify(responseJson.data))
                let data = responseJson.data;
                for(var i =0 ; i<data.length ; i++){
                  if(data[i].name == "LA" || data[i].name == "GA" || data[i].name == "NY" || data[i].name == "TX" ){
                    usaList.push(data[i])
                  }else if(data[i].name == "TORONTO" || data[i].name == "MONTREAL" || data[i].name == "HALIFAX" || data[i].name == "EDMONTON" || data[i].name == "CALGARY"   || data[i].name == "VANCOUVER"  || data[i].name == "MANITOBA"   ){
                    canadalist.push(data[i])

                  }
                }
                // alert(JSON.stringify(usaList))
                // alert(JSON.stringify(canadalist))
              
                

              } else {
                alert('o')

              }
            })
            .catch((error) => {
              console.warn(error);
            });
       
     
          }


  const renderUsa = ({ item }) => {
           
            return (
            
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setlocationselect(false)
                  setcitylocationusa(false)

                  navigation.navigate('ContainerCarlist',{ type: type, })
                  
                }}
              >
                <Text style={styles.textStyle}>{item.name}</Text>
              </TouchableOpacity>

            );
          };

  const renderCanada = ({ item }) => {
           
            return (
         
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setlocationselect(false)
                  setcitylocationcanada(false)

                  navigation.navigate('ContainerCarlist',{ type: type})
                  
                }}
              >
                <Text style={styles.textStyle}>{item.name}</Text>
              </TouchableOpacity>

            );
          };        
  




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', height: deviceHeight, }}>
      
      <Modal
        animationType="fade"
        transparent={false}
        visible={locationselect}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
       <Appbar.Header style={styles.header}>
        <View style={styles.viewTitle}>
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={() => { navigation.goBack()}}
          >
            <Ionicons name="chevron-back" size={35} color="white" />
          </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={styles.textTitle}></Text>
          </View>
        </View>
      </Appbar.Header>


        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Please Choose Country
            </Text>
            <View style={styles.modalBtn}>
            <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setcitylocationcanada(false)
              // setcitylocationusa(true)
              setlocationselect(false)
                  setlocationselect(false)
                  navigation.navigate('ContainerCarlist',{ type: type})

                  // navigation.navigate('VehicleList',{ type: type})
                  
                }}
              >
                <Text style={styles.textStyle}>{strings.All}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setcitylocationcanada(false)
              setcitylocationusa(true)
              setlocationselect(false)
                  setlocationselect(false)
                  
                  // navigation.navigate('VehicleList',{ type: type})
                  
                }}
              >
                <Text style={styles.textStyle}>U.S.A</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setlocationselect(false)
                  setcitylocationusa(false)
                  setcitylocationcanada(true)
                  // navigation.navigate('VehicleList',{ type: type})

                }}
              >
                <Text style={styles.textStyle}>Canada</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


      <Modal
        animationType="fade"
        transparent={false}
        visible={citylocationusa}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
       <Appbar.Header style={styles.header}>
        <View style={styles.viewTitle}>
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={() => { 
              setcitylocationcanada(false)
              setcitylocationusa(false)
              setlocationselect(false)
              navigation.goBack()}}
          >
            <Ionicons name="chevron-back" size={35} color="white" />
          </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={styles.textTitle}></Text>
          </View>
        </View>
      </Appbar.Header>


        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Please Choose Location
            </Text>
            <View style={styles.modalBtn}>
            <FlatList
                    style={{ paddingTop: 5 }}
                    data={usaList}
                    renderItem={renderUsa}
                    keyExtractor={(item, index) => index}
                    extraData={usaList}
           
                  />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={false}
        visible={citylocationcanada}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
       <Appbar.Header style={styles.header}>
        <View style={styles.viewTitle}>
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={() => {
              setcitylocationcanada(false)
              setcitylocationusa(false)
              setlocationselect(false)
              navigation.goBack()}}
          >
            <Ionicons name="chevron-back" size={35} color="white" />
          </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={styles.textTitle}></Text>
          </View>
        </View>
      </Appbar.Header>


        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Please Choose Location
            </Text>
            <View style={styles.modalBtn}>
            <FlatList
                    style={{ paddingTop: 5 }}
                    data={canadalist}
                    renderItem={renderCanada}
                    keyExtractor={(item, index) => index}
                    extraData={usaList}
           
                  />
            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView>

  );
};


export default LocationSelectorcontainer;

const styles = StyleSheet.create({
  main_item: {
    flexDirection: "row",
    width: "90%",
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "space-around",
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
    paddingHorizontal:20
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
