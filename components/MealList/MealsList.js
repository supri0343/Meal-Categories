import MealItem from "./MealItem";
import { View, FlatList, StyleSheet } from "react-native";

function MealsList({ items }) {
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
            data={items}
            key={(item) => item.id}
            renderItem={renderMealItem} />
    </View>
}


export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})