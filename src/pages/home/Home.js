import react, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { add } from '../../features/users/userSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function Home({navigation}) {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [data, getData] = useState([])
    const [text, setText] = useState('')

    function render({item, index}) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('User', index)}>
                <Image style={{width: 120, height: 120}} source={{uri: item.avatar_url}}/>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TextInput onChangeText={(text) => setText(text)} placeholder='Digite o nome de um usuário' />
            <Text style={{ backgroundColor: 'blue', padding: 5, borderRadius: 10 }} onPress={() => {
                axios.get(`https://api.github.com/users/${text}`)
                    .then(response => response.data)
                    .then(data => getData({ avatar_url: data.avatar_url, name: data.login }))
                    .catch(error => console.log(error))
                console.log(user)

            }}>Pesquisar</Text>
            <Image style={{ width: 120, height: 120, borderRadius: 10 }} source={{ uri: data.avatar_url }} />
            <Text style={{ backgroundColor: 'blue', padding: 5, borderRadius: 10 }} onPress={() => dispatch(add(data))}>Adicionar</Text>
            <View style={{height: 240}}>
                <FlatList data={user} renderItem={render}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})