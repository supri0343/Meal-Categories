import { Image, Pressable, Text, View, StyleSheet } from "react-native";


function MealItem({ props }) {
    return <View style={styles.mealItem}>
        <Pressable android_ripple={{ color: '#ccc' }}>
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: props.imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItems}>{props.duration}</Text>
                    <Text style={styles.detailItems}>{props.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItems}>{props.affordability.toUpperCase()}</Text>
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
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'

    },
    detailItems: {
        marginHorizontal: 4,
        fontSize: 14
    }

})