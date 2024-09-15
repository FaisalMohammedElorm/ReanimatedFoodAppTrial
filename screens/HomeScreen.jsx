import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from "expo-status-bar"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Categories from '../components/Categories';
import axios from "axios"
import Recipes from "../components/recipes"

const HomeScreen = () => {
  

  
  

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark"/>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:50}}
        className="space-y-6 pt-14"
      >

        {/* Avatar and Bell Icon */}
          <View className="mx-4 flex-row justify-between items-center mb-2">
            <Image source={require("../assets/Avatar.png")} style={{width:hp(5), height:hp(5.5)}}/>
            <FontAwesome name="bell" size={hp(3)} color="gray" />
          </View>
        {/* Greetings and Punchline*/}
          <View className="mx-4 space-y-2 mb-2">
            <Text style={{fontSize:hp(2)}} className="text-neutral-600">Hello, Faisal!</Text>
            <View>
              <Text style={{fontSize:hp(3.8)}} className="font-semibold text-neutral-600">Make your own food</Text>
            </View>
            <Text style={{fontSize:hp(3.8)}} className="font-semibold text-neutral-600">
              stay at <Text className="text-amber-400">home</Text>
            </Text>
          </View>
        {/* Search Bar */}  
          <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
            <TextInput
              placeholder="Search my recipe"
              placeholderTextColor={"gray"}
              style={{fontSize:hp(1.8)}}
              className="flex-1 text-base mb-1 pl-3 tracking-wider"
            />
            <View className="bg-white rounded-full p-3">
              <FontAwesome6 name="magnifying-glass" size={hp(1.8)} color="dimgray" />
            </View>
          </View>
          {/* Categories */}
          <View>
            <Categories/>
          </View>
          {/* Recipes */}
          <View>
            <Recipes Categories={Categories}/>
          </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen