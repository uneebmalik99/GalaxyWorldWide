import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  FlatList,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AppColors from '../Colors/AppColors';
import AppConstance, { deviceHeight, deviceWidth } from '../constance/AppConstance';
import AppFonts from '../AppFont/AppFonts';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons'; 
import Feather from  'react-native-vector-icons/dist/Feather'
import AppUrlCollection from '../UrlCollection/AppUrlCollection';
import Spinner from 'react-native-loading-spinner-overlay';
import NetInfo from '@react-native-community/netinfo'

var baseImagePath = '';

const carslist = ({route, navigation }) => {
  const { type} = route.params;
  const [spinner , setspinner] =useState(false)
  // const [loc , setloc] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setdata] = useState([
      {
          id:7
      },
      {
        id:7
    }
    ,{
        id:7
    }
    

  ]
)


const callingVehicleApi = async (isCallingFirsttime) => {

  NetInfo.fetch().then((state) => {
    if (state.isConnected == true) {
var url = AppUrlCollection.VEHILE_LIST;
if(type !== 'total'){
  url = AppUrlCollection.VEHILE_LIST + 'location='+type
}
//else{
//   url = AppUrlCollection.VEHILE_LIST;
// }

    fetch(url , {

    method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'authkey': AppConstance.USER_INFO.USER_TOKEN
      },
  })
      .then((response) => response.json())
      .then((responseJson) => {

          if (responseJson.status == AppConstance.API_SUCESSCODE) {
              baseImagePath = responseJson.data.other.vehicle_image;
              let data = responseJson.data.vehicleList;
              //this.setState({ isLoading: false, isFooterLoading: false })
              if (data.length > 0) {
                setspinner(false)
                  // this.setState({ vehicleList: [...this.state.vehicleList, ...data], noMoreDataFound: false })
                  //this.setState({ vehicleList: this.state.vehicleList.concat(data), noMoreDataFound: false })
                  setdata(data)
              } else {
                setdata(data)
                setspinner(false)



              }
             
              //this.setState({ noMoreDataFound: false })
          } else {
            setspinner(false)

          }
      })
      .catch((error) => {
        setspinner(false)

        alert(error)
          console.warn(error)
      });
    }else setModalVisible(true)
  })

}


useEffect(() => {


  callingVehicleApi(true)

  
   
}, []);   
const renderSeparator =()=>{
  return(
<View style={{height:4, width:deviceWidth, }}></View>
  );
}
const renderlist = ({item}) =>{
  
  return(
    
<TouchableOpacity style={{flexDirection:'row',alignSelf:'center',backgroundColor:'#E5E7E9', borderColor:'grey',borderRadius:50, width:'100%',height:80,justifyContent:'center', borderWidth:0.1, }} 
onPress={() =>  navigation.navigate('CarDetails')}
>

    
<Image source={require('../images/iii.jpg')} style={{ width: 80, height: 80,alignSelf:'center',marginRight:5, borderRadius:400/2 , }} resizeMode='cover' />

<View style={{width:'8%'}}>

</View>
<View style={{flexDirection:'column',justifyContent:'center', width:'69.0%',}} >
<View style={{ width:'100%'}}>
<Text style={{paddingVertical:1,color:'#497ebf', fontSize:12.2}}>2020 toyota corolla</Text>
</View>


<View style={{paddingVertical:1,width:'100%'}}>
<Text style={{paddingVertical:1,color:'#497ebf', fontSize:12.2 }}>lot: 575755755</Text>
</View>



<View style={{paddingVertical:1,  width:'100%'}}>
<Text style={{paddingVertical:1,color:'#497ebf',fontSize:12.2 }}>Purchase Date: 20-10-2020</Text>
</View>


<View style={{ width:'100%',paddingVertical:1,}}>
<Text style={{paddingVertical:1,color:'#497ebf',fontSize:12.2 }}>Status: Arrived</Text>
</View>






</View>
</TouchableOpacity>

  
  
  )
  
   }

  return (

    <ImageBackground source={require('../images/bg.png')} resizeMode='stretch' style={{ width: deviceWidth, height: deviceHeight,  }} >

    <SafeAreaView style={{ flex: 1,width:deviceWidth, height: deviceHeight, }}>
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
                callingVehicleApi(true)
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
          textContent={'Loading...'}
          textStyle={{ color: '#FFF'}}
        />



<View
style={{width:deviceWidth,flexDirection:'row', paddingHorizontal:13,paddingVertical:15, height:55}}>

<TouchableOpacity
style={{justifyContent:'center',width:'6%', }}
onPress={()=>navigation.goBack()}

>
<Ionicons  name='chevron-back' size={25} color='white'/>



</TouchableOpacity>

<View style={{width:'88%',justifyContent:'center', }}>
<Text style={{alignSelf:'center',color:'white',fontWeight:'bold', fontSize:20}}>{type}</Text>
</View>

<View style={{width:'6%', }}>

</View>
</View>

<View style={{width:deviceWidth , height:deviceHeight}}>
<View

style={{height:50,paddingHorizontal:15, justifyContent:'center'}}>
 <TextInput
          style={{height:35,
    borderWidth: 0.4,
    paddingLeft: 20,
    borderRadius:30,
    fontSize:14,
    paddingVertical:5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',}}
          onChangeText={(text) => searchFilterFunction(text)}
          underlineColorAndroid="transparent"
          placeholder="Search Container Number,status,port of loading"
        />
</View>

<FlatList
                         contentContainerStyle={{paddingHorizontal:15,marginTop:15, }}
                         contentInsetAdjustmentBehavior="automatic"
                      data={data}
                     renderItem={renderlist}
                     keyExtractor={(item,index) => index.toString()}
                     ItemSeparatorComponent={renderSeparator}

                    
 
                     
 
                  />

</View>

{/* <View

style={{height:deviceHeight*0.04, backgroundColor:'white',justifyContent:'center'}}>
<Text style={{fontSize:12,alignSelf:'center',marginRight:10}}>Sorting: locationwise</Text>
</View> */}



    </SafeAreaView>
    </ImageBackground>


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
    margin: 5
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
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
export default carslist;
