import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import MealDetails from "../MealDetails";


function MealItem({ props }) {
    const navigation = useNavigation();
    ;

    function selectMealItemHandle() {
        navigation.navigate('MealDetail', {
            mealId: props.id
        })
    }

    return <View style={styles.mealItem}>
        <Pressable android_ripple={{ color: '#ccc' }} onPress={selectMealItemHandle}>
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: props.imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{props.title}</Text>
                    <MealDetails duration={props.duration} complexity={props.complexity} affordability={props.affordability} />
                </View>

            </View>
        </Pressable>
    </View>
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        marginBottom: 16
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 8
    },


})