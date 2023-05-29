import { View, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";


import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoriId;

    const displadMeals = MEALS.filter(mealItems => {
        return mealItems.categoryIds.indexOf(catId) >= 0
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({ title: categoryTitle })
    }, [catId, navigation])

    function renderMealItem(itemData) {
        // const mealItemProps = {
        //     title: itemData.item.title,
        //     imageUrl: itemData.item.imageUrl,
        //     affordability: itemData.item.affordability,
        //     duration: itemData.item.duration,
        //     complexity: itemData.item.complexity,
        // }
        return <MealItem
            props={itemData.item}
        />
    }

    return <View style={styles.container}>
        <FlatList
            data={displadMeals}
            key={(item) => item.id}
            renderItem={renderMealItem} />
    </View>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})