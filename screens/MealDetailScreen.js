import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native"
import { useLayoutEffect } from "react";

import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(x => x.id === mealId);

    function headerButtonPresshandler() {
        console.log('Pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPresshandler} />
            }
        }
        )
    }, [mealId, navigation, headerButtonPresshandler])

    return (
        <ScrollView style={styles.root}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText} />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectedMeal.ingredients} />
                    <SubTitle>Steps</SubTitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>

            <Text></Text>
        </ScrollView>
    )
}
export default MealDetailScreen

const styles = StyleSheet.create({
    root: {
        marginBottom: 30
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8,
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '97%',


    }

})