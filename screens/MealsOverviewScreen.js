
import { useLayoutEffect } from "react";


import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealsList from "../components/MealList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoriId;

    const displadMeals = MEALS.filter(mealItems => {
        return mealItems.categoryIds.indexOf(catId) >= 0
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({ title: categoryTitle })
    }, [catId, navigation])

    return <MealsList items={displadMeals} />
}
export default MealsOverviewScreen;

