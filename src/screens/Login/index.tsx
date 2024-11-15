import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { StackRootParamList } from "../../Routes/StackNavigator";
import NoodleIcon from "../../assets/noodles.png";
import { Button } from "../../components/Button";
import { styles } from "./styles";
import { NameContext } from "../../context/NameContext";


type NavigationProp = NativeStackNavigationProp<StackRootParamList>;

export const Login = () => {
    const { name, addName } = useContext(NameContext);
    const navigation = useNavigation<NavigationProp>();

    function saveAndNavigate() {
        navigation.navigate('Food');
    }

    return <View style={styles.container}>
        <View style={styles.centerCointainer}>
            <Image
                source={NoodleIcon}
                style={styles.image}
            />
            <Text style={styles.title}>Escreva seu nome</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={addName}
                placeholder="Seu nome"
            />
            <Button 
                title="Salve e receba uma receita"
                onPress={saveAndNavigate}
            />
        </View>
    </View>
}