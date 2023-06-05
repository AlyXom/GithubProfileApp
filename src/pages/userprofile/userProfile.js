import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from "react-native";
import { useSelector } from "react-redux";

export default function UserProfile({navigation, route}) {

    const user = useSelector(state => state.user)


    return (
        <View style={styles.container}>
            <Text>Usuario:</Text>
            <Image style={{width: 150, height: 150, borderRadius: 10}} source={{uri: user[route.params].avatar_url}}/>
            <Text>{user[route.params].name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})