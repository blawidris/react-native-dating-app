import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ArrowUpRightIcon } from "react-native-heroicons/outline";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function WelcomeScreen({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskBold: require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskSemiBold: require("../../assets/fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskLight: require("../../assets/fonts/SpaceGrotesk-Light.ttf"),
    SpaceGroteskRegular: require("../../assets/fonts/SpaceGrotesk-Regular.ttf"),
    SpaceGroteskMedium: require("../../assets/fonts/SpaceGrotesk-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      className="flex-1"
      style={{ width: wp(100) }}
    >
      <View
        className="justify-center items-center"
        style={{ height: hp(100), width: wp(100) }}
      >
        <View
          className="justify-center items-center my-4"
          style={{ width: wp(100) }}
        >
          <Image
            source={require("../../assets/HeartIcon.png")}
            style={{ width: wp(100), height: hp(40), resizeMode: "contain" }}
          />
        </View>
        <View className="w-full p-6 px-10">
          <Text
            className="tracking-widest leading-none"
            style={{ fontSize: wp(10), fontFamily: "SpaceGroteskBold" }}
          >
            Embrace
          </Text>
          <Text
            className="tracking-widest w-[70%] leading-none"
            style={{ fontSize: wp(10), fontFamily: "SpaceGroteskBold" }}
          >
            A new way of Dating
          </Text>
          <Text
            className="text-gray-800 leading-6 tracking-wider w-[70%] mt-2"
            style={{ fontSize: wp(4), fontFamily: "SpaceGroteskMedium" }}
          >
            We combine cutting edge technologies with modern approach to
            matchmaking
          </Text>
        </View>

        <View className="w-full px-10">
          <TouchableOpacity
            className="bg-[#f26322] px-3 py-4 rounded-xl flex-row justify-center items-center w-40"
            onPress={() => {
              navigation.navigate("home");
            }}
          >
            <Text
              className="text-white font-bold mr-2"
              style={{ fontSize: wp(4), fontFamily: "SpaceGroteskMedium" }}
            >
              Get Started
            </Text>
            <ArrowUpRightIcon color={"white"} strokeWidth={2.5} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
