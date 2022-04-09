import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import AppColors from "../Colors/AppColors";
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from "../constance/AppConstance";
import TouchID from 'react-native-touch-id';
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/dist/SimpleLineIcons";
import AppUrlCollection from "../UrlCollection/AppUrlCollection";
import Spinner from "react-native-loading-spinner-overlay";
import NetInfo from "@react-native-community/netinfo";
import ReactNativeBiometrics from 'react-native-biometrics'
import { strings } from "../language/Language";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";

const Signin = ({ navigation }) => {
  const [email ,setemail] = useState('')
  // const [email, setemail] = useState("izharulhak");

  // const [email, setemail] = useState("20190267");
  const [modalVisible, setModalVisible] = useState(false);
  const [pass ,setpass] =useState('')
  const [userautofoucs ,setuserautofoucs ] = useState(false)
  // const [pass, setpass] = useState("izharulhak");

  // const [pass, setpass] = useState("20190267");
  const [passsecure, setpasssecure] = useState(true);
  const [spinner, setspinner] = useState(false);
  const [type ,settype] = useState(1)

  useEffect(()=> {



    ReactNativeBiometrics.isSensorAvailable()
    .then((resultObject) => {
      const { available, biometryType } = resultObject
   
      if (available && biometryType === ReactNativeBiometrics.TouchID) {
        settype(0)

        console.log('TouchID is supported by bio')
      } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
        settype(1)
        // checking()
        // _pressHandler()
        console.log('FaceID is supported  by bio')
      } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {

        console.log('Biometrics is supported  by bio')

      } else {
        settype(2)
        // signature()
        

        console.log('Biometrics not supported  by bio')
      }
    })


    // TouchID.isSupported().then(
    //   sucesso => {
    //     console.log(sucesso)
    //     if(sucesso == 'FaceID'){
    //       settype(0)

    //     }else{
    //       settype(1)

    //     }

    //   }
    // )
    // .catch((error)=> {
    //   console.log(error)

    // })
  })

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  const signature = () =>{
    let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
let payload = epochTimeSeconds + 'some message'

ReactNativeBiometrics.createSignature({
    promptMessage: 'Sign in',
    payload: payload
  })
  .then((resultObject) => {
    const { success, signature } = resultObject

    if (success) {
      console.log(signature)
      verifySignatureWithServer(signature, payload)
    }
  })
  }
  
  const Existingbio = () =>{
    ReactNativeBiometrics.biometricKeysExist()
  .then((resultObject) => {
    const { keysExist } = resultObject
alert(JSON.stringify(resultObject))
    if (keysExist) {
      console.log('Keys exist')
      alert(keysExist)
    } else {
      console.log('Keys do not exist or were deleted')
    }
  })
  }

  const createkeys = () =>{
    ReactNativeBiometrics.createKeys('Confirm fingerprint')
    .then((resultObject) => {
      const { publicKey } = resultObject
      console.log(publicKey)
      alert(publicKey)
      // sendPublicKeyToServer(publicKey)
    })
  }

  const checking = async () => {
   await AsyncStorage.getItem("ISUSERLOGIN")
      .then((value) => {
        if (value != null) {
          // setisLoginUser(value);
          AsyncStorage.getItem(AppConstance.USER_INFO_OBJ)
            .then((value2) => {
              // alert(JSON.stringify(value2));
              // AppConstance.USER_TOKEN_KEY = value2.
              if (value2 != null) {
                AsyncStorage.getItem("ROLE").then((value3) => {
                  AppConstance.ROLE == value3;
                });
                let data = JSON.parse(value2);
                AsyncStorage.getItem("USERNAME").then((username) =>{
                  setemail(username)


                AsyncStorage.getItem("PASS").then((pass) =>{
                  console.log(pass);

                  if(username != null && pass != null){
                    setpass(pass)

                // alert(JSON.stringify(data))
                AppConstance.USER_TOKEN_KEY = data.auth_key;
                AppConstance.USER_INFO.USER_ID = data.id;
                AppConstance.USER_INFO.USER_NAME = data.username;
                AppConstance.USER_INFO.USER_TOKEN = data.auth_key;
                AppConstance.USER_INFO.USER_EMAIL = data.email;
               
                AppConstance.USER_INFO.USER_STATUS = data.status;
                AppConstance.USER_INFO.USER_DELETED = data.is_deleted;
                AppConstance.USER_INFO.USER_ADDRESS1 = data.address_line_1;
                AppConstance.USER_INFO.USER_ADDRESS2 = data.address_line_2;
                AppConstance.USER_INFO.USER_CITY = data.city;
                AppConstance.USER_INFO.USER_STATE = data.state;
                AppConstance.USER_INFO.USER_ZIP_CODE = data.zip_code;
                AppConstance.USER_INFO.USER_MOBILE = data.phone;
                AppConstance.USER_INFO.USER_FAX = data.fax;
                AppConstance.USER_INFO.USER_CUSTOMER_NAME = data.customer_name;
                AppConstance.USER_INFO.USER_IS_BLOCK = data.is_blocked;

                callingLoginApi2(username, pass)
                    // callingLoginApi()
                // navigation.navigate('AppDrawer')
                  }
                  else{
                    AppConstance.showSnackbarMessage(type == 0? "Touch ID Registered Sucessfully.Please fill Login Credentails":"Face ID Registered Sucessfully.Please fill Login Credentails")
                  

                  }
              //  navigation.navigate('')
            })
          })

              } else {
                // setisLoginUser("0");

                ///8888
                //    this.props.navigation.navigate('LoginScreen')

                //  this.switchToLoginScreen();
              }
            })
            .catch((error) => console.log(error));
        } else {
          ///999999
          //  this.props.navigation.navigate('AppDrawer1')
          // setisLoginUser("0");
          setuserautofoucs(true)
          AppConstance.showSnackbarMessage(type == 0? "Touch ID Registered Sucessfully.Please fill Login Credentails":"Face ID Registered Sucessfully.Please fill Login Credentails")
            
        }
      })
      .catch((error) => console.log(error));
  };

  const _pressHandler = async (email, pass)=> {
    ReactNativeBiometrics.simplePrompt({
      promptMessage:  type == 1 ? 'Sign in with Face ID' : 'Sign in with Touch ID',
      titleSize: 16,
      subtitleSize: 16,
      cancelButtonTextSize: 16,
      byPassLockDown:false,//optiona,if true will auto close dialog with reject
      errorText:"Fingerprint not recognised, please try again.",//optional,default = Fingerprint not recognised, please try again.
      dialogHeader:"FingerPrint",//optional,default = FingerPrint
      cancelLabel:"cancelLbl",//optional, default = Cancel 
      defaultDescriptionText:"Touch the fingerprint sensor"////optional, default = Touch the fingerprint sensor. 
    })
      .then((res) => {

        // alert(JSON.stringify(res))
        if (res) {
          setemail(email)
          setpass(pass)
          console.log('879'+JSON.stringify(res))
          
          checking()          
          // createkeys()
          // verifySignatureWithServer(signature, payload)
        }
      }, (err) => {
        console.log(err)
        // Alert.alert(JSON.stringify(err))
      })
  
  //   ReactNativeBiometrics.createKeys('Confirm fingerprint')
  // .then((resultObject) => {
  //   const { publicKey } = resultObject
  //   console.log(publicKey)
  //   // sendPublicKeyToServer(publicKey)
  // })
    // TouchID.authenticate('Authenticate with FingerPrint', optionalConfigObject)
    // .then(success => {
    //   console.log(success);
    //   // AlertIOS.alert('Authenticated Successfully');
    //   console.log('Authenticated Successfully');
    // })
    // .catch(error => {
    //   console.log('Authenticated Failed');

    // });
  }

  const callingLoginApi = async (username ,password) => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        setspinner(true);
        if (email.trim().length == 0  ) {
          alert("username can not be blank");
          setspinner(false);
        } else if (pass.trim().length == 0  ) {
          alert("password can not be blank");
          setspinner(false);
        } else {
          var url = AppUrlCollection.BASE_URL + "login";

          var value = new FormData();

          value.append("username", email);
          value.append("password", pass);

          console.log("Login_key_vale ", value);
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: value,
          })
            .then((response) => response.json())
            .then((responseJson) => {
              setspinner(false);

              console.log(responseJson);
              loginServiceCall(responseJson);

              // this.setState({ isLoading: false })
            })
            .catch((error) => {
              setspinner(false);
              alert("Error while login" + error);
              // this.setState({ isLoading: false })
              console.warn(error);
            });
        }
        //  this.props.navigation.navigate('NavigationSideScreen')
      } else setModalVisible(true);
    });
  };

  const callingLoginApi2 = async (username ,password) => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected == true) {
        setspinner(true);
        if (username.trim().length == 0  ) {
          alert("username can not be blank");
          setspinner(false);
        } else if (password.trim().length == 0  ) {
          alert("password can not be blank");
          setspinner(false);
        } else {
          var url = AppUrlCollection.BASE_URL + "login";

          var value = new FormData();

          value.append("username", username);
          value.append("password", password);

          console.log("Login_key_vale ", value);
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: value,
          })
            .then((response) => response.json())
            .then((responseJson) => {
              setspinner(false);

              console.log(responseJson);
              loginServiceCall(responseJson);

              // this.setState({ isLoading: false })
            })
            .catch((error) => {
              setspinner(false);
              alert("Error while login" + error);
              // this.setState({ isLoading: false })
              console.warn(error);
            });
        }
        //  this.props.navigation.navigate('NavigationSideScreen')
      } else setModalVisible(true);
    });
  };

  const loginServiceCall = async (responseJson) => {
    console.warn(responseJson);

    if (responseJson.status == AppConstance.API_SUCESSCODE) {
      AppConstance.IS_USER_LOGIN = "1";
      // this.props.navigation.push('Dashboard');

      //AppConstance.showSnackbarMessage(responseJson.message)
      callingUserService(responseJson.data.auth_key);
    } else {
      alert(responseJson.message);
    }
  };

  const callingUserService = async (authKey) => {
    var url = AppUrlCollection.USER;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        authkey: authKey,
      },
      // body: value,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.warn("USER::: ", responseJson);
        let role = responseJson.data.role;
        let role2;
        if (role.indexOf("Customer") !== -1) {
          AsyncStorage.setItem("ROLE", "1");
          AppConstance.ROLE == "1";
          role2 == "1";
        } else if (role.indexOf("Admin") !== -1) {
          AsyncStorage.setItem("ROLE", "0");
          AppConstance.ROLE == "0";
          role2 == "0";
        } else {
          AsyncStorage.setItem("ROLE", "0");
          AppConstance.ROLE == "0";
          role2 == "0";
        }
        AsyncStorage.setItem(
          AppConstance.USER_INFO_OBJ,
          JSON.stringify(responseJson.data)
        );

   
        //  this._storeData();
        AsyncStorage.setItem("ISUSERLOGIN", "1");
        AsyncStorage.setItem("PASS", pass);
        AsyncStorage.setItem("USERNAME", email);

        // alert(responseJson.data);

        let data = responseJson.data;
        console.warn("json value", data);

        // alert(data.auth_key);
        AppConstance.USER_INFO.USER_ID = data.id;
        AppConstance.USER_INFO.USER_NAME = data.username;
        AppConstance.USER_INFO.USER_TOKEN = data.auth_key;
        AppConstance.USER_INFO.USER_EMAIL = data.email;
        AppConstance.USER_INFO.USER_PASSWORD = pass;
        AppConstance.USER_INFO.USER_STATUS = data.status;
        AppConstance.USER_INFO.USER_DELETED = data.is_deleted;
        AppConstance.USER_INFO.USER_ADDRESS1 = data.address_line_1;
        AppConstance.USER_INFO.USER_ADDRESS2 = data.address_line_2;
        AppConstance.USER_INFO.USER_CITY = data.city;
        AppConstance.USER_INFO.USER_STATE = data.state;
        AppConstance.USER_INFO.USER_ZIP_CODE = data.zip_code;
        AppConstance.USER_INFO.USER_MOBILE = data.phone;
        AppConstance.USER_INFO.USER_FAX = data.fax;
        AppConstance.USER_INFO.USER_CUSTOMER_NAME = data.customer_name;
        AppConstance.USER_INFO.USER_IS_BLOCK = data.is_blocked;

        // AsyncStorage.setItem('k','1')

        navigation.navigate("AppDrawer");

        setspinner(false);
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.warn("user error" + error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
      <Spinner
        visible={spinner}
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
                  callingLoginApi();
                }}
              >
                <Text style={styles.textStyle}>Retry</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View
        style={{
          width: deviceWidth,
          height: "35%",
        }}
      >
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../images/signin2.jpeg")}
        >
          {/* <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 5,
              marginTop:5,
              width: "6%",
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="chevron-back"
              size={35}
              style={{ alignSelf: "center" }}
              color="white"
            />
          </TouchableOpacity> */}
        </ImageBackground>
      </View>
      <KeyboardAvoidingView behavior="padding">
        <View
          style={{
            backgroundColor: AppColors.white,
            height: "75%",
            marginTop: "-3%",
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            padding: "5%",
          }}
        >

          <View style={{flexDirection:'row',justifyContent:'space-between'}}>

          <Text style={{ fontSize: 20 }}>{strings.Welcometogalaxy}</Text>
         <TouchableOpacity 
         onPress={()=> {navigation.navigate('ChooseLanguage')}}
         style={{flexDirection:'row'}}>
           <FontAwesome name='language' style={{alignSelf:'center'}}/>
            <Text style={{ fontSize: 20,alignSelf:'center', marginLeft:10, }}>{strings.Lang}</Text>
            <FontAwesome name='angle-down' style={{alignSelf:'center', marginLeft:5,}}/>

          </TouchableOpacity>

          </View>

          <Text style={{ marginTop: 20, color: "gray" }}>
            {strings.Signintocontinue}
          </Text>
        
          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 0.5,
              marginTop: 15,
              paddingHorizontal: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="email"
              style={{ justifyContent: "center", alignSelf: "center" }}
              size={20}
            />
            <View style={{ marginHorizontal: 15, width: "85%" }}>
              <Text>{strings.Email}</Text>
              <TextInput
                style={{
                  height: 30,
                  paddingVertical: 4,
                  width: "100%",
                  fontSize: 16,
                }}
                // onChangeText={text => onChangeText(text)}
                onChangeText={(text) => {
                  setemail(text);
                }}
                placeholder={strings.Email}
                value={email}
                   underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 0.5,
              marginTop: "6%",

              paddingHorizontal: 15,
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <SimpleLineIcons
              name="lock"
              style={{ justifyContent: "center", alignSelf: "center" }}
              size={20}
            />
            <View style={{ marginHorizontal: 15, width: "83%" }}>
              <Text>{strings.Pass}</Text>
              <TextInput
                style={{
                  height: 30,
                  paddingVertical: 4,

                  width: "100%",
                  fontSize: 16,
                }}
                // onChangeText={text => onChangeText(text)}
                onChangeText={(text) => setpass(text)}
                placeholder={strings.Pass}
                secureTextEntry={passsecure}
                value={pass}
                inlineImageLeft="search_icon"
              />
            </View>
            {passsecure == true ? (
              <MaterialCommunityIcons
                name="eye"
                onPress={() => {
                  passsecure == true
                    ? setpasssecure(false)
                    : setpasssecure(true);
                }}
                style={{ alignSelf: "center" }}
                size={20}
                color={"gray"}
              />
            ) : (
              <MaterialCommunityIcons
                name="eye-off"
                onPress={() => {
                  passsecure == true
                    ? setpasssecure(false)
                    : setpasssecure(true);
                }}
                style={{ alignSelf: "center" }}
                size={20}
                color={"gray"}
              />
            )}
          </View>
          <View style={{flexDirection:'row', width:'100%',justifyContent:'space-between',}}>
            <TouchableOpacity
              onPress={() => callingLoginApi()}
              style={{
                width:type== 2? "100%": "80%",
                marginVertical: "6%",
                justifyContent: "center",
                borderRadius: 10,
                // borderColor: "white",
                // borderWidth: 1,
                alignSelf: "center",
                backgroundColor: "#29AB87",
                height: 55,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, alignSelf: "center" }}
              >
                {strings.Signin}
              </Text>

            </TouchableOpacity>
          {type != 2?
            <TouchableOpacity
              onPress={() => _pressHandler()}
              style={{
                width: "15%",
                justifyContent: "center",
                alignItems:'center',
                borderRadius: 10,
                borderColor: "#29AB87",
                borderWidth: 1,
                alignSelf: "center",
                height: 55,
              }}
            >
              {type == 0 ? 
           <MaterialCommunityIcons size={40} name='fingerprint' color='red'

             />
             :
             <Image style={{width:30, height:30}}  source={require('../images/faceid.png')}/>
              }

            </TouchableOpacity>
                :
                null}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("ForgetScreen")} style={{ marginBottom: 1 }} >
              <Text
                style={{
                  alignSelf: "center",
                  color: "gray",
                  fontSize: 14,
                }}
              >
               {strings.Forgetpassword}
              </Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
});
export default Signin;
