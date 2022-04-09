// import React,{useState,useEffect ,useRef} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   ImageBackground,
//   FlatList,
//   PermissionsAndroid,
//   Share,
//   StatusBar,
//   TouchableOpacity,
//   Modal,
//   Image,
//   Dimensions
// } from 'react-native';
// import AppColors from '../Colors/AppColors';
// import AppConstance, { deviceHeight, deviceWidth } from '../constance/AppConstance';
// import AppFonts from '../AppFont/AppFonts';
// import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/dist/Ionicons';
// import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons'; 
// import Entypo from  'react-native-vector-icons/dist/Entypo';
// import { SliderBox } from "react-native-image-slider-box";
// import RNFetchBlob from 'rn-fetch-blob';
// import Snackbar from 'react-native-snackbar';
// import Spinner from 'react-native-loading-spinner-overlay';
// import Feather from  'react-native-vector-icons/dist/Feather'
// import AntDesign from  'react-native-vector-icons/dist/AntDesign'
// import ImageCropPicker from 'react-native-image-crop-picker';
// import { Icon} from 'react-native-elements'
// import BottomSheet from 'reanimated-bottom-sheet';
// import Animated from 'react-native-reanimated';
// import RBSheet from "react-native-raw-bottom-sheet";



// const images = [

//   "https://source.unsplash.com/1024x768/?nature",
//         "https://source.unsplash.com/1024x768/?water",
//         "https://source.unsplash.com/1024x768/?girl",
//         "https://source.unsplash.com/1024x768/?tree", 
    
    
    
// ];

// const ContainerAview = ({route, navigation }) => {


//   const [vehicleDetails , setvehicleDetails] = useState([''])

//   const { item   } = route.params;

//   const [imgpos, setimgpos] = useState(0)
//   const [images , setimages] = useState([
//     "https://source.unsplash.com/1024x768/?nature",
//     "https://source.unsplash.com/1024x768/?water",
//     "https://source.unsplash.com/1024x768/?girl",
//     "https://source.unsplash.com/1024x768/?tree", 


//   ])
//   const[spinner , setspinner ] = useState(false)
//   const[SliderModel , setSliderModel] = useState(false)

//   const refRBSheet = useRef();
  
// // bs = React.createRef()
// // fall = new Animated.Value(1)

// // renderInner = () =>(
// //   <Text>HEllo</Text>
// // );

// // RenderHeader =() =>(
// //   <View style={{backgroundColor:'white', shadowColor:'#333333', shadowOffset:{width:-1, height:-3}, 
// //   shadowRadius:2,shadowOpacity:0.4, paddingTop:20, borderTopLeftRadius:20, borderTopRightRadius:20} } >
// //       <View style={{alignItems:'center', }}>
// //           <View style={{width:40, height:8, borderRadius:4, backgroundColor:'red', marginBottom:10}}>

// //           </View>

// //       </View>

// //   </View>
// // )

//   const showSnackbarMessage = () => {
//     setTimeout(() => {
//       Snackbar.show({
//         backgroundColor: '#008B8B',
//         title: 'Image Downloaded Successfully',
//         duration: Snackbar.LENGTH_SHORT,
//       });
//     }, 200);
//   };




// const getExtention = filename => {
//   // To get the file extension
//   return /[.]/.exec(filename) ?
//            /[^.]+$/.exec(filename) : undefined;
// };

// const onShare = async () => {
//   try {
//     const result = await Share.share({
//       message:
//         'React Native | A framework for building native apps using React',
//     });

//     if (result.action === Share.sharedAction) {
//       if (result.activityType) {
//         // shared with activity type of result.activityType
//       } else {
//         // shared
//       }
//     } else if (result.action === Share.dismissedAction) {
//       // dismissed
//     }
//   } catch (error) {
//     alert(error.message);
//   }
// };


// const TakePhoto=()=>{
//   ImageCropPicker.openCamera({
//     width: 300,
//     height: 400,
//     cropping: false,
//   }).then(image => {
//     console.log(image1);
//     refRBSheet.current.close()

//     console.log(images1);
//     console.log(images1.length);
//     var i ;
//     for (i = 0 ; i<images1.length ; i++){
//       images.push(images1[i].sourceURL)
//     }
//   });
// }


// const Selectphoto = () =>{
//   ImageCropPicker.openPicker({
//     multiple: true
//   }).then(images1 => {
//     refRBSheet.current.close()

//     console.log(images1);
//     console.log(images1.length);
//     var i ;
//     for (i = 0 ; i<images1.length ; i++){
//       images.push(images1[i].sourceURL)
//     }


//   });
// }
// const [width, setwidth] =useState('100%')
//   const [currentimg, setcurrentimg] = useState('')
// const [Export, setExport] = useState(false)
// const [data, setdata] = useState([
  
// ]
// )

// useEffect(() => {




//   return () => {
    
//   }
// }, [])

// // const renderContent = () => (
// //   <View
// //     style={{
// //       backgroundColor: 'white',
// //       padding: 16,
// //       height: 450,
// //     }}
// //   >
// //     <Text>Swipe down to close</Text>
// //   </View>
// // );

// // const sheetRef = React.useRef(null);



// return (
   
//   <SafeAreaView style={{ flex: 1, backgroundColor: 'white', height: deviceHeight, }}>
//     {/* <BottomSheet 
// // ref={this.bs}
// // snapPoints={[330, 0]}
// // initialSnap={1}
// // renderContent = {this.renderInner}
// // RenderHeader={this.RenderHeader}
// // callbackNode={this.fall}
// // enabledGestureInteraction={true}
//         ref={sheetRef}
//         snapPoints={[450, 300, 0]}
//         borderRadius={10}
//         renderContent={renderContent}
      
// />
//  */}
//   <RBSheet
//                     ref={refRBSheet}
//                     closeOnDragDown={true}
//                     closeOnPressMask={true}
//                     customStyles={{
//                         wrapper: {
//                             backgroundColor: "transparent"
//                         },
//                         container: {
//                             backgroundColor: '#ECF0F1',
//                             borderTopLeftRadius:20,
//                             borderTopRightRadius:20,
//                             height: 300,
//                             paddingTop:15,

//                         },
//                         draggableIcon: {
//                             backgroundColor: "grey"
//                         }
//                     }}
//                 >
//                     <View>

//                     <TouchableOpacity>
//                         <View style={{ borderBottomWidth: 0.6,paddingVertical:5, borderColor: '#D0D3D4', width: '80%', alignSelf: 'center' }}>
//                             <Text style={{ alignSelf: 'center',  fontSize:20,fontWeight:'600', paddingVertical:5,  }}>Upload Photo</Text>
//                         </View>

//                     </TouchableOpacity>
//                     <TouchableOpacity
//                     onPress={()=>TakePhoto() }
//                     >
//                         <View style={{ borderWidth: 0.5, borderRadius:12,marginTop:10, borderColor: '#1a9bef', width: '80%', alignSelf: 'center' }}>
//                             <Text style={{ alignSelf: 'center', padding: 10,fontWeight:'600', color: '#1a9bef', }}>Take Photo</Text>
//                         </View>

//                     </TouchableOpacity>
             
//                     <TouchableOpacity
//                     onPress={()=> Selectphoto()}
//                     >
//                         <View style={{ borderWidth: 0.5 , borderRadius:12,marginTop:10, borderColor: '#1a9bef', width: '80%', alignSelf: 'center' }}>
//                             <Text style={{ alignSelf: 'center',fontWeight:'600', padding: 10, color: '#1a9bef', }}>Choose From Library</Text>
//                         </View>

//                     </TouchableOpacity>
               
//                     <TouchableOpacity
//                                         onPress={()=> refRBSheet.current.close()}

//                     >
//                         <View style={{ borderWidth: 1, borderRadius:12,marginTop:10, borderColor: 'red', width: '80%', alignSelf: 'center' }}>
//                             <Text style={{ alignSelf: 'center', padding: 10, color: 'red', }}>Cancel</Text>
//                         </View>

//                     </TouchableOpacity>
//                     </View>

               
//                <View style={{  flex: 1,
//   justifyContent: 'flex-end',
//   marginBottom: 20
// }}>

             
//                     <TouchableOpacity 
//                     onPress={()=> refRBSheet.current.close()}
//                     style={{width:25,justifyContent:'center', height:25, backgroundColor:'grey', borderRadius:50, alignSelf:'flex-end', marginRight:30}}>
//                     <Entypo   name='chevron-down' color='white' size={18} style={{alignSelf:'center'}}/>
//                     </TouchableOpacity>
//                     </View>

//                 </RBSheet>
           

// <ImageBackground source={require('../images/backgroundimage.jpg')} resizeMode='stretch' style={{ width: deviceWidth, height:deviceHeight, position: 'absolute' }} >
// </ImageBackground>
//   {/* <Toolbar toggle={this.props.toggle} headerName='DASHBOARD' isFilterIconShow={false} isInnerScreen={false} /> */}
//      <View
// style={{width:deviceWidth,flexDirection:'row', paddingHorizontal:13,paddingVertical:15, height:55}}>

// <TouchableOpacity
// style={{justifyContent:'center',width:'10%', }}
// onPress={()=>navigation.goBack()}

// >
// <Ionicons  name='chevron-back' size={25} color='white'/>



// </TouchableOpacity>

// <View style={{width:'80%',justifyContent:'center', }}>
// <Text style={{alignSelf:'center',color:'white',fontWeight:'bold', fontSize:20}}>Container</Text>
// </View>

// <View style={{width:'10%',justifyContent:'center' }}>
// <TouchableOpacity style={{alignSelf:'center', justifyContent:'center'}}>
// <AntDesign  size={20} style={{alignSelf:'center'}} color='white' name='check'/>
// </TouchableOpacity>
// </View>
// </View>
 


// <ScrollView style={{width:deviceWidth }}>


//  <SliderBox 
//           images={images}
//           sliderBoxHeight={210}
          
//           dotColor="#FFEE58"
//   inactiveDotColor="#90A4AE"
//   dotStyle={{
//     width: 10,
//     height: 10,
//     marginHorizontal: -4,
//     padding: 0,
//     margin: 0
//   }}
//           resizeMethod={'resize'}  
//           resizeMode={'cover'}
//   circleLoop
//   currentImageEmitter={index => { setimgpos(index); 
//    }}

//           onCurrentImagePressed={index =>
//           //setcurrentimg()
//             // console.warn(`image ${index} pressed`)
//             setSliderModel(true)
//           }
//   paginationBoxStyle={{
//     alignItems: "center",
//     alignSelf: "center",
//     justifyContent: "center",
//     alignSelf: "center",
//   }}
//   ImageComponentStyle={{borderTopRightRadius:20,borderTopLeftRadius:20, width: '100%', marginTop: 8}}

//         />
     
// <View style={{marginTop:-60, height:35,width:35, marginBottom:30,alignSelf:'flex-end',justifyContent:'center', marginRight:20,}}>
//   <TouchableOpacity 
//           onPress={() => refRBSheet.current.open()}
//           style={{backgroundColor:'grey' , borderRadius: 50,height:'100%',width:'100%',  justifyContent:'center', }}>
//   <Text style={{color:'white', alignSelf:'center'}}>+</Text>

//   </TouchableOpacity>
// </View>

// <View style={{flexDirection:'column', justifyContent:'center',backgroundColor:'#F2F3F4',   shadowColor: 'grey',
//     shadowOffset: { width: 3, height: 3 },
//     shadowOpacity: 0.6,
//     shadowRadius: 1,
//     elevation: 5,alignSelf:'center',borderRadius:10,borderWidth:0.2, marginTop:10,paddingHorizontal:10, width:'95%',}} >





// <View style={{width:'100%',flexDirection:'column', borderBottomWidth:0.3,paddingVertical:5,borderColor:'#B3B6B7', justifyContent:'space-between'}}>
// <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>AR no:</Text>
// <Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.ar_number}</Text>
// </View>


// <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5, borderColor:'#B3B6B7', justifyContent:'space-between'}}>
// <Text style={{color:'black',paddingVertical:2, fontWeight:'bold',fontSize:14,}}>Container no:</Text>
// <Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.container_number}</Text>
// </View>

// <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
// <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>Broker Name:</Text>
// <Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.broker_name}</Text>
// </View>


// <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5, borderColor:'#B3B6B7', justifyContent:'space-between'}}>
// <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>Booking no:</Text>
// <Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.booking_number}</Text>
// </View>


// <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
// <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>Destination</Text>
// <Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.destination}</Text>
// </View>




// </View>


// </ScrollView>
// <View style={{  height:55, backgroundColor: '#1a9bef',borderRadius:15, width:deviceWidth, justifyContent:'center', flexDirection:'row'}}>



// <View style={{width:'32%', justifyContent:'center', flexDirection:'column', }}>
// <Ionicons
//           name='car-sport'
//           type='material'
//           color='#fff'
//           style={{alignSelf:'center'}}
//           size={22}
//           onPress={() => navigation.navigate('Dashboard')}

//       /> 
//     <Text style={{alignSelf:'center',color:'white', fontSize:12}}>My Vehicle</Text>
// </View>

// <View style={{width:'32%', bottom:30, }}>

//   <View>
    
//   </View>
//   <Icon
//           name='add'
//           type='material'
//           color='#f00'
//           containerStyle={{ alignSelf: 'center' }}
//           reverse
//           size={26}
//           onPress={() => navigation.navigate('AddVehicle')}
//       /> 

//       <Text style={{alignSelf:'center',color:'white', bottom:2,fontSize:12}}>Add Vehcile</Text>

//    </View>


// <View style={{width:'32%',justifyContent:'center', }}>
// <Feather
//           name='box'
//           type='material'
//           color='#fff'
//           size={22}
//           style={{alignSelf:'center'}}
//           onPress={() => {navigation.navigate('ContainerA')}}

//       /> 
//     <Text style={{alignSelf:'center',color:'white', fontSize:12 }}>Container</Text>  
//                 </View>




// </View>

// </SafeAreaView>





//   );
// };


// export default ContainerAview;




import React,{useState,useEffect ,useRef} from 'react';
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
  StatusBar,
  TouchableOpacity,
  Modal,
  Image,
  Dimensions,
  Platform
} from 'react-native';
import AppColors from '../Colors/AppColors';
import AppConstance, { deviceHeight, deviceWidth } from '../constance/AppConstance';
import AppFonts from '../AppFont/AppFonts';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons'; 
import Entypo from  'react-native-vector-icons/dist/Entypo';
import { SliderBox } from "react-native-image-slider-box";
import RNFetchBlob from 'rn-fetch-blob';
import Snackbar from 'react-native-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import Feather from  'react-native-vector-icons/dist/Feather'
import AntDesign from  'react-native-vector-icons/dist/AntDesign'
import { Icon} from 'react-native-elements'
import { Appbar } from 'react-native-paper';
import ActionButton from 'react-native-action-button';
import RBSheet from "react-native-raw-bottom-sheet";
import { Slider } from 'react-native-elements/dist/slider/Slider';
import AppUrlCollection from '../UrlCollection/AppUrlCollection';
import * as ImagePicker from "react-native-image-picker"

import ImageCropPicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker'
import ContainerA from './ContainerA';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker';




const dummyimages = [

 require('../images/noimage3.jpeg') 
    
    
];

const ContainerAview = ({route, navigation }) => {


  const [vehicleDetails , setvehicleDetails] = useState([''])

  const { item   } = route.params;
  const [ export_details ,setexport_details] = useState()
  const [deletemodalshow ,setdeletemodalshow] =useState(false)
  const [deleteimages, setdeleteimages]=useState([])
  const [add , setadd] = useState(true)
  const [imgposition, setimgposition] = useState(0)
  const [images , setimages] = useState([
    require('../images/noimage3.jpeg') 
     

  ])
  const [IMG , setIMG] = useState(1)
  const [showimagemodel ,setshowimagemodel] = useState(false)
  const [ close , setclose] = useState(false)

  const[spinner , setspinner ] = useState(false)
  const [imagesurls ,setimagesurls ] = useState([])
  const [ images2 , setimages2] = useState([])



// for android camera

  const captureImage = async (type) => {
    let options = {
      
      quality: 0.8,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      ImagePicker.launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          // alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }else{

          if(images[0] == require('../images/noimage3.jpeg')){
            images.pop();
            setclose(true)
          }
          let temp = {} ;
          temp.name = response.assets[0].fileName;
          temp.size = response.assets[0].fileSize;
          temp.type = response.assets[0].type;
          temp.url = response.assets[0].uri;

          images.push(response.assets[0])
            // alert(JSON.stringify(temp))
      var value = new FormData();
      value.append('file',{uri:response.assets[0].uri,
           name:response.assets[0].fileName,
           type:response.assets[0].type
         });

         setspinner(true)

          fetch(AppUrlCollection.EXPORT_DETAIL + item.id +'/photos-upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
                'Accept': 'application/json'
            },
            body: value,
                       
        })
            .then((response) => response.json())
            .then((responseJson) => {
              // alert(JSON.stringify(responseJson))
              // console.log(responseJson.data);
              console.log(responseJson);
              imagesurls.push(responseJson.data)
              // alert(JSON.stringify(responseJson))
              // alert(JSON.stringify(responseJson))
              console.log(responseJson.data+'images urll is '+imagesurls);

              setspinner(false)
               
            })
            .catch((error) => {
              alert(error)
              setspinner(false)
                console.warn(error)
            });
       


















        }




        // console.log('base64 -> ', response.base64);
        // console.log('uri -> ', response.uri);
        // console.log('width -> ', response.width);
        // console.log('height -> ', response.height);
        // console.log('fileSize -> ', response.fileSize);
        // console.log('type -> ', response.type);
        // console.log('fileName -> ', response.fileName);
        // setFilePath(response);
      });
    }
  };
// for android image pick from library
  const selectFile3 = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
        
        //There can me more options as well find above
      });
  
  console.log('-----'+JSON.stringify(results));
  if(images[0] == require('../images/noimage3.jpeg')){
    images.pop();
    setclose(true)
  }

      for (const res of results) {
        //Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        
        
        console.log('File Name : ' + res.name);
        console.log('File Size : ' + res.size);
    
  
  
        var i ;
        // for( i =0; i< images1.length; i++){

          
          images.push(res)
          // alert(JSON.stringify(temp))

      var value = new FormData();
    
         value.append('file',res);

         setspinner(true)

          fetch(AppUrlCollection.EXPORT_DETAIL + item.id +'/photos-upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
                'Accept': 'application/json'
            },
            body: value,
                       
        })
            .then((response) => response.json())
            .then((responseJson) => {
              // alert(JSON.stringify(responseJson))
              // console.log(responseJson.data);
              console.log(responseJson);
              imagesurls.push(responseJson.data)
              console.log('images urll is '+imagesurls);

              setspinner(false)
               
            })
            .catch((error) => {
              alert(error)
              setspinner(false)
                console.warn(error)
            });
       
        // }  
              // console.log(JSON.stringify(res));
      }

  
  
    } catch (err) {
      setspinner(false)
  
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //setopener(false)
  
        //If user canceled the document selection
        // alert('Canceled from multiple doc picker');
      } else {
       // setopener(false)
  
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  
  
  };
  

  const TakePhoto = async (type) => {
    let options = {
      
      quality: 0.8,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    // let isCameraPermitted = await requestCameraPermission();
    // let isStoragePermitted = await requestExternalWritePermission();
    // if (isCameraPermitted && isStoragePermitted) {
      ImagePicker.launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          // alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }else{
          if(images[0] == require('../images/noimage3.jpeg')){
            images.pop();
            setclose(true)
          }

          let temp = {} ;
          temp.name = response.assets[0].fileName;
          temp.size = response.assets[0].fileSize;
          temp.type = response.assets[0].type;
          temp.url = response.assets[0].uri;

          images.push(response.assets[0])
            // alert(JSON.stringify(temp))
      var value = new FormData();
      value.append('file',{uri:response.assets[0].uri,
           name:response.assets[0].fileName,
           type:response.assets[0].type
         });

         setspinner(true)

          fetch(AppUrlCollection.EXPORT_DETAIL + item.id +'/photos-upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
                'Accept': 'application/json'
            },
            body: value,
                       
        })
            .then((response) => response.json())
            .then((responseJson) => {
              // alert(JSON.stringify(responseJson))
              // console.log(responseJson.data);
              console.log(responseJson);
              imagesurls.push(responseJson.data)
              // alert(JSON.stringify(responseJson))
              // alert(JSON.stringify(responseJson))
              console.log(responseJson.data+'images urll is '+imagesurls);

              setspinner(false)
               
            })
            .catch((error) => {
              alert(error)
              setspinner(false)
                console.warn(error)
            });
       


















        }




      
      });
    
  };


const requestCameraPermission = async () => {
    
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );
      // If CAMERA Permission is granted
       granted === PermissionsAndroid.RESULTS.GRANTED;
      //  launchCameraAndroid()
      //  captureImage()
              // addEventListener('camera')
              return true;

    } catch (err) {
      console.warn(err);
      return false;
    }
   
};

const requestExternalWritePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        },
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      granted === PermissionsAndroid.RESULTS.GRANTED

        return true;

    } catch (err) {
      console.warn(err);
      alert('Write permission err', err);
    }
    return false;
  }
};

const chooseFile = async() => {
  
  ImageCropPicker.openPicker({
        multiple: true,
        compressImageQuality:0.7
      }).then(images1 => {
        if(images[0] == require('../images/noimage3.jpeg')){
          images.pop();
          setclose(true)
        }
    console.log(JSON.stringify(images1));
        var i ;
        for( i =0; i< images1.length; i++){

          let temp = {} ;
         
          temp.name = images1[i].filename;
          temp.size = images1[i].size;
          temp.type = images1[i].mime;
          temp.url = images1[i].path;
          console.log(images1[i].size);
          images.push(temp)

      var value = new FormData();
      value.append('file',{uri:images1[i].path ,
           name:images1[i].filename,
           type:images1[i].mime
         });

        

         setspinner(true)

          fetch(AppUrlCollection.EXPORT_DETAIL + item.id +'/photos-upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
                'Accept': 'application/json'
            },
            body: value,
                       
        })
            .then((response) => response.json())
            .then((responseJson) => {
              // alert(JSON.stringify(responseJson))
              // console.log(responseJson.data);
              console.log(responseJson);
              imagesurls.push(responseJson.data)
              console.log('images urll is '+imagesurls);

              setspinner(false)
               
            })
            .catch((error) => {
              alert(error)
              setspinner(false)
                console.warn(error)
            });
       
        }      

      });


};

const deleteimage = () =>{
  if(images.length == 1  ){
    setclose(false)
    images.push(require('../images/noimage3.jpeg') )
  }
  // setspinner(true)
  let pos = imgposition;
  console.log('---'+pos);
  let img1 = []
  // alert(imgposition)
  for(var i = 0 ; i< images.length ; i++){
    if(i != pos){
      img1.push(images[i])
      
    }else{
      alert(images[i])
    }
   }
   setimages(img1)

let img2 = []
for(var index = 0 ; index< images2.length ; index++){
  if(index != pos){
    
    if(images2[index].id ){
      img2.push(images2[index])

    }
  }
 }


 
//  value4 = new FormData();
//  value4.append('jhv',img2)

// alert(img1)
//  fetch('http://newsystem.galaxyshipping.tech/webapi/vehicle/delete-image' , {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
//   },
  
//   body: value4
  
 
// })
//   .then((response) =>  response.json())
//   .then((responseJson) => {
//     setspinner(false)
    
//   })
//   .catch((error) => {
//     alert(error)
//     setspinner(false)
//       console.warn(error)
//   });


 setimages2(img2)





}

const callingupdateApi = ()=>{

let array ={};
array.customer_user_id = export_details.customer_user_id
array.booking_number = item.booking_number
array.ar_number = item.ar_number;
array.vessel = item.vessel;
array.container_number = item.container_number;
array.broker_name= item.broker_name;
array.terminal = item.terminal;
array.streamship_line= export_details.streamship_line == null ? null: export_details.streamship_line == '' ? null:  export_details.streamship_line == undefined? '': export_details.streamship_line  ;
array.destination = item.destination;
array.container_type = item.container_type;
array.port_of_discharge= item.port_of_discharge;
array.port_of_loading = item.port_of_loading;
array.consignee = export_details.houstan_custom_cover_letter.consignee;
array.vehicle_ids = export_details.vehicle_ids;
if(imagesurls.length > 0){
  let container_images = imagesurls
  let img = {container_images}
  array.fileurl=img
}

if(images2 != null){
array.container_images = images2
}

// alert(JSON.stringify(array))
  fetch(AppUrlCollection.EXPORT_DETAIL + item.id, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
    },
    
    body: JSON.stringify(array)
    
   
})
    .then((response) =>  response.json())
    .then((responseJson) => {
      setspinner(false)
      AppConstance.showSnackbarMessage(responseJson.message)

      ImageCropPicker.clean().then(() => {
        console.log('removed all tmp images from tmp directory');
      }).catch(e => {
        alert(e);
      });
      
        console.log('export detail ', responseJson)
       
    })
    .catch((error) => {
      alert(error)
      setspinner(false)
        console.warn(error)
    });


  }

  const callingContainerDetailsApi = () =>{

    setspinner(true)
    fetch(AppUrlCollection.EXPORT_DETAIL + "exportId=" +  item.id, {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data',
      'authkey': AppConstance.USER_INFO.USER_TOKEN
    }
   
})
    .then((response) => response.json())
    .then((responseJson) => {

      alert(JSON.stringify(responseJson))
      setexport_details(responseJson.data.export)
      if (responseJson.data.export.exportImages.length > 0 ) {
        // setimg(responseJson.data.vehicle.images)
        setclose(true)
       images.pop()
        for (let index = 0; index < responseJson.data.export.exportImages.length; index++) {
            const element = responseJson.data.export.exportImages[index].thumbnail;
            images.push(responseJson.data.other.export_image+element)
            // const element2 =  responseJson.data.export.exportImages[index];
            // console.log(element);
            // images2.push(element2)
          
        }
        // setimages2(images)
        setspinner(false)


      }else{
        setclose(false)
        setspinner(false)

      }


       
    })
    .catch((error) => {
      alert(error)
      setspinner(false)
        console.warn(error)
    });

}

useEffect(() => {

callingContainerDetailsApi()

    
  return () => {
    
  }
}, [])



return (
   
<SafeAreaView style={{ flex: 1, backgroundColor: 'white', height: deviceHeight, }}>
<Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={{ color: '#FFF'}}
        />
 <ImageBackground source={require('../images/backgroundimage.jpg')} resizeMode='stretch' style={{ width: deviceWidth, height:deviceHeight, position: 'absolute' }} >
 </ImageBackground>
  <Modal
        visible={deletemodalshow}
        animationType='fade'
        transparent={true}
        >
            <View style={{flex:1, justifyContent:'flex-end',backgroundColor:'#0005', height:deviceHeight}}>
                <View style={{bottom:30}}>
           
                <TouchableOpacity 
            onPress={()=> { setdeletemodalshow(false), deleteimage()}}
            style={{alignSelf:'center',width:'85%', backgroundColor:'#E5E7E9',paddingVertical:20, width:'90%',borderRadius:15, marginTop:10}}
            >
              <Text style={{alignSelf:'center',fontSize:18, fontWeight:'400', color:'red'}}>Delete Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=> { setdeletemodalshow(false)}}
            style={{alignSelf:'center',backgroundColor:'white',paddingVertical:20, width:'90%',borderRadius:15, marginTop:10}}
            >
              <Text style={{alignSelf:'center', fontSize:18, fontWeight:'400', }}>Cancel</Text>
            </TouchableOpacity>
                    </View>
            </View>
        </Modal>
      

  <Appbar
                            style={{backgroundColor:AppColors.transplant,
                        flexDirection:'row',
                        width:deviceWidth,
                        justifyContent:'space-between',
                            padding:10,
                            elevation:0,

                        }}
                        >  


                <TouchableOpacity
                style={{justifyContent:'center', }}
                onPress={()=>navigation.goBack()}

                >
                <Ionicons  name='chevron-back' size={25} color='white'/>



                </TouchableOpacity>


                <View style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={{alignSelf:'center',color:'white',fontWeight:'bold', fontSize:20}}>Container</Text>
              </View>

                
                
              <View style={{width:'10%',justifyContent:'center' }}>
            <TouchableOpacity
            onPress={()=> {callingupdateApi()}}
            style={{alignSelf:'center', justifyContent:'center'}}>
            <AntDesign  size={20} style={{alignSelf:'center'}} color='white' name='check'/>
            </TouchableOpacity>
            </View>

      </Appbar>

     
  <Modal
        visible={showimagemodel}
        animationType='fade'
        >
            <View style={{ justifyContent:'center',backgroundColor:'black', height:deviceHeight}}>
                <View style={{backgroundColor:'black'}}>
                <SliderBox 
          images={images}
          sliderBoxHeight={deviceHeight*0.5}
          
          dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  dotStyle={{
    width: 10,
    height: 10,
    marginHorizontal: -4,
    padding: 0,
    margin: 0
  }}
          resizeMethod={'resize'}  
          resizeMode={'cover'}
  circleLoop
  currentImageEmitter={index => {
   }}

         
  paginationBoxStyle={{
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    alignSelf: "center",
  }}
  ImageComponentStyle={{ width: '100%', marginTop: 0}}

        />
        
            <TouchableOpacity 
            onPress={()=> { setshowimagemodel(false)}}
            style={{alignSelf:'center', marginTop:10}}
            >
                <MaterialCommunityIcons color='red'  name='close-circle-outline' size={40}/>
            </TouchableOpacity>
                    </View>
            </View>
        </Modal>
      


<ScrollView style={{width:deviceWidth , marginBottom:40}}>
 


 <View style={{width:deviceWidth}}>

 <SliderBox 
 
          images={images}
          sliderBoxHeight={260}          
          dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  dotStyle={{
    width: 10,
    height: 10,
    marginHorizontal: -4,
    padding: 0,
    margin: 0
  }}
          resizeMethod={'resize'}  
          resizeMode={'cover'}
  circleLoop
  currentImageEmitter={index => { 
    if(index == 0){
      setadd(true)
    }else{
      setadd(false)
    }
    setimgposition(index); 
   }}

          onCurrentImagePressed={index =>
         
            // setshowimagemodel(true)
                        setSliderModel(true)

            
          }
            paginationBoxStyle={{
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    alignSelf: "center",
  }}
  ImageComponentStyle={{borderTopRightRadius:20,borderTopLeftRadius:20, width: '100%', marginTop: 8}}

        />
       

       {close == true ?

     <View style={{marginTop:15,position:'absolute',alignSelf:'flex-end', paddingHorizontal:40, }}>
    <TouchableOpacity
    onPress={()=> {   setdeletemodalshow(true)}}
    style={{alignSelf:'center',borderRadius:5, borderWidth:1, borderColor:AppColors.toolbarColor }}>

     <Ionicons name="close" color={AppColors.toolbarColor}  size={25}  />
  </TouchableOpacity>
       </View>

       :null}

{add == true ?
 <ActionButton position='left' style={{marginLeft:deviceWidth-105,height:'95%', width:'90%',}} size={40} buttonColor="rgba(231,76,60,1)">
 <ActionButton.Item buttonColor='#9b59b6'   size={30}
  onPress={() => {if(Platform.OS == 'ios'){ chooseFile('photo')}else{ selectFile3() }}}
  >
   <Ionicons name="ios-images-outline" size={20} style={styles.actionButtonIcon} />
 </ActionButton.Item>
 <ActionButton.Item buttonColor='#3498db' size={30}
 
 onPress={() => {if(Platform.OS == 'ios'){ TakePhoto('photo')}else{ captureImage() }}}>
 <Ionicons name="ios-camera-outline" size={20} style={styles.actionButtonIcon} />
 </ActionButton.Item>

</ActionButton>
: null }


</View>

 <View style={{flexDirection:'column', justifyContent:'center',backgroundColor:'white',   shadowColor: 'grey',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 5,alignSelf:'center',borderRadius:10,borderWidth:0.2, marginTop:10,paddingHorizontal:10, width:'95%',}} >





<View style={{width:'100%',flexDirection:'column', borderBottomWidth:0.3,paddingVertical:5,borderColor:'#B3B6B7', justifyContent:'space-between'}}>
<Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>AR no:</Text>
<Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.ar_number}</Text>
</View>


<View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5, borderColor:'#B3B6B7', justifyContent:'space-between'}}>
<Text style={{color:'black',paddingVertical:2, fontWeight:'bold',fontSize:14,}}>Container no:</Text>
<Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.container_number}</Text>
</View>

<View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
<Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>Broker Name:</Text>
<Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.broker_name}</Text>
</View>


<View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5, borderColor:'#B3B6B7', justifyContent:'space-between'}}>
<Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>Booking no:</Text>
<Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.booking_number}</Text>
</View>


<View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
<Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>Destination</Text>
<Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.destination}</Text>
</View>




</View>


{/* 
<View style={{flexDirection:'column', justifyContent:'center',backgroundColor:'white',   shadowColor: 'grey',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 5,alignSelf:'center',borderRadius:10,borderWidth:0,marginBottom:15, marginTop:30,paddingHorizontal:10, width:'95%',}} >





<View style={{width:'100%',flexDirection:'column', borderBottomWidth:0.3,paddingVertical:5,borderColor:'#B3B6B7', justifyContent:'space-between'}}>
<Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>AR no:</Text>
<Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.ar_number}</Text>
</View>


<View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5, borderColor:'#B3B6B7', justifyContent:'space-between'}}>
<Text style={{color:'black',paddingVertical:2, fontWeight:'bold',fontSize:14,}}>Container no:</Text>
<Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.container_number}</Text>
</View>

<View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
<Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>Broker Name:</Text>
<Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.broker_name}</Text>
</View>


<View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5, borderColor:'#B3B6B7', justifyContent:'space-between'}}>
<Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>Booking no:</Text>
<Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.booking_number}</Text>
</View>


<View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
<Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>Destination</Text>
<Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{item.destination}</Text>
</View>




</View> */}




</ScrollView>


</SafeAreaView>





  );
};


export default ContainerAview;




const styles = StyleSheet.create({
  actionButtonIcon: {
    alignSelf:'center',
    color:'white'
  },


  })