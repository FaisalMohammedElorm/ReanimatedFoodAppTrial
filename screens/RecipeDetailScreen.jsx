import { View, Text, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { mealData } from "../constants/index";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Entypo from '@expo/vector-icons/Entypo';
import Loading from '../components/loading'; // To ensure Loading component is imported
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';

const RecipeDetailScreen = (props) => {
  let item = props.route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true); // Define loading state

  // Simulate loading for demonstration purposes
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const navigation = useNavigation();
  
  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <StatusBar style="light" />
      {/* Recipe Image */}
      <View className="flex-row justify-center">
        {
          mealData.map((cat, index) => {
            return (
              <View
                key={index} // Add key prop to avoid warnings
                className="flex items-center space-y-1"
              >
                <View className={"rounded-full p-[6px]"}>
                  <Image
                    source={cat.image}
                    style={{ 
                      width: wp(95),
                      height: wp(95), // Make the image square
                      borderRadius: 0, // Remove border radius
                      marginTop: 25
                    }}
                  />
                </View>
              </View>
            );
          })
        }
      </View>
      {/* Back Button */}
      <View className="w-full absolute flex-row justify-between items-center pt-10">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-2 rounded-full left-3 bg-white">
          <Entypo name="chevron-left" size={hp(4.5)} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} className="p-2 rounded-full right-5 bg-white">
          <Entypo name="heart" size={hp(4)} color={isFavorite ? "red" : "gray"} />
        </TouchableOpacity>
      </View>
      {/* Meal Description */}
      {
        loading ? (
          <Loading size="large" className="mt-16" />
        ) : (
            <View className="px-4 flex justify-between space-y-4 pt-8">
              {/* Name and Area */}
              <View className="space-y-2">
                <Text style={{fontSize:hp(3)}} className="font-bold flex-1 text-neutral-700">
                  Beetroot Soup
                </Text>
                <Text style={{fontSize:hp(2)}} className="font-medium flex-1 text-neutral-500">
                  Accra
                </Text>
              </View>
              {/* Miscellaneous */}
              <View className="flex-row justify-around">
                <View className="flex rounded-full bg-amber-400 p-2">
                  <View style={{height:hp(6.5), width:wp(15)}} className="bg-white rounded-full flex items-center justify-center">
                    <FontAwesome5 name="clock" size={hp(4)} color="black" />
                  </View>
                  <View className="flex items-center py-2 space-y-1">
                    <Text style={{fontSize:hp(2)}} className="font-bold">
                      35
                    </Text>
                    <Text style={{fontSize:hp(1.5)}} className="font-bold">
                      Mins
                    </Text>
                  </View>
                </View>
                <View className="flex rounded-full bg-amber-400 p-2">
                  <View style={{height:hp(6.5), width:wp(15)}} className="bg-white rounded-full flex items-center justify-center">
                    <FontAwesome5 name="users" size={hp(4)} color="black" />
                  </View>
                  <View className="flex items-center py-2 space-y-1">
                    <Text style={{fontSize:hp(2)}} className="font-bold">
                      3
                    </Text>
                    <Text style={{fontSize:hp(1.5)}} className="font-bold">
                      Servings
                    </Text>
                  </View>
                </View>
                <View className="flex rounded-full bg-amber-400 p-2">
                  <View style={{height:hp(6.5), width:wp(15)}} className="bg-white rounded-full flex items-center justify-center">
                    <FontAwesome5 name="fire" size={hp(4)} color="black" />
                  </View>
                  <View className="flex items-center py-2 space-y-1">
                    <Text style={{fontSize:hp(2)}} className="font-bold">
                      103
                    </Text>
                    <Text style={{fontSize:hp(1.5)}} className="font-bold">
                      Calories
                    </Text>
                  </View>
                </View>
                <View className="flex rounded-full bg-amber-400 p-2">
                  <View style={{height:hp(6.5), width:wp(15)}} className="bg-white rounded-full flex items-center justify-center">
                  <Octicons name="stack" size={hp(4)} color="black" />
                  </View>
                  <View className="flex items-center py-2 space-y-1">
                    <Text style={{fontSize:hp(2)}} className="font-bold">
                      
                    </Text>
                    <Text style={{fontSize:hp(1.5)}} className="font-bold">
                      Easy
                    </Text>
                  </View>
                </View>
              </View>
              {/* Ingredients */}
              <View className="space-y-4">
                <Text style={{fontSize:hp(2)}} className="font-bold flex-1 text-neutral-700">
                  Ingredients
                </Text>
                <View className="space-y-2 ml-3">

                </View>
              </View>
            </View>
            )
      }
    </ScrollView>
  );
};
export default RecipeDetailScreen;




                            
                            