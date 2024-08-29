import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SearchLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="advocatename" options={{headerShown : false}}/>
      <Stack.Screen name="auin" options={{headerShown : false}}/>
      <Stack.Screen name="casenumber" options={{headerShown : false}}/>
      <Stack.Screen name="courtnumber" options={{headerShown : false}}/>
      <Stack.Screen name="entirelist" options={{headerShown : false}}/>
      <Stack.Screen name="judgename" options={{headerShown : false}}/>
      <Stack.Screen name="partyname" options={{headerShown : false}}/>
    </Stack>
  )
}

export default SearchLayout