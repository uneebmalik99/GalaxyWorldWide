import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import Ionicons from "react-native-vector-icons/dist/Ionicons";



import Welcome from "../screens/Welcome";
import Signin from "../screens/Signin";
import Contactus from "../screens/Contactus";
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from "../constance/AppConstance";
import { SafeAreaView } from "react-native-safe-area-context";
import Tracking from "../screens/Tracking";
import Dashboard from "../screens/Dashboard";
import CarDetails from "../screens/CarDetails";
import alerts from "../screens/alerts";
import ContainerCarlist from "../screens/ContainerCarlist";
import TrackingSearchDetails from "../screens/TrackingSearchDetails";
import Prices from "../screens/Prices";
import Notifications from "../screens/Notifications";
import Towing from "../screens/Towing";
import Warehousing from "../screens/Warehousing";
import Shipping from "../screens/Shipping";
import Accounts from "../screens/Accounts";
import yard from "../screens/yard";
import services from "../screens/services";
import container from "../screens/container";
import Dashboardmain from "../screens/Dashboardmain";
import Accountsview from "../screens/Accountsview";
import carslist from "../screens/carslist";
import invoicelist from "../screens/invoicelist";
import containerinfo from "../screens/containerinfo";
import invoiceview from "../screens/invoiceview";
import AsyncStorage from "@react-native-community/async-storage";
import AppColors from "../Colors/AppColors";
import { strings } from "../language/Language";

export function DrawerContent(props) {
  const paperTheme = useTheme();
  const signOut = async () => {
    await AsyncStorage.removeItem(AppConstance.USER_INFO_OBJ);
    await AsyncStorage.setItem("ISUSERLOGIN", "0");
    await AsyncStorage.setItem("ROLE", "");
    AppConstance.ROLE = "";
    AppConstance.IS_USER_LOGIN = "0";
    // props.navigation.navigate("Welcome");

    props.navigation.navigate("Signin");
  };

  // const { signOut, toggleTheme } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ backgroundColor:AppColors.blue, height: "25%" }}>
        <View style={styles.userInfoSection}>
          <Image
            style={{ width: "70%", height: "60%", alignSelf: "center" }}
            source={require("../images/Finallogogalaxy.png")}
          />
          <View style={{ flexDirection: "column", width: "70%" }}>
            {/* <Title style={styles.title}>John Doe</Title> */}
            <Title style={styles.title}>
              {AppConstance.USER_INFO.USER_NAME}
            </Title>
            <Caption style={styles.caption}>
              {AppConstance.USER_INFO.USER_EMAIL}
            </Caption>
          </View>
        </View>
      </View>
      <View style={styles.drawerContent}>
   
        <DrawerContentScrollView style={{ paddingVertical: 0,paddingTop:0, marginTop:-15, }} {...props}>
          
          <Drawer.Section style={styles.drawerSection}>
          
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color="white" size={size} />
              )}
              label={strings.Dashboard}
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="car" size={size} color="white" />
              )}
              label={strings.Vehicle}
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("VehcileScreen", { type: "0" });
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome name="ship" size={size - 2} color="white" />
              )}
              label={strings.Contianer}
              labelStyle={{ color: "white" }}
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("ContainerCarlist");
              }}
            />
            <DrawerItem
            style={{marginLeft:15}}
              icon={({ color, size }) => (
                <FontAwesome5 name="file-invoice" size={size} color="white" />
              )}
              label={strings.Invoice}
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Accounts");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="customerservice" size={size} color="white" />
              )}
              label={strings.Services}
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("services");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="announcement" size={size} color="white" />
              )}
              label={strings.Announcement}
              labelStyle={{ color: "white" }}
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Announcement");
              }}
            />

<DrawerItem
              icon={({ color, size }) => (
                <Ionicons   name="pricetag" size={size} color="white" />
              )}
              label={strings.Prices}
              labelStyle={{ color: "white" }}
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Prices");
              }}
            />

<DrawerItem
              icon={({ color, size }) => (
                <FontAwesome name="low-vision" size={size} color="white" />
              )}
              label={strings.MissionandVision}
              labelStyle={{ color: "white" }}
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("MissionVision");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="map-marker-radius" size={size} color="white" />
              )}
              label={strings.OurLocation}
              labelStyle={{ color: "white" }}
              onPress={() => {
                alert('Under development')
                // props.navigation.navigate("yard");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="contact-mail" size={size} color="white" />
              )}
              label={strings.ContactUS}
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Contactus");
              }}
            />


          
          </Drawer.Section>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color="white" size={size} />
            )}
            label={strings.Logout}
            labelStyle={{ color: "white" }}
            onPress={() => {
              signOut();
            }}
          />
        </Drawer.Section>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: AppColors.blue,
    borderTopLeftRadius: 35,
    width: "85%",
    justifyContent: "flex-start",
    height: Platform.OS == "ios" ? "80%" : "75%",
    paddingBottom: 8,
    alignSelf: "flex-end",
  },
  userInfoSection: {
    paddingVertical: 15,
    backgroundColor: "white",
    borderBottomRightRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: AppColors.Signincolor,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: AppColors.Signincolor,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 0,
    paddingVertical:0,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    // backgroundColor: "#1B55A3",
    // borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
