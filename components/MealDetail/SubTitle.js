import { Text, StyleSheet } from "react-native";
function SubTitle({ children }) {
    return <Text style={styles.subTitle}>{children}</Text>
}

export default SubTitle;

const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 6,
        borderColor: '#e2b497',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        marginHorizontal: 24,
        marginVertical: 10
    },
})