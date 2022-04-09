import React, { useEffect, useState } from "react";
import {
  Animated,
  Easing,
  Dimensions,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/Route/AppNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AnimatedSplash from "react-native-animated-splash-screen";
import LottieView from 'lottie-react-native';

import { DrawerContent } from "./src/Route/Drawer";
const { height, width } = Dimensions.get('window')

// const App = () => {

//  return (
//   <NavigationContainer>
//    <AppNavigator />
//   </NavigationContainer>
//  );
// }

const Drawer = createDrawerNavigator();
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      setsplash(false);
    }, 13000);
  });
  const [splash, setsplash] = useState(true);

 

  // return <LottieView source={require('./src/images/untitled folder 2/e.json')} autoPlay loop />;

  return (
    <NavigationContainer>

      {splash == true ? (

         <LottieView source={require('./src/images/SplashScreenv3.json')} 
       style={{
        width: width ,
        height: height,
  
      }}
      resizeMode='contain'
      speed={0.45}
     autoPlay/>
      ) : (
        <AppNavigator /> 
       )} 
    </NavigationContainer>
  );
};

export default App;

const SECTIONS = [
  {
    data: [
      { title: "Bounce", easing: Easing.bounce },
      { title: "Ease", easing: Easing.ease },
      { title: "Elastic", easing: Easing.elastic(4) },
    ],
  },
  {
    title: "Standard functions",
    data: [
      { title: "Linear", easing: Easing.linear },
      { title: "Quad", easing: Easing.quad },
      { title: "Cubic", easing: Easing.cubic },
    ],
  },
  {
    title: "Additional functions",
    data: [
      {
        title: "Bezier",
        easing: Easing.bezier(0, 2, 1, -1),
      },
      { title: "Circle", easing: Easing.circle },
      { title: "Sin", easing: Easing.sin },
      { title: "Exp", easing: Easing.exp },
    ],
  },
  {
    title: "Combinations",
    data: [
      {
        title: "In + Bounce",
        easing: Easing.in(Easing.bounce),
      },
      {
        title: "Out + Exp",
        easing: Easing.out(Easing.exp),
      },
      {
        title: "InOut + Elastic",
        easing: Easing.inOut(Easing.elastic(1)),
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#116bb9",
    justifyContent: "center",
  },
  title: {
    marginTop: 10,
    textAlign: "center",
    color: "#61dafb",
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    marginTop: 0,
    borderRadius: 4,
    backgroundColor: "#61dafb",
  },
  list: {
    backgroundColor: "#fff",
  },
  listHeader: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#f4f4f4",
    color: "#999",
    fontSize: 12,
    textTransform: "uppercase",
  },
  listRow: {
    padding: 8,
  },
});
