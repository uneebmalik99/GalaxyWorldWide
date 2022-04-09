import React, { Component } from 'react'
import { Image, StatusBar, View, ImageBackground,StyleSheet, Text, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppColors from '../Colors/AppColors';
import {strings} from '../language/Language'
import AppConstance, {  deviceHeight, deviceWidth, } from "../constance/AppConstance";
import { Appbar } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-community/async-storage';


class ChooseLanguage extends Component {

   
    constructor(props){
        super(props)
        this.state = {
            isNotLogin:false,
            initailscreen:'',
            lang:'',

        };
    }


    componentDidMount() {
    
        AsyncStorage.getItem('Lang').then((value)=>{
    
          if(value == undefined){
            // alert('un')
            // setinitailscreen('ChooseLanguage')
            // setlang('')
    
          }else if (value == null){
            // alert('nul')
            // setinitailscreen('ChooseLanguage')
            // setlang('')

    
          }else{
            // alert('else')
            //  setlang(value)
            strings.setLanguage(value)
           this.props.navigation.navigate('Signin')
            // setinitailscreen('Signin')
          
          }
    
        })
      
      


}
   
//     }
//     async checkLangugage(){
        
//     var lang=    await getLanugage()
//     if(lang){
//         strings.setLanguage(lang)
//     }
//     }
    navigationtopage = async(language) => {
        await  setLanguage(language)
        this.props.navigation.navigate("TutorialScreen")

    }

    onchange = async(lang)  =>{
        if(lang  == 'en'){
           strings.setLanguage('en')
           RNRestart.Restart();

            // return;

        }else if (lang == 'ar'){
         strings.setLanguage('ar')
         RNRestart.Restart();
            // return;

        }else{
          strings.setLanguage('ru')
          RNRestart.Restart();
            // return;

        }
    }
    render() {
        return (
         

            <SafeAreaView style={{height:deviceHeight, width:deviceWidth}}>
  <Appbar.Header style={styles.header}>
        <View style={styles.viewTitle}>
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            // onPress={() => this.props.navigation.goBack()}
          >
            {/* <Ionicons name="chevron-back" size={35} color="white" /> */}
          </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>{strings.ChooseLanguage}</Text>
          </View>
        </View>
      </Appbar.Header>

                <View style={{justifyContent:'center',paddingVertical:20, width:'75%',alignSelf:'center',  alignItems:'center'}}>
            <TouchableOpacity 
            onPress={async()=>{
              await  AsyncStorage.setItem('Lang','en')

              strings.setLanguage('en')
              this.props.navigation.navigate('Signin')
               


            }}
            style={{marginTop:40,flexDirection:'row', width:'40%',justifyContent:'space-between',}}>
                <Image  style={{height:20, width:35}}resizeMethod='resize' resizeMode='stretch' source={require('../images/usaflag.png')}/>
            <Text style={{alignSelf:'center', fontSize:16}}>English</Text>

            </TouchableOpacity>

            <TouchableOpacity
            
            style={{marginTop:20,flexDirection:'row', width:'39%',justifyContent:'space-between',}}
              onPress={async()=>{
               
               
            await  AsyncStorage.setItem('Lang','ar')

             strings.setLanguage('ar')
             this.props.navigation.navigate('Signin')
                


            }}
            >
                <Image  style={{height:20, width:35}} resizeMethod='resize' resizeMode='stretch' source={require('../images/uaeflag.png')}/>

            <Text style={{alignSelf:'center', fontSize:16}}>Arabic</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={async()=>{
                await  AsyncStorage.setItem('Lang','ru')

                 strings.setLanguage('ru')
                 this.props.navigation.navigate('Signin')
                //  RNRestart.Restart();

            }}
            style={{marginTop:20,flexDirection:'row', width:'40%',justifyContent:'space-between',}}>
                <Image style={{height:20, width:35}}  resizeMethod='resize' resizeMode='stretch'  source={require('../images/russianflag.png')}/>

            <Text style={{alignSelf:'center', fontSize:16}}>Russian</Text>
            </TouchableOpacity>


                </View>


            </SafeAreaView>
           
        )
    }
}


const styles = StyleSheet.create({
   
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
  
export default ChooseLanguage

