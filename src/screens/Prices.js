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
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';
import Spinner from "react-native-loading-spinner-overlay";
import { strings } from '../language/Language';


const Prices = ({route, navigation }) => {


  const [data, setdata] = useState([])
  const [spinner , setspinner] = useState(false)

  const [ shippingrates ,setshippingrates ] = useState([])
  const [ towingrates ,settowingrates ] = useState([])

useEffect(() => {
  // setspinner(true)
  // callingdashboardApi()
  // setspinner(false)
  CallingTwoingRatesApi();
  CallingShippingRatesApi();

  return () => {};
}, []);


const CallingTwoingRatesApi = async () => {
  
     setspinner(true)
        var url = AppUrlCollection.BASE_URL + "pricing/towing-rates";
        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
       
        })
          .then((response) => response.json())
          .then((responseJson) => {
            setspinner(false);
            // alert(JSON.stringify(responseJson))
            settowingrates(responseJson)
            // this.setState({ isLoading: false })
          })
          .catch((error) => {
            setspinner(false);
            alert("Error while fetching Rates" + error);
            // this.setState({ isLoading: false })
            console.warn(error);
          });
      
      //  this.props.navigation.navigate('NavigationSideScreen')

};

const CallingShippingRatesApi = async () => {
  
  setspinner(true)
     var url = AppUrlCollection.BASE_URL + "pricing/shipping-rates";
     fetch(url, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
       }
    
     })
       .then((response) => response.json())
       .then((responseJson) => {
         setspinner(false);
         setshippingrates(responseJson)
         // this.setState({ isLoading: false })
       })
       .catch((error) => {
         setspinner(false);
         alert("Error while fetching Rates" + error);
         // this.setState({ isLoading: false })
         console.warn(error);
       });
   
   //  this.props.navigation.navigate('NavigationSideScreen')

};



const ShippingRates = () => {
  return(
    <View>
      
      <FlatList
      data={shippingrates}
      contentContainerStyle={{
        marginHorizontal: 10,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingBottom: 10,
        marginTop:10,
        paddingHorizontal: 20,
        width: deviceWidth,
        // height: deviceHeight,
      }}
      renderItem={renderShippinglist}
      extraData={shippingrates}
      keyExtractor={(item, index) => index}

    />
    </View>
  )
}

const TowingRates = () => {
  return(
    <View>
    
      <FlatList
      data={towingrates}
      contentContainerStyle={{
        marginHorizontal: 10,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingBottom: 10,
        marginTop:10,
        paddingHorizontal: 20,
        width: deviceWidth,
        // height: deviceHeight,
      }}
      renderItem={renderTowiglist}
      extraData={towingrates}
      keyExtractor={(item, index) => index}
  
    />
    </View>
  )
}


const renderShippinglist = ({item}) =>{

  return(
    
<View style={{flexDirection:'row',alignSelf:'center', marginTop:5,justifyContent:'center', paddingHorizontal:3, width:'100%',height:55}} >

<TouchableOpacity
  // onPress={()=>navigation.navigate('CarDetails')}
  
  style={{width:'100%',alignSelf:'center' , 
  flexDirection:'row', justifyContent:'space-between', 
  paddingVertical:3,paddingHorizontal:10,height:'100%',borderRadius:10, 
  borderWidth:1, borderColor:AppColors.blue}}>
  <View  style={{ justifyContent:'center'}}>
    <Text style={{color:AppColors.blue, fontWeight:'700'}}>{strings.FromCountry}: {item.from_country_id == '231' ? 'United States': item.from_country_id == '229' ? 'United Arab Emirates':''}  </Text>

    <Text style={{color:AppColors.blue, fontWeight:'700', marginTop:2,}}>{strings.ToCountry}: {item.to_country_id == '229' ? 'United Arab Emirates':item.location_id == '2' ? 'GA':item.location_id == '3' ? 'NY':item.location_id == '4' ? 'TX':item.location_id == '8' ? 'TORONTO':item.location_id == '9' ? 'MONTREAL':item.location_id == '10' ? 'HALIFAX':item.location_id == '11' ? 'EDMONTON':item.location_id == '12' ? 'CALGARY':item.location_id == '13' ? 'Afghanistan':item.location_id == '15' ? 'Turkamanistan':item.location_id == '19' ? 'VANCOUVER':item.location_id == '20' ? 'MANITOBA':item.location_id == '21' ? 'WA':''}</Text>


  </View>
  <View style={{alignSelf:'center' ,paddingHorizontal:10,borderRadius:50, paddingVertical:5,backgroundColor:AppColors.blue}}>
    <Text style={{color:'white', fontWeight:'bold'}}>{strings.Rate}: {item.amount}</Text>
  </View>
  
  </TouchableOpacity>
  

</View>

  
  
  )
  
   }


   const renderTowiglist = ({item}) =>{

    return(
      
  <View style={{flexDirection:'row',alignSelf:'center', marginTop:8,justifyContent:'center', paddingHorizontal:3, width:'100%',height:55}} >
  
  <TouchableOpacity
  // onPress={()=>navigation.navigate('CarDetails')}
  
  style={{width:'100%',alignSelf:'center' , 
  flexDirection:'row', justifyContent:'space-between', 
  paddingVertical:3,paddingHorizontal:10,height:'100%',borderRadius:10, 
  borderWidth:1, borderColor:AppColors.blue}}>
  <View  style={{ justifyContent:'center'}}>
    <Text style={{color:AppColors.blue, fontWeight:'700'}}>{strings.Country}: {item.country_id == '231' ? 'United States':'Canada'}  </Text>

    <Text style={{color:AppColors.blue, fontWeight:'700', marginTop:2,}}>{strings.Location}: {item.location_id == '1' ? 'LA':item.location_id == '2' ? 'GA':item.location_id == '3' ? 'NY':item.location_id == '4' ? 'TX':item.location_id == '8' ? 'TORONTO':item.location_id == '9' ? 'MONTREAL':item.location_id == '10' ? 'HALIFAX':item.location_id == '11' ? 'EDMONTON':item.location_id == '12' ? 'CALGARY':item.location_id == '13' ? 'Afghanistan':item.location_id == '15' ? 'Turkamanistan':item.location_id == '19' ? 'VANCOUVER':item.location_id == '20' ? 'MANITOBA':item.location_id == '21' ? 'WA':''}</Text>


  </View>
  <View style={{alignSelf:'center' ,paddingHorizontal:10,borderRadius:50, paddingVertical:5,backgroundColor:AppColors.blue}}>
    <Text style={{color:'white', fontWeight:'bold'}}>{strings.Rate}: {item.rate}</Text>
  </View>
  
  </TouchableOpacity>
  
  
  </View>
  
    
    
    )
    
     }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', height: deviceHeight, }}>

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
          <Text style={styles.textTitle}>{strings.Prices}</Text>
          <Text></Text>
         
        </View>
     
      </Appbar.Header>


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

<ShippingRates key={'1'} tabLabel={strings.ShippingRates} style={{flex:1,backgroundColor:'red'}}/>
<TowingRates key={'2'} tabLabel={strings.TowingRates} style={{flex:1,backgroundColor:'blue'}}/>
</ScrollableTabView>

     


{/* <View style={{width:deviceWidth,marginTop:10, flex:1,}}>

<FlatList
                         contentContainerStyle={{ paddingBottom: 50 , paddingHorizontal:5,}}
                         contentInsetAdjustmentBehavior="automatic"
                      data={data}
                     renderItem={renderlist}
                     keyExtractor={(item,index) => index.toString()}
                    
 
                     
 
                  />
</View> */}
    </SafeAreaView>

  );
};


export default Prices;

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
