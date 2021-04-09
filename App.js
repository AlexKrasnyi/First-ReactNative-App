import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar'
import { Todo } from './src/Todo'
 
export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (title) => {
    setTodos(prev => [...prev,
      {
        id: Date.now().toString(),
        completed: false,
        title
      }])
  }

  const delTodo = (id) => {
    const idx = todos.findIndex(el => {
      return el.id === id
    });
    setTodos((prev) => {
      const newTodos = [...prev.slice(0, idx), ...prev.slice(idx+1)];
      return newTodos
    })  
  }

  // const onCompleted = (id) => {
  //   const idx = todos.findIndex(el => {
  //     return el.id === id
  //   });
  //   setTodos(() => {
  //     const completed = [...todos, todos[idx].completed = !todos[idx].completed]
  //     return completed
  //   })
  // }

  // useEffect(() => {
  //   const arr = todos.map(todo => {
  //     return <Todo todo={todo} onCompleted={onCompleted}  onDel={delTodo} key={todo.id}/>})
  // }, )
  return (
    <View>
      <Navbar title='Todo App'/>
      <View style={styles.container}>
      <AddTodo onSubmit={addTodo} />
      </View>
      <ScrollView style={styles.todo}>
        {
          todos.map(todo => {
          return <Todo todo={todo}  onDel={delTodo} key={todo.id}/>})
        }
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    marginStart: 15
    
  }, 
  todo: {
    padding:10,
    marginBottom:10
  }
});
