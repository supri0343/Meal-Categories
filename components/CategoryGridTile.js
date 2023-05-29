import { Text, StyleSheet, View, Platform } from "react-native";
import { Pressable } from "react-native";

function CategoryGridTile({ title, color, onPress }) {

    return <View style={[styles.gridItem, { backgroundColor: color }]}>
        <Pressable
            android_ripple={{ color: '#ccc', opacity: 0.5 }}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
            onPress={onPress}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})