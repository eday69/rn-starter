import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  if (action.type === 'increment_counter') {
    return { ...state, counter: state.counter + action.payload}
  } else {
    return { ...state, counter: state.counter - action.payload}
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })

  return (
    <View>
      <Button title="Increase" onPress={() => {
        dispatch({ type: 'increment_counter', payload: 1})
      }} />
      <Button title="Decrease" onPress={() => {
        dispatch({ type: 'decrement_counter', payload: 1})
      }}/>
      <Text>Current Count: {state.counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
