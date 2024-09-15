import React from 'react';
import { View, Text, Image , Pressable} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import { mealData } from "../constants/index";
import Animated, { FadeInDown } from 'react-native-reanimated';
import Categories from './Categories';
import { useNavigation } from '@react-navigation/native'; 

const Recipes = ({ Categories}) => {
  const navigation = useNavigation();
  return (
    <View className="mx-4 space-y-3">
      <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-600">Recipes</Text>
      <View>
        {
          Categories.length ===0 ? null : (
                <MasonryList
                    data={mealData}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, i}) => <RecipeCard item={item} index={i} navigation = {navigation} />}
                    // refreshing={isLoadingNext}
                    // onRefresh={() => refetch({first: ITEM_CNT})}
                    onEndReachedThreshold={0.1}
                    // onEndReached={() => loadNext(ITEM_CNT)}
                  />

        )

        }
          <MasonryList
                data={mealData}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item, i}) => <RecipeCard item={item} index={i} />}
                // refreshing={isLoadingNext}
                // onRefresh={() => refetch({first: ITEM_CNT})}
                onEndReachedThreshold={0.1}
                // onEndReached={() => loadNext(ITEM_CNT)}
              />
      </View>
    </View> 
  );
};

{/* Recipe Cards */}
const RecipeCard = ({item, index, navigation}) => {
  let isEven = index%2 == 0;
  return (
      <Animated.View entering={FadeInDown.delay(100).duration(200).springify().damping(20)}>
        <Pressable
          style={{width:"100%", paddingLeft: isEven? 0:8, paddingRight: isEven?8:0}}
          className="flex justify-center mb-4 space-y-1"
          onPress={() => navigation.navigate("RecipeDetail", {...item})}
          >
            <Image source={item.image} style={{width:"100%", height: index%3===0? hp(25): hp(35), borderRadius:30}}
            />
            <Text style={{fontSize:hp(2)}} className="font-semibold ml-2 text-neutral-600">
              {
                item.name
              }
            </Text>
          </Pressable>
      </Animated.View>
)
}
export default Recipes

            
























