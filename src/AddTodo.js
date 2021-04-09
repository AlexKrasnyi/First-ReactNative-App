import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handlePress= () => {
        if(value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Field must be fill');
        }
    }
    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
            onChangeText={text => setValue(text)}
            value={value}
            // autoCorrect='false'
            // autoCapitalize='characters'
            placeholder='add Todo...'
            />
            <Button title='ADD' style={styles.button} onPress={handlePress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input : {
        width : '75%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
    },
})