import React from 'react';
import { View, Text, Image } from 'react-native'; 

type TabIconProps = {
  icon : any,
  color : string,
  name : string,
  focused : boolean
}

const TabIcon = ({icon , color , name , focused} : TabIconProps)  => {
  return (
    <View className="items-center justify-center gap-2">
      <Image 
        source={icon}
        resizeMode='contain' 
        tintColor={color}
        className='w-6 h-6 '
      />
      <Text className={`${focused ? 'font-bold' : 'font-pregular'} text-sm`} style={{color : color }}>
        {name}
      </Text>
    </View>
  )
}

export default TabIcon;