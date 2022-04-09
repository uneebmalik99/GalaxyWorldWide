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
const MissionVision = ({route, navigation }) => {


  const [data, setdata] = useState([
    {
      date: '20-12-2020',
      name: 'Ocean Freight',
     
 
    },
    

    {
    date: '20-12-2020',
      name: 'Towing fee',
     
    },

   

  ]
)



const renderlist = ({item}) =>{

  return(
    
<View style={{flexDirection:'row',alignSelf:'center', marginTop:5,justifyContent:'space-between', paddingHorizontal:5, width:'100%',height:55}} >

<TouchableOpacity
// onPress={()=>navigation.navigate('CarDetails')}

style={{width:'75%', paddingVertical:3,paddingHorizontal:3,height:'100%',borderRadius:6, backgroundColor:AppColors.blue}}>
<View style={{  width:'100%',height:'100%', flexDirection:'column'}}>

<View style={{flexDirection:'row',width:'100%',height:'100%'}}>

<View style={{ height:'100%',marginLeft:4,alignSelf:'center', paddingVertical:2, width:'62%'}}>

<Text style={{color:'white',fontWeight:'bold',paddingVertical:2, fontSize:12,}}>{item.name}</Text>
<Text style={{color:'white',fontWeight:'bold',paddingVertical:2, fontSize:12,}}>{item.date}</Text>


</View>

</View>




</View>

</TouchableOpacity>





<TouchableOpacity
// onPress={()=>navigation.navigate('CarDetails')}

style={{width:'20%', paddingVertical:2,paddingHorizontal:3,height:'100%',borderRadius:6, backgroundColor:AppColors.blue}}>
<View style={{  width:'100%',height:'100%',justifyContent:'center', flexDirection:'column'}}>

<MaterialCommunityIcons name='file-download-outline' color='white' style={{alignSelf:'center'}} size={50} />




</View>

</TouchableOpacity>

</View>

  
  
  )
  
   }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', height: deviceHeight, }}>


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
          <Text style={styles.textTitle}>{strings.MissionandVision}</Text>
          <Text></Text>
         
        </View>
     
      </Appbar.Header>





<View style={{width:deviceWidth,marginTop:10, flex:1,}}>

</View>
    </SafeAreaView>

  );
};


export default MissionVision;

const styles = StyleSheet.create({
  main_item: {
    flexDirection: "row",
    width: "90%",
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "space-around",
  },
  // item: {
  //   borderWidth: 1,
  //   borderColor: AppColors.green,
  //   width: "75%",
  //   height: 150,
  //   paddingVertical: 5,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 10,
  //   marginTop: 20,
  //   marginLeft: 15,
  //   // paddingTop: 20,
  // },
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
  },
});
