import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, ActivityIndicator, View, RefreshControl, Image } from 'react-native';
import axios from 'axios';
import extractCourtData from '@/utils/extract'; 
import images from '@/constants/images';
import CauseListItem from '@/components/CauseListItem';

interface CourtData {
  data : string[];
}

const Home = () => {
  const [courtData, setCourtData] = useState<CourtData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://patnahighcourt.gov.in/causelist/auin/view/2341/0/CLIST');      
      const rawData: CourtData[] = extractCourtData(response.data);
      const data = rawData.filter((item, index) => index !== 0 && item.data[0] !== "");       
      setCourtData(data);
      console.log(data);
      
      setError(null);
    } catch (err) {
      setError('Error fetching data !!');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-[#fff]">
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-[#fff]">
        <Image 
          source={images.error}
          resizeMode='contain' 
          className='w-96 h-96'
        />
        <Text className="text-[#606060] font-bold text-3xl mt-5">{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 p-4 bg-gray-300">
      <FlatList
        className='mt-10'
        data={courtData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CauseListItem itemData={item.data} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  );
};

export default Home;
