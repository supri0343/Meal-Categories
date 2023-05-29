import { View, FlatList } from "react-native";

import { useEffect, useReducer, useState } from "react";

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', { categoriId: itemData.item.id });
        }

        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
        />;

    };

    return <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem.bind()}
        keyExtractor={(item) => item.id}
        numColumns={2} />
}

export default CategoriesScreen;