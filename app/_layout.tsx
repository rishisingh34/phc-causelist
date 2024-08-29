import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { Stack } from 'expo-router'; 

SplashScreen.preventAutoHideAsync();
const  RootLayout = () =>  {
  const [loaded, error] = useFonts({
    'Space-Mono': require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown : false }}/>
      <Stack.Screen name="(tabs)" options={{headerShown : false }}/>
      <Stack.Screen name="(search)" options={{headerShown : false }}/>
    </Stack>
  )
}

export default RootLayout;