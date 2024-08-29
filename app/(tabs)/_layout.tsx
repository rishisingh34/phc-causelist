import React from 'react'
import { Tabs } from 'expo-router' 
import TabIcon from '@/components/TabBarIcon'
import icons from '@/constants/images'

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel : false,
          tabBarActiveTintColor : '#FFA001', 
          tabBarInactiveTintColor : '#333',
          tabBarStyle : {
            backgroundColor : '#fff',
            borderTopWidth : 2,
            borderTopColor : '#fff',
            height : 75
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title : 'Home',
            headerShown : false,
            tabBarIcon : ({color , focused }) =>  (
              <TabIcon
                icon={icons.home}
                color={color} 
                name="Home"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
           name="causelist"
           options={{
             title : 'Cause List',
             headerShown : false,
             tabBarIcon : ({color , focused }) =>  (
              <TabIcon
                icon={icons.search}
                color={color} 
                name="Cause List"
                focused={focused}
              />
            )
           }}
        />
        
        <Tabs.Screen
           name="calendar"
           options={{
             title : 'Calendar',
             headerShown : false,
             tabBarIcon : ({color , focused }) =>  (
              <TabIcon
                icon={icons.calendar}
                color={color} 
                name="Calendar"
                focused={focused}
              />
            )
           }}
        />
        
        
      </Tabs>
    </>
  )
}

export default TabLayout