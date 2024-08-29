import React from 'react';
import { View, Text } from 'react-native';

interface CauseListItemProps {
  itemData: string[];
}

const CauseListItem: React.FC<CauseListItemProps> = ({ itemData }) => {
  if (itemData.length === 1) {
    return (
      <View className="p-4 bg-green-200 rounded-lg mb-2">
        <Text className="text-xl font-bold text-gray-800">{itemData[0]}</Text>
      </View>
    );
  } else if (itemData.length === 7) {
    return (
      <View className="p-6 mb-4 bg-white rounded-lg shadow-lg border border-gray-200">
        <Text className="text-sm font-semibold text-gray-500">{`Sr. No. ${itemData[0]}`}</Text>
        <Text className="text-lg font-extrabold text-gray-800 mt-1">{`Case Number: ${itemData[1]}`}</Text>
        
        <Text className="text-lg text-gray-600 mt-2">
          <Text className="font-semibold text-gray-800">{`Party Name: \n`}</Text>
          {itemData[2]}
        </Text>
        
        <Text className="text-lg text-gray-600 mt-1">
          <Text className="font-semibold text-gray-800">{`Petitioner Advocate: \n`}</Text>
          {itemData[3]}
        </Text>
        
        <Text className="text-lg text-gray-600 mt-1">
          <Text className="font-semibold text-gray-800">{`Respondent Advocate: \n`}</Text>
          {itemData[4]}
        </Text>
        
        <View className="flex-row justify-between mt-4">
          <Text className="text-sm text-blue-600">{`Time: \n${itemData[5]}`}</Text>
          <Text className="text-sm text-red-500 font-semibold">{`Current Position: \n${itemData[6]}`}</Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default CauseListItem;