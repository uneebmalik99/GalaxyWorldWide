// import React,{useState,useEffect, useRef} from 'react';
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
//   Dimensions,
//   Alert,
//   Platform
// } from 'react-native';
// import { Icon} from 'react-native-elements'
// import AppColors from '../Colors/AppColors';
// import AppConstance, { deviceHeight, deviceWidth } from '../constance/AppConstance';
// import AppFonts from '../AppFont/AppFonts';
// import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/dist/Ionicons';
// import AntDesign from 'react-native-vector-icons/dist/AntDesign'; 
// import Entypo from  'react-native-vector-icons/dist/Entypo';
// import { SliderBox } from "react-native-image-slider-box";
// import RNFetchBlob from 'rn-fetch-blob';
// import Snackbar from 'react-native-snackbar';
// import Spinner from 'react-native-loading-spinner-overlay';
// import { TextInput } from 'react-native-gesture-handler';
// import Feather from  'react-native-vector-icons/dist/Feather'
// import AppUrlCollection from '../UrlCollection/AppUrlCollection'
// import { Appbar } from 'react-native-paper';
// import ActionButton from 'react-native-action-button';
// import * as ImagePicker from "react-native-image-picker"
// import ImageCropPicker from 'react-native-image-crop-picker';
// import DocumentPicker from 'react-native-document-picker';
// import DatePicker from 'react-native-datepicker'
// import QRCodeScanner from 'react-native-qrcode-scanner';

// const dummyimages = [
//   require('../images/noimage3.jpeg')      
//  ];




// const AddVehicle = ({route, navigation }) => {
//   const refRBSheet = useRef();
//   // const { item  } = route.params;

//   const [deletemodalshow ,setdeletemodalshow] =useState(false)
//   const [date, setDate] = useState(new Date(1598051730000));
// const [ showimagemodel ,setshowimagemodel] = useState(false)
// const [details , setdetails] = useState()
// const picture = [
//   {
//     label: 'PICTURES'
//   }
//   ]  
//   const [images , setimages] = useState([
    
//   ])
//   const [ close , setclose] = useState(false)
//   const [pickupdatemodal , setpickupdatemodal]= useState(false)
//   const [add , setadd] = useState(true)
//   const [imgposition, setimgposition] = useState(0)
//   const [ vin , setvin] = useState()
//   const [Customerlist , setCustomerlist ] = useState([])
//   const [Filteredcustomer , setFilteredcustomer ] = useState([])
//   const[Search , setSearch]= useState()
//   const [customername , setcustomername] = useState()
//   const [customeruserid , setcustomeruserid] = useState(null)
//   const [location_id ,setlocation_id ] = useState(null)
//   const [location_name, setlocation_name] = useState(null)
//   const [location , setlocation ] = useState(null);
//   const [vehicletype , setvehicletype] =useState(null)
//   const [make , setmake ] = useState(null);
//   const [model , setmodel ] = useState(null);
//   const [color , setcolor ] = useState(null);
//   const [weight , setweight ] = useState(null);
//   const [year , setyear ] = useState(null);
//   const [hatnumber , sethatnumber ] = useState(null);
//   const [licensenumber , setlicensenumber ] = useState(null);
//   const [note2 , setnote2] = useState()
//   const [lotnumber , setlotnumber ] = useState(null);
//   const [containernmber , setcontainernmber] = useState(null)
//   const [status , setstatus ] = useState(null);
//   const [ statusname , setstatusname] = useState(null)
//   const [ loadstatus ,setloadstatus] = useState(null)
//   const [condition , setcondition ] = useState(null);
//   const [damaged , setdamaged ] = useState(null);
//   const [titlenumber , settitlenumber ] = useState(null);
//   const [pictures , setpictures] = useState();
//   const [deliverdate , setdeliverdate ] = useState(null);
//   const [pickupdate , setpickupdate] = useState(null);
//   const [ auctionat , setauctionat] = useState(null)
//   const [note , setnote ] = useState(null);
//   const [checkoption , setcheckoption ] = useState();
//   const [vehicle_features , setvehicle_features]=useState()
//   const [keynote , setkeynote] = useState(null)
//   const [ CDChanger,  setCDChanger]= useState()
//   const [GPSNavigationSystem ,setGPSNavigationSystem]= useState()
//   const [SpareTireJack, setSpareTireJack] = useState('')
//   const [WheelCovers, setWheelCovers] = useState('')
//   const [Radio ,setRadio]= useState('')
//   const [ CDPLAYER ,setCDPLAYER ] = useState();
//   const [ SPEAKER ,setSPEAKER ] = useState('');
//   const [ WHEELCAPS ,setWHEELCAPS] = useState('');
//   const [ MIRROR ,setMIRROR] = useState();
//   const [ OTHERS ,setOTHERS ] = useState('');
//   const [frontwindshiled , setfrontwindshiled ] = useState(null);
//   const [bonnet , setbonnet ] = useState(null);
//   const [grill , setgrill ] = useState(null);
//   const [frontbumper , setfrontbumper ] = useState(null);
//   const [frontheadlight , setfrontheadlight ] = useState(null);
//   const [rearwindshield , setrearwindshield ] = useState(null);
//   const [trunkdoor , settrunkdoor ] = useState(null);
//   const [rearbumper , setrearbumper ] = useState(null);
//   const [rearbumpersupport , setrearbumpersupport ] = useState(null);
//   const [taillamp , settaillamp ] = useState(null);
//   const [frontleftfender , setfrontleftfender ] = useState(null);
//   const [leftfrontdoor , setleftfrontdoor ] = useState(null);
//   const [leftreardoor , setleftreardoor ] = useState(null);
//   const [leftrearfender , setleftrearfender ] = useState(null);
//   const [pillar , setpillar ] = useState(null);
//   const [roof, setroof] =useState(null);
//   const [rightrearfender , setrightrearfender ] = useState(null);
//   const [rightreardoor , setrightreardoor ] = useState(null);
//   const [rightfrontdoor , setrightfrontdoor ] = useState(null);
//   const [frontrightfender , setfrontrightfender ] = useState(null);
//   const [fronttyres , setfronttyres]= useState(null);
//   const Damaged = [
//     {
//       label: 'Yes'
//      },
//      {
//       label: 'NO'
//      },
//     ];
//     const [imagesurls ,setimagesurls ] = useState([])
//     const [ images2 , setimages2] = useState([])
//   const [vehicleconditions , setvehicleconditions] = useState()
//   const [vehicleDetails , setvehicleDetails] = useState([''])
//   const [locationslist , setlocationslist] = useState([])
//   const [locmodal,setlocmodal]= useState(false)
//   const [custmodal,setcustmodal]= useState(false)
//   const [imgpos, setimgpos] = useState(0)
//   const[spinner , setspinner ] = useState(false)
//   const[SliderModel , setSliderModel] = useState(false)
//   const [currentimg, setcurrentimg] = useState('')
//   const [Export, setExport] = useState(false)
//   const [data, setdata] = useState([])
// const [torchMode ,settorchMode] = useState('off')
// const [cameraType ,setcameraType] = useState('back')
// const [barcodemodal , setbarcodemodal] = useState(false)





// // for android camera

// const captureImage = async (type) => {
//   let options = {
    
//     quality: 0.8,
//     videoQuality: 'low',
//     durationLimit: 30, //Video max duration in seconds
//     saveToPhotos: true,
//   };
//   let isCameraPermitted = await requestCameraPermission();
//   let isStoragePermitted = await requestExternalWritePermission();
//   if (isCameraPermitted && isStoragePermitted) {
//     ImagePicker.launchCamera(options, (response) => {
//       console.log('Response = ', response);
//       if (response.didCancel) {
//         // alert('User cancelled camera picker');
//         return;
//       } else if (response.errorCode == 'camera_unavailable') {
//         alert('Camera not available on device');
//         return;
//       } else if (response.errorCode == 'permission') {
//         alert('Permission not satisfied');
//         return;
//       } else if (response.errorCode == 'others') {
//         alert(response.errorMessage);
//         return;
//       }else{

//         // if(images[0] == require('../Images/noimage3.jpeg')){
//         //   images.pop();
//         //   setclose(true)
//         // }
//         let temp = {} ;
//         temp.name = response.assets[0].fileName;
//         temp.size = response.assets[0].fileSize;
//         temp.type = response.assets[0].type;
//         temp.url = response.assets[0].uri;
//         setclose(true)

//         images.push(response.assets[0])
//           // alert(JSON.stringify(temp))
//     var value = new FormData();
//     value.append('file',{uri:response.assets[0].uri,
//          name:response.assets[0].fileName,
//          type:response.assets[0].type
//        });

//        setspinner(true)

//         fetch(AppUrlCollection.VEHICLE_DETAIL + 0 +'/photos-upload', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'multipart/form-data',
//               'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
//               'Accept': 'application/json'
//           },
//           body: value,
                     
//       })
//           .then((response) => response.json())
//           .then((responseJson) => {
//             // alert(JSON.stringify(responseJson))
//             // console.log(responseJson.data);
//             console.log(responseJson);
//             imagesurls.push(responseJson.data)
//             // alert(JSON.stringify(responseJson))
//             // alert(JSON.stringify(responseJson))
//             console.log(responseJson.data+'images urll is '+imagesurls);

//             setspinner(false)
             
//           })
//           .catch((error) => {
//             alert(error)
//             setspinner(false)
//               console.warn(error)
//           });
     


















//       }




//       // console.log('base64 -> ', response.base64);
//       // console.log('uri -> ', response.uri);
//       // console.log('width -> ', response.width);
//       // console.log('height -> ', response.height);
//       // console.log('fileSize -> ', response.fileSize);
//       // console.log('type -> ', response.type);
//       // console.log('fileName -> ', response.fileName);
//       // setFilePath(response);
//     });
//   }
// };
// // for android image pick from library
// const selectFile3 = async () => {
  
//   try {
//     const results = await DocumentPicker.pickMultiple({
//       type: [DocumentPicker.types.images],
      
//       //There can me more options as well find above
//     });

// console.log('-----'+JSON.stringify(results));

// // if(images[0] == require('../Images/noimage3.jpeg')){
// //   images.pop();
// //   setclose(true)
// // }
//     for (const res of results) {
//       setclose(true)

//       //Printing the log realted to the file
//       console.log('res : ' + JSON.stringify(res));
//       console.log('URI : ' + res.uri);
//       console.log('Type : ' + res.type);
      
      
//       console.log('File Name : ' + res.name);
//       console.log('File Size : ' + res.size);
  


//       var i ;
//       // for( i =0; i< images1.length; i++){

        
//         images.push(res)
//         // alert(JSON.stringify(temp))

//     var value = new FormData();
  
//        value.append('file',res);

//        setspinner(true)

//         fetch(AppUrlCollection.VEHICLE_DETAIL + 0 +'/photos-upload', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'multipart/form-data',
//               'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
//               'Accept': 'application/json'
//           },
//           body: value,
                     
//       })
//           .then((response) => response.json())
//           .then((responseJson) => {
//             // alert(JSON.stringify(responseJson))
//             // console.log(responseJson.data);
//             console.log(responseJson);
//             imagesurls.push(responseJson.data)
//             console.log('images urll is '+imagesurls);

//             setspinner(false)
             
//           })
//           .catch((error) => {
//             alert(error)
//             setspinner(false)
//               console.warn(error)
//           });
     
//       // }  
//             // console.log(JSON.stringify(res));
//     }



//   } catch (err) {
//     setspinner(false)

//     //Handling any exception (If any)
//     if (DocumentPicker.isCancel(err)) {
//       //setopener(false)

//       //If user canceled the document selection
//       // alert('Canceled from multiple doc picker');
//     } else {
//      // setopener(false)

//       //For Unknown Error
//       alert('Unknown Error: ' + JSON.stringify(err));
//       throw err;
//     }
//   }


// };

// const TakePhoto = async (type) => {
//   let options = {
    
//     quality: 0.8,
//     videoQuality: 'low',
//     durationLimit: 30, //Video max duration in seconds
//     saveToPhotos: true,
//   };
//   // let isCameraPermitted = await requestCameraPermission();
//   // let isStoragePermitted = await requestExternalWritePermission();
//   // if (isCameraPermitted && isStoragePermitted) {
//     ImagePicker.launchCamera(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         // alert('User cancelled camera picker');
//         return;
//       } else if (response.errorCode == 'camera_unavailable') {
//         alert('Camera not available on device');
//         return;
//       } else if (response.errorCode == 'permission') {
//         alert('Permission not satisfied');
//         return;
//       } else if (response.errorCode == 'others') {
//         alert(response.errorMessage);
//         return;
//       }else{
//         // if(images[0] == require('../Images/noimage3.jpeg')){
//         //   images.pop();
//         //   setclose(true)
//         // }
//         setclose(true)


//         let temp = {} ;
//         temp.name = response.assets[0].fileName;
//         temp.size = response.assets[0].fileSize;
//         temp.type = response.assets[0].type;
//         temp.url = response.assets[0].uri;

//         images.push(response.assets[0])
//           // alert(JSON.stringify(temp))
//     var value = new FormData();
//     value.append('file',{uri:response.assets[0].uri,
//          name:response.assets[0].fileName,
//          type:response.assets[0].type
//        });

//        setspinner(false)

//       //   fetch(AppUrlCollection.VEHICLE_DETAIL + 0 +'/photos-upload', {
//       //     method: 'POST',
//       //     headers: {
//       //         'Content-Type': 'multipart/form-data',
//       //         'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
//       //         'Accept': 'application/json'
//       //     },
//       //     body: value,
                     
//       // })
//       //     .then((response) => response.json())
//       //     .then((responseJson) => {
//       //       // alert(JSON.stringify(responseJson))
//       //       // console.log(responseJson.data);
//       //       console.log(responseJson);
//       //       imagesurls.push(responseJson.data)
//       //       // alert(JSON.stringify(responseJson))
//       //       // alert(JSON.stringify(responseJson))
//       //       console.log(responseJson.data+'images urll is '+imagesurls);

//       //       setspinner(false)
             
//       //     })
//       //     .catch((error) => {
//       //       alert(error)
//       //       setspinner(false)
//       //         console.warn(error)
//       //     });
     



//       }




//       // console.log('base64 -> ', response.base64);
//       // console.log('uri -> ', response.uri);
//       // console.log('width -> ', response.width);
//       // console.log('height -> ', response.height);
//       // console.log('fileSize -> ', response.fileSize);
//       // console.log('type -> ', response.type);
//       // console.log('fileName -> ', response.fileName);
//       // setFilePath(response);
//     });
  
// };

// const requestCameraPermission = async () => {
  
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: 'Camera Permission',
//         message: 'App needs camera permission',
//       },
//     );
//     // If CAMERA Permission is granted
//      granted === PermissionsAndroid.RESULTS.GRANTED;
//     //  launchCameraAndroid()
//     //  captureImage()
//             // addEventListener('camera')
//             return true;

//   } catch (err) {
//     console.warn(err);
//     return false;
//   }
 
// };

// const requestExternalWritePermission = async () => {
// if (Platform.OS === 'android') {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       {
//         title: 'External Storage Write Permission',
//         message: 'App needs write permission',
//       },
//     );
//     // If WRITE_EXTERNAL_STORAGE Permission is granted
//     granted === PermissionsAndroid.RESULTS.GRANTED

//       return true;

//   } catch (err) {
//     console.warn(err);
//     alert('Write permission err', err);
//   }
//   return false;
// }
// };

// const searchFilterFunction = (text) => {
//   if (text) {

//     const newData = Customerlist.filter(
//       function (item) {
        
//         const itemData =  item.customer_name
//           ?  item.customer_name.toUpperCase()
//           :''.toUpperCase();

         
//         const textData = text.toUpperCase();

//         if(itemData.indexOf(textData) > -1){
//           return  itemData.indexOf(textData) > -1;
//         }
//     });

//     setCustomerlist(newData)
//   //   setFilteredDataSource(newData);

//   //   setSearch(text);
//     console.log('text is '+text);
//   } else {
//     // Inserted text is blank
//     setCustomerlist(Filteredcustomer)
//     console.log('blank');
//   //   this.setState({vehicleList: vehicleList2})
//   //   setFilteredDataSource(data);
//   //   setSearch(text);
//   }
// };

// const deleteimage = () =>{
//   // setspinner(true)

  
//   let pos = imgposition;
//   console.log('---'+pos);
//   let img1 = []
//   // alert(imgposition)
//   for(var i = 0 ; i< images.length ; i++){
//     if(i != pos){
//       img1.push(images[i])
     
      
//     }
    
//    }
//    setimages(img1)
//    if(img1.length == 0){
//      setclose(false)
//      setimagesurls([])
//    }

// let img2 = []
// for(var index = 0 ; index< images2.length ; index++){
//   if(index != pos){
    
//     if(images2[index].id ){
//       img2.push(images2[index])

//     }
//   }
//  }

//  setimages2(img2)


// }

// const chooseFile = async() => {

//   ImageCropPicker.openPicker({
//         multiple: true,
//         compressImageQuality:0.7
//       }).then(images1 => {
//         // if(images[0] == require('../Images/noimage3.jpeg')){
//         //   images.pop();
//         //   setclose(true)
//         // }
//         setclose(true)

//         var i ;
//         for( i =0; i< images1.length; i++){

//           let temp = {} ;
//           temp.name = images1[i].filename;
//           temp.size = images1[i].size;
//           temp.type = images1[i].mime;
//           temp.url = images1[i].path;

//           images.push(temp)

//       var value = new FormData();
//       value.append('file',{uri:images1[i].path ,
//            name:images1[i].filename,
//            type:images1[i].mime
//          });

//          setspinner(true)

//           fetch(AppUrlCollection.VEHICLE_DETAIL + 0 +'/photos-upload', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
//                 'Accept': 'application/json'
//             },
//             body: value,
                       
//         })
//             .then((response) => response.json())
//             .then((responseJson) => {
//               // alert(JSON.stringify(responseJson))
//               // console.log(responseJson.data);
//               console.log(responseJson);
//               imagesurls.push(responseJson.data)
//               // alert(JSON.stringify(responseJson))
//               console.log('images urll is '+imagesurls);

//               setspinner(false)
               
//             })
//             .catch((error) => {
//               alert(error)
//               setspinner(false)
//                 console.warn(error)
//             });
       
//         }      

//       });

// };

// const searchingCustomer = (text) => {
//   if (text) {
//     console.log('text is '+text);
// console.log('-----==---'+Customerlist.length);
//     const newData = Customerlist.filter(
//       function (item) {

//         const itemData = item.text
//           ? item.text.toUpperCase()
//           : ''.toUpperCase();

//           console.log('--'+itemData);
//       const textData = text.toUpperCase();
//       // itemData.indexOf(textData) > -1  
//       return itemData.indexOf(textData) > -1;

//       //  if(itemData.indexOf(textData)  -1){
//       //   return  itemData.indexOf(textData)  -1;
//       // }             
//     });
//     setFilteredcustomer(newData);
//     setSearch(text);
//     console.log('text is '+text);
//   } else {
//     // Inserted text is blank
//     console.log('blank');
//     // Update FilteredDataSource with masterDataSource
//     setFilteredcustomer(data);
//     setSearch(text);
//   }
// };

// const callinglocation =() =>{
//   setspinner(true)

// let url = AppUrlCollection.LOCATION
//   fetch(url, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
//     },
// })
//     .then((response) => response.json())
//     .then((responseJson) => {
//         // this.setState({ isLoading: false })
//       setspinner(false)
//       setlocationslist(responseJson.data)
//         console.log('Response data viw :: ', responseJson)
//         console.log('detail --------------'+details);

       
//     })
//     .catch((error) => {
//       setspinner(false)

//         console.warn(error)
//     }); 

// }

// const barcodeReceived =(e)=> {
//   console.log('Barcode: ' + e.data);
//   console.log('Type: ' + e.type);
// }

// const callingCustomer =() =>{
//   setspinner(true)
//   let url = AppUrlCollection.BASE_URL+'customers'
//   fetch(url, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
//       },
// })
//     .then((response) => response.json())
//     .then((responseJson) => {
//         // this.setState({ isLoading: false })
//       setspinner(false)
//       setCustomerlist(responseJson.data)
//       setFilteredcustomer(responseJson.data)
//       // setlocationslist(responseJson.data)
//         console.log('Response data viw :: ', responseJson)
//         console.log('detail --------------'+details);

       
//     })
//     .catch((error) => {
//       setspinner(false)

//         console.warn(error)
//     }); 

// }

// const callingContainerApi = () => {
//   setspinner(true)
//   var url = AppUrlCollection.VEHICLE_DETAIL + '?id='+ item.id; 
//   // if (isFirstTimeCaling) {
//   //   setspinner(false)
//   //   setisFooterLoading(false)
//   //     // this.setState({ isLoading: true, isFooterLoading: false })
//   //     url = AppUrlCollection.VEHILE_LIST
//   // } else {
//   //   setspinner(false)
//   //   setisFooterLoading(true)
//   //     // this.setState({ isLoading: false, isFooterLoading: true })
//   //     url = AppUrlCollection.VEHILE_LIST 
//   // }
//   fetch(url, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
//         },
//   })
//       .then((response) => response.json())
//       .then((responseJson) => {
//           // this.setState({ isLoading: false })
//         setspinner(false)
//           console.log('Response data viw :: ', responseJson)
//           if (responseJson.status == AppConstance.API_SUCESSCODE) {
//               imageBasePath = responseJson.data.other.vehicle_image
              
//               // if (responseJson.data.vehicle ) {
//                 let data1= responseJson.data.vehicle;
//                 setdata(responseJson.data.vehicle)

//                 sethatnumber(data1.hat_number)

//                 setyear(data1.year)
//                 setcolor(data1.color)
//                 setmodel(data1.model)
//                 setmake(data1.make)
//                 setweight(data1.weight)

//                 setlicensenumber(data1.license_number)
//                 setlotnumber(data1.lot_number)

//                 setcontainernmber(data1.containernmber)

//                 let towingRequest = responseJson.data.vehicle.towingRequest;
//                 // console.log('--=-=-=-=-=-=-'+responseJson.data.vehicle.towingRequest);

//                 settitlenumber(towingRequest.title_number)
//                 setdeliverdate(towingRequest.deliver_date)
//                 setpickupdate(towingRequest.pickup_date)
//                 setpictures(towingRequest.pictures)
//                 setdamaged(towingRequest.damaged)
//                 setcondition(towingRequest.condition)

//                 setstatus(data1.status)


//                 switch(data1.location) {
 
//                   case '1':
//                     setlocation_name('LA')
//                       break;
//                       case '2':
//                         setlocation_name('GA')
//                           break;
                      
       
//                           case '3':
//                             setlocation_name('NY')
//                               break;
                          
           
//                               case '4':
//                                 setlocation_name('TX')
//                                   break;
                              
               
//                                   case '8':
//                                     setlocation_name('TORONTO')
//                                       break;
                                  
                   
//                                       case '9':
//                                         setlocation_name('MONTREAL')
//                                           break;
                                      
                       
//                                           case '10':
//                                             setlocation_name('HALIFAX')
//                                               break;
                                          
                           
//                                               case '11':
//                                                 setlocation_name('EDMONTON')
//                                                   break;
                                              
//                                                   case '12':
//                                                     setlocation_name('CALGARY')
//                                                       break;
                                                  
                                   
//                                                       case '13':
//                                                         setlocation_name('Afghanistan')
//                                                           break;
                                                      
                                       
//                                                           case '15':
//                                                             setlocation_name('Turkamanistan')
//                                                               break;
                                                          
                                           
//                                                               case '19':
//                                                                 setlocation_name('VANCOUVER')
//                                                                   break;
//                                                                   case '20':
//                                                                     setlocation_name('MANITOBA')
//                                                                       break;
//                                                                       case '21':
//                                                                         setlocation_name('WA')
//                                                                           break;
                                                              
  

//                   default:
//                     // alert("NUMBER NOT FOUND");
//                     setlocation_name('Please Select Location')
                
//                   }


//                 let condition = responseJson.data.vehicle.vehicleConditions



//                 for ( var i=0 ; i<condition.length ; i++ ){
//                   let element = condition[i].condition.name
                

//                 switch(element) {
 
//                   case 'FRONT WINDSHILED':
//                     setfrontwindshiled(condition[i].value)
//                       break;
                  
//                   case 'BONNET':
//                     setbonnet(condition[i].value)
                  
//                     break;
             
//                   case 'GRILL':
//                     setgrill(condition[i].value)
//                     break;
             
//                   case 'FRONT BUMPER':
//                     setfrontbumper(condition[i].value)
//                     break;
             
//                     case 'FROTN HEAD LIGHT':
//                     setfrontheadlight(condition[i].value)
//                     break;
                  
//                   case 'REAR WINDSHIELD':
//                     setrearwindshield(condition[i].value)
//                     break

//                     case 'TRUNK DOOR':
//                     settrunkdoor(condition[i].value)
//                     break;
                  
//                   case 'REAR BUMPER':
//                     setrearbumper(condition[i].value)
//                     break

//                     case 'REAR BUMPER SUPPORT':
//                     setrearbumpersupport(condition[i].value)
//                     break;
                  
//                   case 'TAIL LAMP':
//                     settaillamp(condition[i].value)
//                     break

//                     case 'FRONT LEFT FENDER':
//                     setfrontleftfender(condition[i].value)
//                     break;
                  
//                   case 'LEFT FRONT DOOR':
//                     setleftfrontdoor(condition[i].value)
//                     break


//                     case 'LEFT REAR DOOR':
//                     setleftreardoor(condition[i].value)
//                     break;
                  
//                   case 'LEFT REAR FENDER':
//                     setleftrearfender(condition[i].value)
//                     break;







//                     case 'PILLAR':
//                       setpillar(condition[i].value)
//                       break;
                    
//                     case 'ROOF':
//                       setroof(condition[i].value)
//                       break
  
//                       case 'RIGHT REAR FENDER':
//                       setrightrearfender(condition[i].value)
//                       break;
                    
//                     case 'RIGHT REAR DOOR':
//                       setrightreardoor(condition[i].value)
//                       break
  
  
//                       case 'RIGHT FRONT DOOR':
//                       setrightfrontdoor(condition[i].value)
//                       break;
                    
//                     case 'FRONT RIGHT FENDER':
//                       setfrontrightfender(condition[i].value)
//                       break;


//                   default:
//                     // alert("NUMBER NOT FOUND");
                
//                   }
             
//                 }

                
                
//                   // if (isFirstTimeCaling) {
//                   //   setvehicleList(responseJson.data.vehicleList)
//                   //   setnoMoreDataFound(false)
//                   //   setisFooterLoading(false)
//                   //   setspinner(false)
//                   //     // this.setState({ vehicleList: responseJson.data.vehicleList, noMoreDataFound: false, isFooterLoading: false })
//                   // } else {
                    
//                   //   setvehicleList(old =>[...old, ...responseJson.data.vehicleList])
//                   //   setdata(old => [...old, ...data]);

//                   //   setnoMoreDataFound(false)
//                   //   setisFooterLoading(false)
//                   //     // this.setState({ vehicleList: this.state.vehicleList.concat(responseJson.data.vehicleList), noMoreDataFound: false, isFooterLoading: false })
//                   // }
//               } else {
//                 setdata(responseJson.data.vehicle)

//                   // if (isFirstTimeCaling) {
//                   //   setvehicleList([])
//                   //   setnoMoreDataFound(true);
//                   //   setisFooterLoading(false)
//                   //     // this.setState({ vehicleList: [], noMoreDataFound: true, isFooterLoading: false })
//                   // } else {
//                   //   setisFooterLoading(false)
//                   // setnoMoreDataFound(true)
//                   //     // this.setState({ isFooterLoading: false, noMoreDataFound: true })
//                   // }

//               }
//           // } else {
//           //     AppConstance.showSnackbarMessage(responseJson.message)
//           // }
//       })
//       .catch((error) => {
//           console.warn(error)
//       });
// }

// useEffect(() => {

// callinglocation()
// callingCustomer()

// const willFocusSubscription = navigation.addListener('focus', () => {
//   setclose(false)
//   if(images.length == 1){
// images.pop()
// images.push(require('../images/noimage3.jpeg'));

//   }
//   setimagesurls([])
//   setvin(null);
//   setcustomeruserid(null);
//   setcustomername(null);
//   setlocation(null)
//   setlocation_name(null)
//   setlocation_id(null)
//   sethatnumber(null)
//   setvehicletype(null)
//   setyear(null)
//   setcolor(null)
//   setmodel(null)
//   setmake(null)
//   setweight(null)
//   setlicensenumber(null)
//   setlotnumber(null)
//   setloadstatus(null)
//   setcontainernmber(null)
//   setkeynote(null)
//   setauctionat(null)
//   setnote(null)
//   setstatusname(null)
//   setstatus(null)
//   setcondition(null)
//   setdamaged(null)
//   settitlenumber(null)
//   setdeliverdate(null)
//   setpickupdate(null)
//   setCDChanger(null)
//   setGPSNavigationSystem(null)
//   setSpareTireJack(null)
//   setWheelCovers(null)
//   setRadio(null)
//   setCDPLAYER(null)
//   setMIRROR(null)
//   setSPEAKER(null)
//   setOTHERS(null)

//   setfrontwindshiled(null)
//   setbonnet(null)
//   setgrill(null)
//   setfrontbumper(null)
//   setfrontheadlight(null)
//   setrearwindshield(null)
//   settrunkdoor(null)
//   setrearbumper(null)
//   setrearbumpersupport(null)
//   settaillamp(null)
//   setfrontleftfender(null)
//   setleftfrontdoor(null)
//   setleftreardoor(null)
//   setleftrearfender(null)
//   setpillar(null)
//   setroof(null)
//   setrightrearfender(null)
//   setrightreardoor(null)
//   setrightfrontdoor(null)
//   setfrontrightfender(null)
//   setfronttyres(null)





// });

// return willFocusSubscription;

// }, [])

// const renderlist = ({item}) =>{

//   return(
//     <TouchableOpacity 
//     onPress={()=>{setlocation_id(item.status); setlocation_name(item.name); setlocmodal(false) }}
//     style={{marginVertical:5,justifyContent:'space-around', flexDirection:'row'}}>
//       <Text>{item.id}</Text>
// <Text>{item.name}</Text>

//     </TouchableOpacity>
  
  
//   )
  
//    }

// const renderCustomerlist = ({item}) =>{

//     let c ;
//     if(customername == item.customer_name){
//       c = 1
//     }
//     return(
      
// <TouchableOpacity 
// onPress={()=> { setcustmodal(false); setcustomername(item.customer_name), setcustomeruserid(item.user_id) }}
// style={{marginVertical:5,borderWidth:0.5,flexDirection:'row', borderColor:'grey', borderRadius:10,paddingVertical:12,paddingHorizontal:10,}}>

// {c == null ? 
//   <Ionicons name='ios-radio-button-off-sharp'  color='grey' style={{alignSelf:'center'}}  size={20} />:
//   <Ionicons name='ios-radio-button-on'  color={AppColors.Signincolor} style={{alignSelf:'center'}}  size={20} />
// }


//   <Text style={{alignSelf:'center',color:AppColors.Signincolor, marginLeft:5,}}>{item.customer_name}</Text>
// {/* <Text>sfsdfn</Text> */}
// </TouchableOpacity>    
    
//     )
    
//      }  

//  const callingupdateApi = ()=>{
// // setspinner(true)

// // form - validation 
// if (vin == null) {
//   alert("Please Enter VIN Number"); 
//   setspinner(false)

// }else if (customername == null && customeruserid == null) {
  
//   alert('Please Select Customer Name'); 
//   setspinner(false)

//   } 
//   else if (location_id == null && location_name == null) {
//         alert("Please Select location"); 
//         setspinner(false)

//     }
//     // else if (hatnumber  {
//     //   alert("Please Enter Hat Number"); 
//     //   setspinner(false)

//     // }
//     // else if (vehicletype.trim().length == 0 ) {
//     //   alert("Please Enter Vehicle Type"); 
//     //   setspinner(false)

//     //   }
//       else if (year == null ) {
//         alert("Please Enter Vehicle year"); 
//         setspinner(false)

//       }
//       // else if (color.trim().length  == 0) {
//       //   alert("Please Enter Vehicle color"); 
//       //   setspinner(false)

//       // }
//       else if (model == null) {
//         alert("Please Enter Vehicle model"); 
//         setspinner(false)

//       }else if (make == null) {
//         alert("Please Enter Vehicle make"); 
//         setspinner(false)

//       }
//     //   else if (weight.trim().length == 0) {
//     //     alert("Please Enter Vehicle weight"); 
//     //     setspinner(false)

//     // } 
//     else if (lotnumber == null) {
//       alert("Please Select lot Number"); 
//       setspinner(false)

//     }
//     else if (status == null && statusname == null)   {
//       alert("Please Select Status"); 
//       setspinner(false)

//     }
//     else {

//   let f = [];
//   if(CDChanger == 3){
//     f.push(CDChanger)
//   }
//   if(GPSNavigationSystem == 4){
//     f.push(GPSNavigationSystem)
//   }
//   if(SpareTireJack == 5){
//     f.push(SpareTireJack)
//   }
//   if(WheelCovers == 6){
//     f.push(WheelCovers)
//   }
//   if(Radio == 7){
//     f.push(Radio)
//   }
//   if(CDPLAYER == 8){
//     f.push(CDPLAYER)
//   }
//   if(MIRROR == 10){
//     f.push(MIRROR)
//   }
//   if(SPEAKER == 11){
//     f.push(SPEAKER)
//   }
//   if(OTHERS == 12){
//     f.push(OTHERS)
//   }
        


//   let h = [] ;
  
//   // for(var i =0; i < vehicleconditions.length ; i++){
   

//     if(frontwindshiled != null){
     
//       h[2]  = frontwindshiled
//     }

//     if(bonnet != null){
     
//       h[3]  = bonnet
//     }

//     if(grill != null){
     
//       h[4]  = grill
//     }

//     if(frontbumper != null){
    
//       h[5]  = frontbumper
//     }

//     if(frontheadlight != null){
     
//       h[6]  = frontheadlight
//     }

//     if(rearwindshield != null){
      
//       h[7]  = rearwindshield
//     }

//     if(trunkdoor != null){
      
//       h[8]  = trunkdoor
//     }

//     if(rearbumper != null){
//       h[9]  = rearbumper
//     }

//     if(rearbumpersupport != null){
//       h[10]  = rearbumpersupport
//     }
//   if(taillamp != null){
//       h[11]  = taillamp
//     }

//     if(frontleftfender != null){
//       h[12]  = frontleftfender
//     }

//     if(leftfrontdoor != null){
//       h[13]  = leftfrontdoor
//     }


//     if(leftreardoor != null){
//       h[14]  = leftreardoor
//     }

//     if(leftrearfender != null){
//       h[15]  = leftrearfender
//     }

//     if(pillar != null){
//       h[16]  = pillar
//     }

//     if(roof != null){
//       h[17]  = roof
//     }

//     if(rightrearfender != null){
//       h[18]  = rightrearfender
//     }

//     if(rightreardoor != null){
//       h[20]  = rightreardoor
//     }
//     if(rightfrontdoor != null){
//       h[21]  = rightfrontdoor
//     }
//     if(frontrightfender != null){
//       h[22]  = frontrightfender
//     }
//     if(fronttyres != null){
//       h[23]  = fronttyres
//     }

//     // h[3]  = bonnet
//     // h[4]  = grill
//     // h[5]  = frontbumper
//     // h[6]  = frontheadlight
//     // h[7]  = rearwindshield
//     // h[8]  = trunkdoor
//     // h[9]  = rearbumper
//     // h[10] = rearbumpersupport
//     // h[11] = taillamp
//     // h[12] = frontleftfender
//     // h[13] = leftfrontdoor
//     // h[14] = leftreardoor
//     // h[15] = leftrearfender
//     // h[16] = pillar
//     // h[17] = roof
//     // h[18] = rightrearfender
//     // h[20] = rightreardoor
//     // h[21] = rightfrontdoor
//     // h[22] = frontrightfender
//     // h[23] = fronttyres
//   // }


//       let array ={};


//   if(imagesurls.length > 0){
//     let photos = imagesurls
//     let img = {photos}
//     array.fileUrls=img
//   }
// array.hat_number = hatnumber,
// array.vehicle_type= vehicletype,
// array.year = year,
// array.color=  color,
// array.model= model,
// array.make= make,
// array.vin= vin,
// array.weight= weight,
// array.license_number = licensenumber,
// array.lot_number = lotnumber,
// array.loading_type = loadstatus,
// array.container_number= containernmber,

// array.customer_user_id=  customeruserid,
// array.customer_name=  customername,
// array.location_id = location_id,
// array.location = location,
// array.key_note =keynote,
// array.auction_at = auctionat,
// array.note = note,

// array.status_name= statusname,
// array.status=  status,

// array.condition = condition,
// array.damaged = damaged,

// array.title_number=  titlenumber,

// array.deliver_date = deliverdate,
// array.pickup_date=  pickupdate,

// array.vehicle_features = f,
// array.vehicle_conditions = h,

// array.towing_request_id = 0,
//   array.towed_from=  0,
//   array.towing_request_date = 0,
//   array.towed_amount = 0,

 
//   alert(JSON.stringify(array))

     

//         fetch(AppUrlCollection.VEHILE_LIST, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//               'Accept': 'application/json',
//               'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
//           },
          
//           body: JSON.stringify(array)
      
         
//       })
//           .then((response) =>  response.json())
//           .then((responseJson) => {
//             setspinner(false)
//             if(responseJson.message == 'The given data was invalid.'){
//               alert(JSON.stringify(responseJson.errors))
//             }else{
//               AppConstance.showSnackbarMessage(responseJson.message)

//             }
//             ImageCropPicker.clean().then(() => {
//               console.log('removed all tmp images from tmp directory');
//             }).catch(e => {
//               alert(e);
//             });
            
//               console.log('export detail ', responseJson)
             
//           })
//           .catch((error) => {
//             alert(error)
//             setspinner(false)
//               console.warn(error)
//           });
      
//         }

//       }

// return (
   
//     <SafeAreaView style={{ flex: 1, backgroundColor: 'white', height: deviceHeight, }}>

// <Spinner
//           visible={spinner}
//           textContent={'Loading...'}
//           textStyle={{ color: '#FFF'}}
//         />
    
//        <Appbar
//                             style={{backgroundColor:AppColors.Headercolor,
//                         flexDirection:'row',
//                         width:deviceWidth,
//                         backgroundColor:AppColors.Headercolor,
//                         justifyContent:'space-between',
//                             padding:10,
//                             elevation:0,

//                         }}
//                         >  


//                 <TouchableOpacity
//                 style={{justifyContent:'center', }}
//                 onPress={()=> navigation.goBack()}

//                 >
//                 <Ionicons  name='chevron-back' size={25} color='grey'/>



//                 </TouchableOpacity>


//                 <View style={{width:'80%',justifyContent:'center', }}>
//                 <Text style={{alignSelf:'center',color:'black',fontWeight:'bold', fontSize:20}}>Add Vehicle</Text>
//                 </View>

                
                
//                 <View style={{width:'10%',justifyContent:'center' }}>
//               <TouchableOpacity style={{alignSelf:'center', justifyContent:'center'}}
//               onPress={()=>{
//                 callingupdateApi()
//               }}
//               >
//               <AntDesign  size={20} style={{alignSelf:'center'}} color='black' name='check'/>
//               </TouchableOpacity>
//               </View>

//       </Appbar>

//         <Modal
//           transparent={true}
//           animationType={'slide'}
//           visible={custmodal}
//           onRequestClose={() => {
//             console.log('close modal');
//           }}>
//           <SafeAreaView
//             style={{
//               flex: 1,
//               width:deviceWidth,
//               justifyContent:'flex-start',
//               paddingVertical: 10,
//               height:deviceHeight,
//               backgroundColor:AppColors.Signincolor,
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}>

// {/* <ImageBackground source={require('../images/backgroundimage.jpg')} resizeMode='stretch' style={{ width: deviceWidth, height:deviceHeight, position: 'absolute' }} >
// </ImageBackground> */}

//                  <View
// style={{width:deviceWidth,flexDirection:'row', paddingHorizontal:13,paddingVertical:15, height:55}}>

// <TouchableOpacity
// style={{justifyContent:'center',width:'15%', }}
// onPress={()=> setcustmodal(false) }

// >
// <Text style={{color:'white', fontSize:16}}>Cancel</Text>


// </TouchableOpacity>

// <View style={{width:'70%',justifyContent:'center', }}>
// <Text style={{alignSelf:'center',color:'white',fontWeight:'bold', fontSize:20}}>Customer</Text>
// </View>

// <View style={{width:'10%',justifyContent:'center' }}>
// <TouchableOpacity style={{alignSelf:'center', justifyContent:'center'}}>
// {/* <AntDesign  size={20} style={{alignSelf:'center'}} color='white' name='check'/> */}
// </TouchableOpacity>
// </View>
// </View>



// <View style={{marginHorizontal:10,justifyContent:'center',paddingHorizontal:5, borderRadius:10,backgroundColor:'white', flexDirection:'row'}}>
// <Feather style={{alignSelf:'center',}} size={18} color='grey'  name='search'/>

//   <TextInput style={{backgroundColor:'white',width:'90%',height:40,paddingHorizontal:10, borderRadius:20}}
//   onChangeText={text => searchFilterFunction(text)}
//   onSubmitEditing={(Text) => searchFilterFunction(Text)}
//   // this.callingVehicleContainerService()
//   placeholder="Search Customer"
//   placeholderTextColor='grey'
  
//     underlineColorAndroid="transparent"
//   ></TextInput>
  

// </View>

//             <View
//               style={{
//                 width: '100%',
//                 marginTop:12,
//                 height:deviceHeight,
//                 flexDirection: 'column',
//                 backgroundColor:'white',
//                 borderTopRightRadius:10,
//                 borderTopLeftRadius:10,
//               }}>
    
//     <FlatList
//          contentContainerStyle={{ paddingHorizontal:1, paddingVertical:5,}}
         
//       data={Customerlist}
//      renderItem={renderCustomerlist}
//      keyExtractor={(item,index) => index.toString()}
    

//           />


//           <View style={{height:180}}>


//             </View>
//     {/* <RadioButtonRN
//   data={datacustomer}
//   color="#2c9dd1"
//   textStyle={{color:'grey'}}
//   box={true}
//   boxDeactiveBgColor='white'
//   textColor='grey'
//   selectedBtn={(e) => console.log(e)}
// /> */}
//         {/* <FlatList
//          contentContainerStyle={{ paddingHorizontal:20, paddingVertical:5,}}
         
//       data={locationslist}
//      renderItem={rendercustomerlist}
//      keyExtractor={(item,index) => index.toString()}
    

//           /> */}

           

            
           
//             </View>
         
//           </SafeAreaView>
//         </Modal>

//         <Modal
//           transparent={true}
//           animationType={'none'}
//           visible={locmodal}
//           onRequestClose={() => {
//             console.log('close modal');
//           }}>
//           <View
//             style={{
//               flex: 1,
//               justifyContent: 'center',
//               paddingVertical: 10,
//               height:deviceHeight,
//               backgroundColor:'#0005',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}>
//             <View
//               style={{
//                 width: '65%',
//                 flexDirection: 'column',
//                 backgroundColor:'white',
//                 borderRadius:15,
//               }}>
    
//            <View style={{borderBottomWidth:0.3,paddingVertical:7, borderColor:'#D0D3D4'}}>
//              <Text style={{alignSelf:'center',fontSize:18, fontWeight:'bold', paddingVertical:10,}}>Location</Text>
//            </View>

//         <FlatList
//          contentContainerStyle={{ paddingHorizontal:20, paddingVertical:15,}}
         
//       data={locationslist}
//      renderItem={renderlist}
//      keyExtractor={(item,index) => index.toString()}
    

//           />

//               <View style={{flexDirection:'row',borderTopWidth:0.5,borderColor:'grey',  width:'100%'}}>
//                 <TouchableOpacity style={{width:'50%',height:40,alignSelf:'center',justifyContent:'center', borderRightWidth:0.5,borderColor:'grey'}}
//                 onPress={()=>{setlocmodal(false)}}
//                 >
//                   <Text style={{alignSelf:'center', fontSize:15}}>Cancel</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity  style={{width:'50%', height:40, justifyContent:'center', alignSelf:'center'}}
//                                 onPress={()=>{setlocmodal(false)}}

//                 >
//                   <Text style={{fontWeight:'bold',fontSize:15, alignSelf:'center'}}>OK</Text>
//                 </TouchableOpacity>
//               </View>

//               {/* <View
//                 style={{
//                   paddingVertical: 10,
//                   width: '100%',
//                   justifyContent: 'center',
//                   backgroundColor: 'white',
//                   height: 50,
//                   flexDirection:'row',
//                 }}>
//                 <TouchableOpacity
//                   // onPress={() => this.setState({error: false})}
//                   style={{
//                     borderRadius: 10,
//                     alignSelf: 'center',
//                     backgroundColor: 'red',
//                     paddingVertical: 4,
//                     paddingHorizontal: 4,
//                   }}>
//                   <Text
//                     style={{
//                       paddingVertical: 3,
//                       fontSize: 13,
//                       textAlign: 'center',
//                       color: 'white',
//                     }}>
//                     {' '}
//                     CLOSE{' '}
//                   </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   // onPress={() => this.setState({error: false})}
//                   style={{
//                     borderRadius: 10,
//                     marginLeft:10,
//                     alignSelf: 'center',
//                     backgroundColor: 'red',
//                     paddingVertical: 4,
//                     paddingHorizontal: 4,
//                   }}>
//                   <Text
//                     style={{
//                       paddingVertical: 3,
//                       fontSize: 13,
//                       textAlign: 'center',
//                       color: 'white',
//                     }}>
//                     {' '}
//                     CLOSE{' '}
//                   </Text>
//                 </TouchableOpacity>
             
//               </View> */}
           
//             </View>
         
//           </View>
//         </Modal>


//         <Modal
//           transparent={true}
//           animationType={'none'}
//           visible={barcodemodal}
//           onRequestClose={() => {
//             console.log('close modal');
//           }}>
//           <View
//             style={{
//               flex: 1,
//               justifyContent: 'center',
//               paddingVertical: 10,
//               height:deviceHeight,
//               backgroundColor:'white',
//               flexDirection: 'column',
//               alignItems: 'center',
//               width:deviceWidth
//             }}>
            
//             <View style={{width:'100%', paddingHorizontal:30, marginTop:Platform.OS == 'ios' ? 40:10}}>

//             <TouchableOpacity
//             onPress={()=> {setbarcodemodal(false)}}
//             style={{alignSelf:'flex-end'}}>
//             <MaterialCommunityIcons color='red'  name='close-circle-outline' size={30}/>
//             </TouchableOpacity>
//             </View>

//     <QRCodeScanner
//         onRead={(e)=> {setvin(e.data); setbarcodemodal(false)}}
//         // flashMode={RNCamera.Constants.FlashMode.torch}
//         topContent={
//           <Text style={styles.centerText}>
//           SCAN VEHICLE VIN NUMBER
//           </Text>
//         }
//         bottomContent={
//           <TouchableOpacity
//         onPress={()=>  setbarcodemodal(false)} 
//           style={styles.buttonTouchable}>
//             <Text style={styles.buttonText}>CANCEL</Text>
//           </TouchableOpacity>
//         }
//         />
        
            
//             </View>
        
        
//         </Modal>

//         <Modal
//         visible={showimagemodel}
//         animationType='fade'
//         >
//             <View style={{ justifyContent:'center',backgroundColor:'black', height:deviceHeight}}>
//                 <View style={{backgroundColor:'black'}}>
//                 <SliderBox 
//           images={images.length == 0 ?dummyimages:images}
//           sliderBoxHeight={deviceHeight*0.5}
          
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
//   currentImageEmitter={index => {
//    }}

         
//   paginationBoxStyle={{
//     alignItems: "center",
//     alignSelf: "center",
//     justifyContent: "center",
//     alignSelf: "center",
//   }}
//   ImageComponentStyle={{ width: '100%', marginTop: 0}}

//         />
        
//             <TouchableOpacity 
//             onPress={()=> { setshowimagemodel(false)}}
//             style={{alignSelf:'center', marginTop:10}}
//             >
//                 <MaterialCommunityIcons color='red'  name='close-circle-outline' size={40}/>
//             </TouchableOpacity>
//                     </View>
//             </View>
//         </Modal>
      
//         <Modal
//         visible={deletemodalshow}
//         animationType='fade'
//         transparent={true}
//         >
//             <View style={{flex:1, justifyContent:'flex-end',backgroundColor:'#0005', height:deviceHeight}}>
//                 <View style={{bottom:30}}>
           
//                 <TouchableOpacity 
//             onPress={()=> { setdeletemodalshow(false), deleteimage()}}
//             style={{alignSelf:'center',width:'85%', backgroundColor:'#E5E7E9',paddingVertical:20, width:'90%',borderRadius:15, marginTop:10}}
//             >
//               <Text style={{alignSelf:'center',fontSize:18, fontWeight:'400', color:'red'}}>Delete Photo</Text>
//             </TouchableOpacity>

//             <TouchableOpacity 
//             onPress={()=> { setdeletemodalshow(false)}}
//             style={{alignSelf:'center',backgroundColor:'white',paddingVertical:20, width:'90%',borderRadius:15, marginTop:10}}
//             >
//               <Text style={{alignSelf:'center', fontSize:18, fontWeight:'400', }}>Cancel</Text>
//             </TouchableOpacity>
//                     </View>
//             </View>
//         </Modal>
     

//     <ScrollView style={{width:deviceWidth }}>

//     <View>
 

//  <SliderBox 
//           images={images.length == 0 ?dummyimages:images}
//           sliderBoxHeight={260}
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
//   currentImageEmitter={index => { 
//     if(index == 0){
//       setadd(true)
//     }else{
//       setadd(false)
//     }
//     setimgposition(index); 
//    }}

//           onCurrentImagePressed={index =>
//           //setcurrentimg()
//             // console.warn(`image ${index} pressed`)
//             setshowimagemodel(true)
//           }
//   paginationBoxStyle={{
//     alignItems: "center",
//     alignSelf: "center",
//     justifyContent: "center",
//     alignSelf: "center",
//   }}
//   ImageComponentStyle={{ width: '100%', marginTop: 0}}

//         />
        
//         {close == true ?

// <View style={{marginTop:15,position:'absolute',alignSelf:'flex-end', paddingHorizontal:40, }}>
// <TouchableOpacity
// onPress={()=> {   setdeletemodalshow(true)}}
// style={{alignSelf:'center',borderRadius:5, borderWidth:1, borderColor:AppColors.toolbarColor }}>

// <Ionicons name="close" color={AppColors.toolbarColor}  size={25}  />
// </TouchableOpacity>
//   </View>

//   :null}
//   {/* <TouchableOpacity 
//           onPress={() => refRBSheet.current.open()}
//           style={{backgroundColor:'grey' , borderRadius: 50,height:'100%',width:'100%',  justifyContent:'center', }}>
//   <Text style={{color:'white', alignSelf:'center'}}>+</Text>

//   </TouchableOpacity> */}



// {add == true ?
//  <ActionButton position='left' style={{marginLeft:deviceWidth-105,height:'95%', width:'90%',}} size={40} buttonColor="rgba(231,76,60,1)">
//  <ActionButton.Item buttonColor='#9b59b6'   size={30}
//   onPress={() => {if(Platform.OS == 'ios'){ chooseFile('photo')}else{ selectFile3() }}}
//   >
//    <Ionicons name="ios-images-outline" size={20} style={styles.actionButtonIcon} />
//  </ActionButton.Item>
//  <ActionButton.Item buttonColor='#3498db' size={30}
 
//  onPress={() => {if(Platform.OS == 'ios'){ TakePhoto('photo')}else{ captureImage() }}}>
//  <Ionicons name="ios-camera-outline" size={20} style={styles.actionButtonIcon} />
//  </ActionButton.Item>

// </ActionButton>
// : null }



 




// </View>

  


//     <View style={{width:'100%',flexDirection:'row',marginTop:2, paddingVertical:Platform.OS == 'ios' ? 10:  0, paddingHorizontal:10, backgroundColor:'#2C3E50', justifyContent:'center', alignSelf:'center'}}>
//               <View style={{width:'20%', alignSelf:'center'}}>
//               <Text style={{color:'white', alignSelf:'center'}}>VIN #:</Text>
//               </View>

//               <View style={{width:'50%'}}>
//                 <TextInput 
//                 style={{color:'white'}}
//                 placeholderTextColor='#D0D3D4'
//                 placeholder={'Enter VIN or scan'}
//                 value={vin}
//                 onChangeText={(text)=> {setvin(text)}}
//                 />
//               </View>
//               <View style={{alignSelf:'center', width:'20%'}}>
//                 <TouchableOpacity 
//                 onPress={()=> {setbarcodemodal(true)}}
//                 style={{alignSelf:'flex-end'}}
//                 >
//                   <MaterialIcons name='qr-code-scanner' color='white' size={18} />
//                   </TouchableOpacity>
//               </View>

//             </View>

        
//     <View style={{flexDirection:'column',justifyContent:'center',backgroundColor:'#F2F3F4',   shadowColor: 'grey',
//         shadowOffset: { width: 3, height: 3 },
//         shadowOpacity: 0.6,
//         shadowRadius: 1,
//         elevation: 5,alignSelf:'center',borderRadius:1,borderWidth:0.2,marginBottom:15, marginTop:10,paddingHorizontal:10, width:'95%',}} >





//     <View style={{width:'100%',flexDirection:'column', borderBottomWidth:0.3,paddingVertical:5,borderColor:'#B3B6B7', justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>CUSTOMER </Text>
//     <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between'}}
//     onPress={()=>{
//       setcustmodal(true)
//     }}
//     >
//     <Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{customername == null ? 'Select Customer' : customername}</Text>
//     <AntDesign  name='caretdown' color='grey'/>
//     </TouchableOpacity></View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5, borderColor:'#B3B6B7', justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2, fontWeight:'bold',fontSize:14,}}>LOCATION</Text>
//     <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between'}}
//     onPress={()=>{
//       setlocmodal(true)
//     }}
//     >
//     <Text style={{color:'grey',paddingVertical:2, fontSize:14,}}>{location_name == null ? 'Select Location' : location_name}</Text>
//     <AntDesign  name='caretdown' color='grey'/>
//     </TouchableOpacity>
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>HAT NUMBER</Text>
//     <TextInput  
//     placeholder='Enter Hat Number'
//     placeholderTextColor='grey'
//     value={hatnumber}
//     onChangeText={(text)=> {sethatnumber(text)}} 
//     />
//     </View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>VEHICLE TYPE</Text>
//     <TextInput  
//     placeholder='Enter Vehicle type'
//     placeholderTextColor='grey'
//     value={vehicletype}
//     onChangeText = {(Text)=> {setvehicletype(Text)}}
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>YEAR </Text>
//     <TextInput  
//     placeholder='Enter Vehicle year'
//     placeholderTextColor='grey'
//     value={year}
//     onChangeText = {(Text)=> {setyear(Text)}}


//     />
//     </View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>COLOR </Text>
//     <TextInput  
//     placeholder='Enter Vehicle Color'
//     placeholderTextColor='grey'
//     value={color}
//     onChangeText = {(Text)=> {setcolor(Text)}}

//     />
//     </View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5, borderColor:'#B3B6B7', justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>MODEL </Text>
//     <TextInput  
//     placeholder='Enter Vehicle Model'
//     placeholderTextColor='grey'
//     value={model}
//     onChangeText = {(Text)=> {setmodel(Text)}}

//     />
//     </View>



//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>MAKE</Text>
//     <TextInput 
//    placeholder='Enter Vehicle Make'
//     value={make}
//     placeholderTextColor='grey'
//     onChangeText = {(Text)=> {setmake(Text)}}

//     />
//     </View>





//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>WEIGHT</Text>
//     <TextInput  
//     value={weight}
//     placeholder='Enter Vehicle weight'
//     placeholderTextColor='grey'
//     onChangeText = {(Text)=> {setweight(Text)}}

//     />
//     </View>



//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LICENSE NUMBER</Text>
//     <TextInput  
//     value={licensenumber}
//     placeholder='Enter Vehicle license number'

//     placeholderTextColor='grey'
//     onChangeText = {(Text)=> {setlicensenumber(Text)}}

//     />
//     </View>






//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LOT NUMBER</Text>
//     <TextInput  
//     value={lotnumber}
//     placeholder='Enter Vehicle lot number'

//     placeholderTextColor='grey'
//     onChangeText = {(Text)=> {setlotnumber(Text)}}

//     />
//     </View>



//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LOAD STATUS</Text>
//     <TextInput  
//     value={loadstatus}
//     placeholder='Enter Vehicle load status'
//     placeholderTextColor='grey'
//     onChangeText={(text)=> {setloadstatus(text)}}
//     />
//     </View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>CONTAINER NUMBER</Text>
//     <TextInput  
//     value={containernmber}
//     placeholder='Enter Vehicle container number'
//     placeholderTextColor='grey'
//     onChangeText={(text)=> {setcontainernmber(text)}}

//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>KEY NOTE</Text>
//     <TextInput  
//     value={keynote}
//     placeholder='Enter Vehicle keynote'

//     placeholderTextColor='grey'
//     onChangeText={(text)=> {setkeynote(text)}}

//     />
//     </View>

//     {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>PREPAREDBY</Text>
//     <TextInput  
//     placeholder={lotnumber}
//     placeholderTextColor='grey'
//     onChangeText={(text)=> {setlotnumber(text)}}

//     />
//     </View> */}



//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>AUCTION AT</Text>
//     <TextInput  
//     value={auctionat}
//     placeholder='Enter Vehicle Auction at'
//     placeholderTextColor='grey'
//     onChangeText={(text)=> {setauctionat(text)}}

//     />
//     </View>

//     {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>VCR</Text>
//     <TextInput  
//     placeholder={vcr != null ? vcr : '' }
//     placeholderTextColor='grey'
//         onChangeText={(text)=> {setvcr(text)}}

//     />
//     </View> */}

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>NOTE</Text>
//     <TextInput  
//     value={note}
//     placeholder='Enter Vehicle note'
//     placeholderTextColor='grey'
//     onChangeText={(text)=> {setnote(text)}}
//     />
//     </View>



//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>STATUS</Text>
//     {/* <RadioButtonRN
//       data={datacustomer}
//       color="#2c9dd1"
//       box={false}
//       boxDeactiveBgColor='white'
//       textColor='grey'
//       selectedBtn={(e) => console.log(e)}
//     /> */}


//     <View style={{flexDirection:'row', marginVertical:10,}}>

//     <View style={{flexDirection:'column', marginLeft:5,   }}>
//       <TouchableOpacity
      
//       onPress={()=>{setstatus('1') , setstatusname('On Hand')}}
//       >

//     <Text style={{fontWeight:'500'}}>ON HAND</Text>
//     </TouchableOpacity >

//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{setstatus('2'), setstatusname('Manifest')}}
//     >

//     <Text style={{fontWeight:'500'}}>MANIFEST</Text>
//     </TouchableOpacity>


//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{setstatus('3') , setstatusname('Car on the way')}}
//     >

//     <Text style={{fontWeight:'500'}}>ON THE WAY</Text>
//     </TouchableOpacity>

//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{setstatus('4') , setstatusname('Shipped')}}
//     >

//     <Text style={{fontWeight:'500'}}>SHIPPED</Text>
//     </TouchableOpacity>


//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{setstatus('6') , setstatusname('Arrived')}}
//     >

//     <Text style={{fontWeight:'500'}}>ARRIVED</Text>
//     </TouchableOpacity>

//     {/* <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{setstatus('7')}}
//     >

//     <Text style={{fontWeight:'500'}}>Handed Over</Text>
//     </TouchableOpacity> */}

//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{setstatus('5'), setstatusname('Picked Up')}}
//     >

//     <Text style={{fontWeight:'500'}}>PICKED UP</Text>
//     </TouchableOpacity>

   

//     </View>

//     {/* <QRCodeScanner
//         onRead={()=> {}}
//         // flashMode={RNCamera.Constants.FlashMode.torch}
//         topContent={
//           <Text style={styles.centerText}>
//             Go to{' '}
//             <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
//             your computer and scan the QR code.
//           </Text>
//         }
//         bottomContent={
//           <TouchableOpacity style={styles.buttonTouchable}>
//             <Text style={styles.buttonText}>OK. Got it!</Text>
//           </TouchableOpacity>
//         }
//         /> */}
//     <View style={{flexDirection:'column',  marginLeft:10, width:'60%' }}>
      
//       <TouchableOpacity 
//       onPress={()=>{setstatus(1)}}
//       >
//     {status == 1 ? 
//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <AntDesign name='check' color='transparent' size={20}
//     />}
//     </TouchableOpacity>

//     <TouchableOpacity
//     style={{marginTop:5,}}

//       onPress={()=>{setstatus(2)}}
//     >
//     {status == 2 ? 

//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <AntDesign name='check' color='transparent' size={20}
//     />}
//     </TouchableOpacity>



//     <TouchableOpacity
//     style={{marginTop:5,}}

//       onPress={()=>{setstatus(3) }}
//     >
//     {status == 3 ? 

//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <AntDesign name='check' color='transparent' size={20}
//     /> 

//     }
//     </TouchableOpacity>


//     <TouchableOpacity
//     style={{marginTop:5,}}

//       onPress={()=>{setstatus(4) }}
//     >
//     {status == 4 ? 

//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <AntDesign name='check' color='transparent' size={20}
//     />}
//     </TouchableOpacity>

//     <TouchableOpacity
//     style={{marginTop:8,}}

//       onPress={()=>{setstatus(6) }}
//     >
//     {status == 6 ? 

//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <AntDesign name='check' color='transparent' size={20}
//     />}
//     </TouchableOpacity>

//     {/* <TouchableOpacity
//     style={{marginTop:8}}

//       onPress={()=>{setstatus(7)}}
//     >
//     {status == 7 ? 

//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <AntDesign name='check' color='transparent' size={20}
//     />}
//     </TouchableOpacity> */}


//     <TouchableOpacity
//     style={{marginTop:5,}}

//       onPress={()=>{setstatus(5)}}
//     >
//     {status == 5 ? 

//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <AntDesign name='check' color='transparent' size={20}
//     />}
//     </TouchableOpacity>

//     {/* <TouchableOpacity
//     style={{marginTop:7,}}

//       onPress={()=>{setstatus('15')}}
//     >
  
//     </TouchableOpacity>  */}
//     {/*
//     <TouchableOpacity
//     style={{marginTop:10,backgroundColor:'yellow'}}

//       onPress={()=>{setstatus('10')}}
//     >
//     {status == '10' ? 

//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <AntDesign name='check' color='transparent' size={20}
//     />}
//     </TouchableOpacity>



//     <TouchableOpacity
//     style={{marginTop:10,backgroundColor:'grey'}}

//       onPress={()=>{setstatus('11')}}
//     >
//     {status == '11' ? 

//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <AntDesign name='check' color='transparent' size={20}
//     />}
//     </TouchableOpacity>


//     <TouchableOpacity
//     style={{marginTop:10,}}

//       onPress={()=>{setstatus('12')}}
//     >
//     {status == '12' ? 

//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <AntDesign name='check' color='transparent' size={20}
//     />}
//     </TouchableOpacity>


//     <TouchableOpacity
//     style={{marginTop:10,}}

//       onPress={()=>{setstatus('15')}}
//     >
//     {status == '15' ? 

//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <AntDesign name='check' color='transparent' size={20}
//     />}
//     </TouchableOpacity> */}


//     </View>


//     </View>

//     </View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>CONDITION</Text>
//     <View style={{flexDirection:'row', marginVertical:10,}}>

//     <View style={{flexDirection:'column', marginLeft:5,   }}>
//       <TouchableOpacity
      
//       onPress={()=>{setcondition('0')}}
//       >

//     <Text style={{fontWeight:'500'}}>NON-OP</Text>
//     </TouchableOpacity >

//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{setcondition('1')}}
//     >

//     <Text style={{fontWeight:'500'}}>OPERABLE</Text>
//     </TouchableOpacity>

//     </View>


//     <View style={{flexDirection:'column', marginLeft:10, width:'60%' }}>
      
//       <TouchableOpacity 
//       onPress={()=>{setcondition('0')}}
//       >
//     {condition == '0' ? 
//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <Text style={{alignSelf:'center' ,fontWeight:'500'}}></Text>
//     }
//     </TouchableOpacity>

//     <TouchableOpacity
//     style={{marginTop:8,}}

//       onPress={()=>{setcondition('1')}}
//     >
//     {condition == '1' ? 

//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <Text style={{alignSelf:'center' ,fontWeight:'500'}}></Text>
//     }
//     </TouchableOpacity>

//     </View>


//     </View>

//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>DAMAGED</Text>

//     <View style={{flexDirection:'row', marginVertical:10,}}>

//     <View style={{flexDirection:'column',   width:'12%' }}>
//       <TouchableOpacity
      
//       onPress={()=>{setdamaged('1')}}
//       >

//     <Text style={{alignSelf:'center' ,fontWeight:'500'}}>YES</Text>
//     </TouchableOpacity >

//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{setdamaged('0')}}
//     >

//     <Text style={{alignSelf:'center' ,fontWeight:'500'}}>NO</Text>
//     </TouchableOpacity>

//     </View>


//     <View style={{flexDirection:'column',  width:'60%' }}>
      
//       <TouchableOpacity 
//       onPress={()=>{setdamaged('1')}}
//       >
//     {damaged == '1' ? 
//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <Text style={{alignSelf:'center' ,fontWeight:'500'}}></Text>
//     }
//     </TouchableOpacity>

//     <TouchableOpacity
//     style={{marginTop:8,}}

//       onPress={()=>{setdamaged('0')}}
//     >
//     {damaged == '0' ? 

//     <AntDesign name='check' color='#1a9bef' size={20} /> :
//     <Text style={{alignSelf:'center' ,fontWeight:'500'}}></Text>
//     }
//     </TouchableOpacity>

//     </View>


//     </View>


//     {/* <RadioButton.Group onValueChange={newValue => setdamaged(newValue)} value={damaged}>

//           <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
//           <Text style={{alignSelf:'center' ,fontWeight:'500'}}>Yes</Text>

//           <RadioButton value='1' color='#1a9bef'/>

//           </View>
//           <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
//           <Text style={{alignSelf:'center',marginRight:5, fontWeight:'500'}}>No</Text>

//           <RadioButton value='0'  color="#1a9bef" />

//           </View>
//         </RadioButton.Group> */}

//     {/* <RadioButtonRN
//       data={Damaged}
//       color="#2c9dd1"
//       box={false}
//       boxDeactiveBgColor='white'
//       textColor='grey'
//       selectedBtn={(e) => console.log(e)}
//     /> */}
//     </View>


//     {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <RadioButtonRN
//       data={datacustomer}
//       color="#2c9dd1"
//       box={false}
//       boxDeactiveBgColor='white'
//       textColor='grey'
//       selectedBtn={(e) => console.log(e)}
//     />
//     </View> */}

//     {/* <View style={{width:'100%',backgroundColor:'red', flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <RadioButton
//             value='1'
//             status={ picture == '1' ? 'checked' : 'unchecked' }
//             onPress={() => setpictures('1')}
//           />
//     </View> */}

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>TITLE NUMBER</Text>
//     <TextInput  
//     value={titlenumber}
//     placeholder='Enter Vehicle title number'
//     placeholderTextColor='grey'
//     onChangeText={(text)=> {settitlenumber(text)}}

//     />
//     </View>


  

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>DELIVER DATE</Text>
    

//             <View 
            
//             style={{width:'95%',flexDirection:'row',  justifyContent:'space-between'}}>
//             <Text style={{alignSelf:'center'}}  >{deliverdate == null? 'Select deliver date': deliverdate} </Text>

//     <DatePicker
//         style={{width: 20}}
//         date={deliverdate}
//         mode="date"
//         placeholder="select date"
//         format="YYYY-MM-DD"
//         hideText={false}
//         confirmBtnText="Confirm"
//         cancelBtnText="Cancel"
//         customStyles={{
//           dateIcon: {
//             position: 'absolute',
//             left: 0,
//             top: 2,
//             marginLeft: 0
//           },
//           dateInput: {
//             marginLeft: 36,
//             borderWidth:0,
//           }
//           // ... You can check the source to find the other keys.
//         }}
//         onDateChange={(date) => { setdeliverdate(date)}}
//       />


//               </View>
  

//     </View>



//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>PICKUP DATE</Text>
//     {/* <DatePicker
//               style={{width: 200,
//         marginTop: 20,}}
//               date={date} // Initial date from state
//               mode="datetime" // The enum of date, datetime and time
//               placeholder="select date"
//               format="DD-MM-YYYY"
//               minDate="2016-05-01"
//               maxDate="2025-06-01"
//               confirmBtnText="Confirm"
//               cancelBtnText="Cancel"
//               customStyles={{
//                 dateIcon: {
//                   //display: 'none',
//                   position: 'absolute',
//                   left: 0,
//                   top: 1,
//                   marginLeft: 0,
//                 },
//                 dateInput: {
//                   marginLeft: 0,
//                 },
//               }}
//               onDateChange={(date) => {
//                 setDate(date);
//               }}
//             /> */}

//             <View 
            
//             style={{width:'95%',flexDirection:'row',  justifyContent:'space-between'}}>
//             <Text style={{alignSelf:'center'}}  >{pickupdate == null? 'Select pickup date':pickupdate}</Text>

//     <DatePicker
//         style={{width: 20}}
//         date={pickupdate}
//         mode="date"
//         placeholder="select date"
//         format="YYYY-MM-DD"
//         hideText={false}
//         confirmBtnText="Confirm"
//         cancelBtnText="Cancel"
//         customStyles={{
//           dateIcon: {
//             position: 'absolute',
//             left: 0,
//             top: 2,
//             marginLeft: 0
//           },
//           dateInput: {
//             marginLeft: 36,
//             borderWidth:0,
//           }
//           // ... You can check the source to find the other keys.
//         }}
//         onDateChange={(date) => { setpickupdate(date)}}
//       />


//               </View>
  
//     {/* {pickupdatemodal && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={'date'}
          
//           onChange={(date)=> { setpickupdate(date)}}
//         />
        
//     )} */}

//     </View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>CHECK OPTIONS INCLUDED ON THE ..</Text>
//     <View style={{flexDirection:'row', marginVertical:10,}}>

//     <View style={{flexDirection:'column',  marginLeft:10, width:'10%' }}>
      
//       <TouchableOpacity 
//       onPress={()=>{ CDChanger == 3 ? setCDChanger('') :setCDChanger(3)}}
//       >
//     {CDChanger == 3 ? 
//     <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
//     <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
//     />}
//     </TouchableOpacity>

//     <TouchableOpacity
//     style={{marginTop:Platform.OS == 'ios'? 5:10,}}

//     onPress={()=>{ GPSNavigationSystem == 4 ? setGPSNavigationSystem(''):setGPSNavigationSystem(4)}}
//     >
//     {GPSNavigationSystem == 4 ? 

//     <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
//     <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
//     />}
//     </TouchableOpacity>



//     <TouchableOpacity
//     style={{marginTop:Platform.OS == 'ios'? 5:10,}}

//     onPress={()=>{SpareTireJack == 5 ? setSpareTireJack(''):setSpareTireJack(5)}}
//     >
//     {SpareTireJack == 5 ? 

//     <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
//     <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
//     /> 

//     }
//     </TouchableOpacity>


//     <TouchableOpacity
//     style={{marginTop:Platform.OS == 'ios'? 5:10,}}

//     onPress={()=>{ WheelCovers == 6 ? setWheelCovers('') : setWheelCovers(6)}}
//     >
//     {WheelCovers == 6 ? 

//     <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
//     <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
//     />}
//     </TouchableOpacity>

//     <TouchableOpacity
//     style={{marginTop:Platform.OS == 'ios'? 5:10,}}

//     onPress={()=>{Radio == 7 ? setRadio(''):setRadio(7) }}
//     >
//     {Radio == 7 ? 

//     <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
//     <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
//     />}
//     </TouchableOpacity>




//     <TouchableOpacity
//     style={{marginTop:Platform.OS == 'ios'? 5:10,}}

//     onPress={()=>{CDPLAYER == 8 ? setCDPLAYER(''):setCDPLAYER(8) }}
//     >
//     {CDPLAYER == 8 ? 

//     <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
//     <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
//     />}
//     </TouchableOpacity>

//     <TouchableOpacity
//     style={{marginTop:Platform.OS == 'ios'? 5:10,}}

//     onPress={()=>{MIRROR == 10 ? setMIRROR(''):setMIRROR(10) }}
//     >
//     {MIRROR == 10 ? 

//     <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
//     <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
//     />}
//     </TouchableOpacity>

//     <TouchableOpacity
//     style={{marginTop:Platform.OS == 'ios'? 5:10,}}

//     onPress={()=>{SPEAKER == 11 ? setSPEAKER(''):setSPEAKER(11) }}
//     >
//     {SPEAKER == 11 ? 

//     <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
//     <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
//     />}
//     </TouchableOpacity>





//     <TouchableOpacity
//     style={{marginTop:Platform.OS == 'ios'? 5:10,}}

//     onPress={()=>{OTHERS == 12 ? setOTHERS(''):setOTHERS(12)}}
//     >
//     {OTHERS == 12 ? 

//     <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
//     <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
//     />}
//     </TouchableOpacity> 

//     </View>

//     <View style={{flexDirection:'column', marginLeft:5,   }}>
      
//     <TouchableOpacity
   
//       onPress={()=>{ CDChanger == 3 ? setCDChanger(''):setCDChanger(3)}}
//     >

//     <Text style={{fontWeight:'500'}}>CD Changer</Text>
//     </TouchableOpacity>


   
//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{GPSNavigationSystem == 4 ? setGPSNavigationSystem(''):setGPSNavigationSystem(4)}}
//     >

//     <Text style={{fontWeight:'500'}}>GPS Navigation System</Text>
//     </TouchableOpacity>







//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{SpareTireJack == 5 ? setSpareTireJack(''):setSpareTireJack(5)}}
//     >

//     <Text style={{fontWeight:'500'}}>Spare Tire/Jack</Text>
//     </TouchableOpacity>

    


//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{WheelCovers == 6 ? setWheelCovers(''):setWheelCovers(6)}}
//     >

//     <Text style={{fontWeight:'500'}}>Wheel Covers</Text>
//     </TouchableOpacity>


//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{Radio ==7 ?  setRadio(''):setRadio(7)}}
//     >

//     <Text style={{fontWeight:'500'}}>Radio</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{CDPLAYER == 8 ? setCDPLAYER(''):setCDPLAYER(8)}}
//     >

//     <Text style={{fontWeight:'500'}}>CD Player</Text>
//     </TouchableOpacity>


//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{MIRROR == 10 ? setMIRROR(''):setMIRROR(10) }}
//     >

//     <Text style={{fontWeight:'500'}}>MIRROR</Text>
//     </TouchableOpacity>




    

//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{SPEAKER == 11 ? setSPEAKER(''):setSPEAKER(11)}}
//     >

//     <Text style={{fontWeight:'500'}}>Speaker</Text>
//     </TouchableOpacity>

//     <TouchableOpacity
//     style={{marginTop:10,}}
//       onPress={()=>{OTHERS == 12 ? setOTHERS(''):setOTHERS(12)}}
//     >

//     <Text style={{fontWeight:'500'}}>OTHERS</Text>
//     </TouchableOpacity>




//     </View>




//     </View>

//     </View>





//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:8,borderColor:'#B3B6B7',  justifyContent:'center'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold',alignSelf:'center', fontSize:14,}}>CONDITION OF VEHICLE</Text>

//     </View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>FRONT WINDSHILED</Text>
//     <TextInput  
//       onChangeText={text =>{setfrontwindshiled(text) }}
//     // onSubmitEditing={(text)=> {setfrontwindshiled(text) }}
//     placeholder='Enter Front Wind Shiled'

//     value={frontwindshiled}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>BONNET</Text>
//     <TextInput  
//       onChangeText={text =>  setbonnet(text)}
//       placeholder='Enter Bonnet'

//     value={bonnet}
//     placeholderTextColor='grey'
//     />
//     </View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>GRILL</Text>
//     <TextInput  
//       onChangeText={text =>  setgrill(text)}
//       placeholder='Enter Grill'

//     value={grill}
//     placeholderTextColor='grey'
//     />
//     </View>



//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>FRONT BUMPER</Text>
//     <TextInput  
//       onChangeText={text => setfrontbumper(text) }
//       placeholder='Enter Front Bumper'

//     value={frontbumper}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>FRONT HEAD LIGHT</Text>
//     <TextInput  
//       onChangeText={text =>  setfrontheadlight(text)}
//       placeholder='Enter Front Head Light'

//     value={frontheadlight}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>REAR WINDSHIELD</Text>
//     <TextInput  
//       onChangeText={text =>  setrearwindshield(text)}
//       placeholder='Enter Rear Wind Shield'

//     value={rearwindshield}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>TRUNK DOOR</Text>
//     <TextInput  
//       onChangeText={text =>settrunkdoor(text) }
//       placeholder='Enter Trunk Door'

//     value={trunkdoor}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>REAR BUMPER</Text>
//     <TextInput  
//       onChangeText={text => setrearbumper(text)}
//       placeholder='Enter Rear Bumper'

//     value={rearbumper}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>REAR BUMPER SUPPORT</Text>
//     <TextInput  
//       onChangeText={text => setrearbumpersupport(text) }
//       placeholder='Enter Rear Bmper Support'

//     value={rearbumpersupport}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>TAIL LAMP</Text>
//     <TextInput  
//       onChangeText={text =>  settaillamp(text)}
//       placeholder='Enter Tail Lamp'

//     value={taillamp}
//     placeholderTextColor='grey'
//     />
//     </View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>FRONT LEFT FENDER</Text>
//     <TextInput  
//       onChangeText={text =>  setfrontleftfender(text)}
//       placeholder='Enter Front Left Fender'

//     value={frontleftfender}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LEFT FRONT DOOR</Text>
//     <TextInput  
//       onChangeText={text =>setleftfrontdoor(text) }
//       placeholder='Enter Left Front Door'

//     value={leftfrontdoor}
//     placeholderTextColor='grey'
//     />
//     </View>




//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LEFT REAR DOOR</Text>
//     <TextInput  
//       onChangeText={text => setleftreardoor(text) }
//       placeholder='Enter Left Rear Door'

//     value={leftreardoor}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LEFT REAR FENDER</Text>
//     <TextInput  
//       onChangeText={text => setleftrearfender(text)}
//       placeholder='Enter Left Rear Fender'

//     value={leftrearfender}
//     placeholderTextColor='grey'
//     />
//     </View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>PILLAR</Text>
//     <TextInput  
//       onChangeText={text => setpillar(text)}
//       placeholder='Enter Pillar'

//     value={pillar}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>ROOF</Text>
//     <TextInput  
//       onChangeText={text => setroof(text) }
//       placeholder='Enter Roof'

//     value={roof}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>RIGHT REAR FENDER</Text>
//     <TextInput  
//       onChangeText={text => setrightrearfender(text)}
//       placeholder='Enter Right Rear Fender'

//     value={rightrearfender}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>RIGHT REAR DOOR</Text>
//     <TextInput  
//       onChangeText={text => setrightreardoor(text)}
//       placeholder='Enter Right Rear Door'

//     value={rightreardoor}
//     placeholderTextColor='grey'
//     />
//     </View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>RIGHT FRONT DOOR</Text>
//     <TextInput  
//       onChangeText={text =>setrightfrontdoor(text) }
//       placeholder='Enter Right Front Door'

//     value={rightfrontdoor}
//     placeholderTextColor='grey'
//     />
//     </View>

//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>FRONT RIGHT FENDER</Text>
//     <TextInput  
//       onChangeText={text => setfrontrightfender(text)}
//       placeholder='Enter Front Right Fender'

//     value={frontrightfender}
//     placeholderTextColor='grey'
//     />
//     </View>


//     <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
//     <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>FRONT TYRES</Text>
//     <TextInput  
//       onChangeText={text => setfronttyres(text)}
//     value={fronttyres}
//     placeholder='Enter Front Tyres'
//     placeholderTextColor='grey'
//     />
//     </View>





//     </View>

//     </ScrollView>


//     </SafeAreaView>


//   );
// };


// export default AddVehicle;


// const styles = StyleSheet.create({
//   actionButtonIcon: {
//     alignSelf:'center',
//     color:'white'
//   },

//   textBold: {
//     fontWeight: '500',
//     color: '#000'
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'red'
//   },
//   buttonTouchable: {
//     paddingVertical:10,
//     paddingHorizontal:22,
//     textAlign:'center',
//     marginTop:Platform.OS == 'ios' ? 5:80,
//     borderWidth:1,
//     borderRadius:8,
//     borderColor:'red'
//   },
//   centerText: {
    
//     fontSize: 18,
//     marginTop:0,
//     color: '#777'
//   },

//   })






























import React, { useState, useEffect, useRef } from 'react';
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
  Alert,
  Platform
} from 'react-native';
import { Icon } from 'react-native-elements'
import AppColors from '../Colors/AppColors';
import AppConstance, { deviceHeight, deviceWidth } from '../constance/AppConstance';
import AppFonts from '../AppFont/AppFonts';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { SliderBox } from "react-native-image-slider-box";
import RNFetchBlob from 'rn-fetch-blob';
import Snackbar from 'react-native-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/dist/Feather'
import AppUrlCollection from '../UrlCollection/AppUrlCollection'
import { Appbar } from 'react-native-paper';
import ActionButton from 'react-native-action-button';
import * as ImagePicker from "react-native-image-picker"
import ImageCropPicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import DatePicker from 'react-native-datepicker'
import QRCodeScanner from 'react-native-qrcode-scanner';

const dummyimages = [
  require('../images/noimage3.jpeg')
];




const AddVehicle = ({ route, navigation }) => {
  const refRBSheet = useRef();
  // const { item  } = route.params;

  const [deletemodalshow, setdeletemodalshow] = useState(false)
  const [date, setDate] = useState(new Date(1598051730000));
  const [showimagemodel, setshowimagemodel] = useState(false)
  const [details, setdetails] = useState()
  const picture = [
    {
      label: 'PICTURES'
    }
  ]
  const [images, setimages] = useState([
    require('../images/noimage3.jpeg')
  ])

  const [close, setclose] = useState(false)
  const [pickupdatemodal, setpickupdatemodal] = useState(false)
  const [add, setadd] = useState(true)
  const [imgposition, setimgposition] = useState(0)
  const [vin, setvin] = useState()
  const [Customerlist, setCustomerlist] = useState([])
  const [Filteredcustomer, setFilteredcustomer] = useState([])
  const [Search, setSearch] = useState()
  const [customername, setcustomername] = useState()
  const [customeruserid, setcustomeruserid] = useState(null)
  const [location_id, setlocation_id] = useState(null)
  const [location_name, setlocation_name] = useState(null)
  const [location, setlocation] = useState(null);
  const [vehicletype, setvehicletype] = useState(null)
  const [make, setmake] = useState(null);
  const [model, setmodel] = useState(null);
  const [color, setcolor] = useState(null);
  const [weight, setweight] = useState(null);
  const [year, setyear] = useState(null);
  const [hatnumber, sethatnumber] = useState(null);
  const [licensenumber, setlicensenumber] = useState(null);
  const [note2, setnote2] = useState()
  const [lotnumber, setlotnumber] = useState(null);
  const [containernmber, setcontainernmber] = useState(null)
  const [status, setstatus] = useState(null);
  const [statusname, setstatusname] = useState(null)
  const [loadstatus, setloadstatus] = useState(null)
  const [condition, setcondition] = useState(null);
  const [damaged, setdamaged] = useState(null);
  const [titlenumber, settitlenumber] = useState(null);
  const [pictures, setpictures] = useState();
  const [deliverdate, setdeliverdate] = useState(null);
  const [pickupdate, setpickupdate] = useState(null);
  const [auctionat, setauctionat] = useState(null)
  const [note, setnote] = useState(null);
  const [checkoption, setcheckoption] = useState();
  const [vehicle_features, setvehicle_features] = useState()
  const [keynote, setkeynote] = useState(null)

  const [keys, setkeys] = useState(null);
  const [CDChanger, setCDChanger] = useState(null);
  const [GPSNavigationSystem, setGPSNavigationSystem] = useState(null);
  const [SpareTireJack, setSpareTireJack] =useState(null);
  const [WheelCovers, setWheelCovers] = useState(null);
  const [Radio, setRadio] = useState(null);
  const [CDPLAYER, setCDPLAYER] = useState(null);
  const [SPEAKER, setSPEAKER] = useState(null);
  const [WHEELCAPS, setWHEELCAPS] = useState(null);
  const [MIRROR, setMIRROR] =useState(null);
  const [OTHERS, setOTHERS] = useState(null);

  const [frontwindshiled, setfrontwindshiled] = useState(null);
  const [bonnet, setbonnet] = useState(null);
  const [grill, setgrill] = useState(null);
  const [frontbumper, setfrontbumper] = useState(null);
  const [frontheadlight, setfrontheadlight] = useState(null);
  const [rearwindshield, setrearwindshield] = useState(null);
  const [trunkdoor, settrunkdoor] = useState(null);
  const [rearbumper, setrearbumper] = useState(null);
  const [rearbumpersupport, setrearbumpersupport] = useState(null);
  const [taillamp, settaillamp] = useState(null);
  const [frontleftfender, setfrontleftfender] = useState(null);
  const [leftfrontdoor, setleftfrontdoor] = useState(null);
  const [leftreardoor, setleftreardoor] = useState(null);
  const [leftrearfender, setleftrearfender] = useState(null);
  const [pillar, setpillar] = useState(null);
  const [roof, setroof] = useState(null);
  const [rightrearfender, setrightrearfender] = useState(null);
  const [rightreardoor, setrightreardoor] = useState(null);
  const [rightfrontdoor, setrightfrontdoor] = useState(null);
  const [frontrightfender, setfrontrightfender] = useState(null);
  const [fronttyres, setfronttyres] = useState(null);
  const Damaged = [
    {
      label: 'Yes'
    },
    {
      label: 'NO'
    },
  ];
  const [imagesurls, setimagesurls] = useState([])
  const [images2, setimages2] = useState([])
  const [newimages ,setnewimages] = useState([])
  const [vehicleconditions, setvehicleconditions] = useState()
  const [vehicleDetails, setvehicleDetails] = useState([''])
  const [locationslist, setlocationslist] = useState([])
  const [locmodal, setlocmodal] = useState(false)
  const [custmodal, setcustmodal] = useState(false)
  const [imgpos, setimgpos] = useState(0)
  const [spinner, setspinner] = useState(false)
  const [SliderModel, setSliderModel] = useState(false)
  const [currentimg, setcurrentimg] = useState('')
  const [Export, setExport] = useState(false)
  const [data, setdata] = useState([])
  const [torchMode, settorchMode] = useState('off')
  const [cameraType, setcameraType] = useState('back')
  const [barcodemodal, setbarcodemodal] = useState(false)





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
          Alert.alert(
            "Permission not satisfied",
            "Allow This App to Take Photo",
            [
              {
                text: "Set Permission",
                onPress: () => {  if (Platform.OS == 'ios') { chooseFile('photo') } else { selectFile3() }            
              },
                style: "cancel"
              },
              { text: "Ignore", }
            ]
          );
          // Alert.alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        } else {

          // if(images[0] == require('../Images/noimage3.jpeg')){
          //   images.pop();
          //   setclose(true)
          // }
          let temp = {};
          temp.name = response.assets[0].fileName;
          temp.size = response.assets[0].fileSize;
          temp.type = response.assets[0].type;
          temp.url = response.assets[0].uri;
          setclose(true)

          images.push(response.assets[0])
          // alert(JSON.stringify(temp))
          var value = new FormData();
          value.append('file', {
            uri: response.assets[0].uri,
            name: response.assets[0].fileName,
            type: response.assets[0].type
          });


        }

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

      console.log('-----' + JSON.stringify(results));

      if(images[0] == require('../images/noimage3.jpeg')){
        images.pop();
        setclose(true)
      }
      for (const res of results) {
        setclose(true)

        //Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);


        console.log('File Name : ' + res.name);
        console.log('File Size : ' + res.size);



        var i;
        // for( i =0; i< images1.length; i++){


        images.push(res)
        newimages.push(res)

        // alert(JSON.stringify(temp))

        

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
        Alert.alert(
          "Permission not satisfied",
          "Allow This App to Take Photo",
          [
            {
              text: "Set Permission",
              onPress: () => {  if (Platform.OS == 'ios') { chooseFile('photo') } else { selectFile3() }            
            },
              style: "cancel"
            },
            { text: "Ignore", }
          ]
        );
        // alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      } else {
        // if(images[0] == require('../images/noimage3.jpeg')){
        //   images.pop();
        //   setclose(true)
        // }
        setclose(true)


        let temp = {};
        temp.name = response.assets[0].fileName;
        temp.size = response.assets[0].fileSize;
        temp.type = response.assets[0].type;
        temp.url = response.assets[0].uri;

        // images.push(response.assets[0])

        let imgarray = images;
        imgarray.push(response.assets[0])
        setimages(imgarray)

        // alert(imgarray)
        // alert(JSON.stringify(temp))
        var value = new FormData();
        value.append('file', {
          uri: response.assets[0].uri,
          name: response.assets[0].fileName,
          type: response.assets[0].type
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

  const chooseFile = async () => {

    ImageCropPicker.openPicker({
      multiple: true,
      compressImageQuality: 0.7
    }).then(images1 => {
      if(images[0] == require('../images/noimage3.jpeg')){
        images.pop();
        setclose(true)
      }
      // setclose(true)

      var i;
      for (i = 0; i < images1.length; i++) {

        let temp = {};
        temp.name = images1[i].filename;
        temp.type = images1[i].mime;
        temp.url = images1[i].path;
        images.push(temp)
        newimages.push(temp)
        

        // var value = new FormData();
        // value.append('file', {
        //   uri: images1[i].path,
        //   name: images1[i].filename,
        //   type: images1[i].mime
        // });

        // alert(JSON.stringify(newimages))


      }

    });

  };  

  const deleteimage = () => {
    // setspinner(true)


    let pos = imgposition;
    console.log('---' + pos);
    let img1 = []
    // alert(imgposition)
    for (var i = 0; i < images.length; i++) {
      if (i != pos) {
        img1.push(images[i])
      }
    }

    setimages(img1)
    if (img1.length == 0) {
      setclose(false)
      setimagesurls([])
    }

    let img2 = []
    for (var index = 0; index < images2.length; index++) {
      if (index != pos) {

        if (images2[index].id) {
          img2.push(images2[index])

        }
      }
    }

    setimages2(img2)


  }

  const searchFilterFunction = (text) => {
    if (text) {

      const newData = Customerlist.filter(
        function (item) {

          const itemData = item.customer_name
            ? item.customer_name.toUpperCase()
            : ''.toUpperCase();


          const textData = text.toUpperCase();

          if (itemData.indexOf(textData) > -1) {
            return itemData.indexOf(textData) > -1;
          }
        });

      setCustomerlist(newData)
      //   setFilteredDataSource(newData);

      //   setSearch(text);
      console.log('text is ' + text);
    } else {
      // Inserted text is blank
      setCustomerlist(Filteredcustomer)
      console.log('blank');
      //   this.setState({vehicleList: vehicleList2})
      //   setFilteredDataSource(data);
      //   setSearch(text);
    }
  };

  const searchingCustomer = (text) => {
    if (text) {
      console.log('text is ' + text);
      console.log('-----==---' + Customerlist.length);
      const newData = Customerlist.filter(
        function (item) {

          const itemData = item.text
            ? item.text.toUpperCase()
            : ''.toUpperCase();

          console.log('--' + itemData);
          const textData = text.toUpperCase();
          // itemData.indexOf(textData) > -1  
          return itemData.indexOf(textData) > -1;

          //  if(itemData.indexOf(textData)  -1){
          //   return  itemData.indexOf(textData)  -1;
          // }             
        });
      setFilteredcustomer(newData);
      setSearch(text);
      console.log('text is ' + text);
    } else {
      // Inserted text is blank
      console.log('blank');
      // Update FilteredDataSource with masterDataSource
      setFilteredcustomer(data);
      setSearch(text);
    }
  };

  const callinglocation = () => {
    setspinner(true)

    let url = AppUrlCollection.LOCATION
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'multipart/form-data',
        'authkey': AppConstance.USER_INFO.USER_TOKEN
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // this.setState({ isLoading: false })
        setspinner(false)
        setlocationslist(responseJson.data)
        console.log('Response data viw :: ', responseJson)
        console.log('detail --------------' + details);


      })
      .catch((error) => {
        setspinner(false)

        console.warn(error)
      });

  }

  const barcodeReceived = (e) => {
    console.log('Barcode: ' + e.data);
    console.log('Type: ' + e.type);
  }

  const callingCustomer = () => {
    setspinner(true)
    let url = AppUrlCollection.BASE_URL + 'customer'
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'multipart/form-data',
        'authkey': AppConstance.USER_INFO.USER_TOKEN
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // this.setState({ isLoading: false })
        setspinner(false)
        setCustomerlist(responseJson.data)
        setFilteredcustomer(responseJson.data)
        // setlocationslist(responseJson.data)
        console.log('Response data viw :: ', responseJson)
        console.log('detail --------------' + details);


      })
      .catch((error) => {
        setspinner(false)

        console.warn(error)
      });

  }


  useEffect(() => {

    callinglocation()
    callingCustomer()

    // const willFocusSubscription = navigation.addListener('focus', () => {
      // setclose(false)
      // if (images.length == 1) {
      //   images.pop()
      //   images.push(require('../images/noimage3.jpeg'));

      // }
      // setimagesurls([])
      // setvin(null);
      // setcustomeruserid(null);
      // setcustomername(null);
      // setlocation(null)
      // setlocation_name(null)
      // setlocation_id(null)
      // sethatnumber(null)
      // setvehicletype(null)
      // setyear(null)
      // setcolor(null)
      // setmodel(null)
      // setmake(null)
      // setweight(null)
      // setlicensenumber(null)
      // setlotnumber(null)
      // setloadstatus(null)
      // setcontainernmber(null)
      // setkeynote(null)
      // setauctionat(null)
      // setnote(null)
      // setstatusname(null)
      // setstatus(null)
      // setcondition(null)
      // setdamaged(null)
      // settitlenumber(null)
      // setdeliverdate(null)
      // setpickupdate(null)
      // setCDChanger(null)
      // setGPSNavigationSystem(null)
      // setSpareTireJack(null)
      // setWheelCovers(null)
      // setRadio(null)
      // setCDPLAYER(null)
      // setMIRROR(null)
      // setSPEAKER(null)
      // setOTHERS(null)

      // setfrontwindshiled(null)
      // setbonnet(null)
      // setgrill(null)
      // setfrontbumper(null)
      // setfrontheadlight(null)
      // setrearwindshield(null)
      // settrunkdoor(null)
      // setrearbumper(null)
      // setrearbumpersupport(null)
      // settaillamp(null)
      // setfrontleftfender(null)
      // setleftfrontdoor(null)
      // setleftreardoor(null)
      // setleftrearfender(null)
      // setpillar(null)
      // setroof(null)
      // setrightrearfender(null)
      // setrightreardoor(null)
      // setrightfrontdoor(null)
      // setfrontrightfender(null)
      // setfronttyres(null)

    // });

    // return willFocusSubscription;

  }, [])

  const renderlist = ({ item }) => {

    return (
      <TouchableOpacity
        onPress={() => { setlocation_id(item.status); setlocation_name(item.name); setlocmodal(false) }}
        style={{ marginVertical: 10,  flexDirection: 'row' }}>
        <View style={{width:'50%', }}>
           <Text >{item.id}</Text>
           </View>
        <Text>{item.name}</Text>

      </TouchableOpacity>
    )
  }

  const renderCustomerlist = ({ item }) => {

    let c;
    if (customername == item.customer_name) {
      c = 1
    }
    return (

      <TouchableOpacity
        onPress={() => { setcustmodal(false); setcustomername(item.customer_name), setcustomeruserid(item.user_id) }}
        style={{ marginVertical: 5, borderWidth: 0.5, flexDirection: 'row', borderColor: 'grey', borderRadius: 10, paddingVertical: 12, paddingHorizontal: 10, }}>

        {c == null ?
          <Ionicons name='ios-radio-button-off-sharp' color='grey' style={{ alignSelf: 'center' }} size={20} /> :
          <Ionicons name='ios-radio-button-on' color={AppColors.Signincolor} style={{ alignSelf: 'center' }} size={20} />
        }


        <Text style={{ alignSelf: 'center', color: AppColors.Signincolor, marginLeft: 5, }}>{item.customer_name}</Text>
        {/* <Text>sfsdfn</Text> */}
      </TouchableOpacity>

    )

  }

//   const callingupdateApi = () => {
//     // setspinner(true)

//     // form - validation 
//     if (vin == null) {
//       alert("Please Enter VIN Number");
//       setspinner(false)

//     } else if (customername == null && customeruserid == null) {

//       alert('Please Select Customer Name');
//       setspinner(false)

//     }
//     else if (location_id == null && location_name == null) {
//       alert("Please Select location");
//       setspinner(false)

//     }
  
//     else if (year == null) {
//       alert("Please Enter Vehicle year");
//       setspinner(false)

//     }
  
//     else if (model == null) {
//       alert("Please Enter Vehicle model");
//       setspinner(false)

//     } else if (make == null) {
//       alert("Please Enter Vehicle make");
//       setspinner(false)

//     }

//     else if (lotnumber == null) {
//       alert("Please Select lot Number");
//       setspinner(false)

//     }
//     else if (status == null && statusname == null) {
//       alert("Please Select Status");
//       setspinner(false)

//     }
//     else {

     

    
//       let value = new FormData();
      

//       if(newimages.length > 0){
//         let photo = newimages
        
//         value.append('photo', {
//           uri: photo[0].url,
//           name: photo[0].name,
//           type: photo[0].type
//         });
      
//       }

//       value.append('Vehicle[hat_number]', hatnumber);
//       value.append('Vehicle[year]', year);
//       value.append('Vehicle[color]', color);
//       value.append('Vehicle[model]', hatnumber);
//       value.append('Vehicle[make]', make);
//       value.append('Vehicle[vin]', vin);
//       value.append('Vehicle[weight]', weight);
//       value.append('Vehicle[license_number]', licensenumber);
//       value.append('Vehicle[lot_number]', lotnumber);
//       value.append('Vehicle[customer_user_id]', customeruserid);
//       value.append('Vehicle[location]', location_id);
//       value.append('Vehicle[note]', note);
//       value.append('Vehicle[status]', status);

//       value.append('TowingRequest[condition]', condition);
//       value.append('TowingRequest[damaged]', damaged);
//       value.append('TowingRequest[title_number]', titlenumber);
//       value.append('TowingRequest[deliver_date]', deliverdate);
//       value.append('TowingRequest[pickup_date]', pickupdate);

//       value.append('VehicleFeatures[value][1]', keys);
//       value.append('VehicleFeatures[value][3]', CDChanger);
//       value.append('VehicleFeatures[value][4]', GPSNavigationSystem);
//       value.append('VehicleFeatures[value][5]', SpareTireJack);
//       value.append('VehicleFeatures[value][6]', WheelCovers);
//       value.append('VehicleFeatures[value][7]', Radio);
//       value.append('VehicleFeatures[value][8]', CDPLAYER);
//       value.append('VehicleFeatures[value][10]', MIRROR);
//       value.append('VehicleFeatures[value][11]', SPEAKER);
//       value.append('VehicleFeatures[value][12]', OTHERS);

//       value.append('VehicleCondition[value][1]', frontwindshiled);
//       value.append('VehicleCondition[value][2]', bonnet);
//       value.append('VehicleCondition[value][3]', grill);
//       value.append('VehicleCondition[value][4]', frontbumper);
//       value.append('VehicleCondition[value][5]', frontheadlight);
//       value.append('VehicleCondition[value][6]', rearwindshield);
//       value.append('VehicleCondition[value][7]', trunkdoor);
//       value.append('VehicleCondition[value][8]', rearbumper);
//       value.append('VehicleCondition[value][9]', rearbumpersupport);
//       value.append('VehicleCondition[value][10]', taillamp);
//       value.append('VehicleCondition[value][11]', frontleftfender);
//       value.append('VehicleCondition[value][12]', leftfrontdoor);
//       value.append('VehicleCondition[value][13]', leftreardoor);
//       value.append('VehicleCondition[value][14]', leftrearfender);
//       value.append('VehicleCondition[value][15]', pillar);
//       value.append('VehicleCondition[value][16]', roof);
//       value.append('VehicleCondition[value][17]', rightrearfender);
//       value.append('VehicleCondition[value][18]', rightreardoor);
//       value.append('VehicleCondition[value][19]', rightfrontdoor);
//       value.append('VehicleCondition[value][20]', frontrightfender);
//       value.append('VehicleCondition[value][21]', fronttyres);
 

// // setspinner(true)

// //         fetch(AppUrlCollection.VEHICLE_CREATE, {
// //           method: 'POST',
// //           headers: {
// //               'Content-Type': 'multipart/form-data',
// //               'Accept': 'application/json',
// //               'authkey': AppConstance.USER_INFO.USER_TOKEN
// //             },

// //           body: value


// //       })
// //           .then((response) =>  response.json())
// //           .then((responseJson) => {
// //             setspinner(false)
// //             if(responseJson.message == 'The given data was invalid.'){
// //               alert(JSON.stringify(responseJson.errors))
// //             }else{
// //               AppConstance.showSnackbarMessage(responseJson.data)


// //             }
// //             // ImageCropPicker.clean().then(() => {
// //             //   console.log('removed all tmp images from tmp directory');
// //             // }).catch(e => {
// //             //   alert(e);
// //             // });
// // // alert(JSON.stringify(responseJson))
// //               // console.log('export detail ', responseJson)

// //           })
// //           .catch((error) => {
// //             alert(error)
// //             setspinner(false)
// //               console.warn(error)
// //           });

//     }

//   }

const callingupdateApi = ()=>{
  // setspinner(true)
  
  // form - validation 
  if (vin == null) {
    alert("Please Enter VIN Number"); 
    setspinner(false)
  
  }else if (customername == null && customeruserid == null) {
    
    alert('Please Select Customer Name'); 
    setspinner(false)
  
    } 
    else if (location_id == null && location_name == null) {
          alert("Please Select location"); 
          setspinner(false)
  
      }
      // else if (hatnumber  {
      //   alert("Please Enter Hat Number"); 
      //   setspinner(false)
  
      // }
      // else if (vehicletype.trim().length == 0 ) {
      //   alert("Please Enter Vehicle Type"); 
      //   setspinner(false)
  
      //   }
        else if (year == null ) {
          alert("Please Enter Vehicle year"); 
          setspinner(false)
  
        }
        // else if (color.trim().length  == 0) {
        //   alert("Please Enter Vehicle color"); 
        //   setspinner(false)
  
        // }
        else if (model == null) {
          alert("Please Enter Vehicle model"); 
          setspinner(false)
  
        }else if (make == null) {
          alert("Please Enter Vehicle make"); 
          setspinner(false)
  
        }
      //   else if (weight.trim().length == 0) {
      //     alert("Please Enter Vehicle weight"); 
      //     setspinner(false)
  
      // } 
      else if (lotnumber == null) {
        alert("Please Select lot Number"); 
        setspinner(false)
  
      }
      else if (status == null && statusname == null)   {
        alert("Please Select Status"); 
        setspinner(false)
  
      }
      else {
  
    let f = [];
    if(CDChanger == 3){
      f.push(CDChanger)
    }
    if(GPSNavigationSystem == 4){
      f.push(GPSNavigationSystem)
    }
    if(SpareTireJack == 5){
      f.push(SpareTireJack)
    }
    if(WheelCovers == 6){
      f.push(WheelCovers)
    }
    if(Radio == 7){
      f.push(Radio)
    }
    if(CDPLAYER == 8){
      f.push(CDPLAYER)
    }
    if(MIRROR == 10){
      f.push(MIRROR)
    }
    if(SPEAKER == 11){
      f.push(SPEAKER)
    }
    if(OTHERS == 12){
      f.push(OTHERS)
    }
          
  
  
    let h = [] ;
    
    // for(var i =0; i < vehicleconditions.length ; i++){
     
  
      if(frontwindshiled != null){
       
        h[2]  = frontwindshiled
      }
  
      if(bonnet != null){
       
        h[3]  = bonnet
      }
  
      if(grill != null){
       
        h[4]  = grill
      }
  
      if(frontbumper != null){
      
        h[5]  = frontbumper
      }
  
      if(frontheadlight != null){
       
        h[6]  = frontheadlight
      }
  
      if(rearwindshield != null){
        
        h[7]  = rearwindshield
      }
  
      if(trunkdoor != null){
        
        h[8]  = trunkdoor
      }
  
      if(rearbumper != null){
        h[9]  = rearbumper
      }
  
      if(rearbumpersupport != null){
        h[10]  = rearbumpersupport
      }
    if(taillamp != null){
        h[11]  = taillamp
      }
  
      if(frontleftfender != null){
        h[12]  = frontleftfender
      }
  
      if(leftfrontdoor != null){
        h[13]  = leftfrontdoor
      }
  
  
      if(leftreardoor != null){
        h[14]  = leftreardoor
      }
  
      if(leftrearfender != null){
        h[15]  = leftrearfender
      }
  
      if(pillar != null){
        h[16]  = pillar
      }
  
      if(roof != null){
        h[17]  = roof
      }
  
      if(rightrearfender != null){
        h[18]  = rightrearfender
      }
  
      if(rightreardoor != null){
        h[20]  = rightreardoor
      }
      if(rightfrontdoor != null){
        h[21]  = rightfrontdoor
      }
      if(frontrightfender != null){
        h[22]  = frontrightfender
      }
      if(fronttyres != null){
        h[23]  = fronttyres
      }
  
      // h[3]  = bonnet
      // h[4]  = grill
      // h[5]  = frontbumper
      // h[6]  = frontheadlight
      // h[7]  = rearwindshield
      // h[8]  = trunkdoor
      // h[9]  = rearbumper
      // h[10] = rearbumpersupport
      // h[11] = taillamp
      // h[12] = frontleftfender
      // h[13] = leftfrontdoor
      // h[14] = leftreardoor
      // h[15] = leftrearfender
      // h[16] = pillar
      // h[17] = roof
      // h[18] = rightrearfender
      // h[20] = rightreardoor
      // h[21] = rightfrontdoor
      // h[22] = frontrightfender
      // h[23] = fronttyres
    // }
  
  
        let array ={};
  
  
    if(imagesurls.length > 0){
      let photos = imagesurls
      let img = {photos}
      array.fileUrls=img
    }
    array.vin= vin,
    array.customer_user_id=  customeruserid,
    array.customer_name=  customername,
    array.location_id = location_id,
    array.location = location,
  array.hat_number = hatnumber,
  array.year = year,
  array.color=  color,
  array.model= model,
  array.make= make,
  array.weight= weight,
  array.license_number = licensenumber,
  array.lot_number = lotnumber,
  array.note = note,
  array.status_name= statusname,
  array.status=  status,
  array.condition = condition,
  array.damaged = damaged,
  array.title_number=  titlenumber,
  array.deliver_date = deliverdate,
  array.pickup_date=  pickupdate,



  array.container_number= containernmber,
  
 

  array.key_note =keynote,
  array.auction_at = auctionat,

  

  
  array.vehicle_features = f,
  array.vehicle_conditions = h,
  array.loading_type = loadstatus,

  array.towing_request_id = 0,
    array.towed_from=  0,
    array.towing_request_date = 0,
    array.towed_amount = 0,
  
   
    // alert(JSON.stringify(array))

     finaldata = new FormData();


     finaldata.append('Vehicle[customer_user_id]', customeruserid)
     finaldata.append('Vehicle[location]',location_id)
     finaldata.append('Vehicle[hat_number]',hatnumber)
     finaldata.append('TowingRequest[title_type]','0')
     finaldata.append('Vehicle[year]',year)
     finaldata.append('Vehicle[color]',color)
     finaldata.append('Vehicle[model]',model)
     finaldata.append('Vehicle[make]',make)

     finaldata.append('Vehicle[weight]',weight)
     finaldata.append('Vehicle[license_number]',licensenumber)

     finaldata.append('Vehicle[vin]',vin)
     finaldata.append('Vehicle[auction_name]',location_name)
    finaldata.append('TowingRequest[note]',note)
    finaldata.append('Vehicle[status]',status)
    finaldata.append('TowingRequest[condition]',condition)
    finaldata.append('TowingRequest[damaged]',damaged)

    finaldata.append('TowingRequest[title_number]',titlenumber)
    finaldata.append('TowingRequest[deliver_date]',deliverdate)
    finaldata.append('TowingRequest[pickup_date]',pickupdate)

    
    alert(JSON.stringify(finaldata))
  
       
  
        //   fetch(AppUrlCollection.VEHILE_LIST, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Authorization': 'Bearer ' + AppConstance.USER_INFO.USER_TOKEN,
        //     },
            
        //     body: JSON.stringify(array)
        
           
        // })
        //     .then((response) =>  response.json())
        //     .then((responseJson) => {
        //       setspinner(false)
        //       if(responseJson.message == 'The given data was invalid.'){
        //         alert(JSON.stringify(responseJson.errors))
        //       }else{
        //         AppConstance.showSnackbarMessage(responseJson.message)
  
        //       }
        //       ImageCropPicker.clean().then(() => {
        //         console.log('removed all tmp images from tmp directory');
        //       }).catch(e => {
        //         alert(e);
        //       });
              
        //         console.log('export detail ', responseJson)
               
        //     })
        //     .catch((error) => {
        //       alert(error)
        //       setspinner(false)
        //         console.warn(error)
        //     });
        
          }
  
        }

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', height: deviceHeight, }}>

      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
      />

      <ImageBackground source={require('../images/backgroundimage.jpg')} resizeMode='stretch' style={{ width: deviceWidth, height: deviceHeight, position: 'absolute' }} >


      </ImageBackground>
      <Appbar
        style={{
          backgroundColor: AppColors.transplant,
          flexDirection: 'row',
          width: deviceWidth,
          justifyContent: 'space-between',
          padding: 10,
          elevation: 0,

        }}
      >


        <TouchableOpacity
          style={{ justifyContent: 'center', }}
          onPress={() => navigation.goBack()}

        >
          <Ionicons name='chevron-back' size={25} color='white' />



        </TouchableOpacity>


        <View style={{ width: '80%', justifyContent: 'center', }}>
          <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Add Vehicle</Text>
        </View>



        <View style={{ width: '10%', justifyContent: 'center' }}>
          <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center' }}
            onPress={() => {
              callingupdateApi()
            }}
          >
            <AntDesign size={20} style={{ alignSelf: 'center' }} color='white' name='check' />
          </TouchableOpacity>
        </View>

      </Appbar>

      <Modal
        transparent={true}
        animationType={'slide'}
        visible={custmodal}
        onRequestClose={() => {
          console.log('close modal');
        }}>
        <SafeAreaView
          style={{
            flex: 1,
            width: deviceWidth,
            justifyContent: 'flex-start',
            paddingVertical: 10,
            height: deviceHeight,
            backgroundColor: AppColors.Signincolor,
            flexDirection: 'column',
            alignItems: 'center',
          }}>

          {/* <ImageBackground source={require('../images/backgroundimage.jpg')} resizeMode='stretch' style={{ width: deviceWidth, height:deviceHeight, position: 'absolute' }} >
</ImageBackground> */}

          <View
            style={{ width: deviceWidth, flexDirection: 'row', paddingHorizontal: 13, paddingVertical: 15, height: 55 }}>

            <TouchableOpacity
              style={{ justifyContent: 'center', width: '15%', }}
              onPress={() => setcustmodal(false)}

            >
              <Text style={{ color: 'white', fontSize: 16 }}>Cancel</Text>


            </TouchableOpacity>

            <View style={{ width: '70%', justifyContent: 'center', }}>
              <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Customer</Text>
            </View>

            <View style={{ width: '10%', justifyContent: 'center' }}>
              <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center' }}>
                {/* <AntDesign  size={20} style={{alignSelf:'center'}} color='white' name='check'/> */}
              </TouchableOpacity>
            </View>
          </View>



          <View style={{ marginHorizontal: 10, justifyContent: 'center', paddingHorizontal: 5, borderRadius: 10, backgroundColor: 'white', flexDirection: 'row' }}>
            <Feather style={{ alignSelf: 'center', }} size={18} color='grey' name='search' />

            <TextInput style={{ backgroundColor: 'white', width: '90%', height: 40, paddingHorizontal: 10, borderRadius: 20 }}
              onChangeText={text => searchFilterFunction(text)}
              onSubmitEditing={(Text) => searchFilterFunction(Text)}
              // this.callingVehicleContainerService()
              placeholder="Search Customer"
              placeholderTextColor='grey'

              underlineColorAndroid="transparent"
            ></TextInput>


          </View>

          <View
            style={{
              width: '100%',
              marginTop: 12,
              height: deviceHeight,
              flexDirection: 'column',
              backgroundColor: 'white',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>

            <FlatList
              contentContainerStyle={{ paddingHorizontal: 1, paddingVertical: 5, }}

              data={Customerlist}
              renderItem={renderCustomerlist}
              keyExtractor={(item, index) => index.toString()}


            />


            <View style={{ height: 180 }}>


            </View>
           





          </View>

        </SafeAreaView>
      </Modal>

      <Modal
        transparent={true}
        animationType={'none'}
        visible={locmodal}
        onRequestClose={() => {
          console.log('close modal');
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingVertical: 10,
            height: deviceHeight,
            backgroundColor: '#0005',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '70%',
              flexDirection: 'column',
              backgroundColor: 'white',
              borderRadius: 15,
            }}>

            <View style={{ borderBottomWidth: 0.3, paddingVertical: 7, borderColor: '#D0D3D4' }}>
              <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', paddingVertical: 10, }}>Location</Text>
            </View>

            <FlatList
              contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15, }}

              data={locationslist}
              renderItem={renderlist}
              keyExtractor={(item, index) => index.toString()}


            />

            <View style={{ flexDirection: 'row', borderTopWidth: 0.5, borderColor: 'grey', width: '100%' }}>
              <TouchableOpacity style={{ width: '50%', height: 40, alignSelf: 'center', justifyContent: 'center', borderRightWidth: 0.5, borderColor: 'grey' }}
                onPress={() => { setlocmodal(false) }}
              >
                <Text style={{ alignSelf: 'center', fontSize: 15 }}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ width: '50%', height: 40, justifyContent: 'center', alignSelf: 'center' }}
                onPress={() => { setlocmodal(false) }}

              >
                <Text style={{ fontWeight: 'bold', fontSize: 15, alignSelf: 'center' }}>OK</Text>
              </TouchableOpacity>
            </View>

            {/* <View
                style={{
                  paddingVertical: 10,
                  width: '100%',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  height: 50,
                  flexDirection:'row',
                }}>
                <TouchableOpacity
                  // onPress={() => this.setState({error: false})}
                  style={{
                    borderRadius: 10,
                    alignSelf: 'center',
                    backgroundColor: 'red',
                    paddingVertical: 4,
                    paddingHorizontal: 4,
                  }}>
                  <Text
                    style={{
                      paddingVertical: 3,
                      fontSize: 13,
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    {' '}
                    CLOSE{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => this.setState({error: false})}
                  style={{
                    borderRadius: 10,
                    marginLeft:10,
                    alignSelf: 'center',
                    backgroundColor: 'red',
                    paddingVertical: 4,
                    paddingHorizontal: 4,
                  }}>
                  <Text
                    style={{
                      paddingVertical: 3,
                      fontSize: 13,
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    {' '}
                    CLOSE{' '}
                  </Text>
                </TouchableOpacity>
             
              </View> */}

          </View>

        </View>
      </Modal>

      <Modal
        transparent={true}
        animationType={'none'}
        visible={barcodemodal}
        onRequestClose={() => {
          console.log('close modal');
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingVertical: 10,
            height: deviceHeight,
            backgroundColor: 'white',
            flexDirection: 'column',
            alignItems: 'center',
            width: deviceWidth
          }}>

          <View style={{ width: '100%', paddingHorizontal: 30, marginTop: Platform.OS == 'ios' ? 40 : 10 }}>

            <TouchableOpacity
              onPress={() => { setbarcodemodal(false) }}
              style={{ alignSelf: 'flex-end' }}>
              <MaterialCommunityIcons color='red' name='close-circle-outline' size={30} />
            </TouchableOpacity>
          </View>

          <QRCodeScanner
            onRead={(e) => { setvin(e.data); setbarcodemodal(false) }}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
              <Text style={styles.centerText}>
                SCAN VEHICLE VIN NUMBER
              </Text>
            }
            bottomContent={
              <TouchableOpacity
                onPress={() => setbarcodemodal(false)}
                style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>CANCEL</Text>
              </TouchableOpacity>
            }
          />


        </View>


      </Modal>

      <Modal
        visible={showimagemodel}
        animationType='fade'
      >
        <View style={{ justifyContent: 'center', backgroundColor: 'black', height: deviceHeight }}>
          <View style={{ backgroundColor: 'black' }}>
            <SliderBox
              images={images.length == 0 ? dummyimages : images}
              sliderBoxHeight={deviceHeight * 0.5}

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
              ImageComponentStyle={{ width: '100%', marginTop: 0 }}

            />

            <TouchableOpacity
              onPress={() => { setshowimagemodel(false) }}
              style={{ alignSelf: 'center', marginTop: 10 }}
            >
              <MaterialCommunityIcons color='red' name='close-circle-outline' size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={deletemodalshow}
        animationType='fade'
        transparent={true}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: '#0005', height: deviceHeight }}>
          <View style={{ bottom: 30 }}>

            <TouchableOpacity
              onPress={() => { setdeletemodalshow(false), deleteimage() }}
              style={{ alignSelf: 'center', width: '85%', backgroundColor: '#E5E7E9', paddingVertical: 20, width: '90%', borderRadius: 15, marginTop: 10 }}
            >
              <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: '400', color: 'red' }}>Delete Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => { setdeletemodalshow(false) }}
              style={{ alignSelf: 'center', backgroundColor: 'white', paddingVertical: 20, width: '90%', borderRadius: 15, marginTop: 10 }}
            >
              <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: '400', }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <ScrollView style={{ width: deviceWidth }}>

        <View>


          <SliderBox
          images={images.length == 0 ?dummyimages:images}
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
              if (index == 0) {
                setadd(true)
              } else {
                setadd(false)
              }
              setimgposition(index);
            }}

            onCurrentImagePressed={index =>
              //setcurrentimg()
              // console.warn(`image ${index} pressed`)
              setshowimagemodel(true)
            }
            paginationBoxStyle={{
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
            ImageComponentStyle={{ width: '100%', marginTop: 0 }}

          />

          {close == true ?

            <View style={{ marginTop: 15, position: 'absolute', alignSelf: 'flex-end', paddingHorizontal: 40, }}>
              <TouchableOpacity
                onPress={() => { setdeletemodalshow(true) }}
                style={{ alignSelf: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#29AB87' }}>

                <Ionicons name="close" color={'#29AB87'} size={25} />
              </TouchableOpacity>
            </View>

            : null}
          {/* <TouchableOpacity 
          onPress={() => refRBSheet.current.open()}
          style={{backgroundColor:'grey' , borderRadius: 50,height:'100%',width:'100%',  justifyContent:'center', }}>
  <Text style={{color:'white', alignSelf:'center'}}>+</Text>

  </TouchableOpacity> */}



          {add == true ?
            <ActionButton position='left' style={{ marginLeft: deviceWidth - 100, height: '95%', width: '90%', }} size={40} buttonColor="rgba(44,62,80,1)">
              <ActionButton.Item buttonColor='#29AB87' size={30}
                onPress={() => { if (Platform.OS == 'ios') { chooseFile('photo') } else { selectFile3() } }}
              >
                <Ionicons name="ios-images-outline" size={20} style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item buttonColor='#29AB87' size={30}

                onPress={() => { if (Platform.OS == 'ios') { TakePhoto('photo') } else { captureImage() } }}>
                <Ionicons name="ios-camera-outline" size={20} style={styles.actionButtonIcon} />
              </ActionButton.Item>

            </ActionButton>
            : null}








        </View>




        <View style={{ width: '100%', flexDirection: 'row', marginTop: 2, paddingVertical: Platform.OS == 'ios' ? 10 : 0, paddingHorizontal: 10, backgroundColor: '#2C3E50', justifyContent: 'center', alignSelf: 'center' }}>
          <View style={{ width: '20%', alignSelf: 'center' }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>VIN #:</Text>
          </View>

          <View style={{ width: '50%' }}>
            <TextInput
              style={{ color: 'white' }}
              placeholderTextColor='#D0D3D4'
              placeholder={'Enter VIN or scan'}
              value={vin}
              onChangeText={(text) => { setvin(text) }}
            />
          </View>
          <View style={{ alignSelf: 'center', width: '20%' }}>
            <TouchableOpacity
              onPress={() => { setbarcodemodal(true) }}
              style={{ alignSelf: 'flex-end' }}
            >
              <MaterialIcons name='qr-code-scanner' color='white' size={18} />
            </TouchableOpacity>
          </View>

        </View>


        <View style={{
          flexDirection: 'column', justifyContent: 'center', backgroundColor: Platform.OS == 'ios'? 'white': 'white',
          alignSelf: 'center',  marginBottom: 15, marginTop: 10, paddingHorizontal: 10, width: '95%',
        }} >





          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>CUSTOMER </Text>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}
              onPress={() => {
                setcustmodal(true)
              }}
            >
              <Text style={{ color: 'grey', paddingVertical: 2, fontSize: 14, }}>{customername == null ? 'Select Customer' : customername}</Text>
              <AntDesign name='caretdown' color='grey' />
            </TouchableOpacity></View>


          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>LOCATION</Text>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}
              onPress={() => {
                setlocmodal(true)
              }}
            >
              <Text style={{ color: 'grey', paddingVertical: 2, fontSize: 14, }}>{location_name == null ? 'Select Location' : location_name}</Text>
              <AntDesign name='caretdown' color='grey' />
            </TouchableOpacity>
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>HAT NUMBER</Text>
            <TextInput
              placeholder='Enter Hat Number'
              placeholderTextColor='grey'
              value={hatnumber}
              onChangeText={(text) => { sethatnumber(text) }}
            />
          </View>


          {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>VEHICLE TYPE</Text>
    <TextInput  
    placeholder='Enter Vehicle type'
    placeholderTextColor='grey'
    value={vehicletype}
    onChangeText = {(Text)=> {setvehicletype(Text)}}
    />
    </View> */}

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>YEAR </Text>
            <TextInput
              placeholder='Enter Vehicle year'
              placeholderTextColor='grey'
              value={year}
              onChangeText={(Text) => { setyear(Text) }}


            />
          </View>


          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>COLOR </Text>
            <TextInput
              placeholder='Enter Vehicle Color'
              placeholderTextColor='grey'
              value={color}
              onChangeText={(Text) => { setcolor(Text) }}

            />
          </View>


          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>MODEL </Text>
            <TextInput
              placeholder='Enter Vehicle Model'
              placeholderTextColor='grey'
              value={model}
              onChangeText={(Text) => { setmodel(Text) }}

            />
          </View>



          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>MAKE</Text>
            <TextInput
              placeholder='Enter Vehicle Make'
              value={make}
              placeholderTextColor='grey'
              onChangeText={(Text) => { setmake(Text) }}

            />
          </View>





          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>WEIGHT</Text>
            <TextInput
              value={weight}
              placeholder='Enter Vehicle weight'
              placeholderTextColor='grey'
              onChangeText={(Text) => { setweight(Text) }}

            />
          </View>



          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>LICENSE NUMBER</Text>
            <TextInput
              value={licensenumber}
              placeholder='Enter Vehicle license number'

              placeholderTextColor='grey'
              onChangeText={(Text) => { setlicensenumber(Text) }}

            />
          </View>






          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>LOT NUMBER</Text>
            <TextInput
              value={lotnumber}
              placeholder='Enter Vehicle lot number'

              placeholderTextColor='grey'
              onChangeText={(Text) => { setlotnumber(Text) }}

            />
          </View>



          {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>LOAD STATUS</Text>
    <TextInput  
    value={loadstatus}
    placeholder='Enter Vehicle load status'
    placeholderTextColor='grey'
    onChangeText={(text)=> {setloadstatus(text)}}
    />
    </View> */}


          {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>CONTAINER NUMBER</Text>
    <TextInput  
    value={containernmber}
    placeholder='Enter Vehicle container number'
    placeholderTextColor='grey'
    onChangeText={(text)=> {setcontainernmber(text)}}

    />
    </View> */}

          {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>KEY NOTE</Text>
    <TextInput  
    value={keynote}
    placeholder='Enter Vehicle keynote'

    placeholderTextColor='grey'
    onChangeText={(text)=> {setkeynote(text)}}

    />
    </View> */}

          {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>PREPAREDBY</Text>
    <TextInput  
    placeholder={lotnumber}
    placeholderTextColor='grey'
    onChangeText={(text)=> {setlotnumber(text)}}

    />
    </View> */}



          {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>AUCTION AT</Text>
    <TextInput  
    value={auctionat}
    placeholder='Enter Vehicle Auction at'
    placeholderTextColor='grey'
    onChangeText={(text)=> {setauctionat(text)}}

    />
    </View> */}

          {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>VCR</Text>
    <TextInput  
    placeholder={vcr != null ? vcr : '' }
    placeholderTextColor='grey'
        onChangeText={(text)=> {setvcr(text)}}

    />
    </View> */}

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>NOTE</Text>
            <TextInput
              value={note}
              placeholder='Enter Vehicle note'
              placeholderTextColor='grey'
              onChangeText={(text) => { setnote(text) }}
            />
          </View>



          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>STATUS</Text>
            {/* <RadioButtonRN
      data={datacustomer}
      color="#2c9dd1"
      box={false}
      boxDeactiveBgColor='white'
      textColor='grey'
      selectedBtn={(e) => console.log(e)}
    /> */}


<View style={{flexDirection:'row', marginVertical:10,}}>

<View style={{flexDirection:'column', marginLeft:5,   }}>
  <TouchableOpacity
  
  onPress={()=>{setstatus('1') , setstatusname('On Hand')}}
  >

<Text style={{fontWeight:'500'}}>ON HAND</Text>
</TouchableOpacity >

<TouchableOpacity
style={{marginTop:10,}}
  onPress={()=>{setstatus('2'), setstatusname('Manifest')}}
>

<Text style={{fontWeight:'500'}}>MANIFEST</Text>
</TouchableOpacity>


<TouchableOpacity
style={{marginTop:10,}}
  onPress={()=>{setstatus('3') , setstatusname('Car on the way')}}
>

<Text style={{fontWeight:'500'}}>ON THE WAY</Text>
</TouchableOpacity>

<TouchableOpacity
style={{marginTop:10,}}
  onPress={()=>{setstatus('4') , setstatusname('Shipped')}}
>

<Text style={{fontWeight:'500'}}>SHIPPED</Text>
</TouchableOpacity>


<TouchableOpacity
style={{marginTop:10,}}
  onPress={()=>{setstatus('6') , setstatusname('Arrived')}}
>

<Text style={{fontWeight:'500'}}>ARRIVED</Text>
</TouchableOpacity>

{/* <TouchableOpacity
style={{marginTop:10,}}
  onPress={()=>{setstatus('7')}}
>

<Text style={{fontWeight:'500'}}>Handed Over</Text>
</TouchableOpacity> */}

<TouchableOpacity
style={{marginTop:10,}}
  onPress={()=>{setstatus('5'), setstatusname('Picked Up')}}
>

<Text style={{fontWeight:'500'}}>PICKED UP</Text>
</TouchableOpacity>



</View>

{/* <QRCodeScanner
    onRead={()=> {}}
    // flashMode={RNCamera.Constants.FlashMode.torch}
    topContent={
      <Text style={styles.centerText}>
        Go to{' '}
        <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
        your computer and scan the QR code.
      </Text>
    }
    bottomContent={
      <TouchableOpacity style={styles.buttonTouchable}>
        <Text style={styles.buttonText}>OK. Got it!</Text>
      </TouchableOpacity>
    }
    /> */}
<View style={{flexDirection:'column',  marginLeft:10, width:'60%' }}>
  
  <TouchableOpacity 
  onPress={()=>{setstatus(1)}}
  >
{status == 1 ? 
<AntDesign name='check' color='#1a9bef' size={20} /> :
<AntDesign name='check' color='transparent' size={20}
/>}
</TouchableOpacity>

<TouchableOpacity
style={{marginTop:5,}}

  onPress={()=>{setstatus(2)}}
>
{status == 2 ? 

<AntDesign name='check' color='#1a9bef' size={20} /> :
<AntDesign name='check' color='transparent' size={20}
/>}
</TouchableOpacity>



<TouchableOpacity
style={{marginTop:5,}}

  onPress={()=>{setstatus(3) }}
>
{status == 3 ? 

<AntDesign name='check' color='#1a9bef' size={20} /> :
<AntDesign name='check' color='transparent' size={20}
/> 

}
</TouchableOpacity>


<TouchableOpacity
style={{marginTop:5,}}

  onPress={()=>{setstatus(4) }}
>
{status == 4 ? 

<AntDesign name='check' color='#1a9bef' size={20} /> :
<AntDesign name='check' color='transparent' size={20}
/>}
</TouchableOpacity>

<TouchableOpacity
style={{marginTop:0,}}

  onPress={()=>{setstatus(6) }}
>
{status == 6 ? 

<AntDesign name='check' color='#1a9bef' size={20} /> :
<AntDesign name='check' color='transparent' size={20}
/>}
</TouchableOpacity>

{/* <TouchableOpacity
style={{marginTop:8}}

  onPress={()=>{setstatus(7)}}
>
{status == 7 ? 

<AntDesign name='check' color='#1a9bef' size={20} /> :
<AntDesign name='check' color='transparent' size={20}
/>}
</TouchableOpacity> */}


<TouchableOpacity
style={{marginTop:5,}}

  onPress={()=>{setstatus(5)}}
>
{status == 5 ? 

<AntDesign name='check' color='#1a9bef' size={20} /> :
<AntDesign name='check' color='transparent' size={20}
/>}
</TouchableOpacity>

{/* <TouchableOpacity
style={{marginTop:7,}}

  onPress={()=>{setstatus('15')}}
>

</TouchableOpacity>  */}
{/*
<TouchableOpacity
style={{marginTop:10,backgroundColor:'yellow'}}

  onPress={()=>{setstatus('10')}}
>
{status == '10' ? 

<AntDesign name='check' color='#1a9bef' size={20} /> :
<AntDesign name='check' color='transparent' size={20}
/>}
</TouchableOpacity>



<TouchableOpacity
style={{marginTop:10,backgroundColor:'grey'}}

  onPress={()=>{setstatus('11')}}
>
{status == '11' ? 

<AntDesign name='check' color='#1a9bef' size={20} /> :
<AntDesign name='check' color='transparent' size={20}
/>}
</TouchableOpacity>


<TouchableOpacity
style={{marginTop:10,}}

  onPress={()=>{setstatus('12')}}
>
{status == '12' ? 

<AntDesign name='check' color='#1a9bef' size={20} /> :
<AntDesign name='check' color='transparent' size={20}
/>}
</TouchableOpacity>


<TouchableOpacity
style={{marginTop:10,}}

  onPress={()=>{setstatus('15')}}
>
{status == '15' ? 

<AntDesign name='check' color='#1a9bef' size={20} /> :
<AntDesign name='check' color='transparent' size={20}
/>}
</TouchableOpacity> */}


</View>


</View>

          </View>


          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>CONDITION</Text>
            <View style={{ flexDirection: 'row', marginVertical: 10, }}>

              <View style={{ flexDirection: 'column', marginLeft: 5, }}>
                <TouchableOpacity

                  onPress={() => { setcondition('0') }}
                >

                  <Text style={{ fontWeight: '500' }}>NON-OP</Text>
                </TouchableOpacity >

                <TouchableOpacity
                  style={{ marginTop: 10, }}
                  onPress={() => { setcondition('1') }}
                >

                  <Text style={{ fontWeight: '500' }}>OPERABLE</Text>
                </TouchableOpacity>

              </View>


              <View style={{ flexDirection: 'column', marginLeft: 10, width: '60%' }}>

                <TouchableOpacity
                  onPress={() => { setcondition('0') }}
                >
                  {condition == '0' ?
                    <AntDesign name='check' color='#1a9bef' size={20} /> :
                    <Text style={{ alignSelf: 'center', fontWeight: '500' }}></Text>
                  }
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginTop: 8, }}

                  onPress={() => { setcondition('1') }}
                >
                  {condition == '1' ?

                    <AntDesign name='check' color='#1a9bef' size={20} /> :
                    <Text style={{ alignSelf: 'center', fontWeight: '500' }}></Text>
                  }
                </TouchableOpacity>

              </View>


            </View>

          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>DAMAGED</Text>

            <View style={{ flexDirection: 'row', marginVertical: 10, }}>

              <View style={{ flexDirection: 'column', width: '12%' }}>
                <TouchableOpacity

                  onPress={() => { setdamaged('1') }}
                >

                  <Text style={{ alignSelf: 'center', fontWeight: '500' }}>YES</Text>
                </TouchableOpacity >

                <TouchableOpacity
                  style={{ marginTop: 10, }}
                  onPress={() => { setdamaged('0') }}
                >

                  <Text style={{ alignSelf: 'center', fontWeight: '500' }}>NO</Text>
                </TouchableOpacity>

              </View>


              <View style={{ flexDirection: 'column', width: '60%' }}>

                <TouchableOpacity
                  onPress={() => { setdamaged('1') }}
                >
                  {damaged == '1' ?
                    <AntDesign name='check' color='#1a9bef' size={20} /> :
                    <Text style={{ alignSelf: 'center', fontWeight: '500' }}></Text>
                  }
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginTop: 8, }}

                  onPress={() => { setdamaged('0') }}
                >
                  {damaged == '0' ?

                    <AntDesign name='check' color='#1a9bef' size={20} /> :
                    <Text style={{ alignSelf: 'center', fontWeight: '500' }}></Text>
                  }
                </TouchableOpacity>

              </View>


            </View>


            {/* <RadioButton.Group onValueChange={newValue => setdamaged(newValue)} value={damaged}>

          <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
          <Text style={{alignSelf:'center' ,fontWeight:'500'}}>Yes</Text>

          <RadioButton value='1' color='#1a9bef'/>

          </View>
          <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
          <Text style={{alignSelf:'center',marginRight:5, fontWeight:'500'}}>No</Text>

          <RadioButton value='0'  color="#1a9bef" />

          </View>
        </RadioButton.Group> */}

            {/* <RadioButtonRN
      data={Damaged}
      color="#2c9dd1"
      box={false}
      boxDeactiveBgColor='white'
      textColor='grey'
      selectedBtn={(e) => console.log(e)}
    /> */}
          </View>


          {/* <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <RadioButtonRN
      data={datacustomer}
      color="#2c9dd1"
      box={false}
      boxDeactiveBgColor='white'
      textColor='grey'
      selectedBtn={(e) => console.log(e)}
    />
    </View> */}

          {/* <View style={{width:'100%',backgroundColor:'red', flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <RadioButton
            value='1'
            status={ picture == '1' ? 'checked' : 'unchecked' }
            onPress={() => setpictures('1')}
          />
    </View> */}

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>TITLE NUMBER</Text>
            <TextInput
              value={titlenumber}
              placeholder='Enter Vehicle title number'
              placeholderTextColor='grey'
              onChangeText={(text) => { settitlenumber(text) }}

            />
          </View>




          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>DELIVER DATE</Text>


            <View

              style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ alignSelf: 'center' }}  >{deliverdate == null ? 'Select deliver date' : deliverdate} </Text>

              <DatePicker
                style={{ width: 20 }}
                date={deliverdate}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                hideText={false}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 2,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36,
                    borderWidth: 0,
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { setdeliverdate(date) }}
              />


            </View>


          </View>



          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>PICKUP DATE</Text>
            {/* <DatePicker
              style={{width: 200,
        marginTop: 20,}}
              date={date} // Initial date from state
              mode="datetime" // The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="2016-05-01"
              maxDate="2025-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  //display: 'none',
                  position: 'absolute',
                  left: 0,
                  top: 1,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 0,
                },
              }}
              onDateChange={(date) => {
                setDate(date);
              }}
            /> */}

            <View

              style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ alignSelf: 'center' }}  >{pickupdate == null ? 'Select pickup date' : pickupdate}</Text>

              <DatePicker
                style={{ width: 20 }}
                date={pickupdate}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                hideText={false}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 2,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36,
                    borderWidth: 0,
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { setpickupdate(date) }}
              />


            </View>

            {/* {pickupdatemodal && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          
          onChange={(date)=> { setpickupdate(date)}}
        />
        
    )} */}

          </View>


          <View style={{width:'100%',flexDirection:'column',borderBottomWidth:0.3, paddingVertical:5,borderColor:'#B3B6B7',  justifyContent:'space-between'}}>
    <Text style={{color:'black',paddingVertical:2,fontWeight:'bold', fontSize:14,}}>CHECK OPTIONS INCLUDED ON THE ..</Text>
    <View style={{flexDirection:'row', marginVertical:10,}}>

    <View style={{flexDirection:'column',  marginLeft:10, width:'10%' }}>
      
      <TouchableOpacity 
      onPress={()=>{ CDChanger == 3 ? setCDChanger('') :setCDChanger(3)}}
      >
    {CDChanger == 3 ? 
    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{ GPSNavigationSystem == 4 ? setGPSNavigationSystem(''):setGPSNavigationSystem(4)}}
    >
    {GPSNavigationSystem == 4 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>



    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{SpareTireJack == 5 ? setSpareTireJack(''):setSpareTireJack(5)}}
    >
    {SpareTireJack == 5 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    /> 

    }
    </TouchableOpacity>


    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{ WheelCovers == 6 ? setWheelCovers('') : setWheelCovers(6)}}
    >
    {WheelCovers == 6 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{Radio == 7 ? setRadio(''):setRadio(7) }}
    >
    {Radio == 7 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>




    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{CDPLAYER == 8 ? setCDPLAYER(''):setCDPLAYER(8) }}
    >
    {CDPLAYER == 8 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{MIRROR == 10 ? setMIRROR(''):setMIRROR(10) }}
    >
    {MIRROR == 10 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{SPEAKER == 11 ? setSPEAKER(''):setSPEAKER(11) }}
    >
    {SPEAKER == 11 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity>





    <TouchableOpacity
    style={{marginTop:Platform.OS == 'ios'? 5:10,}}

    onPress={()=>{OTHERS == 12 ? setOTHERS(''):setOTHERS(12)}}
    >
    {OTHERS == 12 ? 

    <Ionicons name='ios-radio-button-on' style={{alignSelf:'center'}}  color='#1a9bef' size={20} /> :
    <Ionicons name='ios-radio-button-off-sharp' style={{alignSelf:'center'}}  color='#1a9bef' size={20}
    />}
    </TouchableOpacity> 

    </View>

    <View style={{flexDirection:'column', marginLeft:5,   }}>
      
    <TouchableOpacity
       style={{marginTop:2,}}

      onPress={()=>{ CDChanger == 3 ? setCDChanger(''):setCDChanger(3)}}
    >

    <Text style={{fontWeight:'500'}}>CD Changer</Text>
    </TouchableOpacity>


   
    <TouchableOpacity
    style={{marginTop:13,}}
      onPress={()=>{GPSNavigationSystem == 4 ? setGPSNavigationSystem(''):setGPSNavigationSystem(4)}}
    >

    <Text style={{fontWeight:'500'}}>GPS Navigation System</Text>
    </TouchableOpacity>







    <TouchableOpacity
    style={{marginTop:12,}}
      onPress={()=>{SpareTireJack == 5 ? setSpareTireJack(''):setSpareTireJack(5)}}
    >

    <Text style={{fontWeight:'500'}}>Spare Tire/Jack</Text>
    </TouchableOpacity>

    


    <TouchableOpacity
    style={{marginTop:12,}}
      onPress={()=>{WheelCovers == 6 ? setWheelCovers(''):setWheelCovers(6)}}
    >

    <Text style={{fontWeight:'500'}}>Wheel Covers</Text>
    </TouchableOpacity>


    <TouchableOpacity
    style={{marginTop:13,}}
      onPress={()=>{Radio ==7 ?  setRadio(''):setRadio(7)}}
    >

    <Text style={{fontWeight:'500'}}>Radio</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={{marginTop:12,}}
      onPress={()=>{CDPLAYER == 8 ? setCDPLAYER(''):setCDPLAYER(8)}}
    >

    <Text style={{fontWeight:'500'}}>CD Player</Text>
    </TouchableOpacity>


    <TouchableOpacity
    style={{marginTop:12,}}
      onPress={()=>{MIRROR == 10 ? setMIRROR(''):setMIRROR(10) }}
    >

    <Text style={{fontWeight:'500'}}>MIRROR</Text>
    </TouchableOpacity>




    

    <TouchableOpacity
    style={{marginTop:11,}}
      onPress={()=>{SPEAKER == 11 ? setSPEAKER(''):setSPEAKER(11)}}
    >

    <Text style={{fontWeight:'500'}}>Speaker</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={{marginTop:12,}}
      onPress={()=>{OTHERS == 12 ? setOTHERS(''):setOTHERS(12)}}
    >

    <Text style={{fontWeight:'500'}}>OTHERS</Text>
    </TouchableOpacity>




    </View>




    </View>

    </View>





          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 8, borderColor: '#B3B6B7', justifyContent: 'center' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', alignSelf: 'center', fontSize: 14, }}>CONDITION OF VEHICLE</Text>

          </View>


          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>FRONT WINDSHILED</Text>
            <TextInput
              onChangeText={text => { setfrontwindshiled(text) }}
              // onSubmitEditing={(text)=> {setfrontwindshiled(text) }}
              placeholder='Enter Front Wind Shiled'

              value={frontwindshiled}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>BONNET</Text>
            <TextInput
              onChangeText={text => setbonnet(text)}
              placeholder='Enter Bonnet'

              value={bonnet}
              placeholderTextColor='grey'
            />
          </View>


          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>GRILL</Text>
            <TextInput
              onChangeText={text => setgrill(text)}
              placeholder='Enter Grill'

              value={grill}
              placeholderTextColor='grey'
            />
          </View>



          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>FRONT BUMPER</Text>
            <TextInput
              onChangeText={text => setfrontbumper(text)}
              placeholder='Enter Front Bumper'

              value={frontbumper}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>FRONT HEAD LIGHT</Text>
            <TextInput
              onChangeText={text => setfrontheadlight(text)}
              placeholder='Enter Front Head Light'

              value={frontheadlight}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>REAR WINDSHIELD</Text>
            <TextInput
              onChangeText={text => setrearwindshield(text)}
              placeholder='Enter Rear Wind Shield'

              value={rearwindshield}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>TRUNK DOOR</Text>
            <TextInput
              onChangeText={text => settrunkdoor(text)}
              placeholder='Enter Trunk Door'

              value={trunkdoor}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>REAR BUMPER</Text>
            <TextInput
              onChangeText={text => setrearbumper(text)}
              placeholder='Enter Rear Bumper'

              value={rearbumper}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>REAR BUMPER SUPPORT</Text>
            <TextInput
              onChangeText={text => setrearbumpersupport(text)}
              placeholder='Enter Rear Bmper Support'

              value={rearbumpersupport}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>TAIL LAMP</Text>
            <TextInput
              onChangeText={text => settaillamp(text)}
              placeholder='Enter Tail Lamp'

              value={taillamp}
              placeholderTextColor='grey'
            />
          </View>


          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>FRONT LEFT FENDER</Text>
            <TextInput
              onChangeText={text => setfrontleftfender(text)}
              placeholder='Enter Front Left Fender'

              value={frontleftfender}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>LEFT FRONT DOOR</Text>
            <TextInput
              onChangeText={text => setleftfrontdoor(text)}
              placeholder='Enter Left Front Door'

              value={leftfrontdoor}
              placeholderTextColor='grey'
            />
          </View>




          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>LEFT REAR DOOR</Text>
            <TextInput
              onChangeText={text => setleftreardoor(text)}
              placeholder='Enter Left Rear Door'

              value={leftreardoor}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>LEFT REAR FENDER</Text>
            <TextInput
              onChangeText={text => setleftrearfender(text)}
              placeholder='Enter Left Rear Fender'

              value={leftrearfender}
              placeholderTextColor='grey'
            />
          </View>


          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>PILLAR</Text>
            <TextInput
              onChangeText={text => setpillar(text)}
              placeholder='Enter Pillar'

              value={pillar}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>ROOF</Text>
            <TextInput
              onChangeText={text => setroof(text)}
              placeholder='Enter Roof'

              value={roof}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>RIGHT REAR FENDER</Text>
            <TextInput
              onChangeText={text => setrightrearfender(text)}
              placeholder='Enter Right Rear Fender'

              value={rightrearfender}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>RIGHT REAR DOOR</Text>
            <TextInput
              onChangeText={text => setrightreardoor(text)}
              placeholder='Enter Right Rear Door'

              value={rightreardoor}
              placeholderTextColor='grey'
            />
          </View>


          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>RIGHT FRONT DOOR</Text>
            <TextInput
              onChangeText={text => setrightfrontdoor(text)}
              placeholder='Enter Right Front Door'

              value={rightfrontdoor}
              placeholderTextColor='grey'
            />
          </View>

          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>FRONT RIGHT FENDER</Text>
            <TextInput
              onChangeText={text => setfrontrightfender(text)}
              placeholder='Enter Front Right Fender'

              value={frontrightfender}
              placeholderTextColor='grey'
            />
          </View>


          <View style={{ width: '100%', flexDirection: 'column', borderBottomWidth: 0.3, paddingVertical: 5, borderColor: '#B3B6B7', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', paddingVertical: 2, fontWeight: 'bold', fontSize: 14, }}>FRONT TYRES</Text>
            <TextInput
              onChangeText={text => setfronttyres(text)}
              value={fronttyres}
              placeholder='Enter Front Tyres'
              placeholderTextColor='grey'
            />
          </View>





        </View>

      </ScrollView>


    </SafeAreaView>


  );
};


export default AddVehicle;


const styles = StyleSheet.create({
  actionButtonIcon: {
    alignSelf: 'center',
    color: 'white'
  },

  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'red'
  },
  buttonTouchable: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    textAlign: 'center',
    marginTop: Platform.OS == 'ios' ? 5 : 80,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'red'
  },
  centerText: {

    fontSize: 18,
    marginTop: 0,
    color: '#777'
  },

})