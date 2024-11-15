import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    centerCointainer: {
        height: 300,
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#eeeeee',
        height: 50,
        width: '100%',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#5e5e5e',
        padding: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },
    image: {
        tintColor: "#f00",
        width: 100,
        height: 100
    },
});