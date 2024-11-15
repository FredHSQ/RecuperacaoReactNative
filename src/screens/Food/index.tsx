import React, { useEffect, useState, useContext } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { getRandomFood } from "../../services";
import { styles } from "./styles";
import { NameContext } from "../../context/NameContext";

export const Food = () =>{
    const [image, setImage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const { name } = useContext(NameContext);


    useEffect(()=>{
        getRandomFood().then(({ data }) => { 
            setImage(data.image);
        }).catch(e=> {
            console.log(e)
        }).finally(()=> {
            setLoading(false);
        })
    },[]);

    return <View style={styles.container}>
        <View style={styles.centerCointainer}>
            <Text style={styles.title}> {name}, hoje você vai comer:</Text>
            { loading ? 
                <ActivityIndicator
                    size={"large"}
                />
                :
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
            }
        </View>
    </View>
}