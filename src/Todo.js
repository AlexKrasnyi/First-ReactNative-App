import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export const Todo = ({todo, onDel}) => {
    return(
        <TouchableOpacity
        activeOpacity={0.5}
        onLongPress={() =>onDel(todo.id)}
        >
            <View style={styles.todo}>
                <Text onPress={() => onCompleted(todo.id)}>{todo.title}</Text>
                {/* <Button title='dell' style={styles.dell} onPress={() =>onDel(todo.id) }/> */}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:10,
        marginBottom: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'green',
        borderRadius: 5
    },
})