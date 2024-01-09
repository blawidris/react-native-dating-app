import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "home") {
              iconName = "home";
            } else if (route.name === "chat") {
              iconName = "chatbubbles-outline";
            } else if (route.name === "profile") {
              iconName = "person-outline";
            }

            const customizeSize = 25;
            return (
              <Ionicons
                name={iconName}
                size={customizeSize}
                color={focused ? "#3b82f6" : "gray"}
              />
            );
          },
          tabBarActiveTintColor: "#3b82fb",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "white",
            paddingTop:15,
            paddingBottom: 15,
            position: 'absolute',
            bottom: 20,
            left:20,
            right: 20,
            borderRadius: 50,
            height: wp(20),
          },
          tabBarLabelStyle: {
            fontWeight: "semibold",
            fontSize: 16,
          },
        })}
      >
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="chat" component={ChatScreen} />
        <Tab.Screen name="profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="chatDetails"
          component={ChatDetailScreen}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen name="home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
