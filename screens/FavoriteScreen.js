
import { useContext } from "react";
import MealsList from "../components/MealList/MealsList";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function FavoriteScreen() {
    // const favoriteContext = useContext(FavoriteContext);

    // const favoriteMeals = MEALS.filter(meal => favoriteContext.ids.includes(meal.id));
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));
    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );

    }

    return <MealsList items={favoriteMeals} />
}



export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
