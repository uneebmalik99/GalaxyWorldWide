import * as React from "react";
import { Button } from "react-native";
import {
  createStackNavigator,
  HeaderBackground,
} from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Welcome from "../screens/Welcome";
import Signin from "../screens/Signin";
import Contactus from "../screens/Contactus";
import Announcement from "../screens/Announcement";
import ForgetScreen from "../screens/ForgetScreen";
import AppConstance from "../constance/AppConstance";
import Tracking from "../screens/Tracking";
import CarTrackingDetails from '../screens/CarTrackingDetails'
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
import ContainerTracking from "../screens/ContainerTracking";
import VehcileScreen from "../screens/VehcileScreen";
import vehicleList from "../screens/VehicleList";
import OurServiceDetailScreen from "../screens/OurServiceDetailScreen";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { strings } from "../language/Language";
import AddVehicle from "../screens/AddVehicle";
import BottomTabs from "../screens/BottomTabs";
import Vehicle from "../screens/Vehicle";
import ContainerA from "../screens/ContainerA";
import ContainerAview from "../screens/ContainerAview";
import EditVehicle from "../screens/EditVehicle.js";
// import AccountSectionMainScreen from "../screens/AccountSectionMainScreen";
import ExportDetailsScreen from "../screens/ExportDetailsScreen";
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from "react-native-animated-nav-tab-bar";
import { DrawerContent } from "./Drawer";
import AppColors from "../Colors/AppColors";
import Feather from "react-native-vector-icons/dist/Feather";
import Entypo from "react-native-vector-icons/dist/Entypo";
import AccountDetailsScreen from "../screens/AccountDetailsScreen";
import MissionVision from "../screens/MissionVision";
import LocationSelector from "../screens/LocationSelector";
import ChooseLanguage from "../screens/ChooseLanguage";
import AsyncStorage from "@react-native-community/async-storage";
import LocationSelectorcontainer from "../screens/LocationSelectorcontainer";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Tabs = AnimatedTabBarNavigator();
// const StackAuctions = createStackNavigator();
// const StackInvoice =createStackNavigator();
// const StackBids =createStackNavigator();

// const TopTab = createMaterialTopTabNavigator();
const DashboardMain = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Dashboardmain}
        options={{ headerShown: false, }}
      />

      <Stack.Screen
        name="LocationSelector"
        component={LocationSelector}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VehicleList"
        component={vehicleList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CarDetails"
        component={CarDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabScreen = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#ffffff",
        inactiveTintColor: "#223322",
        // activeBackgroundColor: "#278ef5"
        activeBackgroundColor: AppColors.blue,
      }}
      appearance={{
        shadow: true,
        floating: true,
        whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
        dotSize: DotSize.MEDIUM,
        whenActiveShow: "both",
        tabBarBackground: "#F0F3F4",
      }}
    >
      <Tabs.Screen
        name="Home"
        component={DashboardMain}
        options={{
          gestureEnabled:false,
          label: strings.Home,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Vehciles"
        component={VehcileScreen}
        options={{
          label:strings.Vehicle,
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name="car"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Container"
        component={Containerstack1}
        options={{
          label:strings.Container,
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="box"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Accounts"
        component={Accounts}
        options={{
          label:strings.Accounts,
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo
              name="bar-graph"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};


const Account = ()=> {
  return (
    <Stack.Navigator initialRouteName="Accounts">
      <Stack.Screen
        name="Accounts"
        component={Accounts}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AccountDetailsScreen"
        component={AccountDetailsScreen}
        options={{ headerShown: false }}
      />


      </Stack.Navigator>

      )
}

const AppDrawer = createDrawerNavigator();

const Containerstack1 = () => {
  return (
    <Stack.Navigator initialRouteName="ContainerCarlist">
      <Stack.Screen
        name="ContainerCarlist"
        component={ContainerCarlist}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ExportDetailsScreen"
        component={ExportDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const ContainerStack = () => {
  return (
    <Stack.Navigator initialRouteName="ContainerA">
      <Stack.Screen
        name="ContainerA"
        component={ContainerA}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ContainerAview"
        component={ContainerAview}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const EditVehicleContainer = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="ContainerA"
        component={ContainerStack}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Dashboard"
        component={Dashboard1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddVehicle"
        component={AddVehicle}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const InvoiceStack = () => {
  return (
    <Stack.Navigator initialRouteName="invoicelist">
      <Stack.Screen
        name="invoicelist"
        component={invoicelist}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="invoiceview"
        component={invoiceview}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppDrawerScreen = () => {
  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <AppDrawer.Screen
        name="Screen"
        component={TabScreen}
        options={{ headerShown: false }}
      />
   <AppDrawer.Screen
        name="Prices"
        component={Prices}
        options={{ headerShown: false }}
      />


         <AppDrawer.Screen
        name="MissionVision"
        component={MissionVision}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ContainerA"
        component={ContainerA}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EditVehicle"
        component={EditVehicle}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContainerAview"
        component={ContainerAview}
        options={{ headerShown: false }}
      />
      {/* <AppDrawer.Screen name='container' component={container}  /> */}
      <AppDrawer.Screen
        name="VehcileScreen"
        component={VehcileScreen}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="carslist"
        component={carslist}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="ExportDetailsScreen"
        component={ExportDetailsScreen}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="Accountsview"
        component={Accountsview}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="containerinfo"
        component={containerinfo}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="invoicelist"
        component={InvoiceStack}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="CarDetails"
        component={CarDetails}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="alerts"
        component={alerts}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="ContainerCarlist"
        component={ContainerCarlist}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="Accounts"
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="services"
        component={ServiceStack}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="Vehicle"
        component={Vehicle}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="Contactus"
        component={Contactus}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name="Announcement"
        component={Announcement}
        options={{ headerShown: false }}
      />
      {/* <AppDrawer.Screen name="Offers" component={TabScreen}    />
    <AppDrawer.Screen name="Mybids" component={StackBid}  options={{

title:'My Bids',
    }} />
    <AppDrawer.Screen name="invoice1" component={Stackinvoice}  options={{

title:'My Invoice',
    }} /> */}
    </AppDrawer.Navigator>
  );
};
const Dashboard1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Vehicle"
        component={Vehicle}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditVehicle"
        component={EditVehicle}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const ServiceStack = () => {
  return (
    <Stack.Navigator initialRouteName="services">
      <Stack.Screen
        name="services"
        component={services}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OurServiceDetailScreen"
        component={OurServiceDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Cartrackingsearch = () => {
  return (
    <Stack.Navigator initialRouteName="Tracking">
      <Stack.Screen
        name="Tracking"
        component={Tracking}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CarTrackingDetails"
        component={CarTrackingDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const WelcomeStack = () => {
  
  return (
    <Stack.Navigator initialRouteName={'ChooseLanguageage'}>
     

       <Stack.Screen
        name="ChooseLanguage"
        component={ChooseLanguage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
       
        component={Signin}
        options={{ headerShown: false, gestureEnabled:false }}
      />
      <Stack.Screen
        name="ForgetScreen"
        component={ForgetScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contactus"
        component={Contactus}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="yard"
        component={yard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="services"
        component={ServiceStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tracking"
        component={Cartrackingsearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContainerTracking"
        component={ContainerTracking}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExportDetailsScreen"
        component={ExportDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {



  return (
    <Stack.Navigator initialRouteName="WelcomeStack">
      <Stack.Screen
        name="WelcomeStack"
        component={WelcomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppDrawer"
        component={AppDrawerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditVehicleContainer"
        component={EditVehicleContainer}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="LocationSelectorcontainer"
        component={LocationSelectorcontainer}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Towing"
        component={Towing}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Warehousing"
        component={Warehousing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Shipping"
        component={Shipping}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="TrackingSearchDetails"
        component={TrackingSearchDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Prices"
        component={Prices}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
