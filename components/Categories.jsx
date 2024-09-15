import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { categoriesData } from "../constants/index";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';

const Categories = ({ Categories, activeCategory, setActiveCategory }) => {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {
          categoriesData.map((cat, index) => {
            
            return (
              <TouchableOpacity
                className="flex items-center space-y-1"
              >
                <View className={"rounded-full p-[6px] " }>
                  <Image
                    source={cat.image}
                    style={{ width: hp(6), height: hp(6) }}
                    className="rounded-full"
                  />
                </View>
                <Text className="text-neutral-600" style={{ fontSize: hp(2) }}>
                  {cat.name}
                </Text>
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
    </Animated.View>
  );
};

export default Categories;
